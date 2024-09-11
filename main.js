// trusted by section start
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
// trusted by section end

// testimonials section start
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// testimonials section end

// Newsletter start
// function validateEmail() {
//     const emailField = document.getElementById('inputemail').value;
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//     if (emailPattern.test(emailField)) {
//         alert("Successfully submitted!");
//         // return true;
//         window.location.href = 'thankyou.html';
//     } else {
//         alert("Invalid email address! Please enter a valid one.");
//         return false;
//     }
// }
// Newsletter end


// about us filter section start
function filterTeam(category, element) {
    var members = document.querySelectorAll('.team-member');
    var buttons = document.querySelectorAll('.nav-link');

    members.forEach(function (member) {
        if (category === 'all') {
            member.style.display = 'block';
        } else {
            if (member.getAttribute('data-category') === category) {
                member.style.display = 'block';
            } else {
                member.style.display = 'none';
            }
        }
    });

    // Remove active class and background color from all buttons
    buttons.forEach(function (button) {
        button.classList.remove('active');
        button.style.backgroundColor = '';
    });

    element.classList.add('active');
    element.style.backgroundColor = '#191449';
}
// about us filter section end