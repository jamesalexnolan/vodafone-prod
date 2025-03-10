 ////POLLING FUNCTION////
    //polling function config
    var PN_nodeCheck_pxFuncFired = 0;
    var PN_nodeCheck_pxInterval = setInterval(PN_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

    //polling function
    function PN_nodeCheck_pxPollFunc() {
        PN_nodeCheck_pxFuncFired += 1

        if (PN_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(PN_nodeCheck_pxInterval)
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(PN_nodeCheck_pxInterval)
            //MUTATION OBSERVER
            let PN_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let PN_oldValue = mutation.oldValue
                    let PN_newValue = mutation.target.textContent
                    if (PN_oldValue !== PN_newValue) {
                        //MATCH URL CONDITION
                        if (window.location.href.indexOf('#add-ons') > -1 || window.location.href.indexOf('#airtimeplans') > -1 || window.location.href.indexOf('#phoneplan') > -1) {
                            PN_observer.disconnect()
                        } else {
                            //set local storage item 
                            let localStorageRelevantUser = localStorage.getItem('socialAndDisplayUser')

                            if (!localStorageRelevantUser) {
                                const page_url = window.location.href

                                const urlsToMatch = [
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_FBIG_Static_Handset_Apple_iPhone-16-Pro_NA_Mix_40-Likely-to-be-aquired_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_FBIG_Carousel_Handset_Apple_iPhone-16-Pro_NA_Mix_40-Likely-to-be-aquired_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_FBIG_Video_Handset_Apple_iPhone-16-Pro_NA_Mix_40-Likely-to-be-aquired_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_FBIG_Static_Handset_Apple_iPhone-16-Pro_NA_Mix_Tech_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_FBIG_Carousel_Handset_Apple_iPhone-16-Pro_NA_Mix_Tech_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_FBIG_Video_Handset_Apple_iPhone-16-Pro_NA_Mix_Tech_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_SC_Static_Handset_Apple_iPhone-16-Pro_NA_Mix_CompetitorSegments_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_SC_Carousel_Handset_Apple_iPhone-16-Pro_NA_Mix_CompetitorSegments_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_SC_Video_Handset_Apple_iPhone-16-Pro_NA_Mix_CompetitorSegments_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_SC_Static_Handset_Apple_iPhone-16-Pro_NA_Mix_TechLovers_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_SC_Carousel_Handset_Apple_iPhone-16-Pro_NA_Mix_TechLovers_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_SC_Video_Handset_Apple_iPhone-16-Pro_NA_Mix_TechLovers_Awareness_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_RD_Static_Handset_Apple_iPhone-16-Pro_NA_Mix_CompetitorSegments_Traffic_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_RD_Carousel_Handset_Apple_iPhone-16-Pro_NA_Mix_CompetitorSegments_Traffic_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_RD_Video_Handset_Apple_iPhone-16-Pro_NA_Mix_CompetitorSegments_Traffic_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_RD_Static_Handset_Apple_iPhone-16-Pro_NA_Mix_Tech_Traffic_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_RD_Carousel_Handset_Apple_iPhone-16-Pro_NA_Mix_Tech_Traffic_Buy-Now',
                                'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-16-pro?cid=psoc-UK_24_10_B_X_K_F_D_CBU-PAYM_Device-Launch_Promo_RD_Video_Handset_Apple_iPhone-16-Pro_NA_Mix_Tech_Traffic_Buy-Now'
                            ]
                                
                                if (urlsToMatch.includes(page_url)) {
                                    localStorage.setItem('socialAndDisplayUser', 'true')
                                }
                            } else if (localStorageRelevantUser && localStorageRelevantUser === 'true') {
                                PNChanges()
                            }
                        }
                    }
                })
            })

            PN_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                PN_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                })
            })
        }
    }

    function PNChanges() {
        //variables to call
        var PN_target = document.querySelector('[class*="LeftContentWrapper-sc"]')
        var PN_pill_original = document.querySelector('[data-component-name="Pill"]')
        var PN_pill_new = '<div class="pn-cro-pill-container">\
                            <div class="pn-cro-pill-content">\
                                <svg xmlns="http://www.w3.org/2000/svg" stroke="white" fill="none" viewBox="0 0 192 192" class="pn-cro-icon-stylings"><path d="M60 156h16m32-16h24m-24-23.55V156m0 0a15.997 15.997 0 0 1-16 16H44a16 16 0 0 1-16-16V53.3A17.31 17.31 0 0 1 45.3 36H108v32.28m0 87.72h40a16 16 0 0 0 16-16V20h-64a16 16 0 0 0-16 16m55.28 56.07H52.17M80 117.74l-28-26 28-26" vector-effect="non-scaling-stroke" /></svg>\
                                <p>Get a new phone every year - <strong>Vodafone Xchange</strong></p>\
                            </div>\
                        </div>'
        var PN_pill_inserted = document.querySelector('.pn-cro-pill-container')
        //insert pill
        if (!PN_pill_inserted) {
            if (PN_target) {
                if (PN_pill_original) {
                    PN_pill_original.remove()
                    PN_target.insertAdjacentHTML('afterbegin', PN_pill_new)
                } else {
                    PN_target.insertAdjacentHTML('afterbegin', PN_pill_new)
                }
            }
        }
    }