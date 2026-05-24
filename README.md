# Earth-Tech

Land surveying & revenue services website for **Earth Tech Survey** (earthtechsurvey).

A React website for **Earth Tech Survey** (earthtechsurvey), modeled after a professional land surveying company site with custom branding and services.

## Services

**Revenue Services:** Hadbastu, 11E Sketch, Tatkal Podi, Alienation

**Surveying Services:** Topographical Surveys, Marking/Staking Out, Measured Drawings, Geotechnical Investigation, DGPS Surveys, Cadastral Mapping, LiDAR Surveys, Alignment Surveys, Quantity Surveying

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — All Services (listing)
- `/services/:serviceId` — Individual service page (e.g. `/services/hadbastu`, `/services/topographical`)
- `/contact` — Contact & form

### Service URLs

| Revenue | Surveying |
|---------|-----------|
| `/services/hadbastu` | `/services/topographical` |
| `/services/11e-sketch` | `/services/marking-staking` |
| `/services/tatkal-podi` | `/services/measured-drawings` |
| `/services/alienation` | `/services/geotechnical` |
| | `/services/dgps` |
| | `/services/cadastral` |
| | `/services/lidar` |
| | `/services/alignment` |
| | `/services/quantity` |
