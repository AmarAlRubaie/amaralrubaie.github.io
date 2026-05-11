
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

function displayPlaceholder(){
    document.querySelector("input.placeholder").classList.toggle("hidden");
}

function classSearch(x) {

    const divs = document.querySelectorAll(".product");


    divs.forEach(div => {

        div.classList.remove("hidden");

        const result3 = div.classList.contains(x);
        
        if (result3 == false) {
            div.classList.add("hidden");
        }

    })

}

function contentSearch(x) {

    const divs = document.querySelectorAll(".product");


    divs.forEach(div => {

        div.classList.remove("hidden");

        const h4 = div.children[1].innerText;
        const p = div.children[2].innerText;


        const result = h4.toLowerCase().search(x);
        const result2 = p.toLowerCase().search(x);
        const result3 = div.classList[1].toLocaleLowerCase().search(x);

        if (result < 0 && result2 < 0 && result3 < 0) {
            div.classList.add("hidden");
        }

    })


}