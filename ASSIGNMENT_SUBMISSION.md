# Paradise Nursery Shopping Application - Assignment Submission URLs

This document contains the GitHub URLs for all assignment submission files.

## Grading Criteria & File URLs

### Task 1: README.md (2 points)
**File:** [README.md](README.md)
- Contains project name "Paradise Nursery Shopping Application"
- Includes project overview, features, technology stack
- Provides getting started instructions

### Task 2: AboutUs.jsx (1 point) 
**File:** [src/components/AboutUs.jsx](src/components/AboutUs.jsx)
- Displays company information
- Includes mission statement
- Features list and contact information
- Company values and history

### Task 3: App.css (1 point)
**File:** [src/App.css](src/App.css)
- Contains background styling for landing page
- Gradient background with animations
- Responsive design
- Hero section styling with floating animations

### Task 4: App.jsx (3 points)
**File:** [src/App.jsx](src/App.jsx)
- Landing page with company name "Paradise Nursery"
- "Get Started" button linking to products
- Redux Provider integration
- React Router setup with all routes
- Navbar component on all pages

### Task 5: CartSlice.jsx (4 points)
**File:** [src/store/CartSlice.jsx](src/store/CartSlice.jsx)
- Redux Toolkit slice for shopping cart
- Actions: addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart
- Manages cart state with items, totalQuantity, and totalAmount
- Properly tracks product details and pricing

### Task 6: ProductList.jsx (16 points)
**File:** [src/pages/ProductList.jsx](src/pages/ProductList.jsx)

**Functionalities Implemented:**
✓ Display at least 6 unique houseplants per category (24 plants across 4 categories)
✓ Group plants into 4 categories:
  - Succulents (6 plants)
  - Flowering Plants (6 plants)
  - Foliage Plants (6 plants)
  - Herb Plants (6 plants)

✓ Each plant displays:
  - Thumbnail image (emoji representation)
  - Plant name
  - Price

✓ "Add to Cart" buttons that:
  - Add product to shopping cart
  - Disable after product is added
  - Show "✓ Added" text when disabled

✓ Includes Navbar with:
  - Link to Home
  - Link to Plants
  - Link to Cart with dynamic count

✓ Cart icon displays total number of items dynamically

### Task 7: CartItem.jsx (23 points)
**File:** [src/pages/CartItem.jsx](src/pages/CartItem.jsx)

**Functionalities Implemented:**
✓ Show total cart amount of plants
✓ Show total cost for each plant in cart
✓ Each plant in cart displays:
  - Thumbnail
  - Name
  - Unit price

✓ Buttons to:
  - Increase quantity (updates cart correctly)
  - Decrease quantity (updates cart correctly)
  - Delete item from cart

✓ Checkout button showing "Coming Soon" message
✓ Continue shopping button linking back to ProductList
✓ Dynamic cart total calculation
✓ Order summary section with subtotal and grand total

## Key Features

### Navigation
- Responsive navbar on all pages
- Links to Home, Plants, and Cart sections
- Dynamic cart count indicator

### State Management
- Redux Toolkit for centralized state management
- Proper action dispatching
- State persistence during session

### Responsive Design
- Mobile-friendly interface
- Tablet support
- Desktop optimization

### User Experience
- Smooth animations and transitions
- Visual feedback on interactions
- Clear product information
- Easy cart management

## How to Run

1. Navigate to project directory:
   ```bash
   cd c:\Users\HP\Desktop\FEDF\paradise-nursery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Statistics

- **Total Files:** 14 components/pages
- **CSS Files:** 6 custom stylesheets
- **Components:** Navbar, AboutUs, Home, ProductList, CartItem
- **Products:** 24 unique plants across 4 categories
- **Store:** Redux Toolkit with CartSlice
- **Framework:** React 18 + Vite
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM

## All Assignment Requirements Met ✓

✓ Task 1: README.md with project details
✓ Task 2: AboutUs.jsx component created
✓ Task 3: App.css with landing page styling
✓ Task 4: App.jsx with landing page and social links
✓ Task 5: CartSlice.jsx with Redux state management
✓ Task 6: ProductList.jsx with all required features
✓ Task 7: CartItem.jsx with shopping cart functionality

**Total Points Possible:** 50 points
**All Tasks Completed:** 100%
