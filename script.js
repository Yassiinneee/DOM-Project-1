
"use strict";

/*
==================================================
   SHOPPING CART
   Professional JavaScript
==================================================
*/

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     DOM ELEMENTS
     ========================================= */

  const productsContainer =
    document.querySelector(".list-products");

  const totalElement =
    document.querySelector(".total");

  const yearElement =
    document.querySelector("#currentYear");


  /* =========================================
     SAFETY CHECK
     ========================================= */

  if (!productsContainer || !totalElement) {

    console.error(
      "Shopping Cart: Required DOM elements were not found."
    );

    return;
  }


  /* =========================================
     GET PRODUCTS
     ========================================= */

  function getProducts() {

    return document.querySelectorAll(
      ".product-wrapper"
    );

  }


  /* =========================================
     GET PRICE
     ========================================= */

  function getProductPrice(product) {

    const priceElement =
      product.querySelector(".unit-price");

    if (!priceElement) {
      return 0;
    }

    const price =
      parseFloat(
        priceElement.textContent
          .replace(/[^\d.]/g, "")
      );

    return Number.isFinite(price)
      ? price
      : 0;
  }


  /* =========================================
     GET QUANTITY
     ========================================= */

  function getProductQuantity(product) {

    const quantityElement =
      product.querySelector(".quantity");

    if (!quantityElement) {
      return 0;
    }

    const quantity =
      parseInt(
        quantityElement.textContent,
        10
      );

    return Number.isFinite(quantity)
      ? Math.max(0, quantity)
      : 0;
  }


  /* =========================================
     UPDATE MINUS BUTTON
     ========================================= */

  function updateMinusButton(product) {

    const minusButton =
      product.querySelector(".minus-btn");

    if (!minusButton) {
      return;
    }

    const quantity =
      getProductQuantity(product);

    minusButton.disabled =
      quantity <= 0;

  }


  /* =========================================
     CALCULATE TOTAL
     ========================================= */

  function calculateTotal() {

    let total = 0;

    getProducts().forEach((product) => {

      const price =
        getProductPrice(product);

      const quantity =
        getProductQuantity(product);

      total += price * quantity;

    });

    return total;

  }


  /* =========================================
     UPDATE TOTAL
     ========================================= */

  function updateTotal() {

    const total =
      calculateTotal();

    totalElement.textContent =
      `${total.toFixed(2)} $`;

  }


  /* =========================================
     CHANGE QUANTITY
     ========================================= */

  function changeQuantity(
    product,
    amount
  ) {

    const quantityElement =
      product.querySelector(".quantity");

    if (!quantityElement) {
      return;
    }

    let quantity =
      getProductQuantity(product);

    quantity += amount;

    /*
      Quantity must never become negative.
    */

    quantity =
      Math.max(0, quantity);

    quantityElement.textContent =
      quantity;

    updateMinusButton(product);

    updateTotal();

  }


  /* =========================================
     ADD / REMOVE FAVORITE
     ========================================= */

  function toggleFavorite(button) {

    const isActive =
      button.classList.toggle("active");

    const icon =
      button.querySelector("i");

    if (icon) {

      icon.classList.toggle(
        "fa-regular",
        !isActive
      );

      icon.classList.toggle(
        "fa-solid",
        isActive
      );

    }

    button.setAttribute(
      "aria-pressed",
      String(isActive)
    );

    button.setAttribute(
      "aria-label",
      isActive
        ? "Remove from favorites"
        : "Add to favorites"
    );

  }


  /* =========================================
     DELETE PRODUCT
     ========================================= */

  function deleteProduct(product) {

    const card =
      product.querySelector(".product-card");

    if (!card) {
      product.remove();

      updateTotal();

      return;
    }

    /*
      Smooth delete animation.
    */

    card.style.opacity = "0";
    card.style.transform = "scale(0.95)";

    setTimeout(() => {

      product.remove();

      updateTotal();

      checkEmptyCart();

    }, 200);

  }


  /* =========================================
     EMPTY CART
     ========================================= */

  function checkEmptyCart() {

    const products =
      getProducts();

    if (products.length > 0) {
      return;
    }

    productsContainer.innerHTML = `
      <div class="empty-cart">

        <i class="fa-solid fa-cart-shopping"></i>

        <h3>
          Your cart is empty
        </h3>

        <p>
          There are currently no products
          in your shopping cart.
        </p>

      </div>
    `;

  }


  /* =========================================
     CLICK HANDLER
     ========================================= */

  productsContainer.addEventListener(
    "click",
    (event) => {

      /*
        PLUS BUTTON
      */

      const plusButton =
        event.target.closest(".plus-btn");

      if (plusButton) {

        const product =
          plusButton.closest(
            ".product-wrapper"
          );

        if (product) {
          changeQuantity(product, 1);
        }

        return;
      }


      /*
        MINUS BUTTON
      */

      const minusButton =
        event.target.closest(".minus-btn");

      if (minusButton) {

        const product =
          minusButton.closest(
            ".product-wrapper"
          );

        if (product) {
          changeQuantity(product, -1);
        }

        return;
      }


      /*
        DELETE BUTTON
      */

      const deleteButton =
        event.target.closest(".delete-btn");

      if (deleteButton) {

        const product =
          deleteButton.closest(
            ".product-wrapper"
          );

        if (product) {
          deleteProduct(product);
        }

        return;
      }


      /*
        FAVORITE BUTTON
      */

      const favoriteButton =
        event.target.closest(
          ".favorite-btn"
        );

      if (favoriteButton) {

        toggleFavorite(
          favoriteButton
        );

      }

    }
  );


  /* =========================================
     KEYBOARD ACCESSIBILITY
     ========================================= */

  productsContainer.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key !== "Enter" &&
        event.key !== " "
      ) {
        return;
      }

      const button =
        event.target.closest("button");

      if (!button) {
        return;
      }

      event.preventDefault();

      button.click();

    }
  );


  /* =========================================
     INITIALIZE CART
     ========================================= */

  function initializeCart() {

    getProducts().forEach(
      (product) => {

        updateMinusButton(product);

      }
    );

    updateTotal();

  }


  /* =========================================
     CURRENT YEAR
     ========================================= */

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /* =========================================
     START APPLICATION
     ========================================= */

  initializeCart();

  console.log(
    "Shopping Cart initialized successfully."
  );

});

