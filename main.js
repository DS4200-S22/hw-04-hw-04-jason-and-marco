function countClicks() {

}

function showBorder() {

}

function toggleVisibility() {
    console.log("Toggling visiblity")

    let opacity = document.getElementById("circle3").getAttribute("opacity")
    console.log(opacity)

    if (opacity === "100") {
        document.getElementById("circle3").setAttribute("opacity", "0")
    }
    else {
        document.getElementById("circle3").setAttribute("opacity", "100")
    }
}