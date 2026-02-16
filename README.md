# Tietex IT Website

Next.js marketing website for Tietex IT with a dynamic portfolio and a no-auth admin dashboard.

## Features

- Public pages: Home, Services, Portfolio, About, Contact
- Dynamic portfolio data from Supabase (PostgreSQL)
- Portfolio category management (create category + assign to project)
- Admin dashboard for full portfolio CRUD
- Cloudinary image upload + deletion
- Contact form API with SMTP (Nodemailer)

## Admin Portfolio Dashboard

- URL: `/admin/portfolio`
- Supports: create, edit, delete
- Fields: title, description, category, project URL, project image

## Required Environment Variables

Create `.env` (or update existing):

```bash
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
CLOUDINARY_UPLOAD_FOLDER=tietex-it/portfolio
```

A demo template is included in `.env.example`.

## Supabase Table Setup

Run the SQL in `supabase/portfolio_schema.sql` inside your Supabase SQL editor.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
