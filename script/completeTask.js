
let taskCount = 6;
let navTaskCount = 23;

function completeTask(button, taskName) {
  /* Show the default alert for task completion */
  alert('Board Updated Successfully');

  /* Disable the button and update its appearance */
  button.disabled = true;
  button.classList.add("bg-gray-400", "cursor-not-allowed");
  button.textContent = "Completed";

  /* Log the activity */
  const log = document.getElementById("activityLog");
  const timestamp = new Date().toLocaleTimeString();
  log.innerHTML += `<li>You have completed the task '${taskName}' at ${timestamp}</li><br>`;

  /* Update task counts and NavTask counts */
  taskCount--;
  document.getElementById("taskCount").textContent = `Task Assigned: ${taskCount}`;
  navTaskCount++;
  document.getElementById("navTaskCount").textContent = `${navTaskCount}`;

  /* Check if the completed task is task-6 (Improve Job Searching) */
  //if (taskName === "Improve Job Searching") {
  //  alert(`Congrates "${taskName}" has been successfully completed!`);
  //}

  /* Check if all tasks are completed */
  if (taskCount === 0) {
    alert("Congrats! All tasks have been successfully completed!");
  }
}

function clearHistory() {
  document.getElementById("activityLog").innerHTML = "";
  document.querySelectorAll(".task-btn").forEach(button => {
    button.disabled = false;
    button.classList.remove("bg-gray-400", "cursor-not-allowed");
    button.classList.add("bg-blue-500");
    button.textContent = "Complete";
  });
  taskCount = 6;
  document.getElementById("taskCount").textContent = `Task Assigned: ${taskCount}`;
  navTaskCount = 23;
  document.getElementById("navTaskCount").textContent = `${navTaskCount}`;
}
