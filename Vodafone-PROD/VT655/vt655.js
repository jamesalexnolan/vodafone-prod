////POLLING FUNCTION////
    //polling function config
    var VT655_pxFuncFired = 0;
    var VT655_pxInterval = setInterval(VT655_pxPollFunc, 100); //100*100 = 10000 //10 seconds

    //polling function
    function VT655_pxPollFunc() {
        VT655_pxFuncFired += 1;

        if (VT655_pxFuncFired >= 100) {
            //try 100 times, if not found clear px func
            clearInterval(VT655_pxInterval);
        }

        if (document.querySelector('[data-selector*="recommendations-container-cardlist-cards"]')) {
            //clear polling when found
            clearInterval(VT655_pxInterval);
            //ACTIONS HERE 
            VT655aomChanges()
        }
    }

    //function to call 
    function VT655aomChanges() {
        //create accordion container
        var VT655aomCTAopen = '<div class="cro-AOM-CTA-Container-open">\
                                <div class="cro-AOM-CTA-open">\
                                    <div class="cro-CTA-Content">\
                                        <p>View my personalised offers</p>\
                                    </div>\
                                </div>\
                            </div>'

        var VT655aomCTAclose = '<div class="cro-AOM-CTA-Container-close">\
                                <div class="cro-AOM-CTA-close">\
                                    <div class="cro-CTA-Content">\
                                        <p>Hide my personalised offers</p>\
                                    </div>\
                                </div>\
                            </div>'
        //insert accordion 
        document.querySelector('[data-selector*="recommendations-container-cardlist-cards"]')
        //insert aom CTA 
        var VT655aomComponent = document.querySelector('[data-selector*="recommendations-container-cardlist-cards"]')
        VT655aomComponent.insertAdjacentHTML('beforeBegin', VT655aomCTAopen)
        VT655aomComponent.insertAdjacentHTML('beforeEnd', VT655aomCTAclose)
        VT655aomComponent.classList.add('vt655_close')
        document.querySelector('.cro-AOM-CTA-Container-close').classList.add('vt655_hide')

        //add 'accordion' functionality 
        //OPEN
        document.querySelector('.cro-AOM-CTA-open').addEventListener('click', function () {
            //toggle classes
            VT655aomComponent.classList.toggle('vt655_open')
            VT655aomComponent.classList.toggle('vt655_close')
            document.querySelector('.cro-AOM-CTA-Container-close').classList.toggle('vt655_hide')
            document.querySelector('.cro-AOM-CTA-Container-open').classList.toggle('vt655_hide')
            document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').parentElement.parentElement.querySelector('div:nth-child(2)>div>p').classList.toggle('vt655_hide')
            //TRACKING 
            if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                utag.vfuk_data.event_label = "View personalized offer";
                utag.vfuk_data.event_action = "button";
                utag.view(utag.vfuk_data);
            }
        })

        //CLOSE
        document.querySelector('.cro-AOM-CTA-close').addEventListener('click', function () {
            //toggle classes
            VT655aomComponent.classList.toggle('vt655_open')
            VT655aomComponent.classList.toggle('vt655_close')
            document.querySelector('.cro-AOM-CTA-Container-open').classList.toggle('vt655_hide')
            document.querySelector('.cro-AOM-CTA-Container-close').classList.toggle('vt655_hide')
            document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').parentElement.parentElement.querySelector('div:nth-child(2)>div>p').classList.toggle('vt655_hide')
            //scroll to grid list
            document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').parentElement.parentElement.parentElement.parentElement.children[1].querySelector('h2').scrollIntoView({
                behavior: 'smooth',
            })
            //TRACKING 
            if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                utag.vfuk_data.event_label = "Hide personalized offer";
                utag.vfuk_data.event_action = "button";
                utag.view(utag.vfuk_data);
            }
        })

        //text changes 
        //center header
        document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').classList.add('vt655_center')
        //clone text
        const targetElement = document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').parentElement.parentElement.querySelector('div:nth-child(2)')
        const deepClone = targetElement.cloneNode(true)
        targetElement.appendChild(deepClone)
        //center sub header 
        document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').parentElement.parentElement.querySelector('div:nth-child(2)>p').classList.add('vt655_center')
        //center original sub header
        document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').parentElement.parentElement.querySelector('div:nth-child(2)>p').innerHTML = 'Our best phone and Airtime plan deals with exclusive discounts just for you.'
        //hide cloned element
        document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').parentElement.parentElement.querySelector('div:nth-child(2)>div>p').classList.add('vt655_hide')
        document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').parentElement.parentElement.querySelector('div:nth-child(2)>div>p').style.marginTop = '30px'
        //hide discount banner 
        if (document.querySelector('[data-selector="discount-banner-wrapper"]')) {
            document.querySelector('[data-selector="discount-banner-wrapper"]').classList.add('vt655_hide')
        }
        //center text
        document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').parentElement.parentElement.parentElement.parentElement.children[1].querySelector('h2').classList.add('vt655_center')
        document.querySelector('[data-selector="recommendations-container-cardlist-heading"]').parentElement.parentElement.parentElement.parentElement.children[2].querySelector('div>div>p').classList.add('vt655_center')
    }