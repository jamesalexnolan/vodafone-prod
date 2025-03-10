//polling function config
var vt593_pxFuncFired = 0;
var vt593_pxInterval = setInterval(vt593_pxPollFunc, 100);

//polling function
function vt593_pxPollFunc() {
    vt593_pxFuncFired += 1;

    if (vt593_pxFuncFired >= 20) {
        //try 20 times, if not found clear px func
        clearInterval(vt593_pxInterval);
    }

    //select logo
    var vt593_logo = document.querySelector('.vfuk-Logo__wrapper')

    if (vt593_logo) {
        //clear polling when found
        clearInterval(vt593_pxPollFunc);
        //create new logo wrapper
        var vt593_wru_logo = '<div class="vt593_logo_wrapper">\
<img class="vt593_logo" src="/cs/groups/public/documents/images/vodafone-wru-logo.png">\
</div>'

        //insert wru logo
        vt593_logo.innerHTML = vt593_wru_logo
    }
}

//account for screen resize 
addEventListener("resize", (event) => {
    setInterval(vt593_pxPollFunc, 100)
});