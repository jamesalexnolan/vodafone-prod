/////VOXI TEMPLATE/////
    //*1 - polling function to wait for body to return true for node (issue only happens on first instance)
    //*2 - once true, mutation observer applied
    //*3 - Within mutation observer, we use URL conditions for both applying CSS and JS
    ///////NOTE - CSS WILL NEED AN ID TAG ADDED i.e. <style id="vt635-style">
    //*4 - if url conditions not met, CSS and JS not applied, MO is disconnected else MO fires and CSS is applied
    //*5 - using event listener "navigate" we are able to fire the mutation observer again 

    ////POLLING FUNCTION////
    //polling function config
    var vt635_nodeCheck_pxFuncFired = 0;
    var vt635_nodeCheck_pxInterval = setInterval(vt635_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

    //polling function
    function vt635_nodeCheck_pxPollFunc() {
        vt635_nodeCheck_pxFuncFired += 1;

        if (vt635_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vt635_nodeCheck_pxInterval);
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vt635_nodeCheck_pxInterval);
            //MUTATION OBSERVER
            let vt635_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vt635_oldValue = mutation.oldValue;
                    let vt635_newValue = mutation.target.textContent;
                    if (vt635_oldValue !== vt635_newValue) {
                        //CSS URL CONDITION
                        // if (document.location.pathname === 'SOMETHING') {
                        //     document.querySelector('[id="vt635-style"]').innerHTML = ''
                        // } else if (window.location.href.indexOf('SOMETHING') > -1) {
                        //     document.querySelector('[id="vt635-style"]').innerHTML = '/*CSS HERE*/'
                        // }
                        //capture previous page URL 
                        window.navigation.addEventListener('navigate', function (event) {
                            const vt635_previousPageURL = window.location.href
                            console.log(vt635_previousPageURL)

                            const vt635_urlsToMatch = [
                                'https://www.voxi.co.uk/acquisition/students',
                                'https://www.voxi.co.uk/acquisition/plans?planId=112839',
                                'https://www.voxi.co.uk/acquisition/plans?planId=121243',
                                'https://www.voxi.co.uk/acquisition/plans?planId=121245',
                                'https://www.voxi.co.uk/acquisition/plans?planId=119667',
                                'https://www.voxi.co.uk/acquisition/plans?planId=113180',
                                'https://www.voxi.co.uk/acquisition/plans?planId=117009',
                                'https://www.voxi.co.uk/acquisition/plans?planId=119654',
                                'https://www.voxi.co.uk/acquisition/plans?planId=119669'
                            ]

                            if (vt635_urlsToMatch.includes(vt635_previousPageURL)) {
                                localStorage.setItem("previousPageUrlCheck_vt635", "false")
                            } else {
                                localStorage.setItem("previousPageUrlCheck_vt635", "true")
                            }
                        })

                        //MATCH URL CONDITION
                        //get local storage item
                        const vt635_URLCheck = localStorage.getItem("previousPageUrlCheck_vt635")

                        if (window.location.href.indexOf('/acquisition/checkout') > -1 && vt635_URLCheck === "true") {
                            //CODE HERE
                            //target element 
                            var vt635_container = document.querySelector("#order-summary")

                            if (vt635_container && vt635_container) {
                                var vt635_container = document.querySelector("#order-summary")
                                //create new message
                                var vt635_newContainer = '<div class="vt635_order-sum-container" style="background: orange;color: black;display: flex;flex-flow: column;align-items: center;padding: 4px;">\
                                                            <p><strong>50% Off 1st month when you pay with PayPal.</strong></p>\
                                                            <p><strong>Use code PAYPAL at Payment Details. Terms apply.</strong></p>\
                                                        </div>'
                                var vt635_orderSummaryContainer = document.querySelector('.vt635_order-sum-container')
                                if (!vt635_orderSummaryContainer) {
                                    var vt635_orderSummaryContainer = document.querySelector('.vt635_order-sum-container')
                                    vt635_container.insertAdjacentHTML('beforeend', vt635_newContainer)
                                }
                            }
                        } else {
                            vt635_observer.disconnect()
                        }
                    }
                });
            });

            vt635_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                vt635_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                });
            })
        }
    }