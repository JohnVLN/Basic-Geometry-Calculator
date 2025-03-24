const pi = 3.14

function circleArea() {
    let r = document.getElementById("radius").value
    let res = pi * (r * r)
    document.getElementById("circleRes").textContent = "Res: " + res
}
function triangArea() {
    let sideA = Number(document.getElementById("sideA").value)
    let sideB = Number(document.getElementById("sideB").value)
    let sideC = Number(document.getElementById("sideC").value)
    let heron = (sideA + sideB + sideC) / 2

    let res = Math.sqrt(heron * (heron - sideA) * (heron - sideB) * (heron - sideC))

    document.getElementById("triangRes").textContent = "Res: " + res
}
function squareArea() {
    let sideAS = Number(document.getElementById("sideASquare").value)
    let sideBS = Number(document.getElementById("sideBSquare").value)
    let res = sideAS * sideBS
    document.getElementById("squareRes").textContent = "Res: " + res
}