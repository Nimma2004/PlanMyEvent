# PlanMyEvent Sri Lanka — Event Planning Directory Platform

A modern, fully responsive, and feature-rich directory platform connecting Sri Lankan event planners (vendors) and customers looking for premier event planning services for Poruwa ceremonies, traditional & church weddings, milestone birthdays, corporate summits, concerts, and private beach dinners across Colombo, Kandy, Galle, Negombo, Bentota, and island-wide.

---

## 🌟 Key Features & Updates

### 1. 🆓 Free Client Registration System (Task 1)
- **Role Selection Switcher**: The registration modal (`#joinModal`) includes a high-visibility segmented tab bar allowing users to switch effortlessly between:
  - **Client (Free)**: Free account for individuals, couples, and organizations planning an event.
  - **Event Planner**: Business directory listing tier (Standard Rs. 15,000 / Premium Rs. 30,000).
- **Dedicated Free Client Form**:
  - Fields: **Full Name**, **Email Address**, **Password**, **Contact Number** (formatted to Sri Lankan `+94 7X XXX XXXX`), and **Preferred Event Type** (Weddings, Corporate, Birthdays, Concerts, Anniversaries, Cultural Ceremonies, etc.).
  - Free account highlight callout with 100% free badge and zero payment prompts.
- **Client Session Management**:
  - Client accounts are stored in `localStorage` (`planmyevent_registered_users`).
  - Automatically logs in the client upon registration and updates the navigation bar with an active user badge (showing client name and "Client" pill) and a "Log Out" button.
  - Dedicated **Sign In** modal (`#loginModal`) allowing registered clients and planners to log back in, with a quick 1-click demo client login for instant testing.

---

### 2. 📂 Expandable Event Planner Details Card (Task 2)
- **Inline Smooth Drawer Animation**:
  - Each Event Planner card features a **"View Details"** toggle button with a rotating chevron arrow.
  - Clicking the button or card header smoothly expands an inline details drawer using GPU-accelerated CSS Grid transitions (`grid-template-rows: 0fr` to `1fr`).
- **Comprehensive Details Displayed**:
  - **About / Bio**: Detailed company background, years in service, and event philosophy.
  - **Services Provided**: Tag chips displaying specific services (e.g., *Poruwa & Settee Floral Decor*, *Master of Ceremonies*, *Traditional Dancers*, *Audio/Visual & Lighting*, *Catering Coordination*).
  - **Pricing & Packages**: Side-by-side pricing package cards showing package names, prices in Sri Lankan Rupees (`Rs.`), and key inclusions.
  - **Contact Details**: 
    - Standard Planners: Direct phone hidden with guidance to send an inquiry message.
    - Premium Planners: Direct phone number displayed with instant "Call Now" and WhatsApp direct links.
  - **Portfolio Gallery Preview**: Interactive grid of high-resolution past event photos organized by the planner.
  - **Recent Client Reviews**: Real customer testimonials, verified event badges, star ratings, and dates.

---

### 3. 🌗 Smooth Dark Mode / Light Mode Toggle
- Located directly in the top navigation bar with interactive sun/moon icons.
- High-contrast accessible color palette across all sections, hero search, expandable cards, form inputs, dropdowns, and modals.
- Automatically persists the user's preference in `localStorage` and respects system preferences (`prefers-color-scheme`).

---

### 4. 🇱🇰 Authentic Sri Lankan Localization
- **Phone Numbers**: All hotlines, vendor contacts, and placeholder text formatted to Sri Lankan standards (`+94 7X XXX XXXX` and `07X XXX XXXX`) with instant click-to-call and WhatsApp integration.
- **Locations**: Prominent Sri Lankan cities & regions: Colombo 07, Colombo 03, Kandy Central, Galle Fort, Negombo, Bentota, Nuwara Eliya, Mount Lavinia, and Battaramulla.
- **Currency**: All pricing, budget filters, and membership packages formatted in Sri Lankan Rupees (`Rs. LKR`).
  - Standard Registration: `Rs. 15,000`
  - Premium Registration: `Rs. 30,000`
  - Client Registration: `FREE (Rs. 0)`
  - Budget filters: Under Rs. 100,000, Rs. 100,000 – Rs. 300,000, and Rs. 300,000+

---

### 5. 👤 Event Planner Profile Photo Display Fix
- Avatar photos utilize dedicated container frames with `object-fit: cover` and `object-position: top center`.
- Ensures full face and upper body visibility without vertical clipping or distortion.

---

### 6. ✨ Membership Tier Logic & Lead Generation
- **Standard Planner**: Phone number is masked (`+94 77 ••• ••••`); leads are routed via the inquiry form.
- **Premium Planner**: Gold priority badge, public direct phone number, instant "Call Now" and WhatsApp buttons.
- **Interactive Inquiries**: Clients can send custom event inquiries with automated confirmation prompts.

---

## 📁 File Structure

```
c:\Users\nimut\OneDrive\Documents\PlnaMyEvent\
├── index.html       # HTML5 structure: navbar session widget, registration modal with role tabs, login modal, planners grid
├── styles.css       # Responsive CSS3: CSS variables, dark mode theming, expandable drawer grid animations, role tabs
├── app.js           # Vanilla ES6+ JS: client & planner registration, expandable cards, session management, filters
└── README.md        # Comprehensive documentation and feature guide
```

---

## 🚀 How to Run and Preview

1. **Direct Browser Preview**:
   - Double-click **`index.html`** in `c:\Users\nimut\OneDrive\Documents\PlnaMyEvent\` to open it in any modern browser (Chrome, Edge, Firefox, Safari).
2. **Via Local Server (VS Code / Python / Node)**:
   - In VS Code: Right-click `index.html` -> **"Open with Live Server"**.
   - Or in terminal:
     ```powershell
     python -m http.server 8000
     # Or npx serve .
     ```
