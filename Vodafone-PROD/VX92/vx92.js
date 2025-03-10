 //polling function config
 var vt693_nodeCheck_pxFuncFired = 0;
 var vt693_nodeCheck_pxInterval = setInterval(vt693_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

 //polling function
 function vt693_nodeCheck_pxPollFunc() {
     vt693_nodeCheck_pxFuncFired += 1;

     if (vt693_nodeCheck_pxFuncFired >= 20) {
         //try 20 times, if not found, clear px func
         clearInterval(vt693_nodeCheck_pxInterval);
     }

     if (document.body.nodeType === 1) {
         //clear polling when found
         clearInterval(vt693_nodeCheck_pxInterval);
         //MUTATION OBSERVER
         let vt693_observer = new MutationObserver((mutations) => {
             mutations.forEach((mutation) => {
                 let vt693_oldValue = mutation.oldValue;
                 let vt693_newValue = mutation.target.textContent;
                 if (vt693_oldValue !== vt693_newValue) {
                     var vt693SimOnlyStyles = document.querySelector('[id="vt693_SO"]')
                     if (window.location.href.indexOf('/sim-only-plans') > -1) {
                         vt693SimOnlyStyles.innerHTML = '    /*sim only page styles*/    /*card layout change*/    #plans-offers>div[spacing="4"]:first-of-type {        order: 1;    }    #plans-offers>div[spacing="4"]:nth-of-type(2) {        order: 2;    }    #plans-offers>div[spacing="4"]:nth-of-type(3) {        order: 4;    }    #plans-offers>div[spacing="4"]:nth-of-type(4) {        order: 5;    }    #plans-offers>div[spacing="4"]:nth-of-type(5) {        order: 6;    }    #plans-offers>div[spacing="4"]:nth-of-type(6) {        order: 3;    }'
                         vt693_observer.disconnect()
                     } else {
                         vt693SimOnlyStyles.innerHTML = ''
                         vt693_observer.disconnect()
                     }
                 }
             });
         });

         vt693_observer.observe(document.body, {
             //characterDataOldValue: true,
             subtree: true,
             childList: true,
             //characterData: true,
             attributes: true
         });

         //Reconnect mutation observer if user navigates back 
         window.navigation.addEventListener("navigate", (event) => {
             //start observing again
             vt693_observer.observe(document.body, {
                 //characterDataOldValue: true,
                 subtree: true,
                 childList: true,
                 //characterData: true,
                 attributes: true
             });
         })
     }
 }