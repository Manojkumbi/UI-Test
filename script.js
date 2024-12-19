document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery-container");
  
    for (let i = 1; i <= 10; i++) {
      const img = document.createElement("img");
      img.src = `day1/${i}.png`;
      img.alt = `Image ${i}`;
      galleryContainer.appendChild(img);
    }
  });
  