//create banner 
var vt563_ribbon = '<div class="vt_563_banner_container">\
<div class="vt_563_contents">\
    <p>\
        Samsung Galaxy S24 Ultra\
        </p>\
        <span class="vt563_rating">\
            <img class="vt563_img" src="/cs/groups/public/documents/images/t3-logo.png">\
            <div class="vt563_star-rating">\
                <span class="vt563_star">&#9733;</span>\
                <span class="vt563_star">&#9733;</span>\
                <span class="vt563_star">&#9733;</span>\
                <span class="vt563_star">&#9733;</span>\
                <span class="vt563_star">&#9733;</span>\
            </div>\
        </span>\
        <p>\
        Platinum Award Winner\
    </p>\
</div>\
</div>'

//polling function 
var pxFuncFired = 0;
var pxInterval = setInterval(pxPollFunc, 100);

//polling function
function pxPollFunc() {
pxFuncFired += 1;

if (pxFuncFired >= 20) {
    //try 20 times, if not found clear px func
    clearInterval(pxInterval);
}

//select banner 
var vt563_hero_banner = document.querySelector('.carousel')

if (vt563_hero_banner) {
    //clear polling when found
    clearInterval(pxInterval);
    //insert banner
    vt563_hero_banner.insertAdjacentHTML("afterbegin", vt563_ribbon)
}
}