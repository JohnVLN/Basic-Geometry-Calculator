const pi = 3.14

function circleVol() {
    let r = document.getElementById("radius").value
    let res = (4/3) * pi * (r * r * r)
    document.getElementById("circleRes").textContent = "Res: " + res
}
function coneVol() {
    let hCone = document.getElementById("hightCone").value
    let rCone = document.getElementById("radiusCone").value
    let volCone = pi * (rCone * rCone) * hCone
    volCone /= 3

    document.getElementById("coneVol").textContent = "Res: " + volCone
}

function triangPyramid() {
    let heighTriPyra = Number(document.getElementById("hightTriPyra").value)
    let sideATri = Number(document.getElementById("sideA").value)
    let sideBTri = Number(document.getElementById("sideB").value)
    let sideCTri = Number(document.getElementById("sideC").value)

    let heron = (sideATri + sideBTri + sideCTri) / 2
    let areaTri = Math.sqrt(heron * (heron - sideATri) * (heron - sideBTri) * (heron - sideCTri))
    let volTri = (1/3) * areaTri * heighTriPyra

    document.getElementById("volTriangPyra").textContent = "Res: " + volTri
}

function squarePyramid() {
    let heightSquare = Number(document.getElementById("hightSquaPyra").value)
    let sideASquare = Number(document.getElementById("sideASquare").value)
    let sideBSquare = Number(document.getElementById("sideBSquare").value)
    let areaSquare = sideASquare * sideBSquare

    let volSquarePyramid = (1/3) * areaSquare * heightSquare
    document.getElementById("volSquarePyra").textContent = "Res: " + volSquarePyramid
}

function volCube() {
    let heightCube = Number(document.getElementById("heightCube").value)
    let lenghtCube = Number(document.getElementById("lenghtCube").value)
    let depthCube = Number(document.getElementById("depthCube").value)
    let volCube = heightCube * lenghtCube * depthCube

    document.getElementById("volCube").textContent = "Res: " + volCube
}