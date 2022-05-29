window.addEventListener('load', generateFaces);
let numberofFaces = 5;
const theLeftSide  = document.getElementById('leftSide')
const theRightSide = document.getElementById('rightSide')



function generateFaces() {
    for (i = 0; i < numberofFaces; i++) {
        let img = document.createElement('img')
        img.src="assets/smile.png"
        let randomTop = Math.floor(Math.random() * 400)
        let randomLeft = Math.floor(Math.random() * 400)
        img.style.top = randomTop + "px";
        img.style.left = randomLeft + "px";
        img.style.height = "100px"
        theLeftSide.appendChild(img)
    }
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild)
    theRightSide.append(leftSideImages)
    theLeftSide.lastElementChild.addEventListener('click', startNextLevel)
    document.body.addEventListener('click', gameOver)
}

function startNextLevel(event) {
    event.stopPropagation();
    console.log('Hello')
    numberofFaces += 5;
    generateFaces();
}

function gameOver() {
    alert('Game over!');
    document.body.removeEventListener('click', gameOver)
    theLeftSide.lastChild.removeEventListener('click', startNextLevel)
    removeAllChildNodes(theLeftSide)
    removeAllChildNodes(theRightSide)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

