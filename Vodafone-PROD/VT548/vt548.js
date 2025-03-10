//VARIANT 1//
    ////POLLING FUNCTION////
    //polling function config
    var vt548_pxFuncFired = 0;
    var vt548_pxInterval = setInterval(vt548_pxPollFunc, 100);

    //polling function
    function vt548_pxPollFunc() {
        vt548_pxFuncFired += 1;

        if (vt548_pxFuncFired >= 30) {
            //try 20 times, if not found clear px func
            clearInterval(vt548_pxInterval);
        }

        if (document.querySelector('[data-component-name="StandardBanner"]') && document.querySelector('[data-selector="recommendations-container-cardlist"]')) {
            //clear polling when found
            clearInterval(vt548_pxInterval);
            //ACTIONS HERE 
            document.querySelector('[data-component-name="StandardBanner"]').parentElement.parentElement.style.display = 'none'
        }
    }

    //VARIANT 2//
    ////POLLING FUNCTION////
    //polling function config
    var vt548_pxFuncFired = 0;
    var vt548_pxInterval = setInterval(vt548_pxPollFunc, 100);

    //polling function
    function vt548_pxPollFunc() {
        vt548_pxFuncFired += 1;

        if (vt548_pxFuncFired >= 30) {
            //try 20 times, if not found clear px func
            clearInterval(vt548_pxInterval);
        }

        if (document.querySelector('[data-component-name="StandardBanner"]') && document.querySelector('[data-selector="recommendations-container-cardlist"]')) {
            //clear polling when found
            clearInterval(vt548_pxInterval);
            //ACTIONS HERE 
            document.querySelector('[data-selector="recommendations-container-cardlist"]').parentElement.parentElement.parentElement.style.display = 'none'
        }
    }