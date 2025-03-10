/////GENERAL TEMPLATE/////
    ////POLLING FUNCTION////
    //polling function config
    var vt764_nodeCheck_pxFuncFired = 0
    var vt764_nodeCheck_pxInterval = setInterval(vt764_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

    //polling function
    function vt764_nodeCheck_pxPollFunc() {
        vt764_nodeCheck_pxFuncFired += 1

        if (vt764_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vt764_nodeCheck_pxInterval);
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vt764_nodeCheck_pxInterval)
            //MUTATION OBSERVER
            let vt764_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vt764_oldValue = mutation.oldValue
                    let vt764_newValue = mutation.target.textContent
                    if (vt764_oldValue !== vt764_newValue) {
                        //pathnames to handle fridlist filtering changes
                        const cro_pathNames = [
                            '/mobile/phones/pay-monthly-contracts',
                            '/mobile/phones/pay-monthly-contracts/apple',
                            '/mobile/phones/pay-monthly-contracts/samsung',
                            '/mobile/phones/pay-monthly-contracts/google',
                            '/mobile/phones/pay-monthly-contracts/motorola',
                            '/mobile/phones/pay-monthly-contracts/honor',
                            '/mobile/phones/pay-monthly-contracts/doro'
                        ]
                        if (cro_pathNames.includes(window.location.pathname)) {
                            removeGridPricing()
                            removeAOMPricing()
                        } else {
                            vt764_observer.disconnect()
                        }
                    }
                })
            })

            vt764_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                vt764_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                })
            })

            //functions to call
            //remove grid pricing
            function removeGridPricing() {
                var cardPricing = document.querySelectorAll('[data-selector^="handset-card-"][data-selector$="-sandwich"]')
                cardPricing.forEach(pricingElement => {
                    var pricingContainer = pricingElement.parentElement.parentElement
                    if (pricingContainer && pricingContainer.children.length > 2) {
                        pricingContainer.parentElement.parentElement.classList.add('cro-layout')
                        Array.from(pricingContainer.children).slice(2).forEach(child => child.remove())
                    }
                })
            }

            //remove AOM pricing if there
            function removeAOMPricing() {
                var aomCard = document.querySelectorAll('[data-selector="aom-card-cta"]')
                if (aomCard) {
                    for (var i = 0; i < aomCard.length; i++) {
                        var aomCardElement = aomCard[i].parentElement.parentElement.parentElement.children[2]
                        if (aomCardElement && aomCardElement.innerHTML.indexOf('Pay only') > -1) {
                            aomCardElement.remove()
                        }
                    }
                }
            }
        }
    }