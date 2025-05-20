
  const calculateBtn = document.getElementById("calculateBtn");
  const quoteForm = document.getElementById("quoteForm");
  const resultBox = document.getElementById("result");

  calculateBtn.addEventListener("click", function () {
    const siteType = document.getElementById("siteType").value;
    const pageCount = parseInt(document.getElementById("pageCount").value);
    const designYes = document.getElementById("designYes");
    const designNo = document.getElementById("designNo");

    let hasError = false;

    if (!siteType) {
    document.getElementById("basePriceValue").innerText = "ERROR – EMPTY";
    hasError = true;
    }

    if (isNaN(pageCount)) {
    document.getElementById("pagePriceValue").innerText = "ERROR – EMPTY";
    hasError = true;
    }

    if (!designYes.checked && !designNo.checked) {
    document.getElementById("designPriceValue").innerText = "ERROR – EMPTY";
    hasError = true;
    }

    if (hasError) {
    document.getElementById("totalValue").innerText = "ERROR";
    return;
    }

    let basePrice = 0;
    if (siteType === "business") basePrice = 1000;
    else if (siteType === "Online") basePrice = 2000;
    else if (siteType === "blog") basePrice = 1500;

    const pagePrice = pageCount * 200;
    let designPrice = 0;

    if (designYes.checked) {
      designPrice = 1000;
    } else {
      designPrice = 0;
    }
        const total = basePrice + pagePrice + designPrice;

    document.getElementById("basePriceValue").innerText = " ₪" + basePrice;
    document.getElementById("pagePriceValue").innerText = " ₪" + pagePrice;
    document.getElementById("designPriceValue").innerText = " ₪" + designPrice;
    document.getElementById("totalValue").innerText = " ₪" + total;

  });

  quoteForm.addEventListener("reset", function () {
    document.getElementById("basePriceValue").innerText = "";
    document.getElementById("pagePriceValue").innerText = "";
    document.getElementById("designPriceValue").innerText = "";
    document.getElementById("totalValue").innerText = "";
    pageCountInput.value = "1";
    updateButtons();
  });

  const decrementBtn = document.querySelector(".decrement");
  const incrementBtn = document.querySelector(".increment");
  const pageCountInput = document.getElementById("pageCount");

  function updateButtons() {
    const currentValue = parseInt(pageCountInput.value);
    decrementBtn.disabled = currentValue <= 1;
    incrementBtn.disabled = currentValue >= 10;
  }

  decrementBtn.addEventListener("click", function() {
    let currentValue = parseInt(pageCountInput.value);
    if (currentValue > 1) {
      pageCountInput.value = currentValue - 1;
      updateButtons();
    }
  });

  incrementBtn.addEventListener("click", function() {
    let currentValue = parseInt(pageCountInput.value);
    if (currentValue < 10) {
      pageCountInput.value = currentValue + 1;
      updateButtons();
    }
  });

  updateButtons();

