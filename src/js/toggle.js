import TimelineMax from "gsap/TimelineMax";

const cards = document.getElementsByClassName("card");

const tl = new TimelineMax({ delay: 0.5 });

const showCards = function() {
    tl
        .to(cards[0], 0.2, { y: -50, opacity: 1 })
        .to(cards[1], 0.2, { y: -50, opacity: 1 })
        .to(cards[2], 0.2, { y: -50, opacity: 1 })
        .to(cards[3], 0.2, { y: -50, opacity: 1 })
        .to(cards[4], 0.2, { y: -50, opacity: 1 })
        .to(cards[5], 0.2, { y: -50, opacity: 1 })
        .to(cards[6], 0.2, { y: -50, opacity: 1 })
        .to(".person-info__img--large", 0.5, { y: -50, opacity: 1 });
};

module.exports = {
    showCards
};