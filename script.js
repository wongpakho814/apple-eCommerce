// Common JS
document.querySelectorAll(".watch-control, .controls a, .iphone-btn").forEach((control) => {
  control.addEventListener("click", (event) => {
    event.preventDefault();
  });
});;
// End of common JS

// Cube
const cube = document.querySelector(".cube");
let x = 0;
let y = 20;
let z = 0;
let isSpin = true;
let interval;

document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});

const playPause = () => {
  if (isSpin) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};

playPause();

document.querySelector(".controls").addEventListener("mouseover", () => {
  isSpin = false;
  playPause();  
});

document.querySelector(".controls").addEventListener("mouseout", () => {
  isSpin = true;
  playPause();
});
// End of cube

// Slideshow
const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");

    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add("change");

    document.querySelector(".slideshow").appendChild(div);
  }
};
slideshowDivs();

const divs = document.querySelectorAll(".slideshow div");
let slideshowCounter = 1;
const slideshow = () => {
  setInterval(() => {
    slideshowCounter++;
    const div = document.querySelector(".slideshow .change");

    div.classList.remove("change");

    if (slideshowCounter < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      slideshowCounter = 1;
    }
  }, 20000);
};

slideshow();
// End of slideshow

// Section 3
const section3Content = document.querySelector(".section-3-content");

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
    section3Content.classList.add("change");
  }  
});
// End of section 3

// Section 4
const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");
const watchTopControl = document.querySelector(".watch-top-control");
const watchRightControl = document.querySelector(".watch-right-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchLeftControl = document.querySelector(".watch-left-control");
let axisX = 0;
let axisY = 0;

const hideControl = () => {
  if (axisY === -280) {
    watchTopControl.classList.add("hide-control");
  } else {
    watchTopControl.classList.remove("hide-control");
  }

  if (axisY === 280) {
    watchBottomControl.classList.add("hide-control");
  } else {
    watchBottomControl.classList.remove("hide-control");
  }

  if (axisX === 280) {
    watchRightControl.classList.add("hide-control");
  } else {
    watchRightControl.classList.remove("hide-control");
  }

  if (axisX === -280) {
    watchLeftControl.classList.add("hide-control");
  } else {
    watchLeftControl.classList.remove("hide-control");
  }
}

watchTopControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${axisY -= 70}rem`;  
  hideControl();
});

watchBottomControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hideControl();
});

watchRightControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX += 70)}rem`;
  hideControl();
});

watchLeftControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX -= 70)}rem`;
  hideControl();
});
// End of section 4