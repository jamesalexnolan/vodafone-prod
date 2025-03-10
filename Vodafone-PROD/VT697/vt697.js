/////GENERAL TEMPLATE/////
    ////POLLING FUNCTION////
    //polling function config
    var vt697_nodeCheck_pxFuncFired = 0
    var vt697_nodeCheck_pxInterval = setInterval(vt697_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

    //polling function
    function vt697_nodeCheck_pxPollFunc() {
        vt697_nodeCheck_pxFuncFired += 1

        if (vt697_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vt697_nodeCheck_pxInterval);
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vt697_nodeCheck_pxInterval)
            //MUTATION OBSERVER
            let vt697_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vt697_oldValue = mutation.oldValue
                    let vt697_newValue = mutation.target.textContent
                    if (vt697_oldValue !== vt697_newValue) {
                        if (document.querySelector('[data-selector*="recommendations-container-cardlist-cards"]')) {
                            if (document.querySelector('[data-selector*="recommendations-container-cardlist-cards"]>div>div>div').children.length > 1) {
                                if (!document.querySelector('.cro-CTA-Content')) {
                                    vt697AomCTA()
                                    vt697_observer.disconnect()
                                }
                            } else {
                                vt697_observer.disconnect()
                            }
                        }
                    }
                })
            })

            vt697_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })

            //disconnect after 5 seconds
            setTimeout(() => {
                if (!document.querySelector('[data-selector*="recommendations-container-cardlist-cards"]')) {
                    vt697_observer.disconnect()
                }
            }, 5000);

            function vt697AomCTA() {
                //insert CTA 
                var vt697aomCTAclose = '<div class="cro-AOM-CTA-Container-close">\
                                <div class="cro-AOM-CTA-close">\
                                    <div class="cro-CTA-Content">\
                                        <p></p>\
                                    </div>\
                                </div>\
                            </div>'
                //insert aom CTA 
                var vt697aomComponent = document.querySelector('[data-selector*="recommendations-container-cardlist-cards"]')
                vt697aomComponent.insertAdjacentHTML('beforeEnd', vt697aomCTAclose)
                //add classes
                var vt697aomCards = document.querySelector('[data-selector*="recommendations-container-cardlist-cards"]>div>div>div').children
                vt697aomCards[0].parentElement.classList.add('cro-AOM-Card_centering')
                for (var i = 1; i < vt697aomCards.length; i++) {
                    vt697aomCards[i].classList.add('vt697_hide')
                }
                //handle clicks on CTA 
                var vt697CTA = document.querySelector('.cro-AOM-CTA-Container-close')
                var vt697CTAp = vt697CTA.querySelector('p')
                var vt697Header = document.querySelector('[data-selector="recommendations-container-cardlist-heading"]')
                //add text
                vt697CTAp.classList.add('view-offers-cta_content')
                vt697CTA.addEventListener('click', function () {
                    //toggle hide/display class 
                    //toggle centering class
                    vt697aomCards[0].parentElement.classList.toggle('cro-AOM-Card_centering')
                    for (var i = 1; i < vt697aomCards.length; i++) {
                        vt697aomCards[i].classList.toggle('vt697_hide')
                    }
                    //change text of CTA
                    vt697CTAp.classList.toggle('view-offers-cta_content')
                    vt697CTAp.classList.toggle('hide-offers-cta_content')
                    //scroll for closing
                    if (vt697CTAp.classList.contains('view-offers-cta_content')) {
                        //scroll to grid list
                        vt697Header.parentElement.parentElement.parentElement.parentElement.children[1].querySelector('h2').scrollIntoView({
                            behavior: 'smooth',
                        })
                        //tracking
                        if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                            utag.vfuk_data.event_label = "Hide my personalised offers";
                            utag.vfuk_data.event_action = "button";
                            utag.view(utag.vfuk_data);
                        }
                    }
                    //scroll for opening
                    if (vt697CTAp.classList.contains('hide-offers-cta_content')) {
                        //scroll to AOM
                        vt697Header.scrollIntoView({
                            behavior: 'smooth',
                        })
                        //tracking
                        if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                            utag.vfuk_data.event_label = "View my personalised offers";
                            utag.vfuk_data.event_action = "button";
                            utag.view(utag.vfuk_data);
                        }
                    }
                })
            }
        }
    }