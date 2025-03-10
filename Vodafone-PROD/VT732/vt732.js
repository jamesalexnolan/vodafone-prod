var vt732_nodeCheck_pxFuncFired = 0
    var vt732_nodeCheck_pxInterval = setInterval(vt732_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

    //polling function
    function vt732_nodeCheck_pxPollFunc() {
        vt732_nodeCheck_pxFuncFired += 1

        if (vt732_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vt732_nodeCheck_pxInterval)
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vt732_nodeCheck_pxInterval);
            //MUTATION OBSERVER
            let vt732_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vt732_oldValue = mutation.oldValue
                    let vt732_newValue = mutation.target.textContent
                    if (vt732_oldValue !== vt732_newValue) {
                        const gridCards = document.querySelectorAll('[data-component-name="DiscoveryCard"]>div>div>div>a')
                        if (gridCards && !gridCards[0].classList.contains('cro-cta-changes')) {
                            //add classes
                            for (var i = 1; i < gridCards.length; i++) {
                                //add classes
                                gridCards[0].classList.add('cro-cta-changes', 'cta-red')
                                gridCards[i].classList.add('cro-cta-changes', 'cta-white')
                                //remove chevron
                                gridCards[0].firstChild.classList.add('cro-hidden')
                                gridCards[i].firstChild.classList.add('cro-hidden')
                            }
                        } else {
                            vt732_observer.disconnect()
                        }
                    }
                })
            })

            vt732_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })
        }
    }