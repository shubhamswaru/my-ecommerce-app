# E-Commerce Showcase Project

A modern, responsive e-commerce front-end application built with Next.js, TypeScript, and Tailwind CSS. It features a product catalog fetched from the FakeStore API with advanced filtering, sorting, searching, and pagination capabilities.

**Live Site:** (https://my-ecommerce-app-36ij-ojm5771vz-shubhamswarus-projects.vercel.app/)  


## ✨ Features
* **Product Catalog:** Fetches and displays a grid of products.
* **Dynamic Product Pages:** Detailed view for each individual product.
* **Loading Skeletons:** Professional loading state for a better user experience.
* **Search:** Instantly filter products by title.
* **Filtering:** Filter products by category.
* **Sorting:** Sort products by price or name.
* **Pagination:** Client-side pagination to handle a large number of products.
* **Animations:** Staggered grid animation on load using Framer Motion.
* **Responsive Design:** Fully responsive layout for mobile, tablet, and desktop.
* **Unit Tested:** Key components are tested with Jest and React Testing Library.

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Testing:** Jest & React Testing Library

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js (version 18 or later) and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/shubhamswaru/my-ecommerce-app.git]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd my-ecommerce-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5.  **Run tests:**
    ```bash
    npm test
    ```

## 📂 Project Structure

The project uses the `src` directory to keep the source code organized and separated from configuration files.

-   `src/app/`: Contains all pages, layouts, and loading states for the App Router.
    -   `page.tsx`: The main product listing page.
    -   `products/[id]/page.tsx`: The dynamic page for a single product.
    -   `layout.tsx`: The root layout containing the Header and Footer.
    -   `loading.tsx`: The loading skeleton UI for the main page.
-   `src/components/`: Contains all reusable React components (`ProductCard`, `Header`, `ProductGrid`, etc.).
-   `src/lib/`: Contains helper code, primarily `types.ts` for TypeScript definitions.
-   `src/components/__tests__/`: Contains unit tests for the components.

## 🏗️ Architectural Decisions

### Data Fetching Strategy

This project primarily uses **Static Site Generation (SSG)**. The `fetch` API is used within async Server Components, which Next.js caches by default.

**Justification:** The product data from the FakeStore API is static and does not change frequently. Pre-rendering all pages at build time provides several key advantages:
* **Performance:** Pages are served as static HTML, resulting in the fastest possible load times for users.
* **SEO:** Search engines can easily crawl and index the pre-rendered content.
* **Reliability:** The site remains available even if the source API is temporarily down.

### Styling

**Tailwind CSS** was chosen for styling. Its utility-first approach allows for rapid development, consistent design implementation, and easy creation of a responsive layout directly within the component markup. A custom theme (colors, fonts) was configured in `tailwind.config.js` to create a unique visual identity.
