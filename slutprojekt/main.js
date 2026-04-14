
function toggleMenu() {
    document.querySelector("nav").classList.toggle("showMenu");
    document.querySelector("main").classList.toggle("darkerMain");
    document.querySelector("div.announcement-bar").classList.toggle("darkerMain");
    document.querySelector("div.top").classList.toggle("darkerMain");
}
function hideMenu() {
    document.querySelector("nav").classList.remove("showMenu");
    document.querySelector("main").classList.remove("darkerMain");
    document.querySelector("div.announcement-bar").classList.remove("darkerMain");
    document.querySelector("div.top").classList.remove("darkerMain");
}

