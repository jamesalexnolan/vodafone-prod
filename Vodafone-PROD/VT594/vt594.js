////POLLING FUNCTION////
//polling function config
var VT594_pxFuncFired = 0;
var VT594_pxInterval = setInterval(VT594_pxPollFunc, 100);

//polling function
function VT594_pxPollFunc() {
    VT594_pxFuncFired += 1;

    if (VT594_pxFuncFired >= 20) {
        //try 20 times, if not found clear px func
        clearInterval(VT594_pxInterval);
    }

    if (document.querySelectorAll('.quicklinks__heading')[4]) {
        //clear polling when found
        clearInterval(VT594_pxInterval);
        //text change
        document.querySelectorAll('.quicklinks__heading')[4].innerText = 'Tablets and laptops'
        //href change
        document.querySelectorAll('.js-quicklinks-item')[4].href = 'https://www.vodafone.co.uk/mobile-broadband/tablets'
        //change icon 
        document.querySelectorAll('.quicklinks__icon>use')[4].href.baseVal = '#icon-tablet'
    }
}