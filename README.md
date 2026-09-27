# El Fatimia — CMS Ready

This repository keeps the existing static website and adds a Supabase-backed admin dashboard.

## Files
- `index.html` — public website.
- `admin.html` — CMS dashboard.
- `config.js` — Supabase + Google Analytics/Ads configuration.
- `supabase.sql` — database, RLS policies, storage bucket and seed data.

## Setup
1. Create a Supabase project.
2. Open SQL Editor and run `supabase.sql`.
3. In Supabase Authentication, create the admin user (email/password).
4. Copy Project URL + anon/publishable key into `config.js`.
5. Optional: put your GA4 Measurement ID and Google Ads ID in `config.js`.
6. Push the folder to GitHub and enable GitHub Pages.
7. Open `/admin.html` to manage the site.

### Security
Only the public anon/publishable Supabase key belongs in `config.js`. Never put a `service_role` key in browser code.

### What the dashboard manages
- Products
- Projects / gallery
- Quote leads and statuses
- Basic SEO metadata
- Site phone/title/description

Google Ads campaign budgets, billing and campaign management remain inside Google Ads. The site can carry the Google tag and conversion events once the relevant IDs are configured.
