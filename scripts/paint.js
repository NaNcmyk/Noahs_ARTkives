import { data, getData, getFileName } from './animal_puns.js';

const magicButton = document.querySelector('.landing-page-btn');
const blendmodeBtn = document.querySelector('.fa-mortar-pestle');
const pawBtn = document.querySelector('.fa-paw');
const eraseBtn = document.querySelector('.fa-eraser');
const saveBtn = document.querySelector('.fa-download');

const colors = [
    'color',
    'color-burn',
    'color-dodge',
    'darken',
    'difference',
    'exclusion',
    'hard-light',
    'hue',
    'lighten',
    'luminosity',
    'multiply',
    'overlay',
    'saturation',
    'screen',
    'soft-light',
    'source-over'
];

// set up canvas
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#d00d1e';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;
ctx.globalCompositeOperation = 'source-over';

let lastX = 0;
let lastY = 0;
let hue = 0;
let resetLineWidth = true;

// set flags to check user's interaction with canvas
let isBlending = false;
let isStamping = false;
let isDrawing = false;

// track user's current blend mode selection
let selectedBlendMode = '';

// blur landing page background + hide all containing elements
function blurBackground() {
    const background = document.querySelector('.landing-page');
    const quote = document.querySelectorAll('h2 + p');
    const toolbox = document.querySelector('.toolbox');

    quote.forEach(line => {
        line.hidden = true;
    });
    background.classList.add('disappear');
    background.style.zIndex = -1;
    magicButton.hidden = true;
    document.body.style.cursor = 'crosshair';
    toolbox.classList.add('active');
}

// change cursor based on user interaction with canvas
function changeCursor() {
    const header = document.querySelector('.main-wrapper header');

    if (isStamping || isDrawing) {
        // if blend mode modal is open while stamp is turned on
        if (isBlending) {
            return document.body.style.cursor = "crosshair";
        }
        // hide header (to prevent it from getting in the way while stamping/painting)
        header.style.display = 'none';
        // if pointerdown/pointermove detected on canvas
        return document.body.style.cursor = "url(/assets/make/paint-brush.png), crosshair";
        // defaults to crosshair on hover over canvas (unless stamp is turned on or pointerdown/pointermove detected on canvas)
    } else {
        // show header
        header.style.display = 'flex';
        return document.body.style.cursor = "crosshair";
    }
}

// draw functionality inspired by day 8 of Wes Bos's #JavaScript30: "Let's build something fun with HTML5 canvas" (https://youtu.be/8ZGAzJ0drl0) 
function draw(e) {
    // stop from running when not mousedown/touchstart
    if (!isDrawing) return;
    // update cursor based on isDrawing = true
    changeCursor();
    // set line color
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // initialize drawing
    ctx.beginPath();
    // start position
    ctx.moveTo(lastX, lastY);
    // translateX and translateY position
    ctx.lineTo(e.offsetX, e.offsetY);
    // generate line
    ctx.stroke();
    // update x and y coords
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // adjust hue, loop back to beginning of color wheel when value reaches full circle (360)
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    // restrict line width to be between 1-70
    if (ctx.lineWidth >= 70 || ctx.lineWidth <= 1) {
        resetLineWidth = !resetLineWidth;
    }
    // increment if under 70
    if (resetLineWidth) {
        ctx.lineWidth++;
        // decrement when line width reaches 70
    } else {
        ctx.lineWidth--;
    }

}

// stamp paw prints on canvas
function stampPaw() {
    // update color of button to indicate active state
    pawBtn.classList.toggle('active');

    // update flag/cursor
    isStamping = true;
    changeCursor();

    canvas.addEventListener('click', (e) => {
        // save x + y click coordinates
        const x = e.clientX;
        const y = e.clientY;

        if (pawBtn.classList.contains('active')) {
            // update tooltip text
            pawBtn.setAttribute('data-bs-original-title', 'pause paws');

            // draw paw
            let img = new Image();
            img.onload = () => ctx.drawImage(img, e.clientX, e.clientY);
            img.src = '/assets/make/paw.png';

            // change stamp color
            changeStampColor();
            let animatedPawColor = changeStampColor();

            // trigger paw animation
            pawsify(x, y, animatedPawColor);

            // if paw button is not active...
        } else {
            // update tooltip text
            pawBtn.setAttribute('data-bs-original-title', 'make your mark');
            // update flag/cursor
            isStamping = false;
            changeCursor();
        }
    });
}

// change stamp color
function changeStampColor() {
    // store random rgb values
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    let newColor = {
        r: randomR,
        g: randomG,
        b: randomB
    };
    let animationColor = `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;

    // get color data of image
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;

    // loop through image data, replace current pixels with new pixel values
    for (let i = 0; i < data.length; i += 4) {
        let r = data[i], g = data[i + 1], b = data[i + 2];

        // pixel values for original image is black: rgb(0, 0, 0)
        if (r == 0 && g == 0 && b == 0) {
            data[i] = newColor['r'];
            data[i + 1] = newColor['g'];
            data[i + 2] = newColor['b'];
        }
    }
    // set blend mode for canvas + reset selection in blend mode modal
    // source-over draws new shapes on top of existing canvas content
    ctx.globalCompositeOperation = 'source-over';
    selectedBlendMode = '';

    // transfer new color data to stamp
    ctx.putImageData(imageData, 0, 0);

    return animationColor;
}

// trigger paw pulse animation
function pawsify(x, y, color) {
    const pawPrint = document.createElement('i');
    pawPrint.classList.add('fas');
    pawPrint.classList.add('fa-paw');
    pawPrint.id = 'pawsify';

    // set position of animation
    pawPrint.style.left = `${x}px`;
    pawPrint.style.top = `${y}px`;

    // set color of animation
    pawPrint.style.color = color;

    // append paw print elements to DOM
    document.body.appendChild(pawPrint);
}

// display blend mode modal
function toggleBlendModeModal() {
    // create divs
    const outerBlendModeDiv = document.createElement('div');
    const innerBlendModeDiv = document.createElement('div');

    // add divs to DOM
    outerBlendModeDiv.appendChild(innerBlendModeDiv);
    document.body.appendChild(outerBlendModeDiv);

    // set id + classes
    innerBlendModeDiv.id = 'blendmode-modal';
    blendmodeBtn.classList.add('active');
    outerBlendModeDiv.classList.add('blendmode-modal-backdrop', 'active');

    // create blend mode list inside inner blend mode modal
    // .map function saves the HTML for each list item group as a separate string in a new array, .join merges all list item groups into one unified string to display as proper HTML 
    innerBlendModeDiv.innerHTML = colors.map(color => {
        return `
        <li class="blendmode-list-item">
            <input type="radio" id=${color} name="blendmode" value=${color} ${selectedBlendMode === color ? "checked" : ""}>
            <label for=${color}>${color}</label>
        </li>
        `;
    }).join('');

    changeBlendMode();

    // return to canvas if user clicks outside of blend mode modal
    const modalBackdrop = document.querySelector('.blendmode-modal-backdrop');
    modalBackdrop.addEventListener('click', evt => {
        if (evt.target !== evt.currentTarget) return;
        isBlending = false;
        changeCursor();
        blendmodeBtn.classList.remove("active");
        outerBlendModeDiv.remove('active');
    });
}

// change brush color based on user selection
function changeBlendMode() {
    const inputs = document.querySelectorAll('[type="radio"]');

    if (selectedBlendMode === '') {
        inputs[colors.length - 1].checked = true;
    }

    // update flag/cursor
    isBlending = true;
    changeCursor();

    // set blend mode value to user input + record selection
    inputs.forEach(input => {
        input.addEventListener('change', e => {
            ctx.globalCompositeOperation = e.target.value;
            selectedBlendMode = input.value;
        });
    });
    return ctx.globalCompositeOperation;
}

// clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// export canvas
function exportImg() {
    const link = document.createElement('a');

    // async function imported from animal_puns.js
    // fetches data from artists.json
    getData().then(() => {
        // calls getFileName when data from artists.json is ready, to get random file name
        // names download file with name returned by getFileName
        link.download = getFileName(data);
        // temp href to store canvas URL (base64 img string)
        link.href = canvas.toDataURL();
        link.click();
        link.delete;
    });
}

// event listeners---------------------------------------

// landing page
magicButton.addEventListener('click', blurBackground);

// toolbox buttons
pawBtn.addEventListener('click', stampPaw);
blendmodeBtn.addEventListener('click', toggleBlendModeModal);
eraseBtn.addEventListener('click', clearCanvas);
saveBtn.addEventListener('click', exportImg);

// canvas
// break from previous end point after mouse/touchend to draw on different part of canvas
canvas.addEventListener('pointerdown', e => {
    isDrawing = true;
    changeCursor();
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('pointermove', draw);

canvas.addEventListener('pointerleave', () => {
    isDrawing = false;
    changeCursor();
});

// window
// display warning message to users when they navigate away from canvas (only if it has been drawn on)
canvas.addEventListener('pointerup', () => {
    isDrawing = false;
    changeCursor();
    window.addEventListener('beforeunload', e => {
        e.preventDefault();
        // custom message if browser does not display default prompt
        e.returnValue = 'Hey there, you are about to navigate away from this page. Are you PAWsitively sure you wanna leave? You will lose any unsaved work.';
    });
});