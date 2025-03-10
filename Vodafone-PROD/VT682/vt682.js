/////VOXI TEMPLATE/////
    //*1 - polling function to wait for body to return true for node (issue only happens on first instance)
    //*2 - once true, mutation observer applied
    //*3 - Within mutation observer, we use URL conditions for both applying CSS and JS
    ///////NOTE - CSS WILL NEED AN ID TAG ADDED i.e. <style id="vt682-style">
    //*4 - if url conditions not met, CSS and JS not applied, MO is disconnected else MO fires and CSS is applied
    //*5 - using event listener "navigate" we are able to fire the mutation observer again 

    ////POLLING FUNCTION////
    //polling function config
    var vt682_nodeCheck_pxFuncFired = 0
    var vt682_nodeCheck_pxInterval = setInterval(vt682_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

    //polling function
    function vt682_nodeCheck_pxPollFunc() {
        vt682_nodeCheck_pxFuncFired += 1

        if (vt682_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vt682_nodeCheck_pxInterval)
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vt682_nodeCheck_pxInterval)
            //MUTATION OBSERVER
            let vt682_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vt682_oldValue = mutation.oldValue
                    let vt682_newValue = mutation.target.textContent
                    if (vt682_oldValue !== vt682_newValue) {
                        //MATCH URL CONDITION
                        window.navigation.addEventListener('navigate', function (event) {
                            const vt682_previousPageURL = window.location.href

                            const vt682_urlsToMatch = [
                                'https://www.voxi.co.uk/acquisition/students',
                                'https://www.voxi.co.uk/acquisition/plans?planId=112839',
                                'https://www.voxi.co.uk/acquisition/plans?planId=121243',
                                'https://www.voxi.co.uk/acquisition/plans?planId=121245',
                                'https://www.voxi.co.uk/acquisition/plans?planId=119667',
                                'https://www.voxi.co.uk/acquisition/plans?planId=113180',
                                'https://www.voxi.co.uk/acquisition/plans?planId=117009',
                                'https://www.voxi.co.uk/acquisition/plans?planId=119654',
                                'https://www.voxi.co.uk/acquisition/plans?planId=119669',
                                'https://www.voxi.co.uk/acquisition/plans?planId=119671',
                                'https://www.voxi.co.uk/acquisition/plans?planId=121247',
                                'https://www.voxi.co.uk/acquisition/plans?planId=117010',
                                'https://www.voxi.co.uk/acquisition/plans?planId=121298',
                                'https://www.voxi.co.uk/acquisition/plans?planId=121299',
                                'https://www.voxi.co.uk/acquisition/plans?planId=121301',
                                'https://www.voxi.co.uk/acquisition/plans?planId=121295'
                            ]

                            if (vt682_urlsToMatch.includes(vt682_previousPageURL)) {
                                localStorage.setItem("previousPageUrlCheck_vt682", "false")
                            } else {
                                localStorage.setItem("previousPageUrlCheck_vt682", "true")
                            }
                        })

                        //get local storage item
                        const vt682_URLCheck = localStorage.getItem("previousPageUrlCheck_vt682")

                        if (window.location.href.indexOf('/acquisition/checkout') > -1 && vt682_URLCheck === "true") {
                            //CODE HERE
                            var vt682_container = document.querySelector("#order-summary")
                            if (vt682_container) {
                                //fire funcs
                                VT682CheckoutChanges()
                                vt682_observer.disconnect()
                            }
                        } else {
                            vt682_observer.disconnect()
                        }
                    }
                })
            })

            vt682_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                localStorage.setItem("paymentChangeMade_vt682", "0")
                //start observing again
                vt682_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                })
            })
        }
    }

    //functions to call 
    function VT682CheckoutChanges() {
        //PAYMENT CHANGES
        //click event to trigger polling function
        document.body.addEventListener('click', function (event) {
            if (event.target.closest('[aria-label="Continue"]')) {
                //only run on password
                ////POLLING FUNCTION////
                //polling function config
                var vt682_passwordChecker_pxFuncFired = 0
                var vt682_passwordChecker_pxInterval = setInterval(vt682_passwordChecker_pxPollFunc, 50)

                //polling function
                function vt682_passwordChecker_pxPollFunc() {
                    vt682_passwordChecker_pxFuncFired += 1

                    if (vt682_passwordChecker_pxFuncFired >= 10) {
                        //try 20 times, if not found clear px func
                        clearInterval(vt682_passwordChecker_pxInterval)
                    }

                    var vt682_continue = document.querySelector('[aria-label="Continue"]')

                    //target element 

                    if (vt682_continue) {
                        //clear polling when found
                        clearInterval(vt682_passwordChecker_pxInterval)
                        //ACTIONS HERE 
                        var vt682_buttonTitle = vt682_continue.parentElement.parentElement.parentElement.parentElement.firstChild
                        if (vt682_buttonTitle?.innerText === 'Set a password') {
                            if (localStorage.getItem("paymentChangeMade_vt682") === '1') {
                                localStorage.setItem("paymentChangeMade_vt682", "0")
                            }
                            vt682_paymentChanges()
                        }
                    }
                }
            }
            //clicks on edit button to fire Payment changes function
            if (event.target.closest('[data-component-name="Link"]')) {
                if (event.target.closest('[data-component-name="Link"]') && event.target.closest('[data-component-name="Link"]').parentElement.innerText.indexOf('Payment details') > -1) {
                    if (localStorage.getItem("paymentChangeMade_vt682") === '1') {
                        localStorage.setItem("paymentChangeMade_vt682", "0")
                    }
                    vt682_paymentChanges()
                }
            }
        })
    }

    function vt682_paymentChanges() {
        ////POLLING FUNCTION////
        //polling function config
        var vt582_pxFuncFired = 0
        var vt582_pxInterval = setInterval(vt582_pxPollFunc, 100)

        //polling function
        function vt582_pxPollFunc() {
            vt582_pxFuncFired += 1

            if (vt582_pxFuncFired >= 20) {
                //try 20 times, if not found clear px func
                clearInterval(vt582_pxInterval)
            }

            if (document.querySelector('[for="paypalRadio"]')) {
                //clear polling when found
                clearInterval(vt582_pxInterval)
                //ACTIONS HERE 
                if (localStorage.getItem("paymentChangeMade_vt682") === null) {
                    localStorage.setItem("paymentChangeMade_vt682", "0")
                }

                if (localStorage.getItem("paymentChangeMade_vt682") === '0') {
                    vt682PayPalDefault()
                }
            }
        }

        function vt682PayPalDefault() {
            //select PayPal
            document.querySelector('[for="paypalRadio"]').click(vt582PollForElm())

            function vt582PollForElm() {
                ////POLLING FUNCTION////
                //polling function config
                var vt582_pxFuncFired = 0
                var vt582_pxInterval = setInterval(vt582_pxPollFunc, 100)

                //polling function
                function vt582_pxPollFunc() {
                    vt582_pxFuncFired += 1

                    if (vt582_pxFuncFired >= 20) {
                        //try 20 times, if not found clear px func
                        clearInterval(vt582_pxInterval)
                    }

                    if (document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div> div > div > ul > li:nth-child(4) > div > div:nth-child(2) > div:nth-child(4) > div")) {
                        //clear polling when found
                        clearInterval(vt582_pxInterval)
                        ///CTA BANNER NEEDS TO GO HERE
                        var vt682PayPalCTACheck = document.querySelector('[id="paypalRadio-radio"]')
                        //move banner
                        vt682PayPalCTACheck.parentElement.insertBefore(document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div> div > div > ul > li:nth-child(4) > div > div:nth-child(2) > div:nth-child(4) > div"), document.querySelector('[id="paypalRadio-radio"]').nextSibling)
                        vt682PayPalCTACheck.nextSibling.querySelector('p').parentElement.innerHTML = '<div class="vt682-content"><p><strong>50% off your first month when you pay with PayPal.</strong></p><p>Use code PAYPAL50 below and click apply.<a class="vt682-content-link">Copy code</a> </p></div>'
                        //copy function
                        document.querySelector('.vt682-content-link').addEventListener('click', function () {
                            var tempElement = document.createElement('textarea')
                            tempElement.value = 'PAYPAL50'
                            document.body.appendChild(tempElement)
                            tempElement.select()
                            document.execCommand('copy')
                            document.body.removeChild(tempElement)
                        })
                    }
                }
            }

            //change header text
            if (document.querySelector('[aria-live="assertive"]')) {
                document.querySelector('[aria-live="assertive"]>div').remove()
                document.querySelectorAll('[data-component-name="StateNotification"]')[0].parentElement.classList.add('vt682Border')
            }

            //open promo code
            if (window.getComputedStyle(document.querySelector('[id="add-promo-code"]')).display === 'none') {
                document.querySelector('[id="add-promo-code-wrapper"]>button').click()
            }

            //move promo code
            var vt682PromoElem = document.querySelector('[id="add-promo-code-wrapper"]')
            var vt682TargetElem = document.querySelector('[id="paypalRadio-radio"]').parentElement
            vt682TargetElem.appendChild(vt682PromoElem)

            function PayPalSelection() {
                ////MUTATION OBSERVER - PARENT ELEMENT////
                //mutation observer 
                const vt582Observer = new MutationObserver((mutationsList, vt582Observer) => {
                    //check for mutations
                    for (const mutation of mutationsList) {
                        if (mutation.target.matches('[data-testid="step-content"]')) {
                            //CHANGES HERE
                            var vt682PayPalelement = document.querySelector('[for="paypalRadio"]')
                            var vt682CtaBGCCHeck = window.getComputedStyle(vt682PayPalelement, '::after').opacity
                            var vt682PayPalCTACheck = document.querySelector('[id="paypalRadio-radio"]')

                            if (vt682PayPalCTACheck) {
                                if (vt682CtaBGCCHeck === '0') {
                                    //document.querySelector('[id="voucherCode"]').value = 'PAYPAL'
                                    ///CTA BANNER NEEDS TO GO HERE
                                    if (document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div> div > div > ul > li:nth-child(4) > div > div:nth-child(2) > div:nth-child(4) > div")) {
                                        //move banner
                                        vt682PayPalCTACheck.parentElement.insertBefore(document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div> div > div > ul > li:nth-child(4) > div > div:nth-child(2) > div:nth-child(4) > div"), document.querySelector('[id="paypalRadio-radio"]').nextSibling)
                                        vt682PayPalCTACheck.nextSibling.querySelector('p').parentElement.innerHTML = '<div class="vt682-content"><p><strong>50% off your first month when you pay with PayPal.</strong></p><p>Use code PAYPAL50 below and click apply.<a class="vt682-content-link">Copy code</a> </p></div>'
                                        //copy function
                                        document.querySelector('.vt682-content-link').addEventListener('click', function () {
                                            var tempElement = document.createElement('textarea')
                                            tempElement.value = 'PAYPAL50'
                                            document.body.appendChild(tempElement)
                                            tempElement.select()
                                            document.execCommand('copy')
                                            document.body.removeChild(tempElement)
                                        })
                                    }
                                } else {
                                    document.querySelector('[id="voucherCode"]').value = ''
                                    var vt682NextElementChecker = vt682PayPalCTACheck.nextElementSibling
                                    if (vt682NextElementChecker.classList.toString().indexOf('Spacingstyle__Spacing-sc') > -1) {
                                        vt682PayPalCTACheck.nextElementSibling.remove()
                                    }
                                }
                            }
                        }
                    }
                })

                //define the configuration for the MutationObserver
                const vt582ObserverConfig = {
                    childList: true,
                    subtree: true,
                }

                //start observing changes
                vt582Observer.observe(document.body, vt582ObserverConfig)

                //event listener to stop MO if move backwards
                document.body.addEventListener('click', function (event) {
                    if (event.target.closest('[data-component-name="Link"]') && event.target.closest('[data-component-name="Link"]').innerHTML === 'Edit') {
                        vt582Observer.disconnect()
                        localStorage.setItem("paymentChangeMade_vt682", "0")
                    }
                })
            }
            //run function in first instance
            PayPalSelection()
            localStorage.setItem("paymentChangeMade_vt682", "1")
        }
    }