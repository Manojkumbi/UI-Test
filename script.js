document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("gallery-container");
  const dayList = document.getElementById("day-list");
  
  // Array of days
  const days = ['day1'];

  // Function to update the gallery based on the selected day
  function updateGallery(day) {
    galleryContainer.innerHTML = ''; // Clear current images

    // Loop to add images based on the selected day
    for (let i = 1; i <= 10; i++) {
      const img = document.createElement("img");
      img.src = `${day}/${i}.png`;
      img.alt = `Image ${i}`;
      galleryContainer.appendChild(img);
    }
  }

  // Create list items for each day dynamically
  days.forEach(day => {
    const li = document.createElement("li");
    const hr=document.createElement("hr");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = `${day.charAt(0).toUpperCase()}${day.slice(1)}`; // Capitalize first letter
    a.addEventListener("click", () => updateGallery(day)); // Update gallery on click
    li.appendChild(a);
    dayList.appendChild(li);
    dayList.appendChild(hr);
  });

  
  
  // Set initial gallery to day1
  updateGallery('day1');
});
