// Temporary fix: Change calls to getElementById to getElementsByClassName

document.onkeydown = function(e) {
    if (e.key == "Escape") {
        var x = document.getElementsByClassName("v-menu-items")[0];
        x.style.display = "none"
    }
}
function toggleMenu() {
    // Putting temporary fix
    // Get the menu items
    var x = document.getElementsByClassName("v-menu-items")[0];
    // Later addition for accessibility
    var y = document.getElementsByClassName("hambrg-bttn")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
        y.ariaPressed = "false";
    } else {
        x.style.display = "block";
        y.ariaPressed = "true";
    }
}
function resetElements() {
    if (window.innerWidth > 849) {
        // Get hamburger menu itmes
        var menuItems = document.getElementsByClassName("v-menu-items")[0];
        menuItems.style.display = "none";
        // Get 'back to top' button
        // var toTopBttn = document.getElementById("back-to-top");
        // toTopBttn.style.display = "none";
    }
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//     /* if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//        document.getElementById("h-menu-items").style.margin = "auto";
//        } else {
//        document.getElementById("h-menu-items").style.margin = "0 auto 0 7.5em";
//        } */
//     // Get the 'back to top' button
//     var toTopBttn = document.getElementById("back-to-top");
//     if ((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
//         && (window.innerWidth <= 849)){
//         toTopBttn.style.display = "inline-block";
//     } else {
//         toTopBttn.style.display = "none";
//     }
// }

function scrollFunction() {
    // Get the 'back to top' button (altered to include wide screens)
    var toTopBttn = document.getElementsByClassName("back-to-top")[0];
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopBttn.style.display = "inline-block";
    } else {
        toTopBttn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// function onLoadFunc() {
//     // This function is necessary for accessibility because Pelican doesn't
//     // use the sematic tag for 'figure'
//     const figures = document.querySelectorAll(".figure");
//     figures.forEach(figure => {
//         // figure.role = "figure";
//         figure.setAttribute('role', 'figure');
//     });
//     // console.log(figures[0].getAttribute('role'));
// }
// document.addEventListener("DOMContentLoaded", function() {
//     // Add role="figure" to divs with class "figure"
//     const figures = document.querySelectorAll('div.figure');
//     figures.forEach(figure => {
//         figure.setAttribute('role', 'figure');
//     });
// }
function changeTheme() {
    // content = document.GetElementById("content");
    themeChange_div = document.GetElementById("theme-change");
    themeChange.display = "block";
}
function viewMorePosts(pagination) {
    const params = new URLSearchParams(window.location.search);
    const posts = document.getElementsByClassName("post-wrap");
    const pageNumString = params.get("page");
    const numPages = Math.ceil(posts.length / pagination);
    console.log(numPages);
    if (pageNumString == null) {
        pageNum = 1;
        var start = 0;
        var end = pagination;
    } else {
        pageNum = parseInt(pageNumString);
        var start = (pageNum - 1) * pagination;
        var end = pageNum * pagination;
    }
    for (const post of posts) {
        post.classList.add("no-display");
    }
    if (pageNum < 1 || pageNum > numPages) {
        return;
    }
    for (let i = start; i < end; i++) {
        if (i < posts.length) {
            posts[i].classList.remove("no-display");
        }
    }
    if (pageNum > 1) {
        var newerLink = document.getElementById("newer-link");
        newerLink.classList.remove("no-display");
        var newPageNum = pageNum - 1;
        newerLink.href += "?page=" + newPageNum;
    }
    if (pageNum < numPages) {
        var olderLink = document.getElementById("older-link");
        olderLink.classList.remove("no-display");
        var newPageNum = pageNum + 1;
        olderLink.href += "?page=" + newPageNum;
    }
}
