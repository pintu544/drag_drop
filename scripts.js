const move = function (element) {
  const elements = document.querySelectorAll(".element");
  let draggedElement = null;

  elements.forEach((element) => {
    element.addEventListener("mousedown", () => {
      draggedElement = element;
      draggedElement.style.position = "absolute";
    });
  });

  document.addEventListener("mousemove", (event) => {
    if (draggedElement !== null) {
      draggedElement.style.left = event.pageX - 50 + "px";
      draggedElement.style.top = event.pageY - 50 + "px";

      // Detect collision with other elements
      elements.forEach((element) => {
        if (
          element !== draggedElement &&
          isColliding(draggedElement, element)
        ) {
          alert("detected drag and drop of an element over another");
          // Add your code to handle the collision here
        }
      });
    }
  });

  document.addEventListener("mouseup", () => {
    draggedElement = null;
  });
};

// Helper function to check if two elements are colliding
function isColliding(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}
