document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".navbar");

    // Add an event listener for the scroll event
    window.addEventListener("scroll", function () {
        // Check if the pageYOffset is greater than or equal to 140px
        if (window.pageYOffset >= 100) {
            scrollToTopButton.classList.add("active");
        } else {
            scrollToTopButton.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    // Add an event listener for the scroll event
    window.addEventListener("scroll", function () {
        // Check if the pageYOffset is greater than or equal to 140px
        if (window.pageYOffset >= 140) {
            scrollToTopButton.classList.add("active");
        } else {
            scrollToTopButton.classList.remove("active");
        }
    });

    // Add an event listener for the click event to scroll to the top
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

AOS.init();


const text = "SASLT";
const targetElement = document.getElementById("saslt-word");
let index = 0;
let isDeleting = false;

function typeAndDelete() {
    if (!isDeleting) {
        targetElement.innerHTML += text.charAt(index);
        index++;
        if (index === text.length) {
            setTimeout(() => { isDeleting = true; }, 1000); // Pause before deleting
        }
    } else {
        targetElement.innerHTML = text.substring(0, index - 1);
        index--;
        if (index === 0) {
            isDeleting = false;
        }
    }

    const speed = isDeleting ? 200 : 400; // Typing speed (200ms) and deleting speed (100ms)
    setTimeout(typeAndDelete, speed);
}

// Start the typing and deleting loop
typeAndDelete();


const text2 = "SASLT";
const targetElement2 = document.getElementById("saslt-word-2");
let index2 = 0;
let isDeleting2 = false;

function typeAndDelete2() {
    if (!isDeleting2) {
        targetElement2.innerHTML += text.charAt(index2);
        index2++;
        if (index2 === text2.length) {
            setTimeout(() => { isDeleting2 = true; }, 1000); // Pause before deleting
        }
    } else {
        targetElement2.innerHTML = text2.substring(0, index - 1);
        index2--;
        if (index2 === 0) {
            isDeleting2 = false;
        }
    }

    const speed = isDeleting2 ? 200 : 400; // Typing speed (200ms) and deleting speed (100ms)
    setTimeout(typeAndDelete2, speed);
}

// Start the typing and deleting loop
typeAndDelete2();


document.addEventListener("DOMContentLoaded", function () {
    const counters = [
        { id: "count1", endVal: 300 },
        { id: "count2", endVal: 26 },
        { id: "count3", endVal: 35 }
    ];

    const options = {
        threshold: 0.5 // Start counting when 50% of the section is visible
    };

    // Function to count up
    function countUp(element, endVal, duration = 2000) {
        let startVal = 0;
        let startTime = null;

        function animateCountUp(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const currentVal = Math.min(Math.floor(progress / duration * endVal), endVal);
            element.textContent = currentVal;
            if (progress < duration) {
                requestAnimationFrame(animateCountUp);
            } else {
                element.textContent = endVal;
            }
        }

        requestAnimationFrame(animateCountUp);
    }

    // IntersectionObserver callback
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const element = document.getElementById(counter.id);
                    countUp(element, counter.endVal);
                });
                observer.unobserve(entry.target); // Stop observing after counting
            }
        });
    }, options);

    const section = document.querySelector('.status');
    observer.observe(section);
});


$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});