document.getElementById("calculateBtn").addEventListener("click", function () {
    const siteType = document.getElementById("siteType").value;
    const pageCount = parseInt(document.getElementById("pageCount").value);
    const designYes = document.getElementById("designYes");
    const designNo = document.getElementById("designNo");
  
    if (!siteType || isNaN(pageCount) || (!designYes.checked && !designNo.checked)) {
      document.getElementById("result").textContent = "Please fill out all fields.";
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
    }
  
    const total = basePrice + pagePrice + designPrice;
  
    document.getElementById("result").textContent = `Estimated Price: $${total}`;
  });

  document.getElementById("quoteForm").addEventListener("reset", function () {
  document.getElementById("result").textContent = "Estimated Price: ";
});
