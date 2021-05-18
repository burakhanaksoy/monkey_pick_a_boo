const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");
// Event listener
closedFace.addEventListener("click", () => {
  if (closedFace.classList.contains("closed")) {
    openFace.classList.add("active");
    closedFace.classList.remove("active");
  }
});
openFace.addEventListener("click", () => {
  if (openFace.classList.contains("open")) {
    closedFace.classList.add("active");
    openFace.classList.remove("active");
  }
});
