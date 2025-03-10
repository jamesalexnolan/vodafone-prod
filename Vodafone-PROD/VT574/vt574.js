    ////POLLING FUNCTION////
    //polling function config
    var vt574_pxFuncFired = 0;
    var vt574_pxInterval = setInterval(vt574_pxPollFunc, 100);

    //polling function
    function vt574_pxPollFunc() {
        vt574_pxFuncFired += 1;

        if (vt574_pxFuncFired >= 50) {
            //try 20 times, if not found clear px func
            clearInterval(vt574_pxInterval);
        }

        //target element 
        var vt574_AOMSection = document.querySelector('[data-testid="recommended-plans-section"]')
        if (vt574_AOMSection) {
            //clear polling when found
            clearInterval(vt574_pxInterval);
            //hide AOM element
            vt574_AOMSection.innerHTML = '<div class="vt574_replacement_text"><p>Ready for something new? Explore your options below to find the right phone or SIM only plane for you.</p><p>Or if you\'d like to add another plan to your exisiting account, for yourself or a family member, select the "Additional plan" tab.</p></div>'

        }
    }

    //click to re-trigger PX func
    document.querySelector('[role="tablist"]').addEventListener('click', function () {
        setInterval(vt574_pxPollFunc, 100);
    })