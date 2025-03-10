/////VOXI TEMPLATE/////
/*because we have to run these tests site wide, I've put the below template together to account for that*/
//*1 - polling function to wait for body to return true for node (issue only happens on first instance)
//*2 - once true, mutation observer applied
//*3 - Within mutation observer, we use URL conditions for both applying CSS and JS
/*NOTE - CSS WILL NEED AN ID TAG ADDED i.e. <style id="vt759-style">*/
//*4 - if url conditions not met, CSS and JS not applied, MO is disconnected else MO fires and CSS is applied
//*5 - using event listener "navigate" we are able to fire the mutation observer again as someone moves around the site

////POLLING FUNCTION////
//polling function config
var vt759_nodeCheck_pxFuncFired = 0;
var vt759_nodeCheck_pxInterval = setInterval(vt759_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

//polling function
function vt759_nodeCheck_pxPollFunc() {
    vt759_nodeCheck_pxFuncFired += 1;

    if (vt759_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vt759_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt759_nodeCheck_pxInterval);
        //MUTATION OBSERVER
        let vt759_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt759_oldValue = mutation.oldValue;
                let vt759_newValue = mutation.target.textContent;
                if (vt759_oldValue !== vt759_newValue) {
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('/sim-only-plans') > -1) {
                        updateCTAText()
                    } else {
                        //DISCONNECT MO
                        vt759_observer.disconnect()
                    }
                }
            });
        });

        vt759_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        });

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt759_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });
        })

        //function 
        function updateCTAText() {
            var simoCTAs = document.querySelectorAll('[aria-label="Choose this plan"]')
            if (simoCTAs) {
                for (var i = 0; i < simoCTAs.length; i++) {
                    if (simoCTAs[i].innerHTML === 'Choose this plan') {
                        simoCTAs[i].innerHTML = 'Buy this plan'
                    }
                }
            }
        }
    }
}