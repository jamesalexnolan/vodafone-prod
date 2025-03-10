/////VOXI TEMPLATE/////
//*1 - polling function to wait for body to return true for node (issue only happens on first instance)
//*2 - once true, mutation observer applied
//*3 - Within mutation observer, we use URL conditions for both applying CSS and JS
///////NOTE - CSS WILL NEED AN ID TAG ADDED i.e. <style id="vt654-style">
//*4 - if url conditions not met, CSS and JS not applied, MO is disconnected else MO fires and CSS is applied
//*5 - using event listener "navigate" we are able to fire the mutation observer again 

////POLLING FUNCTION////
//polling function config
var vt654_nodeCheck_pxFuncFired = 0;
var vt654_nodeCheck_pxInterval = setInterval(vt654_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

//polling function
function vt654_nodeCheck_pxPollFunc() {
    vt654_nodeCheck_pxFuncFired += 1;

    if (vt654_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vt654_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt654_nodeCheck_pxInterval);
        //MUTATION OBSERVER
        let vt654_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt654_oldValue = mutation.oldValue;
                let vt654_newValue = mutation.target.textContent;
                if (vt654_oldValue !== vt654_newValue) {
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('voxi.co.uk/acquisition/checkout') > -1) {
                        //CODE HERE
                        vt654Changes()
                        vt654header()
                        vt654_observer.disconnect()
                    } else {
                        vt654_observer.disconnect()
                    }
                }
            });
        });

        vt654_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        });

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt654_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });
        })
    }
}

//FUNCTIONS TO CALL
function vt654header() {
    ////POLLING FUNCTION////
    //polling function config
    var vt610_pxFuncFired = 0;
    var vt610_pxInterval = setInterval(vt610_pxPollFunc, 100);

    //polling function
    function vt610_pxPollFunc() {
        vt610_pxFuncFired += 1;

        if (vt610_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vt610_pxInterval);
            console.log('not fired')
        }

        //target element 
        var vt610_header = document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(2) > div > h1")

        if (vt610_header) {
            //clear polling when found
            clearInterval(vt610_pxInterval);
            //hide header 
            var vt654_header = document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(2) > div > h1")
            if (vt654_header && !document.querySelector('.vt654_container')) {
                vt654_header.style.display = 'none'
                document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(2) > div > p").innerHTML = 'Fill in your details below.'
                //insert secure checkout element
                var vt654_banner = document.querySelector("#root > div > div:nth-child(3) > div > header > div > div > div")
                //adjust logo
                document.querySelector("#root > div > div:nth-child(3) > div > header > div > div > div > a").style.flex = '1'
                //add secure checkout
                var vt654_secure_checkout = '<div class="vt654_container" style="display: flex;width: 100%; justify-content: center;"><p style="justify-content: center;align-items: center;display: flex;">Secure Checkout<span><svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 8px;"><path d="M12.4876 15.2614C12.4876 14.9853 12.2637 14.7614 11.9876 14.7614C11.7114 14.7614 11.4876 14.9853 11.4876 15.2614H12.4876ZM11.4876 17.1965C11.4876 17.4726 11.7114 17.6965 11.9876 17.6965C12.2637 17.6965 12.4876 17.4726 12.4876 17.1965H11.4876ZM15.4913 6.34414H14.9913H15.4913ZM11.9875 3V2.5V3ZM8.48379 6.34414H8.98379H8.48379ZM19.4988 9.59305L19.9988 9.59298L19.9987 9.09305H19.4988V9.59305ZM19.5 19.0959H20V19.0958L19.5 19.0959ZM4.5 9.59306V9.09306H4L4 9.59306L4.5 9.59306ZM11.4876 15.2614V17.1965H12.4876V15.2614H11.4876ZM12.9052 13.9202C12.9052 14.3631 12.5222 14.7614 12 14.7614V15.7614C13.03 15.7614 13.9052 14.9588 13.9052 13.9202H12.9052ZM12 14.7614C11.4778 14.7614 11.0948 14.3631 11.0948 13.9202H10.0948C10.0948 14.9588 10.97 15.7614 12 15.7614V14.7614ZM11.0948 13.9202C11.0948 13.4773 11.4778 13.079 12 13.079V12.079C10.97 12.079 10.0948 12.8816 10.0948 13.9202H11.0948ZM12 13.079C12.5222 13.079 12.9052 13.4773 12.9052 13.9202H13.9052C13.9052 12.8816 13.03 12.079 12 12.079V13.079ZM15.9913 9.59306V6.34414H14.9913V9.59306H15.9913ZM15.9913 6.34414C15.9913 5.836 15.8864 5.33343 15.6832 4.86534L14.7659 5.26345C14.9149 5.60681 14.9913 5.97396 14.9913 6.34414H15.9913ZM15.6832 4.86534C15.4801 4.39731 15.1831 3.97361 14.8103 3.61778L14.1198 4.34117C14.3977 4.60641 14.6169 4.92001 14.7659 5.26345L15.6832 4.86534ZM14.8103 3.61778C14.4375 3.262 13.9962 2.98094 13.5122 2.78958L13.1445 3.71954C13.5107 3.86429 13.8419 4.07589 14.1198 4.34117L14.8103 3.61778ZM13.5122 2.78958C13.0282 2.59822 12.5102 2.5 11.9875 2.5V3.5C12.3851 3.5 12.7784 3.57477 13.1445 3.71954L13.5122 2.78958ZM11.9875 2.5C11.4649 2.5 10.9469 2.59822 10.4629 2.78958L10.8305 3.71954C11.1967 3.57477 11.5899 3.5 11.9875 3.5V2.5ZM10.4629 2.78958C9.97884 2.98094 9.53755 3.262 9.16479 3.61778L9.85523 4.34117C10.1332 4.07589 10.4644 3.86429 10.8305 3.71954L10.4629 2.78958ZM9.16479 3.61778C8.79198 3.97361 8.49494 4.39731 8.29183 4.86534L9.20916 5.26345C9.35821 4.92001 9.57734 4.6064 9.85523 4.34117L9.16479 3.61778ZM8.29183 4.86534C8.08868 5.33342 7.98379 5.83599 7.98379 6.34414H8.98379C8.98379 5.97396 9.06015 5.60682 9.20916 5.26345L8.29183 4.86534ZM7.98379 6.34414V9.59306H8.98379V6.34414H7.98379ZM4 11.4972V19.0959H5V11.4972H4ZM4 19.0959C4 19.7412 4.26881 20.3551 4.73911 20.804L5.42955 20.0806C5.15157 19.8153 5 19.4605 5 19.0959H4ZM4.73911 20.804C5.20861 21.2521 5.84062 21.5 6.49501 21.5V20.5C6.09119 20.5 5.70832 20.3467 5.42955 20.0806L4.73911 20.804ZM6.49501 21.5H17.505V20.5H6.49501V21.5ZM17.505 21.5C18.1594 21.5 18.7914 21.2521 19.2609 20.804L18.5705 20.0806C18.2917 20.3467 17.9088 20.5 17.505 20.5V21.5ZM19.2609 20.804C19.7312 20.3551 20 19.7412 20 19.0959H19C19 19.4605 18.8484 19.8153 18.5705 20.0806L19.2609 20.804ZM20 19.0958L19.9988 9.59298L18.9988 9.59311L19 19.0959L20 19.0958ZM4 9.59306C4 10.0691 4 10.9408 4 11.4972H5C5 10.9408 5 10.0691 5 9.59307L4 9.59306ZM19.4988 9.09305C16.999 9.09305 14.4992 9.09305 11.9994 9.09306C9.49958 9.09306 6.99979 9.09306 4.5 9.09306V10.0931C6.99979 10.0931 9.49959 10.0931 11.9994 10.0931C14.4992 10.0931 16.999 10.093 19.4988 10.093V9.09305Z" fill="white"/></svg></span></p></div>'
                vt654_banner.insertAdjacentHTML('beforeend', vt654_secure_checkout)
            }
        }
    }
}

function vt654Changes() {
    ////MUTATION OBSERVER - PARENT ELEMENT////
    //mutation observer 
    const contentObserver = new MutationObserver((mutationsList, contentObserver) => {
        //check for mutations
        for (const mutation of mutationsList) {
            if (window.location.href.indexOf('voxi.co.uk/acquisition/checkout') > -1) {
                var vt654_headers = document.querySelectorAll('[data-component-name="Heading"]')
                var vt654_spinner = document.querySelector('[data-component-name="LoadingSpinner"]')
                if (mutation.target.matches('[data-testid="step-content"]') || mutation.target.matches('[data-testid="step"]') && vt654_headers.length > 7 && !vt654_spinner) {
                    //CHANGES HERE
                    for (var i = 0; i < vt654_headers.length; i++) {
                        var stepContainer = vt654_headers[i].parentElement.parentElement.parentElement.parentElement

                        if (!vt654_headers[i].parentElement.parentElement.querySelector('[title*="completed"]')) {
                            vt654_headers[i].style.color = 'rgba(255,255,255, 0.3)'
                            if (getComputedStyle(stepContainer).borderTopStyle === 'solid') {
                                stepContainer.style.borderTop = '1px solid rgba(255,255,255, 0.3)'
                            }
                        } else {
                            vt654_headers[i].style.color = 'white'
                        }

                        if (stepContainer.offsetHeight > 100) {
                            vt654_headers[i].style.color = 'white'
                            if (getComputedStyle(stepContainer).borderTopStyle === 'solid') {
                                //stepContainer.style.borderTop = '1px solid rgba(255,255,255, 0.3)'
                                stepContainer.style.borderTop = '1px solid white'
                            }
                        }
                    }
                }
            } else {
                contentObserver.disconnect()
            }
        }
    });

    //define the configuration for the MutationObserver
    const contentObserverConfig = {
        childList: true,
        subtree: true,
    };

    //start observing changes
    contentObserver.observe(document.body, contentObserverConfig);
}