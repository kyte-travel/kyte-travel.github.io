document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    var target = document.getElementById("target");
    var targetLeft = target.getBoundingClientRect().left;
    var img1 = document.getElementById('overflow-img-1');
    var vw = window.innerWidth;
    img1.style.width = vw-targetLeft + 'px';

    var screen2 = document.getElementById('screen-2');
    screen2.style.left = targetLeft + 'px';

    var titFlights = document.getElementById('title-flights');
    var targettitF = titFlights.getBoundingClientRect().left;
    var conTxt1 = document.getElementById('flight-txt-1');
    var conTxt2 = document.getElementById('flight-txt-2');
    var conTxt3 = document.getElementById('hotel-txt-1');
    var conTxt4 = document.getElementById('hotel-txt-2');
    var sub2 = document.getElementById('base-con');
    var subVw = sub2.clientWidth;
    conTxt1.style.left = targettitF + 'px';
    conTxt1.style.position = 'absolute';
    conTxt1.style.width = subVw * 0.5 + 'px';
    conTxt2.style.width = subVw * 0.5 + 'px';
    conTxt3.style.width = subVw * 0.5 + 'px';
    conTxt4.style.width = subVw * 0.5 + 'px';
    conTxt4.style.left = targettitF + 'px';

    var imgF3 = document.getElementById('screen-3');
    var imgF4 = document.getElementById('screen-4');
    var imgF5 = document.getElementById('screen-5');
    var screenWd = imgF3.clientWidth;
    imgF4.style.left = targettitF + screenWd + 24 + 'px';
    imgF5.style.left = targettitF + 48 + screenWd + screenWd + 'px';

    var imgH1 = document.getElementById('hotel-1');
    var imgH2 = document.getElementById('hotel-2');
    var imgH4 = document.getElementById('hotel-4');
    imgH1.style.left = targettitF + 'px';
    imgH2.style.left = targetLeft - screenWd - 24 + 'px';
    imgH4.style.left = targettitF + screenWd + 24 + (screenWd * 0.8) + 'px';

    var imgM2 = document.getElementById('magazine-2');
    var imgM3 = document.getElementById('magazine-3');
    imgM2.style.left = targetLeft + 'px';
    imgM3.style.right = targetLeft + 'px';

    var txtM1 = document.getElementById('magazine-txt-1');
    var txtM2 = document.getElementById('magazine-txt-2');
    var txtM3 = document.getElementById('magazine-txt-3');
    var targetTxt = document.getElementById('target-txt');
    var widthTxt = targetTxt.clientWidth;
    var targetTxtLeft = targetTxt.getBoundingClientRect().left;
    txtM1.style.left = targetTxtLeft + 'px';
    txtM1.style.width = widthTxt + 'px';
    txtM2.style.width = widthTxt + 'px';
    txtM1.style.top = 102 + 'vh';
    txtM3.style.width = subVw * 0.5 + 'px';

    var logoB = document.getElementById('logo-black');
    logoB.style.left = targetLeft + 'px';

    var mql = window.matchMedia("screen and (max-width: 1023px)");

    if (mql.matches) (function(e) {
        if(e.matches) {
            img1.style.width = vw;
            
        } else {
            img1.style.width = vw-targetLeft + 'px';
        }
    });

    var afterString = html.replace('<br>',"");



})

