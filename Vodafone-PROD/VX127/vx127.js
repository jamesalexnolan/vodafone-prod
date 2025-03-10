/////GENERAL TEMPLATE/////
    ////POLLING FUNCTION////
    //polling function config
    var vx127_nodeCheck_pxFuncFired = 0
    var vx127_nodeCheck_pxInterval = setInterval(vx127_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

    //polling function
    function vx127_nodeCheck_pxPollFunc() {
        vx127_nodeCheck_pxFuncFired += 1

        if (vx127_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vx127_nodeCheck_pxInterval);
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vx127_nodeCheck_pxInterval)
            //MUTATION OBSERVER
            let vx127_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vx127_oldValue = mutation.oldValue
                    let vx127_newValue = mutation.target.textContent
                    if (vx127_oldValue !== vx127_newValue) {
                        var gridListFilters = document.querySelector('[data-selector="brand-filters"]')
                        if (!gridListFilters && !window.location.href.includes('#airtimeplans') && !window.location.href.includes('#phoneplan') && !window.location.href.includes('#add-ons')) {
                            //text change
                            textChanges()
                            //speed build
                            var preBuiltCards = document.querySelector('[class="slick-track"]')
                            var croSubHeader = document.querySelector('.cro-sub_header')
                            if (preBuiltCards && !croSubHeader) {
                                croSpeedSubHeader()
                            }
                        } else {
                            vx127_observer.disconnect()
                        }
                    }
                })
            })

            vx127_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })

            //reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                vx127_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                })
            })

            //function to call
            function croSpeedSubHeader() {
                //insert subheader
                var preBuiltCards = document.querySelector('[class="slick-track"]')
                var preBuiltCardsBtns = preBuiltCards.querySelectorAll('[type="button"]')
                for (var i = 0; i < preBuiltCardsBtns.length; i++) {
                    if (preBuiltCardsBtns[i].innerHTML.includes('Speed:')) {
                        var croPElem = '<p class="cro-sub_header">' + preBuiltCardsBtns[i].innerHTML + '</p>'
                        var closestH2 = preBuiltCardsBtns[i].closest('[class*="SingleColumnCardstyle__CardSlots"]').parentElement.querySelector('h2')
                        closestH2.insertAdjacentHTML('afterend', croPElem)
                        //click function once inserted 
                        croSubHeader_ClickFunc()
                    }
                }

                function croSubHeader_ClickFunc() {
                    var cro_subHeader = document.querySelectorAll('.cro-sub_header')
                    //click function
                    cro_subHeader.forEach(element => {
                        element.addEventListener('click', function () {
                            element.closest('[class*="SingleColumnCardstyle__CardSlots"]').parentElement.querySelector('[class*="InlineLinkstyle__InlineLink"]').click(modalClick())
                        })
                    })

                    //polling func
                    function modalClick() {
                        ////POLLING FUNCTION////
                        //polling function config
                        var vx127_pxFuncFired = 0;
                        var vx127_pxInterval = setInterval(vx127_pxPollFunc, 100);

                        //polling function
                        function vx127_pxPollFunc() {
                            vx127_pxFuncFired += 1;

                            if (vx127_pxFuncFired >= 20) {
                                //try 20 times, if not found clear px func
                                clearInterval(vx127_pxInterval);
                            }
                            var modalRender = document.querySelector('[class*="ModalRendererstyle__ContentWrapper"]')
                            if (modalRender) {
                                if (modalRender.querySelector('[data-text="About speed"]')) {
                                    modalRender.querySelector('[data-text="About speed"]').click()
                                    clearInterval(vx127_pxInterval)
                                }
                            }

                        }
                    }
                }
            }

            function textChanges() {
                var handsetColCont = document.querySelectorAll('[class*="HandsetContainerstyle__Column-sc"]')
                if (handsetColCont) {
                    if (handsetColCont[1] && handsetColCont[1].querySelector('[class*="Paragraphstyle__Paragraph-sc"]')) {
                        var handsetColP = handsetColCont[1].querySelector('[class*="Paragraphstyle__Paragraph-sc"]')
                        if (handsetColP.innerHTML.includes('Free home delivery.')) {
                            handsetColP.innerHTML = handsetColP.innerHTML.replace('Free home delivery. ', '')
                        }
                    }
                }
            }
        }
    }