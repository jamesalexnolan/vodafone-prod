//polling function config
var vt728_nodeCheck_pxFuncFired = 0
var vt728_nodeCheck_pxInterval = setInterval(vt728_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

//polling function
function vt728_nodeCheck_pxPollFunc() {
    vt728_nodeCheck_pxFuncFired += 1

    if (vt728_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vt728_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt728_nodeCheck_pxInterval)
        //MUTATION OBSERVER
        let vt728_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt728_oldValue = mutation.oldValue
                let vt728_newValue = mutation.target.textContent
                if (vt728_oldValue !== vt728_newValue) {
                    //if (document.querySelector('[data-customer-type="upgrade Consumer"]')) {
                    var windowLocation = window.location
                    if (windowLocation.pathname === '/mobile/phones/pay-monthly-contracts' || windowLocation.href.indexOf('#airtimeplans') > -1 || windowLocation.href.indexOf('#phoneplan') > -1 || windowLocation.href.indexOf('#add-ons') > -1) {
                        vt728_observer.disconnect()
                    } else {
                        var leadPlanContainer = document.querySelector('[data-selector="lead-plan"]')
                        if (leadPlanContainer) {
                            var leadPlanContainer_p = leadPlanContainer.parentElement.parentElement.nextElementSibling
                            leadPlanContainer.remove()
                            leadPlanContainer_p.remove()
                        }
                    }
                    //}
                }
            })
        })

        vt728_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        })

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt728_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })
        })
    }
}