/////VOXI TEMPLATE/////
    //*1 - polling function to wait for body to return true for node (issue only happens on first instance)
    //*2 - once true, mutation observer applied
    //*3 - Within mutation observer, we use URL conditions for both applying CSS and JS
    ///////NOTE - CSS WILL NEED AN ID TAG ADDED i.e. <style id="vt621-style">
    //*4 - if url conditions not met, CSS and JS not applied, MO is disconnected else MO fires and CSS is applied
    //*5 - using event listener "navigate" we are able to fire the mutation observer again 

    ////POLLING FUNCTION////
    //polling function config
    var vt621_nodeCheck_pxFuncFired = 0;
    var vt621_nodeCheck_pxInterval = setInterval(vt621_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

    //polling function
    function vt621_nodeCheck_pxPollFunc() {
        vt621_nodeCheck_pxFuncFired += 1;

        if (vt621_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vt621_nodeCheck_pxInterval);
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vt621_nodeCheck_pxInterval);
            //MUTATION OBSERVER
            let vt621_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vt621_oldValue = mutation.oldValue;
                    let vt621_newValue = mutation.target.textContent;
                    if (vt621_oldValue !== vt621_newValue) {
                        //CSS URL CONDITION
                        if (document.location.pathname === "/sim-only-plans" && document.querySelector('[id="vt621-style"]').innerHTML === '') {
                            document.querySelector('[id="vt621-style"]').innerHTML = '        /* choose plan button */    .vt621_button_1_Styling {        background: white !important;        color: black !important;        border-radius: 8px !important;        font-weight: 600;    }    /* adjust border color */    #plans-offers>div>div {        border-color: #F28705 !important;        border-radius: 8px 8px 8px 8px;        background: #262525;    }    #plans-offers>div>div:nth-of-type(2) {        border-color: #F28705 !important;        border-radius: 0px 8px 8px 8px;        background: #262525;    }    /* flag adjustment */    .vt621_flag_styling {        background: #F28705 !important;        border-radius: 8px 8px 0px 0px !important;    }    .vt621_flag_styling_p {        color: black !important    }    .vt621_border-radius {        border-radius: 8px !important;    }    /*pill styling*/    .vt621_pill {        padding: 5px 12px 5px 12px;        background: #045E7A;        color: white;        font-weight: 500;        border-radius: 10%/60%;        font-size: 14px;    }    .vt621_pill-small-border {        border-radius: 15%/60%;    }    .vt621_pill_flex {        display: flex;        justify-content: end;        margin-right: 20px;    }    /*mobile styling*/    @media only screen and (max-width: 640px) {        .vt621_pill {            font-weight: 500;        }    }'
                        } else if (window.location.href.indexOf('phones/') > -1 || document.location.pathname === "/acquisition/students" || document.location.pathname === "/acquisition/plans") {
                            document.querySelector('[id="vt621-style"]').innerHTML = ''
                        }

                        //MATCH URL CONDITION
                        if (document.location.pathname === "/sim-only-plans") {
                            var pxFuncFired = 0;
                            var pxInterval = setInterval(pxPollFunc, 100);

                            //polling function
                            function pxPollFunc() {
                                pxFuncFired += 1;

                                if (pxFuncFired >= 2) {
                                    //try 20 times, if not found clear px func
                                    clearInterval(pxInterval);
                                }

                                //card styling
                                var vt621_card = document.querySelectorAll('#plans-offers > div > div')

                                if (vt621_card.length > 1) {
                                    //clear polling
                                    clearInterval(pxInterval)
                                    //flag updates
                                    for (var i = 0; i < vt621_card.length; i++) {
                                        if (vt621_card[i].innerText.length < 21 && vt621_card[i].innerText.length > 0) {
                                            //add flag styling
                                            vt621_card[i].classList.add('vt621_flag_styling')
                                            vt621_card[i].firstChild.classList.add('vt621_flag_styling_p')
                                        }
                                    }

                                    //add pill 
                                    var vt621_flagForCloseTarget = document.querySelectorAll('.vt621_flag_styling')
                                    if (!document.querySelector('.vt621_pill_flex')) {
                                        for (var i = 0; i < vt621_flagForCloseTarget.length; i++) {
                                            var vt621_insertElem = vt621_flagForCloseTarget[i].nextElementSibling.firstChild
                                            var vt621_pill = '<div spacing="3" class="SimpleGridstyle__SimpleGridColumn-sc-1kko36n-1 jBlnYs"><div class="Spacingstyle__Spacing-sc-14allya-0 dkENuf vt621_pill_flex"><div data-component-name="SimpleGrid" spacing="0" class="SimpleGridstyle__SimpleGrid-sc-1kko36n-0 jCaxVn"><div class="vt621_pill-container"><div class="vt621_pill"><p></p></div></div></div></div></div>'
                                            vt621_insertElem.insertAdjacentHTML('afterbegin', vt621_pill)
                                        }
                                    }

                                    //add pill - promotion alt work around
                                    var vt621_titleCheck = document.querySelectorAll('[data-component-name="Heading"]')[18]
                                    if (vt621_titleCheck && vt621_titleCheck.innerText === 'Unlimited Social + Music + Video') {
                                        if (!document.querySelectorAll('[data-component-name="Heading"]')[18].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.vt621_pill_flex')) {
                                            var vt621_insertElem_noFlag = document.querySelectorAll('[data-component-name="Heading"]')[18].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild
                                            var vt621_pill = '<div spacing="3" class="SimpleGridstyle__SimpleGridColumn-sc-1kko36n-1 jBlnYs"><div class="Spacingstyle__Spacing-sc-14allya-0 dkENuf vt621_pill_flex"><div data-component-name="SimpleGrid" spacing="0" class="SimpleGridstyle__SimpleGrid-sc-1kko36n-0 jCaxVn"><div class="vt621_pill-container"><div class="vt621_pill"><p></p></div></div></div></div></div>'
                                            vt621_insertElem_noFlag.insertAdjacentHTML('afterbegin', vt621_pill)
                                        }
                                    }

                                    //change pill text
                                    if (document.querySelectorAll('.vt621_pill').length === 3) {
                                        if (document.querySelectorAll('.vt621_pill>p')[2] && document.querySelectorAll('.vt621_pill>p')[2].innerHTML === '') {
                                            document.querySelectorAll('.vt621_pill')[0].innerHTML = 'Our best seller'
                                            document.querySelectorAll('.vt621_pill')[0].classList.add('vt621_pill-small-border')
                                            document.querySelectorAll('.vt621_pill')[1].innerHTML = 'Great for Spotify lovers'
                                            document.querySelectorAll('.vt621_pill')[2].innerHTML = 'Great for TikTok lovers'
                                        }
                                    }

                                    //CTA updates
                                    var vt621_btns = document.querySelectorAll('[class*="Interactionstyle__Button-sc"]')
                                    for (var i = 0; i < vt621_btns.length; i++) {

                                        if (vt621_btns[i] && vt621_btns[i].innerHTML === 'Choose this plan')
                                            vt621_btns[i].classList.add('vt621_button_1_Styling')
                                    }
                                }
                            }
                        } else {
                            vt621_observer.disconnect()
                        }
                    }
                });
            });

            vt621_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                vt621_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                });
            })
        }
    }