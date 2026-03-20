# Interactive Card Details Form

![Design preview for the Interactive card details form](preview.jpg)

A responsive credit card form with real-time preview and validation.

## Features

- Real-time card preview updates
- Form validation with error messages
- Responsive design (desktop & mobile)
- Interactive focus states
- Completed success state

## Tech Stack

- HTML5 Semantic Markup
- CSS3 with Custom Properties
- Vanilla JavaScript (ES6+)

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Fill out the form to see real-time card updates

## Project Structure

```
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # Interactivity
├── images/             # Card assets
└── design/             # Design references
```

## Validation

- **Cardholder Name**: Required, letters only
- **Card Number**: 16 digits, formatted with spaces
- **Expiry**: Valid month (01-12), future year
- **CVC**: 3 digits, numbers only

## Responsive Breakpoints

- **Desktop**: Side-by-side layout
- **Mobile**: Stacked layout

Built with ❤️ for Frontend Mentor challenge.
