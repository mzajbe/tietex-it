type SupabaseMethod = "GET" | "POST" | "PATCH" | "DELETE";

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }

  return { url, serviceRoleKey };
}

type SupabaseRequestOptions = {
  method?: SupabaseMethod;
  headers?: Record<string, string>;
  body?: string;
};

export async function supabaseRestRequest<T>(
  path: string,
  options: SupabaseRequestOptions = {}
) {
  const { url, serviceRoleKey } = getSupabaseConfig();
  const method = options.method ?? "GET";

  const response = await fetch(`${url}/rest/v1/${path}`, {
    method,
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      ...options.headers,
    },
    body: options.body,
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Supabase request failed (${response.status}).`);
  }

  // DELETE with return=minimal may not return JSON.
  if (response.status === 204) {
    return null as T;
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return null as T;
  }

  return (await response.json()) as T;
}
