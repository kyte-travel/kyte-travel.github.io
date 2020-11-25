document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const target = document.getElementById("target");
    const targetLeft = target.getBoundingClientRect().left;
    const img1 = document.getElementById('overflow-img-1');
    const vw = window.innerWidth;
    img1.style.width = vw-targetLeft + 'px';

    const screen2 = document.getElementById('screen-2');
    screen2.style.left = targetLeft + 'px';

    const titFlights = document.getElementById('title-flights');
    const targettitF = titFlights.getBoundingClientRect().left;
    const conTxt1 = document.getElementById('flight-txt-1');
    const conTxt2 = document.getElementById('flight-txt-2');
    const conTxt3 = document.getElementById('hotel-txt-1');
    const conTxt4 = document.getElementById('hotel-txt-2');
    const sub2 = document.getElementById('base-con');
    const subVw = sub2.clientWidth;
    conTxt1.style.left = targettitF + 'px';
    conTxt1.style.position = 'absolute';
    conTxt1.style.width = subVw * 0.5 + 'px';
    conTxt2.style.width = subVw * 0.5 + 'px';
    conTxt3.style.width = subVw * 0.5 + 'px';
    conTxt4.style.width = subVw * 0.5 + 'px';
    conTxt4.style.left = targettitF + 'px';

    const imgF3 = document.getElementById('screen-3');
    const imgF4 = document.getElementById('screen-4');
    const imgF5 = document.getElementById('screen-5');
    const screenWd = imgF3.clientWidth;
    imgF4.style.left = targettitF + screenWd + 24 + 'px';
    imgF5.style.left = targettitF + 48 + screenWd + screenWd + 'px';

    const imgH1 = document.getElementById('hotel-1');
    const imgH2 = document.getElementById('hotel-2');
    const imgH4 = document.getElementById('hotel-4');
    imgH1.style.left = targettitF + 'px';
    imgH2.style.left = targetLeft - screenWd - 24 + 'px';
    imgH4.style.left = targettitF + screenWd + 24 + (screenWd * 0.8) + 'px';

    const imgM2 = document.getElementById('magazine-2');
    const imgM3 = document.getElementById('magazine-3');
    imgM2.style.left = targetLeft + 'px';
    imgM3.style.right = targetLeft + 'px';

    const txtM1 = document.getElementById('magazine-txt-1');
    const txtM2 = document.getElementById('magazine-txt-2');
    const txtM3 = document.getElementById('magazine-txt-3');
    const targetTxt = document.getElementById('target-txt');
    const widthTxt = targetTxt.clientWidth;
    const targetTxtLeft = targetTxt.getBoundingClientRect().left;
    txtM1.style.left = targetTxtLeft + 'px';
    txtM1.style.width = widthTxt + 'px';
    txtM2.style.width = widthTxt + 'px';
    txtM1.style.top = 102 + 'vh';
    txtM3.style.width = subVw * 0.5 + 'px';

    const logoB = document.getElementById('logo-black');
    logoB.style.left = targetLeft + 'px';


})

