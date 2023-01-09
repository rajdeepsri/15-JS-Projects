const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  //   if (sidebar.classList.contains("show-sidebar"))
  //     sidebar.classList.remove("show-sidebar");
  //   else sidebar.classList.add("show-sidebar");
  // OR

  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
