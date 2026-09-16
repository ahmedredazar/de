-- شغّل هذا بعد إنشاء الجداول في supabase-schema.sql
create table if not exists public.admin_users (
  email text primary key,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;
drop policy if exists "Admins can read own record" on public.admin_users;
create policy "Admins can read own record" on public.admin_users
for select to authenticated
using (lower(email)=lower((auth.jwt()->>'email')));

create or replace function public.is_dezn_admin()
returns boolean language sql stable security definer set search_path=public
as $$ select exists(select 1 from public.admin_users where lower(email)=lower((auth.jwt()->>'email'))); $$;
grant execute on function public.is_dezn_admin() to authenticated;

drop policy if exists "Admins can insert projects" on public.projects;
drop policy if exists "Admins can update projects" on public.projects;
drop policy if exists "Admins can delete projects" on public.projects;
create policy "Admins can insert projects" on public.projects for insert to authenticated with check(public.is_dezn_admin());
create policy "Admins can update projects" on public.projects for update to authenticated using(public.is_dezn_admin()) with check(public.is_dezn_admin());
create policy "Admins can delete projects" on public.projects for delete to authenticated using(public.is_dezn_admin());

drop policy if exists "Admins can insert knowledge" on public.knowledge;
drop policy if exists "Admins can update knowledge" on public.knowledge;
drop policy if exists "Admins can delete knowledge" on public.knowledge;
create policy "Admins can insert knowledge" on public.knowledge for insert to authenticated with check(public.is_dezn_admin());
create policy "Admins can update knowledge" on public.knowledge for update to authenticated using(public.is_dezn_admin()) with check(public.is_dezn_admin());
create policy "Admins can delete knowledge" on public.knowledge for delete to authenticated using(public.is_dezn_admin());

drop policy if exists "Admins can insert books" on public.books;
drop policy if exists "Admins can update books" on public.books;
drop policy if exists "Admins can delete books" on public.books;
create policy "Admins can insert books" on public.books for insert to authenticated with check(public.is_dezn_admin());
create policy "Admins can update books" on public.books for update to authenticated using(public.is_dezn_admin()) with check(public.is_dezn_admin());
create policy "Admins can delete books" on public.books for delete to authenticated using(public.is_dezn_admin());

-- بعد إنشاء مستخدمك من Authentication > Users:
-- insert into public.admin_users(email) values ('YOUR_EMAIL@example.com');
