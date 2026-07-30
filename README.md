# ShopG E-commerce Portal

This repository hosts the responsive storefront and API for ShopG. It features a Next.js + React frontend that gracefully falls back to mock data when the backend is unavailable, and a Laravel-based API that mirrors the same mock payloads to keep both sides aligned.

## Frontend
- **Framework:** Next.js 14 (app router) with React 18 + TypeScript.
- **Mock resilience:** `lib/fetchWithFallback.ts` targets `NEXT_PUBLIC_API_BASE_URL`; on failure it returns the locally defined mocks (`data/homeMock.ts`, `data/collectionMock.ts`).
- **Scripts:**
  - `npm run dev` – start development server.
  - `npm run build` – compile for production.
  - `npm run start` – run the production build.
  - `npm run lint` – run ESLint (via Next.js default config).

### Setup
```bash
cd frontend
npm install
npm run dev
```
Set `NEXT_PUBLIC_API_BASE_URL` if you want to point to the Laravel API, e.g. `NEXT_PUBLIC_API_BASE_URL=http://localhost:8000`.

## Backend
- **Framework:** Laravel 11 API.
- **Entry:** `routes/api.php` exposes `/api/home` (mirroring `homeMock`).
- **Controller:** `HomeController` returns JSON used by the frontend.
- **Dependencies:** defined in `composer.json`.

### Setup
```bash
cd backend
composer install
php artisan key:generate
php artisan serve --host=0.0.0.0 --port=8000
```

The frontend can consume the backend by setting `NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000`. If Laravel is not running, the frontend still renders using mock data.

## Development Notes
- All frontend routes (home, collections, cart, profile, admin) rely on the fallback helper so the UI never breaks.
- Laravel is intentionally minimal here—feel free to expand with resource controllers, migrations, and seeded data as needed.
- Set up `.env.local` files per side to manage environment-specific settings.
