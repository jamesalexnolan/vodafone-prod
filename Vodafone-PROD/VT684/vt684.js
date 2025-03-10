////POLLING FUNCTION////
    //polling function config
    var vt684_nodeCheck_pxFuncFired = 0;
    var vt684_nodeCheck_pxInterval = setInterval(vt684_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

    //polling function
    function vt684_nodeCheck_pxPollFunc() {
        vt684_nodeCheck_pxFuncFired += 1

        if (vt684_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vt684_nodeCheck_pxInterval)
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vt684_nodeCheck_pxInterval)
            //MUTATION OBSERVER
            let vt684_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vt684_oldValue = mutation.oldValue
                    let vt684_newValue = mutation.target.textContent
                    if (vt684_oldValue !== vt684_newValue) {
                        //MATCH URL CONDITION
                        if (window.location.href.indexOf('#add-ons') > -1 || window.location.href.indexOf('#airtimeplans') > -1 || window.location.href.indexOf('#phoneplan') > -1) {
                            vt684_observer.disconnect()
                        } else {
                            var vt684_riverContent = document.querySelector('.cro_river_content_container')
                            if (!vt684_riverContent) {
                                vt684_riverCards()
                            }
                        }
                    }
                });
            });

            vt684_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                vt684_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                })
            })
        }
    }

    function vt684_riverCards() {
        var vt684_headers = document.querySelectorAll('[data-component-name="Heading"]')
        var vt684_componentCards = '<div class="cro_river_content_container">\
        <div class="cro_river_content_cards">\
            <!--Card 1-->\
            <div class="cro_river_content_card">\
                <div class="cro_river_card_img">\
                    <img src="https://images.vodafone.co.uk/gbnnsauqav4t/5ISnb2KM51fG9bPWPnLThE/0b0b1955c3b9a30bebbe9fb0371d08f9/0-APR-C-small.jpg">\
                </div>\
                <div class="cro_river_card_text">\
                    <h5>0% APR Phone Plans</h5>\
                    <p>0% APR phone Plans up to 36 months and your choice of flexible upfront costs.</p>\
                    <a href="https://www.vodafone.co.uk/mobile/vodafone-evo" target="_blank">See Vodafone EVO ></a>\
                </div>\
            </div>\
            <!--Card 2-->\
            <div class="cro_river_content_card">\
                <div class="cro_river_card_img">\
                    <img src="https://images.vodafone.co.uk/gbnnsauqav4t/6xlPtInx47yl6AzIwVHX4o/6d31bb5a6ccabef6ce28dbdf348f8541/deals-and-offers-C-small.jpg">\
                </div>\
                <div class="cro_river_card_text">\
                    <h5>Big deals on The Nation\'s Network</h5>\
                    <p>Shop a range of offers on plans, phones, tablets, smartwatches and more on The Nation\'s Network.</p>\
                    <a href="https://www.vodafone.co.uk/mobile/deals-and-offers" target="_blank">See our summer offers ></a>\
                </div>\
            </div>\
            <!--Card 3-->\
            <div class="cro_river_content_card">\
                <div class="cro_river_card_img">\
                    <img src="https://images.vodafone.co.uk/gbnnsauqav4t/4pkI0l2L5w1I7aXtKo32Xp/1ac7a44c46c2c99578eba4eed982b6ff/google-pixel-watch-C-small.jpg">\
                </div>\
                <div class="cro_river_card_text">\
                    <h5>Shop the Google Pixel Watch collection</h5>\
                    <p>Check out our latest deals on the Google Pixel Watch range.</p>\
                    <a href="https://www.vodafone.co.uk/smart-watches-and-wearables/google" target="_blank">Buy Google Pixel Watch ></a>\
                </div>\
            </div>\
        </div>\
    </div>'
        var vt684_newComponent = document.querySelector('.cro_river_content_container')
        for (var i = 0; i < vt684_headers.length; i++) {
            if (vt684_headers[i].innerHTML === 'Key features') {
                vt684_headers[i].parentElement.insertAdjacentHTML('beforebegin', vt684_componentCards)
            }
        }
    }