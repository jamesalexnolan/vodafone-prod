    ////POLLING FUNCTION////
    //variant 1
    //polling function config
    var vt552_pxFuncFired = 0;
    var vt552_pxInterval = setInterval(vt552_pxPollFunc, 100);

    //polling function
    function vt552_pxPollFunc() {
        vt552_pxFuncFired += 1;

        if (vt552_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vt552_pxInterval);
        }

        if (document.querySelectorAll('.background__image')[0]) {
            //clear polling when found
            clearInterval(vt552_pxInterval);
            //update hero image
            document.querySelector('.background__image').classList.add('vt552_hero_background_img')
        }
    }

    ////POLLING FUNCTION////
    //variant 2
    //polling function config
    var vt552_pxFuncFired = 0;
    var vt552_pxInterval = setInterval(vt552_pxPollFunc, 100);

    //polling function
    function vt552_pxPollFunc() {
        vt552_pxFuncFired += 1;

        if (vt552_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vt552_pxInterval);
        }

        //target element 
        var vt552_textElement = document.querySelector("#content > div:nth-child(1) > div > div > div > ul > li > div > div > div > p")

        if (vt552_textElement) {
            //clear polling when found
            clearInterval(vt552_pxInterval);
            //ACTIONS HERE 
            var vt560TextContent = document.querySelector("#content > div:nth-child(1) > div > div > div > ul > li > div > div > div > p")
            vt560TextContent.textContent = vt560TextContent.textContent.replace(/Claim a Samsung Galaxy Tab S6 Lite. Ends 30 April./g, '')
        }
    }