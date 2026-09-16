-- DEZN / Supabase schema
-- Run this in Supabase SQL Editor.
-- Then add/edit content from Table Editor. Images/PDFs can be stored in Storage,
-- and their public URLs are saved in the columns below.

create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_ar text not null,
  title_en text,
  cat_label_ar text,
  cat_label_en text,
  category text not null default 'public',
  meta_ar text,
  meta_en text,
  summary_ar text,
  summary_en text,
  specs jsonb not null default '{}'::jsonb,
  specs_en jsonb not null default '{}'::jsonb,
  body_ar text,
  body_en text,
  images jsonb not null default '[]'::jsonb,
  author text default 'DEZN',
  published_at timestamptz default now(),
  created_at timestamptz default now()
);

create table if not exists public.knowledge (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  label_ar text,
  label_en text,
  title_ar text not null,
  title_en text,
  desc_ar text,
  desc_en text,
  body_ar text,
  body_en text,
  cover_url text,
  author text default 'DEZN',
  published_at timestamptz default now(),
  created_at timestamptz default now()
);

create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  title_ar text not null,
  title_en text,
  author_ar text,
  author_en text,
  year text,
  desc_ar text,
  desc_en text,
  cover_url text,
  download_url text,
  published_at timestamptz default now(),
  created_at timestamptz default now()
);

alter table public.projects enable row level security;
alter table public.knowledge enable row level security;
alter table public.books enable row level security;

drop policy if exists "Public can read projects" on public.projects;
drop policy if exists "Public can read knowledge" on public.knowledge;
drop policy if exists "Public can read books" on public.books;

create policy "Public can read projects" on public.projects for select to anon, authenticated using (true);
create policy "Public can read knowledge" on public.knowledge for select to anon, authenticated using (true);
create policy "Public can read books" on public.books for select to anon, authenticated using (true);

-- Optional Storage bucket for project/knowledge/book covers.
-- Create a bucket named: dezn-media
-- Make it Public if you want to paste its public URLs into the tables.

-- Example project specs JSON:
-- {"المساحة":"450 م²","السنة":"2026","النوع":"فيلا","الموقع":"القاهرة","الحالة":"تصميم"}
-- Example images JSON:
-- ["https://.../image-1.jpg","https://.../image-2.jpg"]
