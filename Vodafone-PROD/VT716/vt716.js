////POLLING FUNCTION////
//polling function config
var vt716_nodeCheck_pxFuncFired = 0;
var vt716_nodeCheck_pxInterval = setInterval(vt716_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

//polling function
function vt716_nodeCheck_pxPollFunc() {
    vt716_nodeCheck_pxFuncFired += 1;

    if (vt716_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vt716_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt716_nodeCheck_pxInterval);
        //MUTATION OBSERVER
        let vt716_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt716_oldValue = mutation.oldValue;
                let vt716_newValue = mutation.target.textContent;
                if (vt716_oldValue !== vt716_newValue) {
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('#airtimeplans') > -1) {
                        var vt716_customerType_Elem = document.querySelector('[data-customer-type]')
                        if (vt716_customerType_Elem) {
                            var vt716_customerType_Attri = vt716_customerType_Elem.getAttribute('data-customer-type')
                            if (/*vt716_customerType_Attri === 'secondline Consumer' ||*/ vt716_customerType_Attri === 'acquisition Consumer') {
                                var vt716_dataAllowanceContainer = document.querySelector('[data-selector="plans-data-filters"]')
                                if (vt716_dataAllowanceContainer && vt716_dataAllowanceContainer.lastChild.children.length > 3) {
                                    vt716_dataAllowanceContainer.lastChild.children[2].querySelector('span>label').click()
                                    vt716_observer.disconnect()
                                }
                            } else {
                                vt716_observer.disconnect()
                            }
                        }
                    } else {
                        vt716_observer.disconnect()
                    }
                }
            });
        });

        vt716_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        });

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt716_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });
        })
    }
}