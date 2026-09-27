-- EL FATIMIA CMS - Supabase schema
-- Run this in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text default '',
  image_url text default '',
  features jsonb not null default '[]'::jsonb,
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null default 'مشروع الفاطمية',
  image_url text not null,
  description text default '',
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  product text default '',
  message text default '',
  status text not null default 'new' check (status in ('new','contacted','follow_up','won','closed')),
  source text default 'website',
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  key text primary key,
  value text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.seo_pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null default '',
  meta_description text default '',
  canonical_url text default '',
  og_image text default '',
  robots text default 'index,follow',
  updated_at timestamptz not null default now()
);

create index if not exists products_sort_idx on public.products(sort_order);
create index if not exists projects_sort_idx on public.projects(sort_order);
create index if not exists leads_created_idx on public.leads(created_at desc);

alter table public.products enable row level security;
alter table public.projects enable row level security;
alter table public.leads enable row level security;
alter table public.site_settings enable row level security;
alter table public.seo_pages enable row level security;

-- Public website reads published content.
create policy "public read active products" on public.products for select using (active = true);
create policy "public read active projects" on public.projects for select using (active = true);
create policy "public read settings" on public.site_settings for select using (true);
create policy "public read seo" on public.seo_pages for select using (true);

-- Public visitors may submit leads.
create policy "public create leads" on public.leads for insert with check (true);

-- Logged-in admin users can manage CMS content.
create policy "authenticated manage products" on public.products for all to authenticated using (true) with check (true);
create policy "authenticated manage projects" on public.projects for all to authenticated using (true) with check (true);
create policy "authenticated manage leads" on public.leads for all to authenticated using (true) with check (true);
create policy "authenticated manage settings" on public.site_settings for all to authenticated using (true) with check (true);
create policy "authenticated manage seo" on public.seo_pages for all to authenticated using (true) with check (true);

-- Storage bucket for CMS images.
insert into storage.buckets (id, name, public) values ('site-images','site-images',true)
on conflict (id) do update set public = true;

create policy "public read site images" on storage.objects for select using (bucket_id = 'site-images');
create policy "authenticated upload site images" on storage.objects for insert to authenticated with check (bucket_id = 'site-images');
create policy "authenticated update site images" on storage.objects for update to authenticated using (bucket_id = 'site-images') with check (bucket_id = 'site-images');
create policy "authenticated delete site images" on storage.objects for delete to authenticated using (bucket_id = 'site-images');

-- Seed the current site's products/projects/settings.
insert into public.products (slug,name,description,image_url,features,sort_order) values
('pleated','سلك بليسيه','حل أنيق وعملي للنوافذ بتصميم عصري.','https://images.unsplash.com/photo-1778731660430-fca071797515?w=800&h=650&fit=crop&auto=format','["تصميم عصري","تحكم في الإضاءة","مقاسات متعددة","خامات ممتازة"]',1),
('dantal','ستائر دانتال (الدبل سيستم)','نظام مزدوج يجمع بين المرونة في الإضاءة والخصوصية.','https://images.unsplash.com/photo-1784653549328-40d0f1d11376?w=800&h=650&fit=crop&auto=format','["نظام مزدوج","مرونة عالية","شكل راقٍ","خيارات متنوعة"]',2),
('blackout','ستائر بلاك أوت','حجب قوي للضوء وخصوصية عالية بتصميم أنيق.','https://images.unsplash.com/photo-1771039622303-71545f266c1b?w=800&h=650&fit=crop&auto=format','["حجب الضوء","خصوصية عالية","عزل حراري","ألوان متنوعة"]',3),
('sunscreen','ستائر صن سكرين','إضاءة طبيعية مع خصوصية وحماية من الأشعة.','https://images.unsplash.com/photo-1779505576192-803dd8c9b55a?w=800&h=650&fit=crop&auto=format','["حماية من الشمس","إضاءة طبيعية","خصوصية نهارية","توفير الطاقة"]',4),
('zebra','ستائر زيبرا','تحكم دقيق في مستوى الإضاءة والخصوصية.','https://images.unsplash.com/photo-1788804277068-1281069a25af?w=800&h=650&fit=crop&auto=format','["تحكم في الإضاءة","خصوصية مرنة","تصميم عصري","جودة ممتازة"]',5),
('vertical','ستائر رأسية','مثالية للنوافذ الكبيرة والأبواب الزجاجية.','https://images.unsplash.com/photo-1778731525567-a65ec40a4bb5?w=800&h=650&fit=crop&auto=format','["للنوافذ الكبيرة","تحكم مرن","سهلة التنظيف","متانة عالية"]',6),
('metal','الستائر المعدنية','بساطة وأناقة مع طابع عصري عملي.','https://images.unsplash.com/photo-1768740067016-d7fddac028d6?w=800&h=650&fit=crop&auto=format','["متانة عالية","سهلة التنظيف","تصميم عصري","ألوان متنوعة"]',7),
('wood','ستائر مكتبية خشبية','دفء الخشب الطبيعي وجمالية راقية للمساحة.','https://images.unsplash.com/photo-1784653549328-40d0f1d11376?w=800&h=650&fit=crop&auto=format','["خشب طبيعي","دفء جمالي","عزل صوتي","خامات ممتازة"]',8),
('bamboo','ستائر بامبو','لمسة طبيعية وبوهيمية من الخيزران.','https://images.unsplash.com/photo-1784653548916-796e08667ba6?w=800&h=650&fit=crop&auto=format','["خيزران طبيعي","صديق للبيئة","تصميم مميز","أحجام متعددة"]',9),
('hospital','ستائر بين الأسرة','فواصل عملية للمستشفيات توفر الخصوصية وتقسيم المساحات.','https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=800&h=600&fit=crop&auto=format','["خصوصية للمريض","فواصل عملية","مناسبة للمستشفيات","سهولة الاستخدام"]',10)
on conflict (slug) do nothing;

insert into public.projects (title,image_url,sort_order) values
('مشروع الفاطمية','https://images.unsplash.com/photo-1772112334845-86016056137b?w=900&h=600&fit=crop&auto=format',1),
('مشروع الفاطمية','https://images.unsplash.com/photo-1784653549463-83c9bd94c7e2?w=800&h=600&fit=crop&auto=format',2),
('مشروع الفاطمية','https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=800&h=600&fit=crop&auto=format',3),
('مشروع الفاطمية','https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=900&h=600&fit=crop&auto=format',4),
('مشروع الفاطمية','https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=800&h=600&fit=crop&auto=format',5),
('مشروع الفاطمية','https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=900&h=600&fit=crop&auto=format',6);

insert into public.site_settings(key,value) values
('phone','201096971297'),
('site_title','الفاطمية للستائر | EL FATIMIA'),
('meta_description','الفاطمية للستائر — توريد وتركيب جميع أنواع الستائر في مصر.')
on conflict (key) do update set value=excluded.value;

insert into public.seo_pages(slug,title,meta_description) values
('home','الفاطمية للستائر | EL FATIMIA','الفاطمية للستائر — توريد وتركيب جميع أنواع الستائر في مصر.'),
('products','منتجات الفاطمية للستائر','تعرف على مجموعة الستائر المتاحة من الفاطمية.'),
('about','من نحن | الفاطمية','تعرف على شركة الفاطمية وخدماتها.'),
('projects','أعمالنا | الفاطمية','شاهد نماذج من أعمال ومشاريع الفاطمية.'),
('contact','اطلب عرض سعر | الفاطمية','تواصل مع الفاطمية للحصول على عرض سعر.')
on conflict (slug) do nothing;
