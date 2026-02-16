// productslider
const mainBox = document.getElementById('mainImageBox');
const mainImage = document.getElementById('mainImage');
const zoomBox = document.getElementById('zoomBox');

const thumbs = document.querySelectorAll('.thumb');
const thumbContainer = document.getElementById('thumbContainer');
const nextBtn = document.getElementById('thumbNext');
const prevBtn = document.getElementById('thumbPrev');

const SCROLL_AMOUNT = 80;

/* -----------------------------
     THUMBNAIL CLICK
  ------------------------------*/
thumbs.forEach((thumb) => {
   thumb.addEventListener('click', () => {
      // active class
      thumbs.forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');

      // change main image
      mainImage.src = thumb.src;

      // update zoom background
      zoomBox.style.backgroundImage = `url(${thumb.src})`;
   });
});

/* -----------------------------
     THUMBNAIL SCROLL
  ------------------------------*/
nextBtn.addEventListener('click', () => {
   thumbContainer.scrollLeft += SCROLL_AMOUNT;
});

prevBtn.addEventListener('click', () => {
   thumbContainer.scrollLeft -= SCROLL_AMOUNT;
});

/* -----------------------------
     HOVER ZOOM
  ------------------------------*/
mainBox.addEventListener('mousemove', (e) => {
   zoomBox.style.display = 'block';
   zoomBox.style.backgroundImage = `url(${mainImage.src})`;

   const rect = mainBox.getBoundingClientRect();

   const x = ((e.clientX - rect.left) / rect.width) * 100;
   const y = ((e.clientY - rect.top) / rect.height) * 100;

   zoomBox.style.backgroundPosition = `${x}% ${y}%`;
});

mainBox.addEventListener('mouseleave', () => {
   zoomBox.style.display = 'none';
});
