///==========================
/*NEW WAY OF WORKING*/
///==========================

//NO MAX ATTEMPT
function waitForStableDOM(callback, interval = 100) {
    let done = false

    const tryCallback = () => {
        if (!done) {
            done = true
            clearInterval(checkDOM)
            requestIdleCallback(callback, { timeout: 500 })
        }
    }

    const checkDOM = setInterval(() => {
        if (document.readyState === "complete") {
            tryCallback()
        }
    }, interval)
}

//SET MAX ATTEMPT
function waitForStableDOM(callback, maxAttempts = 50 /*set number here*/, interval = 100) { //50*100=5000 = 5 seconds
    let attempts = 0
    let done = false

    const tryCallback = () => {
        if (!done) {
            done = true
            clearInterval(checkDOM)
            requestIdleCallback(callback, { timeout: 500 })
        }
    }

    const checkDOM = setInterval(() => {
        attempts++
        if (document.readyState === "complete") {
            tryCallback()
        } else if (attempts >= maxAttempts) {
            clearInterval(checkDOM)
            console.warn("DOM not loaded")
        }
    }, interval)
}

//CALL BACK FUNC
function runObserverCallbackIfReady() {
    //FUNCTION CALLS GO HERE
}

//MUTATION OBSERVER
function initContentObserver() {
    const contentObserver = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            //optional URL condition to disconnect for SPA
            runObserverCallbackIfReady()
        }
    })

    const config = { childList: true, subtree: true }
    contentObserver.observe(document.body, config)

    runObserverCallbackIfReady()

    //RECONNET ON NVAIGATION
    window.navigation?.addEventListener?.("navigate", (event) => {
        contentObserver.observe?.(document.body, config)
        runObserverCallbackIfReady()
    })
}

waitForStableDOM(initContentObserver)
///==========================
/*NEW WAY OF WORKING === END*/
///==========================



////MUTATION OBSERVER - BODY////
let vtxxx_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let vtxxx_oldValue = mutation.oldValue;
        let vtxxx_newValue = mutation.target.textContent;
        if (vtxxx_oldValue !== vtxxx_newValue) {
            //changes here 
        }
    });
});

vtxxx_observer.observe(document.body, {
    //characterDataOldValue: true,
    subtree: true,
    childList: true,
    //characterData: true
    attributes: true
});

////MUTATION OBSERVER - PARENT ELEMENT////
//mutation observer 
const vtxxxObserver = new MutationObserver((mutationsList, vtxxxObserver) => {
    //check for mutations
    for (const mutation of mutationsList) {
        if (mutation.target.matches('[role="tabpanel"]')) {
            //CHANGES HERE
            console.log('that happened')
        }
    }
});

//define the configuration for the MutationObserver
const vtxxxObserverConfig = {
    childList: true,
    subtree: true,
};

//start observing changes
vtxxxObserver.observe(document.body, vtxxxObserverConfig);

////POLLING FUNCTION////
//polling function config
var vtxxx_pxFuncFired = 0;
var vtxxx_pxInterval = setInterval(vtxxx_pxPollFunc, 100);

//polling function
function vtxxx_pxPollFunc() {
    vtxxx_pxFuncFired += 1;

    if (vtxxx_pxFuncFired >= 20) {
        //try 20 times, if not found clear px func
        clearInterval(vtxxx_pxInterval);
    }

    //target element 
    var TARGET = document.querySelector('TARGET')

    if (TARGET) {
        //clear polling when found
        clearInterval(vtxxx_pxInterval);
        //ACTIONS HERE 
    }
}

////BODY CLICK/////
document.body.addEventListener('click', function (event) {
    if (event.target.closest('[]')) {
        //RUN FUNCTION
    }
})

/////VOXI TEMPLATE/////
/*because we have to run these tests site wide, I've put the below template together to account for that*/
//*1 - polling function to wait for body to return true for node (issue only happens on first instance)
//*2 - once true, mutation observer applied
//*3 - Within mutation observer, we use URL conditions for both applying CSS and JS
/*NOTE - CSS WILL NEED AN ID TAG ADDED i.e. <style id="vtxxx-style">*/
//*4 - if url conditions not met, CSS and JS not applied, MO is disconnected else MO fires and CSS is applied
//*5 - using event listener "navigate" we are able to fire the mutation observer again as someone moves around the site

////POLLING FUNCTION////
//polling function config
var vtxxx_nodeCheck_pxFuncFired = 0;
var vtxxx_nodeCheck_pxInterval = setInterval(vtxxx_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

//polling function
function vtxxx_nodeCheck_pxPollFunc() {
    vtxxx_nodeCheck_pxFuncFired += 1;

    if (vtxxx_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vtxxx_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vtxxx_nodeCheck_pxInterval);
        //MUTATION OBSERVER
        let vtxxx_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vtxxx_oldValue = mutation.oldValue;
                let vtxxx_newValue = mutation.target.textContent;
                if (vtxxx_oldValue !== vtxxx_newValue) {
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('SOMETHING') > -1) {
                        //CSS
                        document.querySelector('[id="vtxxx-style"]').innerHTML = '/*CSS HERE*/'
                        //CODE HERE
                        exampleFunc()
                    } else {
                        //DISCONNECT MO
                        vtxxx_observer.disconnect()
                        //REMOVE CSS
                        document.querySelector('[id="vtxxx-style"]').innerHTML = ''
                    }
                }
            });
        });

        vtxxx_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        });

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vtxxx_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });
        })
    }
}

/////GENERAL TEMPLATE/////
////POLLING FUNCTION////
//polling function config
var vtxxx_nodeCheck_pxFuncFired = 0
var vtxxx_nodeCheck_pxInterval = setInterval(vtxxx_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

//polling function
function vtxxx_nodeCheck_pxPollFunc() {
    vtxxx_nodeCheck_pxFuncFired += 1

    if (vtxxx_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vtxxx_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vtxxx_nodeCheck_pxInterval)
        //MUTATION OBSERVER
        let vtxxx_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vtxxx_oldValue = mutation.oldValue
                let vtxxx_newValue = mutation.target.textContent
                if (vtxxx_oldValue !== vtxxx_newValue) {
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('SOMETHING') > -1) {
                        //HANDSET EXAMPLE  if (windowLocation.pathname === '/mobile/phones/pay-monthly-contracts' || windowLocation.href.indexOf('#airtimeplans') > -1 || windowLocation.href.indexOf('#phoneplan') > -1 || windowLocation.href.indexOf('#add-ons') > -1) {

                        //CODE HERE
                    } else {
                        vtxxx_observer.disconnect()
                    }
                }
            })
        })

        vtxxx_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        })

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vtxxx_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })

            // //stop MO after 2 seconds
            // setTimeout(() => {
            //     vt728_observer.disconnect()
            // }, 2000);
        })

        // //stop MO after 2 seconds
        // setTimeout(() => {
        //     vtxxx_observer.disconnect()
        // }, 2000);
    }
}

////PLACE HOLDER IMG////
//https://loremflickr.com/320/240


//DEBOUNCING (MO STOP CHECK)
let mutationHappened = false

let vtxxx_observerDeBounce = new MutationObserver((mutations) => {
    mutationHappened = true
})

// Start observing
vtxxx_observerDeBounce.observe(document.body, {
    subtree: true,
    childList: true,
    attributes: true
});

// Create an event loop to check when mutations stop
let checkForNoMutations = new MutationObserver(() => {
    if (mutationHappened) {
        mutationHappened = false
    } else {
        console.log("No more mutations. Disconnecting observer.")
        vtxxx_observerDeBounce.disconnect()
        checkForNoMutations.disconnect()
        runYourCode()
    }
});

// Observe the document to detect when the DOM settles
checkForNoMutations.observe(document, {
    childList: true,
    subtree: true,
    attributes: true
})

function runYourCode() {
    console.log("Executing code after mutations stop.")
}

//LIGHTER BODY MO 
////POLLING FUNCTION////
//polling function config
var vtxxx_nodeCheck_pxFuncFired = 0
var vtxxx_nodeCheck_pxInterval = setInterval(vtxxx_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

//polling function
function vtxxx_nodeCheck_pxPollFunc() {
    vtxxx_nodeCheck_pxFuncFired += 1

    if (vtxxx_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vtxxx_nodeCheck_pxInterval)
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vtxxx_nodeCheck_pxInterval)
        //MUTATION OBSERVER
        //mutation observer 
        const contentObserver = new MutationObserver((mutationsList, contentObserver) => {
            //check for mutations
            for (const mutation of mutationsList) {
                if (window.location.href.indexOf('voxi.co.uk/acquisition/checkout') > -1) {
                    if (mutation.target.matches("body")) {
                        //code here
                    }
                } else {
                    contentObserver.disconnect()
                }
            }
        })

        //define the configuration for the MutationObserver
        const contentObserverConfig = {
            childList: true,
            subtree: true,
        }

        //start observing changes
        contentObserver.observe(document.body, contentObserverConfig)

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            const contentObserverConfig = {
                childList: true,
                subtree: true,
            }
            contentObserver.observe(document.body, contentObserverConfig)
        })
    }
}