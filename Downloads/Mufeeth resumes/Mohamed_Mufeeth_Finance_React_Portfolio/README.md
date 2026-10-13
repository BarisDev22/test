# Mohamed Mufeeth Finance Portfolio

Responsive React + Vite portfolio created from the supplied finance resume.

## Run

```bash
npm install
npm run dev
```

Open the URL shown by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Photo handling

The candidate image is stored at `public/candidate-photo.jpg`. React uses an `onError` handler and displays an `MM` fallback if the image is missing or cannot load.

## LinkedIn fix

No external icon library is used. The LinkedIn icon is a local inline SVG React component, avoiding named-export compatibility errors.

## Privacy

Public portfolio content intentionally excludes date of birth, passport number, marital status, nationality, and visa/QID details.
