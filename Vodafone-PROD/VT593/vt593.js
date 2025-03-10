////POLLING FUNCTION////
    //polling function config
    var vt593_2_pxFuncFired = 0;
    var vt593_2_pxInterval = setInterval(vt593_2_pxPollFunc, 100);

    //polling function
    function vt593_2_pxPollFunc() {
        vt593_2_pxFuncFired += 1;

        if (vt593_2_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vt593_2_pxInterval);
        }

        //target element 
        var vt593_2_card_element = document.querySelectorAll('[class*="js-snippet-item snippet__item flush--all"] > a')[10]

        if (vt593_2_card_element) {
            //clear polling when found
            clearInterval(vt593_2_pxInterval);
            //change card href
            document.querySelectorAll('[class*="js-snippet-item snippet__item flush--all"] > a')[10].href = 'https://www.vodafone.co.uk/mobile/partnerships/rugby'
            //text changes 
            document.querySelectorAll('[class*="block__text--heading"]')[4].innerText = ''
            document.querySelectorAll('[class*="block__text--shout"]')[4].innerText = ''
            //CTA changes
            document.querySelectorAll('[class*="promo-card__button-area"]')[4].innerHTML = '<div href="https://www.vodafone.co.uk/mobile/partnerships/rugby" class="button button--tertiary  at-element-marker">Click Here to Learn More</div>'
        }
    }