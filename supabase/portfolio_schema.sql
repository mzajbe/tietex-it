-- Run in Supabase SQL editor
create extension if not exists pgcrypto;

create table if not exists public.portfolio_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamptz not null default now()
);

insert into public.portfolio_categories (name)
values ('Uncategorized')
on conflict (name) do nothing;

create table if not exists public.portfolio_projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  project_url text not null,
  image_url text not null,
  category_id uuid,
  cloudinary_public_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.portfolio_projects
  add column if not exists category_id uuid;

update public.portfolio_projects
set category_id = (
  select id from public.portfolio_categories where name = 'Uncategorized' limit 1
)
where category_id is null;

alter table public.portfolio_projects
  alter column category_id set not null;

create index if not exists portfolio_projects_created_at_idx
  on public.portfolio_projects (created_at desc);

create index if not exists portfolio_projects_category_id_idx
  on public.portfolio_projects (category_id);

create index if not exists portfolio_categories_name_idx
  on public.portfolio_categories (name);

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'portfolio_projects_category_id_fkey'
  ) then
    alter table public.portfolio_projects
      add constraint portfolio_projects_category_id_fkey
      foreign key (category_id)
      references public.portfolio_categories (id)
      on update cascade
      on delete restrict;
  end if;
end
$$;

create or replace function public.set_updated_at_timestamp()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_portfolio_projects_updated_at on public.portfolio_projects;
create trigger set_portfolio_projects_updated_at
before update on public.portfolio_projects
for each row
execute function public.set_updated_at_timestamp();
