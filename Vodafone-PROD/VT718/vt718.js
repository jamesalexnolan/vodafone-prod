var vt718_nodeCheck_pxFuncFired = 0
var vt718_nodeCheck_pxInterval = setInterval(vt718_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

//polling function
function vt718_nodeCheck_pxPollFunc() {
    vt718_nodeCheck_pxFuncFired += 1

    if (vt718_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vt718_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt718_nodeCheck_pxInterval)
        //MUTATION OBSERVER
        let vt718_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt718_oldValue = mutation.oldValue
                let vt718_newValue = mutation.target.textContent
                if (vt718_oldValue !== vt718_newValue) {
                    //MATCH CONDITION
                    var vt718OriBanner = document.querySelectorAll('[class*="BannerCarouselViewportstyle__BannerCarouselViewportItem-sc"]')
                    if (vt718OriBanner && vt718OriBanner.length > 4) {
                        //CODE HERE
                        if (vt718OriBanner[1].querySelector('h2') && vt718OriBanner[1].querySelector('p')) {
                            vt718OriBanner[1].querySelector('h2').innerHTML = 'Save £288 with Samsung Galaxy S24 FE'
                            vt718OriBanner[1].querySelector('p').innerHTML = 'Plus, claim a Galaxy Watch FE worth £199. Ends 24 October.'
                            vt718_observer.disconnect()
                        }
                    }
                }
            })
        })

        vt718_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        })

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt718_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })
        })
    }
}