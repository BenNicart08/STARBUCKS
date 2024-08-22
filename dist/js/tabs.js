const tabs = document.querySelectorAll(".favorites__tabs a");
const contents = document.querySelectorAll(".favorites__details");
const slideline = document.querySelector(".favorites__tabs");

recentLine = 'tabs-1-slideline'

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab();
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");

    slideline.classList.remove(recentLine);
    slideline.classList.add(`${tab.id}-slideline`);
    recentLine = `${tab.id}-slideline`;
  });
});

function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}
function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
