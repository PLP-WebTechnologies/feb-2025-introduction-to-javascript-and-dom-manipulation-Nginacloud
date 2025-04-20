function changeContent() {
    const description = document.getElementById('description');
    description.textContent = "✅ Success! You've changed this paragraph using JavaScript.";
    description.style.color = "#4CAF50";
    description.style.fontWeight = "bold";
    description.style.fontSize = "1.2em";
  }
  
  function toggleElement() {
    const container = document.getElementById('box-container');
    const existingBox = document.querySelector('.box');
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const newBox = document.createElement('div');
      newBox.classList.add('box');
      container.appendChild(newBox);
    }
  }
  