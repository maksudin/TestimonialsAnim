import TweenMax from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax"

const cards = document.getElementsByClassName("card");

const tl = new TimelineMax({ delay: 0.5 });


// появление карточек
tl
    .to(cards[0], 0.2, { y: -50, opacity: 1 })
    .to(cards[1], 0.2, { y: -50, opacity: 1 })
    .to(cards[2], 0.2, { y: -50, opacity: 1 })
    .to(cards[3], 0.2, { y: -50, opacity: 1 })
    .to(cards[4], 0.2, { y: -50, opacity: 1 })
    .to(cards[5], 0.2, { y: -50, opacity: 1 })
    .to(cards[6], 0.2, { y: -50, opacity: 1 })
    .to(".person-info__img--large", 0.5, { y: -50, opacity: 1 });

// скрытие карточек
tl
    .to(cards[6], 0.2, { delay: 2, y: 0, opacity: 0 })
    .to(cards[5], 0.2, { y: 0, opacity: 0 })
    .to(cards[4], 0.2, { y: 0, opacity: 0 })
    .to(".person-info__img--large", 0.2, { y: 0, opacity: 0 })
    .to(cards[3], 0.2, { y: 0, opacity: 0 })
    .to(cards[2], 0.2, { y: 0, opacity: 0 })
    .to(cards[1], 0.2, { y: 0, opacity: 0 })
    .to(cards[0], 0.2, { y: 0, opacity: 0 });



// заполнение фона тёмным цветом

tl
    .to(".circle", 2, {scale: 400})
    .to(".out", 0.1, { background: "#26272F"})
    .to(".circle", 0.1, {display: "none" });


// смена стиля карточек
tl
    .to(".card", 0.01, {
        boxShadow: "0px 50px 50px rgb(0, 0, 0, 0.3);",
        backgroundColor: "#383940",
        border: "1px solid #383940"
    })
    .to(".card__text", 0.001, { color: "#E6E6E6"})

    .to(".person-info__title", 0.001, { color: "#FFFFFF" })
    .to(".person-info__title--large", 0.001, { color: "#FFFFFF" })
    .to(".person-info__sub-text", 0.001, { color: "#A5A5A5" })

    .to(".person-info__img--transparent", 0.001, { opacity: "0.5" })
    .to(".oysho", 0.001, { attr: {src:'img/oysho-bl.svg'}} )
    .to(".starbucks", 0.001, { attr: { src: 'img/starbucks-bl.svg' }})
    .to(".person-info--border", 0.001, { borderLeft: "4px solid #6B39FA"})
;
// появление карточек
tl
    .to(cards[0], 0.2, { y: -50, opacity: 1 })
    .to(cards[1], 0.2, { y: -50, opacity: 1 })
    .to(cards[2], 0.2, { y: -50, opacity: 1 })
    .to(cards[3], 0.2, { y: -50, opacity: 1 })
    .to(cards[4], 0.2, { y: -50, opacity: 1 })
    .to(cards[5], 0.2, { y: -50, opacity: 1 })
    .to(cards[6], 0.2, { y: -50, opacity: 1 })
    .to(".person-info__img--large", 0.5, { y: -50, opacity: 1 });