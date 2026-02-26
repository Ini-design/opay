# FicTech CSS Structure

This directory contains all the CSS files for the FicTech application organized by component and functionality.

## CSS Files Overview

### Core Files
- **header.css** - Header navigation bar styles with dark mode support, responsive design, and user menu
- **footer.css** - Footer section with social links, newsletter signup, payment methods, and security badges
- **shared.css** - Reusable components including buttons, cards, forms, alerts, badges, modals, and utilities

### Page-Specific CSS
- **../dashboard/style.css** - Dashboard page styling with welcome banner, stats cards, and layout
- **../auth/style.css** - Authentication page with login/register tabs and security features
- **../cards/style.css** - Payment cards display, card statistics, and management interface
- **../savings/style.css** - Savings plans, progress tracking, and money-saving tips
- **../security/style.css** - Security center with threat assessment, device management, and privacy settings
- **../transfers/style.css** - Money transfer interface with quick transfers, channels, and transaction history
- **../shared/style.css** - Component library showcase demonstrating all reusable UI elements

## Features Included

### Header Components
- Sticky navigation bar
- Logo branding
- Navigation links with active states
- Search functionality
- User profile menu
- Notification badge
- Dark mode toggle
- Mobile responsive menu

### Footer Components
- Multi-column footer layout
- Social media links
- Newsletter subscription form
- Payment method icons
- Security badges
- Quick links section
- Copyright information

### Shared Components
- **Buttons**: Primary, Secondary, Outline, Danger (with sizing options)
- **Forms**: Text, email, select, textarea inputs with labels and validation states
- **Cards**: Basic, with headers, with footers, hover effects
- **Alerts**: Success, danger, warning, info messages
- **Badges**: Colored status badges
- **Modals**: Overlay dialogs with header, body, and footer sections
- **Tables**: Structured data display with hover states
- **Utilities**: Text colors, margins, padding, flexbox classes

### Color Palette
- **Primary**: #00c853 (Green - Main brand color)
- **Secondary**: #1a73e8 (Blue)
- **Success**: #4caf50 (Green)
- **Danger**: #ff4444 (Red)
- **Warning**: #ff9800 (Orange)
- **Dark Background**: #1a1a1a
- **Light Background**: #f5f5f5

## Dark Mode Support

All CSS files include dark mode variants using `body.dark-mode` selector. Dark mode can be toggled via the theme button in the header.

## Responsive Design

All files include mobile-first responsive design with breakpoints at:
- **768px** (tablets and smaller)
- **1200px** (desktop container max-width)

## CSS Variables

Root CSS variables are defined in the main `style.css`:
```css
:root {
  --primary-color: #00c853;
  --secondary-color: #1a73e8;
  --dark-bg: #1a1a1a;
  --light-bg: #f5f5f5;
  --white: #ffffff;
  --text-dark: #222222;
  --text-light: #666666;
  --border-color: #e0e0e0;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-dark: 0 2px 8px rgba(0, 0, 0, 0.3);
}
```

## Integration Guide

1. Include the main stylesheet in your HTML head along with page-specific styles:
```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/footer.css">
<link rel="stylesheet" href="css/shared.css">
<link rel="stylesheet" href="[page]/style.css">
```

2. Use semantic HTML with appropriate class names:
```html
<button class="btn btn-primary">Click Me</button>
<div class="card">
  <div class="card-body">Content</div>
</div>
```

3. Dark mode is automatically applied when `dark-mode` class is added to body element.

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All components are fully accessible with proper semantic HTML
- Hover states and transitions are smooth (0.3s ease)
- Box shadows provide depth without being overwhelming
- Typography uses system fonts for optimal performance
- Spacing uses consistent 20px base unit
