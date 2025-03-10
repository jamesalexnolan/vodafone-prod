////POLLING FUNCTION////
    //polling function config
    var vx106_nodeCheck_pxFuncFired = 0
    var vx106_nodeCheck_pxInterval = setInterval(vx106_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

    //polling function
    function vx106_nodeCheck_pxPollFunc() {
        vx106_nodeCheck_pxFuncFired += 1

        if (vx106_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vx106_nodeCheck_pxInterval)
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vx106_nodeCheck_pxInterval)
            //MUTATION OBSERVER
            let vx106_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vx106_oldValue = mutation.oldValue
                    let vx106_newValue = mutation.target.textContent
                    if (vx106_oldValue !== vx106_newValue) {
                        //MATCH URL CONDITION
                        if (window.location.href.indexOf('#airtimeplans') > -1) {
                            if (document.querySelector('[data-customer-type="secondline Consumer"]')) {
                                //reverse order 
                                //card container
                                const container = document.querySelector('.vfuk-PlanCardMiniListLegacy__cardsGridContainer')
                                if (container && container.childElementCount > 50) {
                                    //call function 
                                    removeNonUnlimited()
                                    //disconnect MO 
                                    vx106_observer.disconnect()
                                }
                            }
                        } else {
                            vx106_observer.disconnect()
                        }
                    }
                });
            });

            vx106_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                vx106_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                });
            })
        }
    }

    function removeNonUnlimited() {
        //remove header 
        if (document.querySelector('[class="vfuk-PlansContainer__bingo-step-container-spacing"]').querySelectorAll('[data-component-name="Paragraph"]')[1]) {
            document.querySelector('[class="vfuk-PlansContainer__bingo-step-container-spacing"]').querySelectorAll('[data-component-name="Paragraph"]')[1].remove()
        }

        //style changes to grid
        document.querySelector('.vfuk-PlanCardMiniListLegacy__cardsGridContainer').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('cro-grid-changes')

        //insert CTA's
        var vx106_CTAs = '\
            <p class="cro-header">Select your monthly data allowance:</p>\
            <div class="cro-cta-cont">\
                <div class="cro-ctas">\
                    <button id="8gb-cro-cta">8GB</button>\
                    <button id="50gb-cro-cta">50GB</button>\
                    <button id="150gb-cro-cta">150GB</button>\
                    <button id="unlimited-cro-cta">Unlimited</button>\
                </div>\
            </div>\
            <p class="cro-tandc">*<a href="https://www.vodafone.co.uk/pricechanges">Annual Price Increase:</a> Your monthly Airtime Plan will increase each year on 1 April by £1.80</p>\
        '

        //insert CTAs
        var aomComponent = document.querySelectorAll('[class*="Interactionstyle__BlankInteraction-sc"]')[3]
        if (!document.querySelector('.cro-cta-cont')) {
            aomComponent.insertAdjacentHTML('beforeBegin', vx106_CTAs)
        }

        //hide/show functionality 
        function selectAndFilterElements(container) {
            const elements = Array.from(container.children)
            for (let i = 0; i < elements.length; i += 3) {
                if (i + 1 < elements.length) {
                    const sash = elements[i]
                    const card = elements[i + 1]
                    const footnote = elements[i + 2]

                    var eightgbCroCTA = document.getElementById("8gb-cro-cta")
                    var fiftygbCroCTA = document.getElementById("50gb-cro-cta")
                    var oneFiftygbCroCTA = document.getElementById("150gb-cro-cta")
                    var unlimitedgbCroCTA = document.getElementById("unlimited-cro-cta")

                    //remove 3G options 
                    if (card.innerHTML.includes('3GB')) {
                        sash.remove()
                        card.remove()
                        footnote.remove()
                    }

                    //hide all cards 
                    sash.classList.add('cro-hidden-data-options')
                    card.classList.add('cro-hidden-data-options')
                    footnote.classList.add('cro-hidden-data-options')

                    //CLICK FUNCTIONALITY 
                    //8GB
                    eightgbCroCTA.addEventListener('click', function () {
                        //show 8GB cards
                        if (!card.innerHTML.includes('8GB')) {
                            sash.classList.add('cro-hidden-data-options')
                            card.classList.add('cro-hidden-data-options')
                            footnote.classList.add('cro-hidden-data-options')
                            //remove selected class if not 8gb 
                            if (fiftygbCroCTA.classList.contains('selected-data-option')) {
                                fiftygbCroCTA.classList.remove('selected-data-option')
                            }
                            if (oneFiftygbCroCTA.classList.contains('selected-data-option')) {
                                oneFiftygbCroCTA.classList.remove('selected-data-option')
                            }
                            if (unlimitedgbCroCTA.classList.contains('selected-data-option')) {
                                unlimitedgbCroCTA.classList.remove('selected-data-option')
                            }
                            //add selected to CTA
                            eightgbCroCTA.classList.add('selected-data-option')
                        }

                        //show 8gb if they contain hidden
                        if (card.innerHTML.includes('8GB') && card.classList.contains('cro-hidden-data-options')) {
                            sash.classList.remove('cro-hidden-data-options')
                            card.classList.remove('cro-hidden-data-options')
                            footnote.classList.remove('cro-hidden-data-options')
                        }
                    })

                    //50GB
                    fiftygbCroCTA.addEventListener('click', function () {
                        //regex to match '50GB'
                        const regex = /(^|\D)50GB(\D|$)/;

                        //show 50GB cards
                        if (!regex.test(card.innerHTML)) {
                            sash.classList.add('cro-hidden-data-options')
                            card.classList.add('cro-hidden-data-options')
                            footnote.classList.add('cro-hidden-data-options')
                            //remove selected class if not 50GB
                            if (eightgbCroCTA.classList.contains('selected-data-option')) {
                                eightgbCroCTA.classList.remove('selected-data-option')
                            }
                            if (oneFiftygbCroCTA.classList.contains('selected-data-option')) {
                                oneFiftygbCroCTA.classList.remove('selected-data-option')
                            }
                            if (unlimitedgbCroCTA.classList.contains('selected-data-option')) {
                                unlimitedgbCroCTA.classList.remove('selected-data-option')
                            }
                            //add selected to CTA
                            fiftygbCroCTA.classList.add('selected-data-option')
                        }

                        //show 50GB if they contain hidden
                        if (regex.test(card.innerHTML) && card.classList.contains('cro-hidden-data-options')) {
                            sash.classList.remove('cro-hidden-data-options')
                            card.classList.remove('cro-hidden-data-options')
                            footnote.classList.remove('cro-hidden-data-options')
                        }
                    })


                    //150GB
                    oneFiftygbCroCTA.addEventListener('click', function () {
                        //show 150GB cards
                        if (!card.innerHTML.includes('150GB')) {
                            sash.classList.add('cro-hidden-data-options')
                            card.classList.add('cro-hidden-data-options')
                            footnote.classList.add('cro-hidden-data-options')
                            //remove selected class if not 150GB 
                            if (eightgbCroCTA.classList.contains('selected-data-option')) {
                                eightgbCroCTA.classList.remove('selected-data-option')
                            }
                            if (fiftygbCroCTA.classList.contains('selected-data-option')) {
                                fiftygbCroCTA.classList.remove('selected-data-option')
                            }
                            if (unlimitedgbCroCTA.classList.contains('selected-data-option')) {
                                unlimitedgbCroCTA.classList.remove('selected-data-option')
                            }
                            //add selected to CTA
                            oneFiftygbCroCTA.classList.add('selected-data-option')
                        }

                        //show 150GB if they contain hidden
                        if (card.innerHTML.includes('150GB') && card.classList.contains('cro-hidden-data-options')) {
                            sash.classList.remove('cro-hidden-data-options')
                            card.classList.remove('cro-hidden-data-options')
                            footnote.classList.remove('cro-hidden-data-options')
                        }
                    })

                    //UNLIMITED
                    unlimitedgbCroCTA.addEventListener('click', function () {
                        //show UNLIMITED cards
                        if (!card.innerHTML.includes('Unlimited')) {
                            sash.classList.add('cro-hidden-data-options')
                            card.classList.add('cro-hidden-data-options')
                            footnote.classList.add('cro-hidden-data-options')
                            //remove selected class if not UNLIMITED 
                            if (eightgbCroCTA.classList.contains('selected-data-option')) {
                                eightgbCroCTA.classList.remove('selected-data-option')
                            }
                            if (fiftygbCroCTA.classList.contains('selected-data-option')) {
                                fiftygbCroCTA.classList.remove('selected-data-option')
                            }
                            if (oneFiftygbCroCTA.classList.contains('selected-data-option')) {
                                oneFiftygbCroCTA.classList.remove('selected-data-option')
                            }
                            //add selected to CTA
                            unlimitedgbCroCTA.classList.add('selected-data-option')
                        }

                        //show UNLIMITED if they contain hidden
                        if (card.innerHTML.includes('Unlimited') && card.classList.contains('cro-hidden-data-options')) {
                            sash.classList.remove('cro-hidden-data-options')
                            card.classList.remove('cro-hidden-data-options')
                            footnote.classList.remove('cro-hidden-data-options')
                        }
                    })

                    //default to unlimited 
                    if (card.innerHTML.includes('Unlimited')) {
                        sash.classList.remove('cro-hidden-data-options')
                        card.classList.remove('cro-hidden-data-options')
                        footnote.classList.remove('cro-hidden-data-options')
                        unlimitedgbCroCTA.classList.add('selected-data-option')
                    }
                }
            }
        }
        const container = document.querySelector('.vfuk-PlanCardMiniListLegacy__cardsGridContainer')
        selectAndFilterElements(container)
    }