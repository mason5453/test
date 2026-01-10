// Wait until the DOM is fully loaded before initializing the map
function initMap() {
  const location = { lat: 22.3193, lng: 114.1694 }; // Coordinates for Hong Kong

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });

  // Optional: Add a marker
  new google.maps.Marker({
    position: location,
    map: map,
    title: "Hong Kong",
  });
}

// Ensure the map initializes only after the page (and injected HTML) is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMap);
} else {
  initMap();
}