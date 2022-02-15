function countClicks() {
    console.log("Counting clicks");

    let obj = document.getElementById("counter");
    let count = obj.innerHTML;
    console.log(count);

    obj.innerHTML = parseInt(count) + 1;
}

function showBorder() {
    console.log("Showing border");

    let border = document.getElementById("circle2").getAttribute("stroke-width");
    console.log(border);

    document.getElementById("circle2").setAttribute("stroke-width", "5");
}

function removeBorder() {
    console.log("Removing border");

    let border = document.getElementById("circle2").getAttribute("stroke-width");
    console.log(border);

    document.getElementById("circle2").setAttribute("stroke-width", "0");
}

function toggleVisibility() {
    console.log("Toggling visiblity");

    let opacity = document.getElementById("circle3").getAttribute("opacity");
    console.log(opacity);

    if (opacity === "100") {
        document.getElementById("circle3").setAttribute("opacity", "0");
    } else {
        document.getElementById("circle3").setAttribute("opacity", "100");
    }
}