if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/WebOs/i)) {
    window.location.replace("error.html")
}

const redirectTo = (page) => {
    window.location.href = `${page}.html`;
}

const clicked = (obj) => {
    if (obj.classList.contains("fa-bookmark")) {
        obj.classList.remove("fa-bookmark")
        obj.classList.add("fa-bookmark-o")
    } else if (obj.classList.contains("fa-bookmark-o")) {
        obj.classList.remove("fa-bookmark-o")
        obj.classList.add("fa-bookmark")
    } else if (obj.classList.contains("fa-heart")) {
        obj.classList.remove("fa-heart")
        obj.classList.add("fa-heart-o")
    } else if (obj.classList.contains("fa-heart-o")) {
        obj.classList.remove("fa-heart-o")
        obj.classList.add("fa-heart")
    }
}

var ctx = document.getElementById("doughnut-chart");

if (ctx) {
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [18, 10, 26, 18, 21, 7],
                backgroundColor: [
                    '#FFBE0C',
                    '#C81954',
                    '#374FA7',
                    '#18C919',
                    '#7A6DCC',
                    '#862777'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: false,
        }
    });
}

const container = document.querySelector(".container.book-page");
if (container) {
    let coverBlock = container.querySelector(".full-cover");
    let rightBlock = container.querySelector(".book-right-block");
    let reactionBlock = rightBlock.querySelector(".reaction-block");
    let reactionIcons = rightBlock.querySelectorAll(".reaction-block i");
    let ratingBlock = rightBlock.querySelector(".rating");

    let topBlock = container.querySelector(".book-top-block");
    const bottomBlock = container.querySelector(".main .book-bottom-block");
    const shortSummary = container.querySelector(".short-summary");
    const topSpace = bottomBlock.querySelector(".top-space");
    container.addEventListener("scroll", e => {
        if (e.target.scrollTop > 20) {

            container.firstElementChild.className = "";

            coverBlock.style.gridArea = "1 / 1 / -1 / 1";
            coverBlock.style.borderRadius = "10px";
            coverBlock.firstElementChild.style.transform = "translateY(0)";

            rightBlock.style.gridArea = "1 / 2 / -1 / 2";
            rightBlock.style.fontSize = "1.3rem";
            rightBlock.style.padding = "0";
            rightBlock.style.textAlign = "left";
            rightBlock.style.alignItems = "flex-start";

            ratingBlock.style.paddingLeft = "0"

            reactionIcons.forEach(icon => {
                icon.style.border = "1px solid #555";
            });

            reactionBlock.style.justifyContent = "space-between";
            reactionBlock.style.width = "70%";

            topBlock.style.height = "27vh";
            topBlock.style.borderBottom = "2px solid #ffffff";
            topBlock.style.position = "fixed";
            topBlock.style.top = "5.5vh";
            topBlock.style.padding = "1.5rem";
            topBlock.style.paddingBottom = "1.6rem";
            topBlock.style.gap = "1rem";

            shortSummary.style.marginTop = "50vh";
            shortSummary.firstElementChild.innerHTML = "Краткое содержание";


            topSpace.style.height = "105px";

        } else {

            container.firstElementChild.className = "transparent";

            coverBlock.style.gridArea = "1 / 1 / 2 / -1";
            coverBlock.style.borderRadius = "0px 0px 30px 30px";
            coverBlock.firstElementChild.style.transform = "translateY(-80px)";

            rightBlock.style.gridArea = "2 / 1 / -1 / -1";
            rightBlock.style.fontSize = "2rem";
            rightBlock.style.padding = "1.5rem";
            rightBlock.style.textAlign = "center";
            rightBlock.style.alignItems = "center";

            reactionIcons.forEach(icon => {
                icon.style.border = "2px solid #333";
            });

            reactionBlock.style.justifyContent = "space-around";
            reactionBlock.style.width = "100%";

            topBlock.style.height = "75vh";
            topBlock.style.position = "relative";
            topBlock.style.top = "0";
            topBlock.style.padding = "0";
            topBlock.style.gap = "0";
            topBlock.style.borderBottom = "0";

            shortSummary.style.marginTop = "0";
            shortSummary.firstElementChild.innerHTML = "";

            topSpace.style.height = "0";

        }
    });
}