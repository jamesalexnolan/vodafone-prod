    //VARIANT 1//
    
    ////POLLING FUNCTION////
    //polling function config
    var vt600_pxFuncFired = 0;
    var vt600_pxInterval = setInterval(vt600_pxPollFunc, 100);

    //polling function
    function vt600_pxPollFunc() {
        vt600_pxFuncFired += 1;

        if (vt600_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vt600_pxInterval);
        }

        //target element 
        var vt600_banner = document.querySelector('[id="availability-checker-container"]')

        if (vt600_banner) {
            //clear polling when found
            clearInterval(vt600_pxInterval);
            //ACTIONS HERE 
            vt600_bannerChanges()
        }

        //vt600 changes 
        function vt600_bannerChanges() {
            var vt600_cta = '<div class="ContentWrapperstyle__BannerButtonWrapper-sc-1ew6hq8-1 hOHaiq vt610_cta_wrapper">\
            <button aria-label="Check availability" target="_self" class="Interactionstyle__Interaction-sc-53qagq-1 hLrmFW Buttonstyle__Button-sc-1miyxay-0 eCHcNV" data-component-name="Button" sec_uuid="1cee9e4d940f" id="action_insert_17098049547651331">Switch today</button>\
            </div>'
            var vt610_bannerText = document.querySelector("#content > div > div > div > div:nth-child(1) > div > div > div")
            vt610_bannerText.insertAdjacentHTML('beforeend', vt600_cta)
            //add scroll function to button click
            document.querySelector('.vt610_cta_wrapper').addEventListener('click', function(){
                //bring scroll into view 
                document.querySelector('[id="availability-checker-container"]').scrollIntoView({ behavior: 'smooth' });
            })
        }
    }

    //VARIANT 2//
    
    ////POLLING FUNCTION////
    //polling function config
    var vt600_pxFuncFired = 0;
    var vt600_pxInterval = setInterval(vt600_pxPollFunc, 100);

    //polling function
    function vt600_pxPollFunc() {
        vt600_pxFuncFired += 1;

        if (vt600_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vt600_pxInterval);
        }

        //target element 
        var vt600_postcodeChecker = document.querySelector('[id="availability-checker-container"]')

        if (vt600_postcodeChecker) {
            //clear polling when found
            clearInterval(vt600_pxInterval);
            //ACTIONS HERE 
            //Hide postcoder checker
            vt600_postcodeChecker.style.display = 'none'
            //Insert CTA 
            var vt600_cta = '<div class="ContentWrapperstyle__BannerButtonWrapper-sc-1ew6hq8-1 hOHaiq">\
            <a href="/broadband/availability-checker" aria-label="Check availability" target="_self" class="Interactionstyle__Interaction-sc-53qagq-1 hLrmFW Buttonstyle__Button-sc-1miyxay-0 eCHcNV" data-component-name="Button" sec_uuid="1cee9e4d940f" id="action_insert_17098049547651331">Switch today</a>\
            </div>'
            var vt610_bannerText = document.querySelector("#content > div > div > div > div:nth-child(1) > div > div > div")
            vt610_bannerText.insertAdjacentHTML('beforeend', vt600_cta)
        }
    }