let bars = document.querySelector('header .bars');
let header_menu = document.querySelector('header .header_menu')
bars.onclick = () => {
    if (bars.classList.contains('active')) {
        bars.classList.remove('active');
        bars.classList.add('no_active');
    } else {
        bars.classList.remove('no_active');
        bars.classList.add('active');
    }

    if (header_menu.classList.contains('active')) {
        header_menu.classList.remove('active')
        header_menu.classList.add('no_active')
    } else {
        header_menu.classList.remove('no_active');
        header_menu.classList.add('active')
    }
}

// let lang_btn = document.querySelector('.lang_selected');
// let lang_list = document.querySelector('.lang_list');
// lang_btn.onclick = () => {
//     if (lang_list.classList.contains('active')) {
//         lang_list.classList.remove('active');
//         lang_list.classList.add('no_active');
//     } else {
//         lang_list.classList.remove('no_active');
//         lang_list.classList.add('active');
//     }
// }

let main_selects = document.querySelectorAll('.main_select');
if (main_selects.length) {
    main_selects.forEach(select => {
        let btn = select.querySelector('.main_select__btn');
        let text = select.querySelector('.main_select__btn span');
        let select_list = select.querySelector('.main_select__list_wrap');
        let select_list_item = select.querySelectorAll('.main_select__list li');
        btn.onclick = () => {
            select_list.style.maxHeight = select_list.style.maxHeight ? null : select_list.scrollHeight + 'px';
            select_list.classList.toggle('active')
        }
        select_list_item.forEach(list_item => {
            list_item.onclick = () => {
                select_list.style.maxHeight = select_list.style.maxHeight ? null : select_list.scrollHeight + 'px';
                select_list.classList.remove('active')
                text.textContent = list_item.textContent;
                select_list_item.forEach(item => {
                    item.classList.remove("active");
                })
                list_item.classList.add('active')
            }
        })
    })
}

const target = document.querySelector('header .lang')

document.addEventListener('click', (event) => {
    const withinBoundaries = event.composedPath().includes(target)

    if (!withinBoundaries) {
        if (lang_list.classList.contains('active')) {
            lang_list.classList.remove('active');
            lang_list.classList.add('no_active');
        }
    }

    if (main_selects.length) {
        main_selects.forEach(select => {
            let condition = event.composedPath().includes(select);
            let select_list = select.querySelector('.main_select__list_wrap');
            if (!condition) {
                if (select_list.classList.contains('active')) {
                    select.querySelector('.main_select__btn').click();
                }
            }
        })
    }
})


// let animations = document.querySelectorAll('.animation_img') 
// if (animations.length) {
//     animations.forEach(animation => {
//         let spans = animation.querySelectorAll('span');
//         setTimeout(() => {
//             addAnimation(spans[0])
//         }, 0);
//         setTimeout(() => {
//             addAnimation(spans[1])
//         }, 600);
//         setTimeout(() => {
//             addAnimation(spans[2])
//         }, 1200);
//         setTimeout(() => {
//             addAnimation(spans[3])
//         }, 1800);
//     })
// }


function addAnimation (span) {
    let cls = ['animate0', 'animate1', 'animate2', 'animate3'];
    let i = -1;
    setInterval(() => {
        i++;
        for (let j = 0; j < 4; j++) {
            span.classList.remove(cls[j]);
        }
        span.classList.add(cls[i]);

        if (i == 3) {
            i = -1
        }
    }, 600);
}

let apartments_card = document.querySelector('.apartments .apartments_cards')
if (apartments_card) {
    apartements_slider = new Swiper(apartments_card, {
        slidesPerView: 1.3,
        spaceBetween: 22,
        breakpoints: {
            1300: {
                slidesPerView: 3,
            },
            1150: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
        }
    })

    let apartments_cards__ins = document.querySelectorAll('.apartments .apartments_cards__in');
    let apartments_cards__in_paginations = document.querySelectorAll('.apartments .apartments_cards__in_pagination');
    if (apartments_cards__ins.length) {
        apartments_cards__ins.forEach((card, idx) => {
            let slide = new Swiper(card, {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: apartments_cards__in_paginations[idx],
                    clickable: true
                }
            })

            slide.on('touchStart', function () {
                apartements_slider.detachEvents();
            });

            slide.on('touchEnd', function () {
                apartements_slider.attachEvents();
            });
        })
    }
}

let top_object_card = document.querySelector('.top_object .apartments_cards')
if (top_object_card) {
    top_object_slider = new Swiper(top_object_card, {
        slidesPerView: 1.3,
        spaceBetween: 22,
        breakpoints: {
            1300: {
                slidesPerView: 3,
            },
            1150: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
        }
    })

    let top_objects = document.querySelectorAll('.top_object .apartments_cards__in');
    let top_object_paginations = document.querySelectorAll('.top_object .apartments_cards__in_pagination');
    if (top_objects.length) {
        top_objects.forEach((card, idx) => {
            let slide = new Swiper(card, {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: top_object_paginations[idx],
                    clickable: true
                }
            })

            slide.on('touchStart', function () {
                top_object_slider.detachEvents();
            });

            slide.on('touchEnd', function () {
                top_object_slider.attachEvents();
            });
        })
    }
}

let stars = document.querySelectorAll('.star');
if (stars.length) {
    stars.forEach(star => {
        star.onclick = () => {
            star.classList.toggle('active')
        }
    })
}

function formatAndAddDollarSign(inputElement) {
    let numericRegex = /^[0-9.]+$/;
    let inputValue = inputElement.value;
    if (numericRegex.test(inputValue)) {
        let formattedValue = inputValue.replace(/\D/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
        inputElement.value = formattedValue + ' $';
    } else {
        inputElement.value = inputValue.replace(/[^\d.]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' $';
    }
}

function handleBackspace(inputElement, event) {
    if (event.key === 'Backspace') {
        let lastChar = inputElement.value.slice(-1);

        if (lastChar === '.' && !inputElement.value.includes('.')) {
            inputElement.value = inputElement.value.slice(0, -1);
        } else {
            inputElement.value = inputElement.value.replace(/[^\d.]/g, '');
        }
    }
}

let init = false;
let approach_card_slider;
let approach_card = document.querySelector('.approach .approach_card');

if (approach_card) {
    function swiperCard() {
        if (window.innerWidth <= 1200) {
            if (!init) {
                init = true;
                approach_card_slider = new Swiper(approach_card, {
                    slidesPerView: 'auto',
                    spaceBetween: 11.28,
                    scrollbar: {
                        el: ".catalog_card__paginate",
                    },
                });
            }
        } else if (init) {
            approach_card_slider.destroy();
            init = false;
        }
    }
    swiperCard();
}

window.addEventListener("resize", function () {
    if (approach_card) {
        swiperCard();
    }
});

