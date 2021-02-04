const footerButtons = document.querySelectorAll(".footer-buttons li i");

footerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const dataIcon = e.target.dataset.icon;

    const allTabs = document.querySelectorAll(".tab");

    if (dataIcon == "HOME") {
      changeActiveTab(allTabs[0]);
    } else if (dataIcon == "ABOUT") {
      changeActiveTab(allTabs[1]);
    } else if (dataIcon == "CONTACTS") {
      changeActiveTab(allTabs[2]);
    }
  });
});

const changeActiveTab = (tabParams) => {
  const allTabs = document.querySelectorAll(".tab");
  allTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  if (!tabParams.classList.contains("active")) {
    tabParams.classList.add("active");
  }
};
