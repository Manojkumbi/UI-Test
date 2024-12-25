document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("gallery-container");
  const dayList = document.getElementById("day-list");

  const days = ["day1", "day2", "day3", "day4","day5","day6"];

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("caption");
  const closeBtn = document.getElementsByClassName("close-btn")[0];
  const h2 = document.getElementsByTagName("h2")[0];
  function updateGallery(day) {
    galleryContainer.innerHTML = "";

    h2.innerHTML = `${day.toUpperCase()} IMAGES`;
    for (let i = 1; i <= 10; i++) {
      const img = document.createElement("img");
      img.src = `assets/${day}/${i}.png`;
      img.alt = `Image ${i}`;
      document.addEventListener("DOMContentLoaded", () => {
        const galleryContainer = document.getElementById("gallery-container");
        const dayList = document.getElementById("day-list");

        const days = ["day1", "day2", "day3"];

        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const caption = document.getElementById("caption");
        const closeBtn = document.getElementsByClassName("close-btn")[0];
        const h2 = document.getElementsByTagName("h2")[0];
        function updateGallery(day) {
          galleryContainer.innerHTML = "";

          h2.innerHTML = `${day.toUpperCase()} IMAGES`;
          for (let i = 1; i <= 10; i++) {
            const img = document.createElement("img");
            img.src = `assets/${day}/${i}.png`;
            img.alt = `Image ${i}`;
            document.addEventListener("DOMContentLoaded", () => {
              const galleryContainer =
                document.getElementById("gallery-container");
              const dayList = document.getElementById("day-list");

              const days = ["day1", "day2", "day3"];

              const modal = document.getElementById("imageModal");
              const modalImg = document.getElementById("modalImage");
              const caption = document.getElementById("caption");
              const closeBtn = document.getElementsByClassName("close-btn")[0];
              const h2 = document.getElementsByTagName("h2")[0];
              function updateGallery(day) {
                galleryContainer.innerHTML = "";

                h2.innerHTML = `${day.toUpperCase()} IMAGES`;
                for (let i = 1; i <= 10; i++) {
                  const img = document.createElement("img");
                  img.src = `assets/${day}/${i}.png`;
                  img.alt = `Image ${i}`;
                  img.loading = "lazy";

                  img.addEventListener("click", () => {
                    modal.style.display = "block";
                    modalImg.src = img.src;
                    caption.textContent = img.alt;
                  });

                  galleryContainer.appendChild(img);
                }
              }

              days.forEach((day) => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = "#";
                a.textContent = `${day.charAt(0).toUpperCase()}${day.slice(1)}`;
                a.addEventListener("click", () => updateGallery(day));
                li.appendChild(a);
                dayList.appendChild(li);
              });

              updateGallery("day1");

              closeBtn.addEventListener("click", () => {
                modal.style.display = "none";
              });

              window.addEventListener("click", (event) => {
                if (event.target === modal) {
                  modal.style.display = "none";
                }
              });
            });

            img.addEventListener("click", () => {
              modal.style.display = "block";
              modalImg.src = img.src;
              caption.textContent = img.alt;
            });

            galleryContainer.appendChild(img);
          }
        }

        days.forEach((day) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = "#";
          a.textContent = `${day.charAt(0).toUpperCase()}${day.slice(1)}`;
          a.addEventListener("click", () => updateGallery(day));
          li.appendChild(a);
          dayList.appendChild(li);
        });

        updateGallery("day1");

        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      });

      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        caption.textContent = img.alt;
      });

      galleryContainer.appendChild(img);
    }
  }

  days.forEach((day) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = `${day.charAt(0).toUpperCase()}${day.slice(1)}`;
    a.addEventListener("click", () => updateGallery(day));
    li.appendChild(a);
    dayList.appendChild(li);
  });

  updateGallery("day1");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
