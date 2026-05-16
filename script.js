//your JS code here. If required.
// Simple interactivity: highlight list items when clicked
document.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    item.style.backgroundColor = "#e0f7fa";
  });
});

