////MUTATION OBSERVER - PARENT ELEMENT////
//mutation observer 
const vt618Observer = new MutationObserver((mutationsList, vt618Observer) => {
    //check for mutations
    for (const mutation of mutationsList) {
        if (mutation.target.matches('.vfuk-MeganavContainer__reinvent-meganav-container')) {
            //CHANGES HERE
            if (window.innerWidth < 768) {
                vt618_nav_adjust_mobile()
                vt618_nav_adjust_mobile_react()
            } else {
                vt618_nav_adjust_desktop()
                vt618_nav_adjust_desktop_react()
            }
        }
    }
});

//define the configuration for the MutationObserver
const vt618ObserverConfig = {
    childList: true,
    subtree: true,
};

//start observing changes
vt618Observer.observe(document.body, vt618ObserverConfig);

//handle nav changes 
function vt618_nav_adjust_desktop() {
    ////POLLING FUNCTION////
    //polling function config
    var vt618_pxFuncFired = 0;
    var vt618_pxInterval = setInterval(vt618_pxPollFunc, 50);

    //polling function
    function vt618_pxPollFunc() {
        vt618_pxFuncFired += 1;

        if (vt618_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vt618_pxInterval);
        }

        //target element 
        var vt618_menu = document.querySelector('.vfuk-UserDropdown__meganav__user-dropdown')

        if (vt618_menu && vt618_menu.childNodes.length === 3) {
            //clear polling when found
            clearInterval(vt618_pxInterval);
            //ACTIONS HERE 
            vt618_menu.lastChild.innerHTML = '<a href="https://www.vodafone.co.uk/upgrade-and-offers#ils" class="vfuk-Link__inherit vfuk-Link__link  " aria-label="Existing customer deals" target="" tabindex="0" rel="" data-meganav-ref="useractions" sec_uuid_js:web.vodafone.co.uk="305c5788de07"><span aria-hidden="true" class="vfuk-Icon__wrapper vfuk-Icon__brand vfuk-Icon__size-2  margin-right-2"><svg data-name="0abdc4f1-564d-4b6e-b9a0-ba0ac3e5f653" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><path d="M158.66 1.5a4 4 0 0 0-5.66 0l-15.81 15.81A11.91 11.91 0 0 0 131.8 16H82a11.93 11.93 0 0 0-8.48 3.51L6.64 86.33a12 12 0 0 0 0 17l49.83 49.83a12 12 0 0 0 17 0l66.84-66.84a11.92 11.92 0 0 0 3.52-8.46V28a11.91 11.91 0 0 0-1.07-4.93l15.9-15.91a4 4 0 0 0 0-5.66zM135.8 77.81a4 4 0 0 1-1.18 2.82l-66.84 66.84a4 4 0 0 1-5.65 0L12.3 97.64a4 4 0 0 1 0-5.65l66.87-66.82A4 4 0 0 1 82 24h48.49L120.1 34.41a15.8 15.8 0 1 0 5.66 5.66l10-10zM119.92 48a7.79 7.79 0 1 1-5.92-7.52l-4.69 4.69a4 4 0 0 0 5.69 5.66l4.69-4.69a7.72 7.72 0 0 1 .23 1.86z"></path></svg></span><span>Existing customer deals</span></a>'
        }
    }
}