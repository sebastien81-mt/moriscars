# RideMoris

Modern responsive car-rental website for RideMoris in Mauritius.

RideMoris is a tourist-friendly, modern, and reliable car rental service offering airport pickup, hotel delivery, transparent pricing, and a modern fleet across Mauritius.

## 🚀 Technologies Used
- **Frontend Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Modern Vanilla CSS with CSS Custom Properties & responsive design tokens
- **Typography**: Google Fonts ([Archivo](https://fonts.google.com/specimen/Archivo) & [Inter](https://fonts.google.com/specimen/Inter))
- **Icons**: [Lucide React](https://lucide.dev/)
- **Widget Integration**: Official RideMoris / CarHireMauritius injected booking widget

---

## 🛠️ Development & Build Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- `npm` or `yarn`

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/ridemoris.git
cd ridemoris
npm install
```

### Local Development Server
Launch the live development server:
```bash
npm run dev
```
Open [http://localhost:3000/](http://localhost:3000/) in your browser to view the application.

### Production Build
Build the optimized static bundle:
```bash
npm run build
```
The output static assets will be generated inside the `dist/` directory.

---

## 🚘 Official Booking Widget Integration
The application integrates the official RideMoris booking widget:
```html
<div id="wst-rental-widget" data-referer="FbwaL73-4hKKSvz9"></div>
<script src="https://book.carhiremauritius.com/rental-widget.js" defer></script>
```

---

## 📄 License
© RideMoris Mauritius. All rights reserved.
