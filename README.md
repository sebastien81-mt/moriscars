# MorisCars

Modern, light, responsive car-rental landing page for Mauritius featuring online booking widget integration, reliable vehicle fleet presentation, interactive FAQs, and direct WhatsApp support.

## Overview

MorisCars is a dedicated car rental web application designed for tourists and island visitors in Mauritius. It features a clean, pastel-blue visual theme, centered vertical hero with above-the-fold booking form, responsive mobile navigation, and seamless vehicle selection.

## Technologies Used

- **React 18**: UI framework
- **Vite 5**: High-performance development server and bundler
- **Lucide React**: Modern iconography
- **Vanilla CSS**: Clean, responsive styling with design tokens
- **CarHireMauritius Widget**: Real-time rental booking widget integration

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/sebastien81-mt/moriscars.git
cd moriscars
npm install
```

### Local Development

Start the Vite development server:

```bash
npm run dev
```

Open your browser at `http://127.0.0.1:5173/` or `http://localhost:5173/`.

### Production Build

To build the production bundle:

```bash
npm run build
```

To preview the built site locally:

```bash
npm run preview
```

## Booking Widget Integration

MorisCars integrates the official CarHireMauritius booking widget:

```html
<div id="wst-rental-widget" data-referer="FbwaL73-4hKKSvz9"></div>
<script src="https://book.carhiremauritius.com/rental-widget.js" defer></script>
```

## License

All rights reserved © MorisCars Mauritius.
