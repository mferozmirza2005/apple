const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
  desktopNav.classList.add("hide");
  searchContainer.classList.remove("hide");
  overlay.classList.add("show");
});

closeButton.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});

var a;
function show_hide() {
  if (a == 1) {
    document.getElementById("bag_items").style.display = "none";
    return (a = 0);
  } else a == 0;
  {
    document.getElementById("bag_items").style.display = "block";
    return (a = 1);
  }
}

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});

const searchBar = document.querySelector(
  ".mobile-search-container .search-bar"
);
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(
  ".mobile-search-container .cancel-btn"
);

searchInput.addEventListener("click", () => {
  searchBar.classList.add("active");
  nav.classList.add("move-up");
  desktopNav.classList.add("move-down");
});

cancelBtn.addEventListener("click", () => {
  searchBar.classList.remove("active");
  nav.classList.remove("move-up");
  desktopNav.classList.remove("move-down");
});

const plusbtn = document.querySelector(".shop-learn .plusdiv .plus");
const hideplusbtn = document.querySelector(".shop-learn .plusdiv");
const crosebtn = document.querySelector(".shop-learn .crosediv .ptoc");
const showcrosebtn = document.querySelector(".shop-learn .crosediv");
const shoplearnlinks = document.querySelector(".shoplearnlinks");

plusbtn.addEventListener("click", () => {
  hideplusbtn.classList.add("hide");
  showcrosebtn.classList.add("show");
  shoplearnlinks.classList.add("show");
});

crosebtn.addEventListener("click", () => {
  hideplusbtn.classList.remove("hide");
  showcrosebtn.classList.remove("show");
  shoplearnlinks.classList.remove("show");
});

const srplus = document.querySelector(".services .srplusdiv .srplus");
const hidesrplus = document.querySelector(".services .srplusdiv");
const srcrose = document.querySelector(".services .srcrosediv .srcrose");
const showsrcrose = document.querySelector(".services .srcrosediv");
const serviceslinks = document.querySelector(".serviceslinks");

srplus.addEventListener("click", () => {
  hidesrplus.classList.add("hide");
  showsrcrose.classList.add("show");
  serviceslinks.classList.add("show");
});

srcrose.addEventListener("click", () => {
  hidesrplus.classList.remove("hide");
  showsrcrose.classList.remove("show");
  serviceslinks.classList.remove("show");
});

const acplus = document.querySelector(".account .acplusdiv .acplus");
const hideacplus = document.querySelector(".account .acplusdiv");
const accrose = document.querySelector(".account .accrosediv .accrose");
const showaccrose = document.querySelector(".account .accrosediv");
const accountlinks = document.querySelector(".accountlinks");

acplus.addEventListener("click", () => {
  hideacplus.classList.add("hide");
  showaccrose.classList.add("show");
  accountlinks.classList.add("show");
});

accrose.addEventListener("click", () => {
  hideacplus.classList.remove("hide");
  showaccrose.classList.remove("show");
  accountlinks.classList.remove("show");
});

const asplus = document.querySelector(".applestore .asplusdiv .asplus");
const hideasplus = document.querySelector(".applestore .asplusdiv");
const ascrose = document.querySelector(".applestore .ascrosediv .ascrose");
const showascrose = document.querySelector(".applestore .ascrosediv");
const applestorelinks = document.querySelector(".applestorelinks");

asplus.addEventListener("click", () => {
  hideasplus.classList.add("hide");
  showascrose.classList.add("show");
  applestorelinks.classList.add("show");
});

ascrose.addEventListener("click", () => {
  hideasplus.classList.remove("hide");
  showascrose.classList.remove("show");
  applestorelinks.classList.remove("show");
});

const bsplus = document.querySelector(".business .bsplusdiv .bsplus");
const hidebsplus = document.querySelector(".business .bsplusdiv");
const bscrose = document.querySelector(".business .bscrosediv .bscrose");
const showbscrose = document.querySelector(".business .bscrosediv");
const businesslinks = document.querySelector(".businesslinks");

bsplus.addEventListener("click", () => {
  hidebsplus.classList.add("hide");
  showbscrose.classList.add("show");
  businesslinks.classList.add("show");
});

bscrose.addEventListener("click", () => {
  hidebsplus.classList.remove("hide");
  showbscrose.classList.remove("show");
  businesslinks.classList.remove("show");
});

const edplus = document.querySelector(".education .edplusdiv .edplus");
const hideedplus = document.querySelector(".education .edplusdiv");
const edcrose = document.querySelector(".education .edcrosediv .edcrose");
const showedcrose = document.querySelector(".education .edcrosediv");
const educationlinks = document.querySelector(".educationlinks");

edplus.addEventListener("click", () => {
  hideedplus.classList.add("hide");
  showedcrose.classList.add("show");
  educationlinks.classList.add("show");
});

edcrose.addEventListener("click", () => {
  hideedplus.classList.remove("hide");
  showedcrose.classList.remove("show");
  educationlinks.classList.remove("show");
});

const htplus = document.querySelector(".health .htplusdiv .htplus");
const hidehtplus = document.querySelector(".health .htplusdiv");
const htcrose = document.querySelector(".health .htcrosediv .htcrose");
const showhtcrose = document.querySelector(".health .htcrosediv");
const healthlinks = document.querySelector(".healthlinks");

htplus.addEventListener("click", () => {
  hidehtplus.classList.add("hide");
  showhtcrose.classList.add("show");
  healthlinks.classList.add("show");
});

htcrose.addEventListener("click", () => {
  hidehtplus.classList.remove("hide");
  showhtcrose.classList.remove("show");
  healthlinks.classList.remove("show");
});

const gtplus = document.querySelector(".government .gtplusdiv .gtplus");
const hidegtplus = document.querySelector(".government .gtplusdiv");
const gtcrose = document.querySelector(".government .gtcrosediv .gtcrose");
const showgtcrose = document.querySelector(".government .gtcrosediv");
const governmentlinks = document.querySelector(".governmentlinks");

gtplus.addEventListener("click", () => {
  hidegtplus.classList.add("hide");
  showgtcrose.classList.add("show");
  governmentlinks.classList.add("show");
});

gtcrose.addEventListener("click", () => {
  hidegtplus.classList.remove("hide");
  showgtcrose.classList.remove("show");
  governmentlinks.classList.remove("show");
});

const avplus = document.querySelector(".applevalue .avplusdiv .avplus");
const hideavplus = document.querySelector(".applevalue .avplusdiv");
const avcrose = document.querySelector(".applevalue .avcrosediv .avcrose");
const showavcrose = document.querySelector(".applevalue .avcrosediv");
const applevaluelinks = document.querySelector(".applevaluelinks");

avplus.addEventListener("click", () => {
  hideavplus.classList.add("hide");
  showavcrose.classList.add("show");
  applevaluelinks.classList.add("show");
});

avcrose.addEventListener("click", () => {
  hideavplus.classList.remove("hide");
  showavcrose.classList.remove("show");
  applevaluelinks.classList.remove("show");
});

const abplus = document.querySelector(".aboutapple .abplusdiv .abplus");
const hideabplus = document.querySelector(".aboutapple .abplusdiv");
const abcrose = document.querySelector(".aboutapple .abcrosediv .abcrose");
const showabcrose = document.querySelector(".aboutapple .abcrosediv");
const aboutapplelinks = document.querySelector(".aboutapplelinks");

abplus.addEventListener("click", () => {
  hideabplus.classList.add("hide");
  showabcrose.classList.add("show");
  aboutapplelinks.classList.add("show");
});

abcrose.addEventListener("click", () => {
  hideabplus.classList.remove("hide");
  showabcrose.classList.remove("show");
  aboutapplelinks.classList.remove("show");
});

