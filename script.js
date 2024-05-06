
// Calculate the center coordinates of the circle
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "speed": 1
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 50,
        "duration": .4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

const satellite = document.getElementById('satellite');
const orbitDuration = 10; // Duration of one orbit in seconds

function animateSatellite() {
  satellite.style.animation = `orbit ${orbitDuration}s linear infinite`;
}

animateSatellite();




/* JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    // Check if the anchor is for the Home section
    if (this.getAttribute('href') === '#home') {
      // Scroll back to the top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
});*/
// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    let offsetTop = 0;

    // Adjust offsetTop based on the target anchor
    switch (this.getAttribute('href')) {
      case '#home':
        offsetTop = 0; // Scroll to the top of the page
        break;
      case '#about':
        offsetTop = document.querySelector('#section2').offsetTop - 100; // Scroll to the about section with an offset of 100 pixels
        break;
      case '#contact':
        offsetTop = document.querySelector('#contact').offsetTop; // Scroll to the contact section
        break;
      // Add more cases for other sections if needed
    }

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});


function changeSpeed(speed) {

  var logSpeed = Math.pow(10, (10 - speed) / 5);
  document.getElementById('speedValue').innerText = logSpeed.toFixed(2); // Display the speed value

  //document.getElementById('speedValue').innerText = speed;
  document.getElementById('L4').style.animationDuration = speed + 's';
  document.getElementById('L5').style.animationDuration = speed + 's';
  document.getElementById('L2').style.animationDuration = speed + 's';
  document.getElementById('L1').style.animationDuration = speed + 's';
  document.getElementById('L3').style.animationDuration = speed + 's';
  document.getElementById('actualBHO').style.animationDuration = speed + 's';
}


//scripttttt

/*document.addEventListener("DOMContentLoaded", function() {
  // Get the radio buttons and animation elements
  const radioButtons = document.getElementsByName("orbit");
  const orbitPath = document.getElementById("orbit-path");
  const blackCircle = document.getElementById("black-circle");
  const blackCircleb = document.getElementById("black-circleb");

  // Function to toggle the display of the black hole animation
  function toggleBlackHoleAnimation() {
      if (radioButtons[0].checked) {
          orbitPath.style.display = "block";
          blackCircle.style.display = "block";
          blackCircleb.style.display = "block";
      } else {
          orbitPath.style.display = "none";
          blackCircle.style.display = "none";
          blackCircleb.style.display = "none";
      }
  }

  // Call the function initially to set the initial state based on the default checked radio button
  toggleBlackHoleAnimation();

  // Add event listeners to the radio buttons to toggle the display when clicked
  radioButtons.forEach(radioButton => {
      radioButton.addEventListener("change", toggleBlackHoleAnimation);
  });
});*/

/*let animationActive = false;
    const blackCircleB = document.getElementById('black-circleb');

    function toggleAnimation() {
      if (animationActive) {
        blackCircleB.style.display = 'none';
        animationActive = false;
      } else {
        blackCircleB.style.display = 'block';
        animationActive = true;
      }
    }*/
      
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const slideshowContainer = document.getElementById("slideshow-container");
    const slideshow = document.getElementById("slideshow");

    // Coordinates list (replace this with your list of coordinates)
    const coordinates = [
      {x: 4.34119e+07, y: 6.26051e+05, z: 10000},
      {x: 7.37455e+06, y: -5.11794e+06, z: 10000},
      {x: 2.42939e+07, y: 1.49312e+07, z: 10000},
      {x: -2.36465e+06, y: -1.59625e+07, z: 10000},
      {x: 2.49187e+07, y: 3.32427e+07, z: 10000},
      {x: -2.60718e+07, y: -1.88064e+07, z: 10000},
      {x: 5.02609e+07, y: 4.04509e+07, z: 10000},
      {x: -2.91194e+07, y: 2.8642e+07, z: 10000},
      {x: 4.9399e+07, y: -4.81323e+07, z: 10000},
      {x: -4.47573e+07, y: -2.81012e+07, z: 10000},
      {x: 6.30846e+07, y: 5.73584e+07, z: 10000},
      {x: -3.55709e+07, y: 5.02885e+07, z: 10000},
      {x: 3.15364e+07, y: -7.88746e+07, z: 10000},
      {x: -8.13368e+07, y: 6.45738e+06, z: 10000},
      {x: 1.15912e+08, y: -7.60173e+06, z: 10000},
      {x: 7.92193e+07, y: -2.03497e+07, z: 10000},
      {x: 2.88993e+07, y: -4.08536e+07, z: 10000},
      {x: -4.2304e+07, y: 1.16603e+07, z: 10000},
      {x: 7.54984e+07, y: -1.79278e+07, z: 10000},
      {x: 2.70842e+07, y: -3.67049e+07, z: 10000},
      {x: -3.70995e+07, y: 1.51158e+07, z: 10000},
      {x: 6.86618e+07, y: -2.46329e+07, z: 10000},
      {x: 9.33756e+06, y: -4.24604e+07, z: 10000},
      {x: -2.67127e+07, y: 4.4305e+07, z: 10000},
      {x: 2.74664e+07, y: -6.90316e+07, z: 10000},
      {x: -7.05091e+07, y: 1.45362e+07, z: 10000},
      {x: 1.03257e+08, y: -2.37404e+07, z: 10000},
      {x: 5.44768e+07, y: -4.91504e+07, z: 10000},
      {x: -4.13327e+07, y: -3.68199e+07, z: 10000},
      {x: 4.94739e+07, y: 6.99682e+07, z: 10000},
      {x: -6.27056e+07, y: 2.8729e+07, z: 10000},
      {x: 8.73678e+07, y: -5.05073e+07, z: 10000},
      {x: -6.90034e+05, y: -7.47282e+07, z: 10000},
      {x: -5.5477e+07, y: 6.44585e+07, z: 10000},
      {x: 3.94258e+07, y: -1.02072e+08, z: 10000},
      {x: -1.04332e+08, y: -9.31162e+06, z: 10000},
      {x: 1.37578e+08, y: 2.368e+07, z: 10000},
      {x: 9.64677e+07, y: 4.13534e+07, z: 10000},
      {x: 3.16007e+07, y: 6.56645e+07, z: 10000},
      {x: -6.2842e+07, y: -6.33485e+06, z: 10000},
      {x: 9.63897e+07, y: 1.77614e+07, z: 10000},
      {x: 5.62014e+07, y: 2.94735e+07, z: 10000},
      {x: -7.67329e+06, y: 3.34985e+07, z: 10000},
      {x: 1.61624e+07, y: -4.99369e+07, z: 10000},
      {x: -4.33154e+07, y: 3.50863e+07, z: 10000},
      {x: 5.96237e+07, y: -5.99665e+07, z: 10000},
      {x: -4.89787e+07, y: -4.61987e+07, z: 10000},
      {x: 4.77809e+07, y: 8.43278e+07, z: 10000},
      {x: -7.86558e+07, y: 2.57082e+07, z: 10000},
      {x: 1.06524e+08, y: -4.52694e+07, z: 10000},
      { x: -8.22042e+07, y: 3.28204e+06, z: 10000},
      { x: 1.16958e+08, y: -1.36211e+06, z: 10000},
      { x: 8.19077e+07, y: -7.91672e+06, z: 10000},
      { x: 4.37121e+07, y: -2.05271e+07, z: 10000},
      { x: -1.83412e+07, y: -1.66347e+07, z: 10000},
      { x: 4.34267e+07, y: 3.6084e+07, z: 10000},
      { x: -3.02906e+07, y: 1.67575e+07, z: 10000},
      { x: 6.05275e+07, y: -2.77122e+07, z: 10000},
      { x: -6.36398e+06, y: -3.92438e+07, z: 10000},
      { x: -947027, y: 5.862e+07, z: 10000},
      { x: -2.81127e+07, y: -6.02263e+07, z: 10000},
      { x: 120258, y: 8.88397e+07, z: 10000},
      { x: -6.71786e+07, y: -6.42732e+07, z: 10000},
      { x: 4.85954e+07, y: 1.11771e+08, z: 10000},
      { x: -1.06604e+08, y: 2.74787e+07, z: 10000},
      { x: 1.34873e+08, y: -4.90867e+07, z: 10000},
      { x: 6.53162e+07, y: -9.17947e+07, z: 10000},
      { x: -8.03313e+07, y: -5.81612e+07, z: 10000},
      { x: 7.34499e+07, y: 1.07393e+08, z: 10000},
      { x: -8.49479e+07, y: 7.26182e+07, z: 10000},
      { x: 6.79002e+07, y: -1.20931e+08, z: 10000},
      { x: -1.10662e+08, y: -6.40437e+07, z: 10000},
      { x: 1.04467e+08, y: 1.21094e+08, z: 10000},
      { x: -6.68272e+07, y: 1.20198e+08, z: 10000},
      { x: -2.26709e+07, y: -1.5376e+08, z: 10000},
      { x: -1.26935e+08, y: 1.07785e+08, z: 10000},
      { x: 7.80976e+07, y: -1.76389e+08, z: 10000},
      { x: -1.63701e+08, y: -8.42749e+07, z: 10000},
      { x: 1.46994e+08, y: 1.59092e+08, z: 10000},
      { x: -6.17956e+07, y: 1.82446e+08, z: 10000},
      { x: -1.12864e+08, y: -1.70124e+08, z: 10000},
      { x: -3.53512e+07, y: 2.24398e+08, z: 10000},
      { x: -1.90421e+08, y: -1.33668e+08, z: 10000},
      { x: 1.22132e+08, y: 2.33103e+08, z: 10000},
      { x: -1.84603e+08, y: 1.63438e+08, z: 10000},
      { x: 8.17112e+07, y: -2.59456e+08, z: 10000},
      { x: -2.49609e+08, y: -9.24709e+07, z: 10000},
      { x: 2.39568e+08, y: 1.80251e+08, z: 10000},
      { x: 3.82755e+07, y: 2.68451e+08, z: 10000},
      { x: -2.65826e+08, y: 7.07318e+06, z: 10000},
      { x: 3.00462e+08, y: -9.03537e+06, z: 10000},
      { x: 2.64966e+08, y: -2.31586e+07, z: 10000},
      { x: 2.2595e+08, y: -5.11093e+07, z: 10000},
      { x: 1.69596e+08, y: -1.03335e+08, z: 10000},
      { x: 4.06701e+07, y: -1.66566e+08, z: 10000},
      { x: -1.68807e+08, y: -1.18499e+07, z: 10000},
      { x: 2.02023e+08, y: 2.87327e+07, z: 10000},
      { x: 1.61222e+08, y: 5.17307e+07, z: 10000},
      { x: 1.0006e+08, y: 9.16695e+07, z: 10000}
    ];

    // Create slides for each coordinate
    coordinates.forEach((coord, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.textContent = `X: ${coord.x}, Y: ${coord.y}`;
        slideshow.appendChild(slide);
    });

    // Calculate total height of slides
    const totalHeight = coordinates.length * slideshow.firstElementChild.offsetHeight;

    // Animate vertical scroll
    function animateScroll() {
        const animationDuration = totalHeight / 20; // Adjust speed here
        slideshow.style.transition = `transform ${animationDuration}s linear`;
        slideshow.style.transform = `translateY(-${totalHeight}px)`;

        // Reset to start position when animation ends
        setTimeout(() => {
            slideshow.style.transition = "none";
            slideshow.style.transform = "translateY(0)";
            animateScroll(); // Repeat animation
        }, animationDuration * 1000);
    }

    // Start the animation
    animateScroll();
});

function toggleAnimationz() {
  // Your existing code for toggling animation goes here

  // Get the button element
  const button = document.getElementById("toggleButton");

  // Toggle the button color based on its current state
  if (button.classList.contains("pressed")) {
      button.classList.remove("pressed");
  } else {
      button.classList.add("pressed");
  }
}
