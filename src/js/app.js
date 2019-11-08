import TweenMax from "gsap/TweenMax";

const cards = document.getElementsByClassName("card")

// появление карточек
TweenMax.to(cards[0], 0.5, { y: -50, opacity: 1, delay: 0.1 });
TweenMax.to(cards[1], 0.5, { y: -50, opacity: 1, delay: 0.2 });
TweenMax.to(cards[2], 0.5, { y: -50, opacity: 1, delay: 0.3 });
TweenMax.to(cards[3], 0.5, { y: -50, opacity: 1, delay: 0.4 });
TweenMax.to(cards[4], 0.5, { y: -50, opacity: 1, delay: 0.5 });
TweenMax.to(cards[5], 0.5, { y: -50, opacity: 1, delay: 0.6 });
TweenMax.to(cards[6], 0.5, { y: -50, opacity: 1, delay: 0.7 });
TweenMax.to(".person-info__img--large", 0.5, { y: -50, opacity: 1, delay: 0.8});

// скрытие карточек
TweenMax.to(cards[6], 0.5, { y: 0, opacity: 0, delay: 4.1 });
TweenMax.to(cards[5], 0.5, { y: 0, opacity: 0, delay: 4.2 });
TweenMax.to(".person-info__img--large", 0.5, { y: 0, opacity: 0, delay: 4.2 });
TweenMax.to(cards[4], 0.5, { y: 0, opacity: 0, delay: 4.3 });
TweenMax.to(cards[3], 0.5, { y: 0, opacity: 0, delay: 4.4 });
TweenMax.to(cards[2], 0.5, { y: 0, opacity: 0, delay: 4.5 });
TweenMax.to(cards[1], 0.5, { y: 0, opacity: 0, delay: 4.6 });
TweenMax.to(cards[0], 0.5, { y: 0, opacity: 0, delay: 4.7 });



// заполнение фона тёмным цветом

// TweenMax.to(".circle", 0.5, {width: "100%", height: "100%"});

// появление карточек с новым стилем


