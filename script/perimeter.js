const pi = 3.14

function circlePe() {
    let r = document.getElementById("radius").value
    let res = pi * (r * 2)
    document.getElementById("circleRes").textContent = "Res: " + res
}
function triangPe() {
    let sideA = Number(document.getElementById("sideA").value)
    let sideB = Number(document.getElementById("sideB").value)
    let sideC = Number(document.getElementById("sideC").value)
    let res = sideA + sideB + sideC
    document.getElementById("triangRes").textContent = "Res: " + res
}
function squarePe() {
    let sideAS = Number(document.getElementById("sideASquare").value)
    let sideBS = Number(document.getElementById("sideBSquare").value)
    let res = (sideAS * 2) + (sideBS * 2)
    document.getElementById("squareRes").textContent = "Res: " + res
}