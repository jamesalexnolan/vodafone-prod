 ////POLLING FUNCTION////
    //polling function config
    var vx109_nodeCheck_pxFuncFired = 0;
    var vx109_nodeCheck_pxInterval = setInterval(vx109_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

    //polling function
    function vx109_nodeCheck_pxPollFunc() {
        vx109_nodeCheck_pxFuncFired += 1

        if (vx109_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vx109_nodeCheck_pxInterval)
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vx109_nodeCheck_pxInterval)
            //MUTATION OBSERVER
            let vx109_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vx109_oldValue = mutation.oldValue
                    let vx109_newValue = mutation.target.textContent
                    if (vx109_oldValue !== vx109_newValue) {
                        //MATCH URL CONDITION
                        if (window.location.href.indexOf('#add-ons') > -1 || window.location.href.indexOf('#airtimeplans') > -1 || window.location.href.indexOf('#phoneplan') > -1) {
                            vx109_observer.disconnect()
                        } else {
                            //conditions for phone check
                            var vx109Header = document.querySelector('[class*="DeviceInfostyle__FlexContainer-sc"]>h1')
                            var vx109Color = document.querySelector('[id="selectedColor"]>div>span:nth-child(2)')
                            var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')

                            if (vx109Header && vx109Color && vx109GB) {
                                //ACQ builds (pre-built)
                                if (document.querySelector('[data-customer-type="acquisition Consumer"]')) {
                                    if (vx109Header.innerText === 'Google\nPixel 9') {
                                        vx109PayMCTA_pixel9()
                                        vx109_observer.disconnect()
                                        vx109CTA_Clicks()
                                    }

                                    if (vx109Header.innerText === 'Google\nPixel 9 Pro') {
                                        vx109PayMCTA_pixel9Pro()
                                        vx109_observer.disconnect()
                                        vx109CTA_Clicks()
                                    }

                                    if (vx109Header.innerText === 'Google\nPixel 9 Pro XL') {
                                        vx109PayMCTA_pixel9XL()
                                        vx109_observer.disconnect()
                                        vx109CTA_Clicks()
                                    }

                                    if (vx109Header.innerText === 'Google\nPixel 9 Pro Fold') {
                                        vx109PayMCTA_pixel9Fold()
                                        vx109_observer.disconnect()
                                        vx109CTA_Clicks()
                                    }
                                }
                            }
                        }
                    }
                });
            });

            vx109_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })

            //Reconnect MO when list change happens 
            //mutation observer 
            const vtxxxObserver = new MutationObserver((mutationsList, vtxxxObserver) => {
                //check for mutations
                for (const mutation of mutationsList) {
                    if (mutation.target.matches('[class*="HandsetContainerstyle__Column-sc"]')) {
                        //start observing again
                        vx109_observer.observe(document.body, {
                            //characterDataOldValue: true,
                            subtree: true,
                            childList: true,
                            //characterData: true,
                            attributes: true
                        })
                    }
                }
            })

            //define the configuration for the MutationObserver
            const vtxxxObserverConfig = {
                childList: true,
                subtree: true,
            }

            //start observing changes
            vtxxxObserver.observe(document.body, vtxxxObserverConfig);

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                vx109_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                })
            })
        }
    }

    //FUNCTIONS TO CALL
    //ACQ
    function vx109PayMCTA_pixel9() {
        ////POLLING FUNCTION////
        //polling function config
        var vx109_9_pxFuncFired = 0;
        var vx109_9_pxInterval = setInterval(vx109_9_pxPollFunc, 200);

        //polling function
        function vx109_9_pxPollFunc() {
            vx109_9_pxFuncFired += 1;

            if (vx109_9_pxFuncFired >= 50) {
                //try 20 times, if not found clear px func
                clearInterval(vx109_9_pxInterval);
            }

            if (document.querySelector('[data-selector="lead-plan"]') && document.querySelector('[data-selector="lead-plan"]>div:nth-child(2)>div').childElementCount > 5) {
                var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')
                if (vx109GB.innerHTML === '128GB') {
                    //clear polling when found
                    clearInterval(vx109_9_pxInterval);

                    if (document.querySelector('[aria-label="Build your Phone Plan"]') && !document.getElementById('vx109-cta-solo')) {
                        const vx109node = document.querySelector('[aria-label="Build your Phone Plan"]')
                        const vx109clone = vx109node.cloneNode(true)
                        vx109clone.setAttribute('id', 'vx109-cta-solo')
                        document.querySelector('[aria-label="Build your Phone Plan"]').parentElement.appendChild(vx109clone)
                        vx109clone.innerHTML = 'Get double storage for the same price'
                        document.querySelector('[aria-label="Build your Phone Plan"]').remove()
                    }
                }
            } else if (document.querySelector('.slick-track') && document.querySelector('.slick-track').children.length > 2) {
                //clear polling when found
                clearInterval(vx109_9_pxInterval);
                //ACTIONS HERE 
                var vx109Color = document.querySelector('[id="selectedColor"]>div>span:nth-child(2)')
                var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')

                if (vx109GB.innerHTML === '256GB') {
                    if (vx109Color.innerHTML === 'Obsidian' || vx109Color.innerHTML === 'Porcelain' || vx109Color.innerHTML === 'Winter Green' || vx109Color.innerHTML === 'Peony') {
                        //instance of one CTA - pre-order//
                        //change original CTA
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Pre-order 256GB phone and build your own plan'
                    }
                }
            }
        }
    }

    function vx109PayMCTA_pixel9Pro() {
        ////POLLING FUNCTION////
        //polling function config
        var vx109_pro_pxFuncFired = 0;
        var vx109_pro_pxInterval = setInterval(vx109_pro_pxPollFunc, 200);

        //polling function
        function vx109_pro_pxPollFunc() {
            vx109_pro_pxFuncFired += 1;

            if (vx109_pro_pxFuncFired >= 50) {
                //try 20 times, if not found clear px func
                clearInterval(vx109_pro_pxInterval);
            }

            if (document.querySelector('[data-selector="lead-plan"]') && document.querySelector('[data-selector="lead-plan"]>div:nth-child(2)>div').childElementCount > 5) {
                var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')
                if (vx109GB.innerHTML === '128GB') {
                    //clear polling when found
                    clearInterval(vx109_pro_pxInterval);

                    if (document.querySelector('[aria-label="Build your Phone Plan"]') && !document.getElementById('vx109-cta-solo')) {
                        const vx109node = document.querySelector('[aria-label="Build your Phone Plan"]')
                        const vx109clone = vx109node.cloneNode(true)
                        vx109clone.setAttribute('id', 'vx109-cta-solo')
                        document.querySelector('[aria-label="Build your Phone Plan"]').parentElement.appendChild(vx109clone)
                        vx109clone.innerHTML = 'Get double storage for the same price'
                        document.querySelector('[aria-label="Build your Phone Plan"]').remove()
                    }
                }
            } else if (document.querySelector('.slick-track') && document.querySelector('.slick-track').children.length > 2) {
                //clear polling when found
                clearInterval(vx109_pro_pxInterval);
                var vx109Color = document.querySelector('[id="selectedColor"]>div>span:nth-child(2)')
                var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')
                if (vx109GB.innerHTML === '256GB') {
                    if (vx109Color.innerHTML === 'Obsidian' || vx109Color.innerHTML === 'Hazel') {
                        //instance of two CTAs//
                        //clone CTA 
                        if (!document.getElementById('vx109-cta')) {
                            const vx109node = document.querySelector('[aria-label="Build your own plan"]')
                            const vx109clone = vx109node.cloneNode(true)
                            vx109clone.setAttribute('id', 'vx109-cta')
                            document.querySelector('[aria-label="Build your own plan"]').parentElement.appendChild(vx109clone)
                        }
                        //cloned CTA selector 
                        vx109ClonedCTA = document.querySelector('[id="vx109-cta"]')
                        vx109ClonedCTA.classList.add('vx109-cta-double')
                        //change text and CTA
                        vx109ClonedCTA.innerHTML = 'See 512GB double storage offer'
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Pre-order 256GB phone and build your own plan'
                    } else if (vx109Color.innerHTML === 'Porcelain' || vx109Color.innerHTML === 'Rose Quartz') {
                        //instance of one CTA - pre-order//
                        //change original CTA
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Pre-order 256GB phone and build your own plan'
                    }
                } else if (vx109GB.innerHTML === '512GB') {
                    if (vx109Color.innerHTML === 'Obsidian' || vx109Color.innerHTML === 'Hazel') {
                        //instance of one CTA - pre-order//
                        //change original CTA
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Pre-order 512GB phone and build your own plan'
                    }
                }
            }
        }
    }

    function vx109PayMCTA_pixel9XL() {
        ////POLLING FUNCTION////
        //polling function config
        var vx109_xl_pxFuncFired = 0;
        var vx109_xl_pxInterval = setInterval(vx109_xl_pxPollFunc, 200);

        //polling function
        function vx109_xl_pxPollFunc() {
            vx109_xl_pxFuncFired += 1;

            if (vx109_xl_pxFuncFired >= 50) {
                //try 20 times, if not found clear px func
                clearInterval(vx109_xl_pxInterval);
            }

            if (document.querySelector('[data-selector="lead-plan"]') && document.querySelector('[data-selector="lead-plan"]>div:nth-child(2)>div').childElementCount > 5) {
                var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')
                if (vx109GB.innerHTML === '128GB') {
                    //clear polling when found
                    clearInterval(vx109_xl_pxInterval);

                    if (document.querySelector('[aria-label="Build your Phone Plan"]') && !document.getElementById('vx109-cta-solo')) {
                        const vx109node = document.querySelector('[aria-label="Build your Phone Plan"]')
                        const vx109clone = vx109node.cloneNode(true)
                        vx109clone.setAttribute('id', 'vx109-cta-solo')
                        document.querySelector('[aria-label="Build your Phone Plan"]').parentElement.appendChild(vx109clone)
                        vx109clone.innerHTML = 'Get double storage for the same price'
                        document.querySelector('[aria-label="Build your Phone Plan"]').remove()
                    }
                }
            } else if (document.querySelector('.slick-track') && document.querySelector('.slick-track').children.length > 2) {
                //clear polling when found
                clearInterval(vx109_xl_pxInterval);

                var vx109Color = document.querySelector('[id="selectedColor"]>div>span:nth-child(2)')
                var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')
                if (vx109GB.innerHTML === '256GB') {
                    if (vx109Color.innerHTML === 'Obsidian' || vx109Color.innerHTML === 'Porcelain' || vx109Color.innerHTML === 'Hazel') {
                        //instance of two CTAs//
                        //clone CTA 
                        if (!document.getElementById('vx109-cta')) {
                            const vx109node = document.querySelector('[aria-label="Build your own plan"]')
                            const vx109clone = vx109node.cloneNode(true)
                            vx109clone.setAttribute('id', 'vx109-cta')
                            document.querySelector('[aria-label="Build your own plan"]').parentElement.appendChild(vx109clone)
                        }
                        //cloned CTA selector 
                        vx109ClonedCTA = document.querySelector('[id="vx109-cta"]')
                        vx109ClonedCTA.classList.add('vx109-cta-double')
                        //change text and CTA
                        vx109ClonedCTA.innerHTML = 'See 512GB double storage offer'
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Pre-order 256GB phone and build your own plan'
                    } else if (vx109Color.innerHTML === 'Rose Quartz') {
                        //instance of one CTA - pre-order//
                        //change original CTA
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Pre-order 256GB phone and build your own plan'
                    }
                } else if (vx109GB.innerHTML === '512GB') {
                    if (vx109Color.innerHTML === 'Obsidian') {
                        //instance of two CTAs//
                        //clone CTA 
                        if (!document.getElementById('vx109-cta')) {
                            const vx109node = document.querySelector('[aria-label="Build your own plan"]')
                            const vx109clone = vx109node.cloneNode(true)
                            vx109clone.setAttribute('id', 'vx109-cta')
                            document.querySelector('[aria-label="Build your own plan"]').parentElement.appendChild(vx109clone)
                        }
                        //cloned CTA selector 
                        vx109ClonedCTA = document.querySelector('[id="vx109-cta"]')
                        vx109ClonedCTA.classList.add('vx109-cta-double')
                        //change text and CTA
                        vx109ClonedCTA.innerHTML = 'See 1TB double storage offer'
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Pre-order 512GB phone and build your own plan'
                    } else if (vx109Color.innerHTML === 'Porcelain' || vx109Color.innerHTML === 'Hazel') {
                        //instance of one CTA - pre-order//
                        //change original CTA
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Pre-order 512GB phone and build your own plan'
                    }
                } else if (vx109GB.innerHTML === '1TB') {
                    if (document.querySelector('[aria-label="Build your own plan"]')) {
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Pre-order 1TB phone and build your own plan'
                    }
                }
            }
        }
    }

    function vx109PayMCTA_pixel9Fold() {
        ////POLLING FUNCTION////
        //polling function config
        var vx109_fold_pxFuncFired = 0;
        var vx109_fold_pxInterval = setInterval(vx109_fold_pxPollFunc, 200);

        //polling function
        function vx109_fold_pxPollFunc() {
            vx109_fold_pxFuncFired += 1;

            if (vx109_fold_pxFuncFired >= 50) {
                //try 20 times, if not found clear px func
                clearInterval(vx109_fold_pxInterval);
            }

            if (document.querySelector('[data-selector="lead-plan"]') && document.querySelector('[data-selector="lead-plan"]>div:nth-child(2)>div').childElementCount > 5) {
                var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')
                if (vx109GB.innerHTML === '128GB') {
                    //clear polling when found
                    clearInterval(vx109_fold_pxInterval);

                    if (document.querySelector('[aria-label="Build your Phone Plan"]') && !document.getElementById('vx109-cta-solo')) {
                        const vx109node = document.querySelector('[aria-label="Build your Phone Plan"]')
                        const vx109clone = vx109node.cloneNode(true)
                        vx109clone.setAttribute('id', 'vx109-cta-solo')
                        document.querySelector('[aria-label="Build your Phone Plan"]').parentElement.appendChild(vx109clone)
                        vx109clone.innerHTML = 'Get double storage for the same price'
                        document.querySelector('[aria-label="Build your Phone Plan"]').remove()
                    }
                }
            } else if (document.querySelector('.slick-track') && document.querySelector('.slick-track').children.length > 2) {
                //clear polling when found
                clearInterval(vx109_fold_pxInterval);
                var vx109Color = document.querySelector('[id="selectedColor"]>div>span:nth-child(2)')
                var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')
                if (vx109GB.innerHTML === '256GB') {
                    if (vx109Color.innerHTML === 'Obsidian' || vx109Color.innerHTML === 'Porcelain') {
                        //instance of one CTA - pre-order//
                        //change original CTA
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Get double storage for the same price'
                    }
                } else if (vx109GB.innerHTML === '512GB') {
                    if (vx109Color.innerHTML === 'Obsidian' || vx109Color.innerHTML === 'Porcelain') {
                        //instance of one CTA - pre-order//
                        //change original CTA
                        document.querySelector('[aria-label="Build your own plan"]').innerHTML = 'Pre-order 512GB phone and build your own plan'
                    }
                }
            }
        }
    }

    //CLICK FUNCTIONS
    function vx109CTA_Clicks() {
        //add clone click function 
        document.body.addEventListener('click', function (event) {
            //check if the clicked element is the addressCheckCTA or a child element of it
            if (event.target.closest('[id="vx109-cta"]')) {
                //change GB storage
                var vx109Storage = document.querySelector('[id="selectedCapacity"]')
                var vx109StorageList = document.querySelectorAll('[role="listbox"]')[1]

                vx109Storage.click()

                if (vx109StorageList.children.length > 1) {
                    //ACTIONS HERE 
                    var vx109StorageListItems = vx109StorageList.querySelectorAll('li')

                    for (var i = 0; i < vx109StorageListItems.length; i++) {
                        //which GB selection to choose
                        var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')

                        if (vx109GB.innerHTML === '256GB') {
                            vx109GBSelection = '512GB'
                        } else if (vx109GB.innerHTML === '128GB') {
                            vx109GBSelection = '256GB'
                        } else if (vx109GB.innerHTML === '512GB') {
                            vx109GBSelection = '1TB'
                        }

                        if (vx109StorageListItems[i].innerHTML.indexOf(vx109GBSelection) > -1) {
                            vx109StorageListItems[i].click()
                        }
                    }
                }
            }

            if (event.target.closest('[id="vx109-cta-solo"]')) {
                //change GB storage
                var vx109Storage = document.querySelector('[id="selectedCapacity"]')
                var vx109StorageList = document.querySelectorAll('[role="listbox"]')[1]

                vx109Storage.click()

                if (vx109StorageList.children.length > 1) {
                    //ACTIONS HERE 
                    var vx109StorageListItems = vx109StorageList.querySelectorAll('li')

                    for (var i = 0; i < vx109StorageListItems.length; i++) {
                        //which GB selection to choose
                        var vx109GB = document.querySelector('[id="selectedCapacity"]>div>span')

                        if (vx109GB.innerHTML === '256GB') {
                            vx109GBSelection = '512GB'
                        } else if (vx109GB.innerHTML === '128GB') {
                            vx109GBSelection = '256GB'
                        } else if (vx109GB.innerHTML === '512GB') {
                            vx109GBSelection = '1TB'
                        }

                        if (vx109StorageListItems[i].innerHTML.indexOf(vx109GBSelection) > -1) {
                            vx109StorageListItems[i].click()
                        }
                    }
                }
            }
        })
    }