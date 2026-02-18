document.addEventListener('DOMContentLoaded', () => {
   // CATEGORY SCROLL
   const scrollContainer = document.getElementById('categoryScroll');
   const nextBtn = document.getElementById('nextBtn');
   const prevBtn = document.getElementById('prevBtn');

   const scrollAmount = 250;

   if (scrollContainer && nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
         scrollContainer.scrollLeft += scrollAmount;
      });

      prevBtn.addEventListener('click', () => {
         scrollContainer.scrollLeft -= scrollAmount;
      });
   }

   // ADD TO CART QTY
   const minusBtn = document.getElementById('minus');
   const plusBtn = document.getElementById('plus');
   const qtyEl = document.getElementById('qty');

   let qty = 1;
   const min = 1;
   const max = 10;

   if (minusBtn && plusBtn && qtyEl) {
      function updateQty() {
         qtyEl.textContent = qty;
         minusBtn.disabled = qty <= min;
         plusBtn.disabled = qty >= max;
      }

      minusBtn.addEventListener('click', () => {
         if (qty > min) {
            qty--;
            updateQty();
         }
      });

      plusBtn.addEventListener('click', () => {
         if (qty < max) {
            qty++;
            updateQty();
         }
      });

      updateQty();
   }
});
