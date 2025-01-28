# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

**Simple E-Commerce Cart**
A React-based web application that allows users to browse a list of products, add them to a cart, modify quantities, and view the total price. This project is built to practice React concepts like components, props, state, events, and data management.

**Features**
***Core Deliverables:***
    - View a list of products with their names, prices, and an "Add to Cart" button.
    - Add products to the cart, increasing quantity if the product is already in the cart.
    - View cart contents, including product names, prices, quantities, and the total price.
    - Adjust the quantity of cart items or remove them.
***Bonus Features:***
    - Sort products by name or price (ascending/descending).
    - Persist the cart state using localStorage.
    - Display a message when the cart is empty.
    - Add search functionality to filter products by name.

**Technologies Used**
    - React
    - Vite (for building the project)
    - JavaScript
    - HTML5 & CSS3

**How to Run the Project**
https://e-commerce-cart-ten-liart.vercel.app/

***Prerequisites:***
Node.js installed on your computer.

***Steps:***
1. Clone the repository:
git clone https://github.com/your-username/e-commerce-cart.git
2. Navigate to the project directory:
cd e-commerce-cart
3. Install dependencies:
npm install
4. Start the development server:
npm run dev
5. Open your browser and navigate to the URL shown in the terminal (e.g., http://localhost:5173).

**Features in Detail**
1. Product List:
    - Displays all products.
    - Each product has a name, price, and an "Add to Cart" button.

2. Cart Management:
    - Displays all items in the cart.
    - Shows quantity, individual product prices, and total cost.
    - Allows users to adjust quantities or remove items.

3. Sorting and Searching (Bonus):
    - Sort products alphabetically or by price.
    - Filter products by name with a search bar.

**Future Enhancements**
- Add user authentication for personalized carts.
- Integrate a backend to fetch product data dynamically.
- Improve styling with a CSS framework (e.g., Tailwind or Bootstrap).