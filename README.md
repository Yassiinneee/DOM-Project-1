# 🛒 DOM Shopping Cart — Interactive Front-End Project

> A professional interactive shopping-cart application built to demonstrate **DOM manipulation, JavaScript event handling, dynamic calculations, UI state management, accessibility, and responsive front-end design**.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.6.0-528DD7?logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![License](https://img.shields.io/badge/License-Educational%20Project-blue)](#license)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Objectives](#-objectives)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [DOM & JavaScript Architecture](#-dom--javascript-architecture)
- [Accessibility](#-accessibility)
- [Responsive Design](#-responsive-design)
- [Testing Checklist](#-testing-checklist)
- [Screenshots](#-screenshots)
- [Possible Improvements](#-possible-improvements)
- [Learning Outcomes](#-learning-outcomes)
- [Author](#-author)
- [License](#-license)

---

## 🎯 Overview

**DOM Shopping Cart** is a client-side e-commerce cart interface developed as a practical **DOM manipulation project**.

The application provides an interactive shopping experience where users can:

- Increase or decrease product quantities.
- See the cart total update immediately.
- Remove products from the cart.
- Mark products as favorites.
- Navigate through a responsive product interface.
- Receive an empty-cart state when all products are removed.

The project intentionally uses a lightweight front-end architecture without a JavaScript framework, making it ideal for understanding how **HTML, CSS, JavaScript, and the Browser DOM work together**.

---

## 🎯 Objectives

The main objectives of this project are to demonstrate practical knowledge of:

1. **DOM selection and manipulation**
2. **JavaScript event handling**
3. **Dynamic state updates**
4. **Event delegation**
5. **Real-time price calculation**
6. **Conditional UI behavior**
7. **Accessible interactive controls**
8. **Responsive CSS layouts**
9. **Reusable JavaScript functions**
10. **Clean separation between HTML, CSS, and JavaScript**

---

## ✨ Features

### 🛍️ Product Management

The application contains three products:

| Product | Category | Unit Price |
|---|---|---:|
| Baskets | Footwear | $100 |
| Socks | Clothing | $20 |
| Bag | Accessories | $50 |

Each product is displayed as an independent card containing its image, category, description, price, quantity controls, delete action, and favorite action.

### ➕ Quantity Management

Users can:

- Increase the quantity with the **+** button.
- Decrease the quantity with the **−** button.
- Prevent quantities from becoming negative.
- Automatically disable the **−** button when the quantity reaches zero.

### 💰 Dynamic Total Calculation

The cart calculates the total using:

```text
Total = Σ (Unit Price × Quantity)
```

The total is recalculated immediately whenever a quantity changes or a product is deleted.

### 🗑️ Product Deletion

Products can be removed directly from the cart.

The deletion includes a short visual transition before the product is removed from the DOM.

### ❤️ Favorites

The heart-shaped button allows users to toggle a product between:

- Favorite
- Not favorite

The icon and visual state change dynamically using Font Awesome classes and JavaScript.

### 🛒 Empty Cart State

When all products are removed, the application dynamically replaces the product list with an empty-cart message.

### 📱 Responsive Interface

The layout adapts to:

- Desktop screens
- Tablet screens
- Mobile devices
- Small mobile screens

### ♿ Accessibility

The interface includes accessibility-oriented features such as:

- Semantic buttons.
- Descriptive `aria-label` attributes.
- `aria-pressed` for favorite state.
- `aria-live` for quantity updates.
- Visible keyboard focus indicators.
- Keyboard activation support for interactive controls.

---

## 🧰 Technology Stack

### Core Technologies

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure and product markup |
| **CSS3** | Layout, responsive design, animations, and visual styling |
| **JavaScript ES6+** | DOM manipulation and application logic |

### External Libraries

| Library | Version | Purpose |
|---|---:|---|
| **Bootstrap** | 5.3.3 | Responsive navigation and layout utilities |
| **Font Awesome** | 6.6.0 | UI icons and interactive visual elements |

The external libraries are loaded through CDN links directly from `index.html`.

---

## 📁 Project Structure

```text
DOM-Project-1-main/
│
├── assets/
│   ├── bag.png
│   ├── baskets.png
│   └── socks.png
│
├── Screenshots/
│   ├── After deleting the Bag.png
│   ├── Before deleting the Bag.png
│   ├── Clickable heart-shaped button.png
│   ├── Total price adjusted according to quantity and deletions1.png
│   ├── Total price adjusted according to quantity and deletions2.png
│   └── Total price adjusted according to quantity and deletions3.png
│
├── index.html
├── script.js
├── style.css
└── README.md
```

### File Responsibilities

#### `index.html`

Defines the application structure, including:

- Navigation bar
- Shopping cart header
- Product cards
- Product images
- Quantity controls
- Delete buttons
- Favorite buttons
- Total price section
- Footer

#### `style.css`

Controls:

- Global styling
- Product-card layout
- Responsive grid
- Buttons and hover effects
- Product image presentation
- Favorite/delete states
- Empty-cart state
- Keyboard focus styles
- Responsive breakpoints

#### `script.js`

Contains the application logic for:

- Reading products from the DOM.
- Extracting product prices.
- Reading quantities.
- Updating quantities.
- Calculating totals.
- Updating button states.
- Toggling favorites.
- Deleting products.
- Displaying the empty-cart state.
- Supporting keyboard interaction.
- Updating the current year automatically.

#### `assets/`

Contains the product images used by the shopping-cart interface.

#### `Screenshots/`

Contains visual evidence demonstrating important application behaviors and project results.

---

## ⚙️ How It Works

### 1. Application Initialization

When the DOM finishes loading, the application starts through:

```javascript
document.addEventListener("DOMContentLoaded", () => {
    // Application initialization
});
```

The script then identifies the main DOM elements required by the application.

### 2. Product Discovery

Products are dynamically discovered using:

```javascript
document.querySelectorAll(".product-wrapper");
```

This means the JavaScript logic is not hard-coded to a specific number of product cards.

### 3. Price Extraction

The application reads each product's displayed price and converts it into a numeric value using `parseFloat()`.

### 4. Quantity Processing

Each product contains a quantity element. JavaScript reads the value and ensures that the quantity cannot become negative.

### 5. Total Calculation

For every product:

```text
Product Total = Unit Price × Quantity
```

All product totals are then added together.

The final result is formatted with two decimal places:

```javascript
total.toFixed(2)
```

### 6. Event Delegation

Instead of attaching separate click listeners to every individual button, the application uses a single listener on the products container.

This approach allows the application to handle:

- Plus buttons
- Minus buttons
- Delete buttons
- Favorite buttons

through event delegation.

### 7. UI State Synchronization

Whenever the cart state changes, the interface is updated immediately.

```text
Quantity changes
       ↓
Quantity element updates
       ↓
Minus button state updates
       ↓
Cart total recalculates
       ↓
UI displays the new total
```

---

## 🚀 Getting Started

### Prerequisites

No backend server, database, package manager, or build tool is required.

You only need:

- A modern web browser.
- A code editor such as Visual Studio Code.
- The project files.

### Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Move into the project directory:

```bash
cd DOM-Project-1-main
```

### Run the Application

Because this is a static front-end application, you can open:

```text
index.html
```

directly in a browser.

For a better development workflow, use **Visual Studio Code + Live Server**.

Recommended workflow:

1. Open the project in Visual Studio Code.
2. Install the **Live Server** extension if necessary.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Test the application in the browser.

---

## 🖱️ Usage

### Increase a Product Quantity

Click the **+** button associated with a product.

Example:

```text
Baskets
$100 × 2 = $200
```

### Decrease a Product Quantity

Click the **−** button.

The application prevents the quantity from becoming negative.

### Delete a Product

Click the trash icon.

The product is removed from the DOM and the total is recalculated.

### Add a Product to Favorites

Click the heart icon.

The button changes its visual state and updates its accessibility attributes.

### Empty the Cart

Delete all products.

The application automatically displays an empty-cart message.

---

## 🧠 DOM & JavaScript Architecture

The JavaScript implementation is organized into focused functions.

### Core Data Flow

```text
getProducts()
      ↓
getProductPrice()
      ↓
getProductQuantity()
      ↓
calculateTotal()
      ↓
updateTotal()
```

Interaction functions operate on top of this data flow:

```text
changeQuantity()
toggleFavorite()
deleteProduct()
checkEmptyCart()
```

### Main Design Principles

The implementation follows several good front-end practices:

- **Single responsibility:** functions perform focused tasks.
- **Defensive DOM access:** missing elements are handled safely.
- **Event delegation:** reduces unnecessary event listeners.
- **State synchronization:** changes are immediately reflected in the UI.
- **Progressive accessibility:** controls provide semantic and ARIA information.
- **No global application state required:** the DOM acts as the current source of cart state.

---

## ♿ Accessibility

Accessibility has been considered throughout the implementation.

### Semantic Controls

Interactive actions use native `<button>` elements rather than clickable generic elements.

### ARIA Labels

Controls provide descriptive labels such as:

```html
aria-label="Increase Baskets quantity"
```

### Favorite State

The favorite button exposes its state through:

```html
aria-pressed="true"
```

or:

```html
aria-pressed="false"
```

### Live Quantity Updates

Quantity values use:

```html
aria-live="polite"
```

to make dynamic changes more accessible.

### Keyboard Support

The application handles:

- `Enter`
- `Space`

for interactive buttons.

### Focus Visibility

Keyboard users receive a visible focus outline through the CSS `:focus-visible` rule.

---

## 📱 Responsive Design

The project uses CSS Grid and responsive media queries.

### Desktop

Three product cards are displayed in a row:

```text
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Product │  │ Product │  │ Product │
└─────────┘  └─────────┘  └─────────┘
```

### Tablet

The layout changes to two columns.

### Mobile

The layout changes to a single-column structure for improved usability.

This responsive behavior is implemented without requiring a JavaScript-based responsive framework.

---

## 🧪 Testing Checklist

The following behaviors should be verified before submission.

### Quantity Tests

- [ ] Initial quantities are `0`.
- [ ] Clicking `+` increases the quantity.
- [ ] Clicking `−` decreases the quantity.
- [ ] Quantity never becomes negative.
- [ ] `−` is disabled when quantity is `0`.

### Price Tests

- [ ] Total starts at `$0.00`.
- [ ] Total updates after increasing quantity.
- [ ] Total updates after decreasing quantity.
- [ ] Total updates after deleting a product.
- [ ] Total is formatted with two decimal places.

### Product Tests

- [ ] Product can be deleted.
- [ ] Favorite button changes state.
- [ ] Favorite icon changes correctly.
- [ ] Empty-cart state appears after deleting all products.

### Responsive Tests

- [ ] Desktop layout works correctly.
- [ ] Tablet layout displays two columns.
- [ ] Mobile layout displays one column.
- [ ] Navigation remains usable on small screens.

### Accessibility Tests

- [ ] Buttons can be reached using the keyboard.
- [ ] `Enter` activates focused buttons.
- [ ] `Space` activates focused buttons.
- [ ] Focus indicators are visible.
- [ ] Interactive controls have meaningful labels.

---

## 📸 Screenshots

The repository includes screenshots demonstrating the application's main behaviors.

### Product & Cart Interface

![Shopping Cart Interface](./Screenshots/Before%20deleting%20the%20Bag.png)

### Delete Product

![After Deleting the Bag](./Screenshots/After%20deleting%20the%20Bag.png)

### Favorite Interaction

![Clickable Heart Button](./Screenshots/Clickable%20heart-shaped%20button.png)

### Dynamic Total Calculation

![Total Price — Example 1](./Screenshots/Total%20price%20adjusted%20according%20to%20quantity%20and%20deletions1.png)

![Total Price — Example 2](./Screenshots/Total%20price%20adjusted%20according%20to%20quantity%20and%20deletions2.png)

![Total Price — Example 3](./Screenshots/Total%20price%20adjusted%20according%20to%20quantity%20and%20deletions3.png)

---

## 🔮 Possible Improvements

The current implementation focuses on DOM manipulation and front-end fundamentals.

A production-oriented version could be extended with:

- [ ] Add products dynamically from JavaScript data.
- [ ] Persist the cart using `localStorage`.
- [ ] Persist favorites using `localStorage`.
- [ ] Add product search and filtering.
- [ ] Add product categories.
- [ ] Add stock limits.
- [ ] Add a checkout workflow.
- [ ] Add tax and shipping calculations.
- [ ] Add currency selection.
- [ ] Add toast notifications.
- [ ] Add confirmation dialogs before deletion.
- [ ] Add automated unit and end-to-end tests.
- [ ] Introduce TypeScript for stronger type safety.
- [ ] Connect the front end to a REST API.
- [ ] Add authentication and user-specific carts.
- [ ] Add a backend and database for persistent shopping carts.

---

## 🎓 Learning Outcomes

This project provides practical experience with:

- HTML5 semantic structure.
- CSS Grid and responsive layouts.
- CSS transitions and interactive states.
- JavaScript ES6+ syntax.
- Browser DOM APIs.
- `querySelector()` and `querySelectorAll()`.
- Event listeners.
- Event delegation.
- `event.target.closest()`.
- Dynamic DOM updates.
- Numeric parsing and calculations.
- Conditional UI rendering.
- Accessibility attributes.
- Keyboard interaction.
- Separation of concerns.

It also demonstrates an important front-end development concept:

> **User actions should update application state, and application state should be reflected consistently in the user interface.**

---

## 👨‍💻 Author

**Yassine Kalthoum**

**Network & Software Engineering | Web Development | Cybersecurity**

This project was developed as part of practical front-end and JavaScript DOM development work.

---

## 📄 License

This project is intended primarily for **educational and learning purposes**.

You may adapt and extend the source code for personal learning, experimentation, and portfolio development.

If you redistribute the project, please retain appropriate attribution to the original author.

---

## ⭐ Project Summary

**DOM Shopping Cart** is a focused front-end project demonstrating how JavaScript can transform a static HTML product interface into an interactive shopping-cart experience.

It combines:

**HTML Structure + CSS Presentation + JavaScript DOM Logic + Responsive Design + Accessibility**

to provide a clean foundation for progressing toward modern front-end frameworks and full-stack e-commerce development.

---
