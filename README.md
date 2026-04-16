# 🧴 Awesome Water Bottles Shop (React + LocalStorage)

A simple React application where users can browse water bottles and add them to a cart. The cart data is stored in **LocalStorage**, so the selected items remain saved even after refreshing the page.

---

## 📌 Project Overview

This project demonstrates how to build a small **React shopping interface** where users can:

- View a list of water bottles
- Add bottles to a cart
- Remove items from the cart
- Persist cart data using **LocalStorage**

The application loads bottle data from a local JSON file and dynamically renders product cards.

---

## ✨ Features

- 🛍 View all available bottles
- ➕ Add bottles to cart
- ❌ Remove bottles from cart
- 💾 Cart data saved in **LocalStorage**
- 🔄 Cart state restored after page refresh
- 🚫 Prevent duplicate items in cart
- ⚡ Fast development environment using **Vite**

---

## 🛠 Technologies Used

- React 19
- Vite
- JavaScript (ES6 Modules)
- LocalStorage API
- CSS

---

## 📂 Project Structure

```
src
│
├── components
│   ├── bottle
│   │   ├── Bottle.jsx
│   │   └── bottle.css
│   │
│   ├── bottles
│   │   ├── Bottles.jsx
│   │   └── bottles.css
│
├── utilities
│   └── localStorage.js
│
├── App.jsx
│
public
│
└── bottles.json
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
[git clone https://github.com/infapk02/awesome-water-bottles.git]
```

Go to the project directory:

```bash
cd your-repository-name
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🚀 How It Works

### 1️⃣ Fetching Bottle Data

The app loads bottle data from a local JSON file.

```javascript
useEffect(() => {
  fetch("./bottles.json")
    .then((res) => res.json())
    .then((data) => setBottles(data));
}, []);
```

---

### 2️⃣ Adding Items to Cart

When a user clicks **Add To Cart**, the bottle ID is saved to LocalStorage.

```javascript
addBottleDataToLs(bottle.id);
```

The selected bottle is also added to React state.

---

### 3️⃣ Preventing Duplicate Items

The app checks if the bottle already exists in the cart before adding.

```javascript
const exists = cartItems.some((item) => item.id === bottle.id);
```

---

### 4️⃣ Loading Cart from LocalStorage

When the page reloads, saved bottle IDs are retrieved from LocalStorage and matched with the bottle data.

```javascript
const savedBottlesId = getBottlesDataFromLS();
```

This restores the cart items automatically.

---

### 5️⃣ Removing Items from Cart

Clicking **X** removes the item from:

- React state
- LocalStorage

```javascript
removeFromLs(id);
```

---

## 💾 LocalStorage Structure

Cart data is stored like this:

```
cart = ["bottle-id-1", "bottle-id-2"]
```

Only **IDs** are stored to keep LocalStorage lightweight.

---

## 🎯 Learning Purpose

This project helps understand:

- React component structure
- Props passing
- State management
- LocalStorage integration
- Array methods like:
  - `find()`
  - `filter()`
  - `some()`

- Basic cart logic implementation

---

## 👨‍💻 Author

**Infa Pramanik**

Frontend Developer | Learning React & JavaScript
