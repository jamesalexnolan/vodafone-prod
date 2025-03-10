/////VOXI TEMPLATE/////
//*1 - polling function to wait for body to return true for node (issue only happens on first instance)
//*2 - once true, mutation observer applied
//*3 - Within mutation observer, we use URL conditions for both applying CSS and JS
///////NOTE - CSS WILL NEED AN ID TAG ADDED i.e. <style id="vt588-style">
//*4 - if url conditions not met, CSS and JS not applied, MO is disconnected else MO fires and CSS is applied
//*5 - using event listener "navigate" we are able to fire the mutation observer again 

////POLLING FUNCTION////
//polling function config
var vt588_nodeCheck_pxFuncFired = 0;
var vt588_nodeCheck_pxInterval = setInterval(vt588_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

//polling function
function vt588_nodeCheck_pxPollFunc() {
    vt588_nodeCheck_pxFuncFired += 1;

    if (vt588_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vt588_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt588_nodeCheck_pxInterval);
        //MUTATION OBSERVER
        let vt588_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt588_oldValue = mutation.oldValue;
                let vt588_newValue = mutation.target.textContent;
                if (vt588_oldValue !== vt588_newValue) {
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('voxi.co.uk/contact-us') > -1) {
                        window.location = 'https://www.voxi.co.uk/contactus'
                    } else {
                        vt588_observer.disconnect()
                    }
                }
            });
        });

        vt588_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        });

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt588_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });
        })
    }
}


/////VOXI TEMPLATE/////
//*1 - polling function to wait for body to return true for node (issue only happens on first instance)
//*2 - once true, mutation observer applied
//*3 - Within mutation observer, we use URL conditions for both applying CSS and JS
///////NOTE - CSS WILL NEED AN ID TAG ADDED i.e. <style id="vt588-style">
//*4 - if url conditions not met, CSS and JS not applied, MO is disconnected else MO fires and CSS is applied
//*5 - using event listener "navigate" we are able to fire the mutation observer again 

////POLLING FUNCTION////
//polling function config
var vt588_nodeCheck_pxFuncFired = 0;
var vt588_nodeCheck_pxInterval = setInterval(vt588_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

//polling function
function vt588_nodeCheck_pxPollFunc() {
    vt588_nodeCheck_pxFuncFired += 1;

    if (vt588_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vt588_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt588_nodeCheck_pxInterval);
        //MUTATION OBSERVER
        let vt588_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt588_oldValue = mutation.oldValue;
                let vt588_newValue = mutation.target.textContent;
                if (vt588_oldValue !== vt588_newValue) {
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('voxi.co.uk/contactus') > -1) {
                        window.location = 'https://www.voxi.co.uk/contact-us'
                    } else {
                        vt588_observer.disconnect()
                    }
                }
            });
        });

        vt588_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        });

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt588_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });
        })
    }
}