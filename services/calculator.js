document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.getElementById("calculateBtn");
  const quoteForm = document.getElementById("quoteForm");
  const resultBox = document.getElementById("result");

  calculateBtn.addEventListener("click", function () {
    const siteType = document.getElementById("siteType").value;
    const pageCount = parseInt(document.getElementById("pageCount").value);
    const designYes = document.getElementById("designYes");
    const designNo = document.getElementById("designNo");

    if (!siteType || isNaN(pageCount) || (!designYes.checked && !designNo.checked)) {
      resultBox.innerHTML = "<strong>Please fill out all fields.</strong>";
      return;
    }

    let basePrice = 0;
    if (siteType === "business") basePrice = 1000;
    else if (siteType === "Online") basePrice = 2000;
    else if (siteType === "blog") basePrice = 1500;

    const pagePrice = pageCount * 200;
    let designPrice = designYes.checked ? 1000 : 0;
    const total = basePrice + pagePrice + designPrice;

    resultBox.innerHTML = `
      <div class="breakdown">
        <p><strong>Base Price:</strong> ₪${basePrice}</p>
        <p><strong>Pages (${pageCount} × ₪200):</strong> ₪${pagePrice}</p>
        <p><strong>Custom Design:</strong> ₪${designPrice}</p>
        <hr>
        <p class="total"><strong>Total Estimate:</strong> ₪${total}</p>
      </div>
    `;

    resultBox.classList.remove("animate");
    void resultBox.offsetWidth;
    resultBox.classList.add("animate");
  });

  quoteForm.addEventListener("reset", function () {
    resultBox.innerHTML = "<strong>Estimated Price:</strong>";
    pageCountInput.value = "1";
    updateButtons();
  });

  // כפתורי פלוס ומינוס לבחירת עמודים
  const decrementBtn = document.querySelector(".decrement");
  const incrementBtn = document.querySelector(".increment");
  const pageCountInput = document.getElementById("pageCount");

  function updateButtons() {
    const currentValue = parseInt(pageCountInput.value);
    decrementBtn.disabled = currentValue <= 1;
    incrementBtn.disabled = currentValue >= 10;
  }

  decrementBtn.addEventListener("click", () => {
    let currentValue = parseInt(pageCountInput.value);
    if (currentValue > 1) {
      pageCountInput.value = currentValue - 1;
      updateButtons();
    }
  });

  incrementBtn.addEventListener("click", () => {
    let currentValue = parseInt(pageCountInput.value);
    if (currentValue < 10) {
      pageCountInput.value = currentValue + 1;
      updateButtons();
    }
  });

  updateButtons();
});
