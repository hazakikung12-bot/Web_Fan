const circles = document.querySelectorAll(".circle");
const infoBox = document.getElementById("anime-info");
const title = document.getElementById("anime-title");
const season = document.getElementById("anime-season");

circles.forEach(circle => {
    circle.addEventListener("mouseenter", () => {
        const animeTitle = circle.getAttribute("data-title");
        const animeSeason = circle.getAttribute("data-season");

        title.textContent = animeTitle;
        season.textContent = "จำนวนซีซั่น: " + animeSeason;

        infoBox.style.display = "block";
    });

    circle.addEventListener("mouseleave", () => {
        infoBox.style.display = "none";
    });
});