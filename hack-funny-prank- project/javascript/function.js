document.getElementById("submit").addEventListener("click", function() {
    const commandInput = document.getElementById("command");
    const outputDiv = document.querySelector(".output");
  
    const command = commandInput.value;
    const newLine = document.createElement("p");
    newLine.classList.add("line");
    newLine.textContent = "> " + command;
  
    outputDiv.appendChild(newLine);
    commandInput.value = "";
  });
  