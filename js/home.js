// const popmotion = require("popmotion");
const container = popmotion.styler(document.querySelector('.container'));//animation of elements
const formElements = (document.querySelector('.inner'));

const msgPop = popmotion.styler(document.querySelector('.msg'));
const buttonColor = popmotion.styler(document.querySelector('.btn'));
const myAnim = popmotion.tween({
    from: {
        scale: .7,
        opacity: 0,
        y: -300
    },
    to: {
        scale: 1,
        opacity: 1,
        y: 0
    },
    duration: 1000
});


//put in calculations to calculate center of device instead of hard coding this simpler code
const myAnim2 = popmotion.keyframes({
    values: [
        {y: -50, opacity: 0 },
        {y: -20, opacity: 1 },
        {y: -20, opacity: 1 },
        {y: 0, opacity: 0 },

    ],
    times: [0, .2, .8, 1],
    duration: 3000
});

myAnim.start({
    update: container.set,
    complete: () => { myAnim2.start(msgPop.set); console.log('first anim done') }
});


//This is the beginning of you staggering circles which have not been created on the page