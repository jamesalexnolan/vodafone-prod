////POLLING FUNCTION////
    //polling function config
    var vt750_nodeCheck_pxFuncFired = 0
    var vt750_nodeCheck_pxInterval = setInterval(vt750_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

    //polling function
    function vt750_nodeCheck_pxPollFunc() {
        vt750_nodeCheck_pxFuncFired += 1

        if (vt750_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vt750_nodeCheck_pxInterval);
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vt750_nodeCheck_pxInterval)
            //MUTATION OBSERVER
            let vt750_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vt750_oldValue = mutation.oldValue
                    let vt750_newValue = mutation.target.textContent
                    if (vt750_oldValue !== vt750_newValue) {
                        //MATCH URL CONDITION
                        if (window.location.href.indexOf('sim-only-plans') > -1) {
                            //CODE HERE
                            var croCTAs = document.querySelector('.j77vt750')
                            if (!croCTAs) {
                                seePlanDetailsInteraction()
                            } else {
                                vt750_observer.disconnect()
                                CTAClickFunc()
                                hideSeePlanDetails()
                            }
                        } else {
                            vt750_observer.disconnect()
                        }
                    }
                })
            })

            vt750_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                vt750_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                })
            })

            //function to add CTAs
            function seePlanDetailsInteraction() {
                //replace CTAs
                var originalCTAs_CRO = document.querySelectorAll('[aria-label="Choose this plan"]')
                var croCTAs = document.querySelectorAll('.j77vt750')
                var CROCTAs = '<div class="j77vt750 x77vt750"> <p class="k77vt750">View plan details</p></div>'
                for (var i = 0; i < originalCTAs_CRO.length; i++) {
                    originalCTAs_CRO[i].insertAdjacentHTML('afterEnd', CROCTAs)
                    originalCTAs_CRO[i].remove()
                }
            }

            //function to handle clicks on inserted CTAs
            function CTAClickFunc() {
                //insert new modal 
                var vt750Modal = '    <div class="vt750-modal-container cro-hide">        <div id="modal-heading" class="vt750-modal-content_row">            <div class="vt50-header_main">                <h4 id="plan-overview-header_main">Plan overview</h4>                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                    <path d="M5.5 18.5L18.5 5.5M18.5 18.5L5.5 5.5" stroke="white" stroke-linecap="round"                        stroke-linejoin="round" />                </svg>            </div>        </div>        <div class="vt750-modal-content">            <div id="plan-information" class="vt750-modal-content_row">                <div class="vt50-header_main">                    <div id="plan-title-heading">                        <h4 id="plan-information-header_main"></h4>                        <p id="modal-p-elem" data-src="plan-information-text_main"></p>                    </div>                    <svg id="plan-overview_chevron" width="20" height="20" viewBox="0 0 20 20" fill="none"                        xmlns="http://www.w3.org/2000/svg">                        <path d="M17.0837 6.45825L10.0003 13.5416L2.91699 6.45825" stroke="white" stroke-miterlimit="10"                            stroke-linecap="round" />                    </svg>                </div>                <div id="plan-information-accordion" class="vt750-accordion-content cro-hide">                </div>            </div>            <div id="plan-benefits" class="vt750-modal-content_row">                <div class="vt50-header_main">                    <h4 id="plan-benefits-header_main">Plan benefits</h4>                    <svg id="plan-benefits_chevron" width="20" height="20" viewBox="0 0 20 20" fill="none"                        xmlns="http://www.w3.org/2000/svg">                        <path d="M17.0837 6.45825L10.0003 13.5416L2.91699 6.45825" stroke="white" stroke-miterlimit="10"                            stroke-linecap="round" />                    </svg>                </div>                <div id="plan-benefit-accordion" class="vt750-accordion-content cro-hide">                    <ui class="plan-benefits-list">                    </ui>                </div>            </div>        </div>        <div class="vt750-modal-footer">            <div class="vt750-plan-details">                <div class="plan-pricing-container">                    <div class="pricing-col-1">                        <p>Price</p>                        <p><span id="pricing-amount_span"></span>/month</p>                    </div>                    <div class="pricing-col-2">                        <p>Data</p>                        <p id="data-amount_inner"></p>                    </div>                </div>            </div>            <div class="vt750-CTA">                <button class="cro-checkout-cta">                    <a id="checkout-link-CTA" href="/deep-link.html">Go to checkout</a>                </button>            </div>        </div>    </div>'
                var vt750ModalContent = document.querySelector('.vt750-modal-content')
                const croTarget = document.querySelector('[id="root"]')
                const croBody = document.querySelector('body')
                if (!vt750ModalContent) {
                    croTarget.insertAdjacentHTML('afterend', vt750Modal)
                }
                //Click functions
                const vt750InsertedModal = document.querySelector('.vt750-modal-container')
                //modal accordion logic open/close
                //PLAN INFORMATION
                const planInformationHeader = document.querySelector('#plan-information')
                const planInformationAccordion = document.querySelector('#plan-information-accordion')
                const planInformationChevron = document.querySelector('#plan-overview_chevron')
                if (!planInformationHeader.dataset.hasListener) {
                    planInformationHeader.addEventListener('click', function () {
                        planInformationAccordion.classList.toggle('cro-hide')
                        planInformationChevron.classList.toggle('opened-accordion_chevron')
                    })
                }
                planInformationHeader.dataset.hasListener = "true"
                //PLAN BENEFITS
                const planBenefitsHeader = document.querySelector('#plan-benefits')
                const planBenefitsAccordion = document.querySelector('#plan-benefit-accordion')
                const planBenefitsChevron = document.querySelector('#plan-benefits_chevron')
                if (!planBenefitsHeader.dataset.hasListener) {
                    planBenefitsHeader.addEventListener('click', function () {
                        planBenefitsAccordion.classList.toggle('cro-hide')
                        planBenefitsChevron.classList.toggle('opened-accordion_chevron')
                    })
                }
                planBenefitsHeader.dataset.hasListener = "true"
                //show modal
                var croCTAs = document.querySelectorAll('.j77vt750')
                croCTAs.forEach(function (croCta, index) {
                    if (!croCta.dataset.hasListener) {
                        croCta.addEventListener('click', function () {
                            //open modal 
                            if (vt750InsertedModal.classList.contains('cro-hide')) {
                                vt750InsertedModal.classList.remove('cro-hide')
                                croTarget.classList.add('cro-background-blur')
                                croBody.classList.add('cro-stop-scroll')
                            }
                            //add condition for mobile vs desktop
                            if (window.innerWidth < 800) {
                                //close accordion items 
                                if (!planBenefitsAccordion.classList.contains('cro-hide')) {
                                    planBenefitsAccordion.classList.add('cro-hide')
                                    planBenefitsChevron.classList.remove('opened-accordion_chevron')
                                }
                                if (!planInformationAccordion.classList.contains('cro-hide')) {
                                    planInformationAccordion.classList.add('cro-hide')
                                    planInformationChevron.classList.remove('opened-accordion_chevron')
                                }
                            } else {
                                //open accordion items 
                                if (planBenefitsAccordion.classList.contains('cro-hide')) {
                                    planBenefitsAccordion.classList.remove('cro-hide')
                                    planBenefitsChevron.classList.add('opened-accordion_chevron')
                                }
                                if (planInformationAccordion.classList.contains('cro-hide')) {
                                    planInformationAccordion.classList.remove('cro-hide')
                                    planInformationChevron.classList.add('opened-accordion_chevron')
                                }
                            }
                            //populate info dependant on which CTA is clicked
                            //modal variables 
                            const planInformationHeader = document.querySelector('#plan-information-header_main')
                            const planInformationText = document.querySelector('[data-src="plan-information-text_main"]')
                            const planInformationAccordionInner = document.querySelector('#plan-information-accordion')
                            const planBenefitsAccordionInner = document.querySelector('.plan-benefits-list')
                            const dataAmount = document.querySelector('#data-amount_inner')
                            const pricingAmount = document.querySelector('#pricing-amount_span')
                            const checkoutDeepLinkHref = document.querySelector('#checkout-link-CTA')
                            if (index === 0) {
                                //£12 plan
                                //plan information header
                                planInformationHeader.innerHTML = 'Unlimited Social + Music + Video'
                                planInformationText.innerHTML = 'On 20 apps in the UK without eating your data allowance'
                                //plan information accordion 
                                planInformationAccordionInner.innerHTML = '<!--Item 1-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"\
                                            xmlns="http://www.w3.org/2000/svg">\
                                            <path fill-rule="evenodd" clip-rule="evenodd"\
                                                d="M1.61231 18.3128L13.1188 18.2524L13.2024 24.2741C13.2195 25.4707 14.657 26.0686 15.5171 25.2363L18.8118 22.0521L24.8628 27.8163L27.2176 4.29858L1.61231 18.3128ZM22.6085 8.34123L6.87604 16.9518L13.5099 16.917L22.6085 8.34123ZM14.4469 17.8662L14.5356 24.2554C14.536 24.2839 14.5696 24.2978 14.5901 24.2779L17.9156 21.0639L15.6632 18.8674L20.9803 11.7081L14.4469 17.8662ZM17.4286 18.7266L25.5245 7.82573L23.8099 24.9495L17.4286 18.7266Z"\
                                                fill="white" />\
                                        </svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Social</h4>\
                                        <p id="modal-p-elem">Unlimited use of these social apps and websites: Snapchat, Instagram, WhatsApp, Facebook, Twitter, Pinterest and Facebook Messenger.</p>\
                                    </div>\
                                </div>\
                                <!--Item 1 -- END -->\
                                <!--Item 2-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"\
                                            xmlns="http://www.w3.org/2000/svg">\
                                            <path fill-rule="evenodd" clip-rule="evenodd"\
d="M28.7625 8.223C25.95 5.27925 22.125 3.66675 18 3.66675C13.875 3.66675 10.05 5.27925 7.2375 8.20425C4.5375 10.998 3 14.8042 3 18.6667L3 24.6667C3 25.0792 3.3375 25.4167 3.75 25.4167C4.1625 25.4167 4.5 25.0792 4.5 24.6667L4.5 26.9167C4.5 28.9792 6.1875 30.6667 8.25 30.6667C10.3125 30.6667 12 28.9792 12 26.9167L12 20.9167C12 18.8542 10.3125 17.1667 8.25 17.1667C6.1875 17.1667 4.5 18.8542 4.5 20.9167L4.5 18.6667C4.5 15.198 5.8875 11.7667 8.30625 9.25425C10.8563 6.6105 14.2875 5.16675 18 5.16675C21.7125 5.16675 25.1437 6.6105 27.6937 9.25425C30.1125 11.7855 31.5 15.198 31.5 18.6667L31.5 20.9167C31.5 18.8542 29.8125 17.1667 27.75 17.1667C25.6875 17.1667 24 18.8542 24 20.9167L24 26.9167C24 28.9792 25.6875 30.6667 27.75 30.6667C29.8125 30.6667 31.5 28.9792 31.5 26.9167L31.5 24.6667C31.5 25.0792 31.8375 25.4167 32.25 25.4167C32.6625 25.4167 33 25.0792 33 24.6667L33 18.6667C33 14.823 31.4625 11.0167 28.7625 8.223ZM6 20.9167C6 19.6792 7.0125 18.6667 8.25 18.6667C9.4875 18.6667 10.5 19.6792 10.5 20.9167L10.5 26.9167C10.5 28.1542 9.4875 29.1667 8.25 29.1667C7.0125 29.1667 6 28.1542 6 26.9167L6 20.9167ZM27.75 29.1667C28.9875 29.1667 30 28.1542 30 26.9167L30 20.9167C30 19.6792 28.9875 18.6667 27.75 18.6667C26.5125 18.6667 25.5 19.6792 25.5 20.9167L25.5 26.9167C25.5 28.1542 26.5125 29.1667 27.75 29.1667Z"\                                                fill="white" />\
                                        </svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Music</h4>\
                                        <p id="modal-p-elem">Unlimited use of these music apps and websites: Spotify, Apple music, Amazon music, Tidal, Deezer, Napster and Primordial.</p>\
                                    </div>\
                                </div>\
                                <!--Item 2 -- END -->\
                                <!--Item 3-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7221 16.9221C31.2017 17.1846 31.5 17.6879 31.5 18.2347C31.5 18.7815 31.2017 19.2848 30.7361 19.5395L9.73152 31.5929C9.27085 31.8527 8.70723 31.8501 8.24901 31.5859C7.79079 31.3218 7.50605 30.8354 7.5 30.2974L7.50005 5.97903C7.50605 5.45016 7.79079 4.96375 8.24901 4.6996C8.70722 4.43545 9.27084 4.43281 9.74177 4.69855L30.5707 16.8579C30.6218 16.8736 30.6724 16.8949 30.7221 16.9221ZM9.09522 30.1187L9.09527 6.16824L29.7848 18.2463L9.09522 30.1187Z" fill="white"/>\
</svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Video</h4>\
                                        <p id="modal-p-elem">Unlimited streaming on these video apps and websites: YouTube, Netflix, Prime Video, My5 and TikTok.</p>\
                                    </div>\
                                </div>\
                                <!--Item 3 -- END -->\
                                '
                                //plan benefits 
                                //just <li> elements 
                                planBenefitsAccordionInner.innerHTML = '<li class="plan-benefits-list_item">Rolling 30-day subscription, cancel anytime</li>\
                                <li class="plan-benefits-list_item">Unlimited calls, text & picture messages</li>\
                                <li class="plan-benefits-list_item">Use our 5G network on 5G-enabled phones</li>\
                                <li class="plan-benefits-list_item">Exclusive rewards & discounts with VOXI drop</li>\
                                <li class="plan-benefits-list_item">WiFi Calling, 4G Calling and Visual Voicemail</li>\
                                <li class="plan-benefits-list_item">Also available with eSIM</li>'
                                //footer
                                dataAmount.innerHTML = '<span>25GB</span> 75GB'
                                pricingAmount.innerHTML = '£12 '
                                checkoutDeepLinkHref.href = 'www.google.com'
                            } else if (index === 1) {
                                //£10 plan
                                //plan information header
                                planInformationHeader.innerHTML = 'Unlimited Social'
                                planInformationText.innerHTML = 'On 7 apps in the UK without eating your data allowance'
                                //plan information accordion 

                                planInformationAccordionInner.innerHTML = '<!--Item 1-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"\
                                            xmlns="http://www.w3.org/2000/svg">\
                                            <path fill-rule="evenodd" clip-rule="evenodd"\
                                                d="M1.61231 18.3128L13.1188 18.2524L13.2024 24.2741C13.2195 25.4707 14.657 26.0686 15.5171 25.2363L18.8118 22.0521L24.8628 27.8163L27.2176 4.29858L1.61231 18.3128ZM22.6085 8.34123L6.87604 16.9518L13.5099 16.917L22.6085 8.34123ZM14.4469 17.8662L14.5356 24.2554C14.536 24.2839 14.5696 24.2978 14.5901 24.2779L17.9156 21.0639L15.6632 18.8674L20.9803 11.7081L14.4469 17.8662ZM17.4286 18.7266L25.5245 7.82573L23.8099 24.9495L17.4286 18.7266Z"\
                                                fill="white" />\
                                        </svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Social</h4>\
                                        <p id="modal-p-elem">Unlimited use of these social apps and websites: Snapchat, Instagram, WhatsApp, Facebook, Twitter, Pinterest and Facebook Messenger.\
                                        </p>\
                                    </div>\
                                </div>\
                                <!--Item 1 -- END -->\
                                '
                                //plan benefits 
                                //just <li> elements 
                                planBenefitsAccordionInner.innerHTML = '<li class="plan-benefits-list_item">Rolling 30-day subscription, cancel anytime</li>\
                                <li class="plan-benefits-list_item">Unlimited calls, text & picture messages</li>\
                                <li class="plan-benefits-list_item">Use our 5G network on 5G-enabled phones</li>\
                                <li class="plan-benefits-list_item">Exclusive rewards & discounts with VOXI drop</li>\
                                <li class="plan-benefits-list_item">WiFi Calling, 4G Calling and Visual Voicemail</li>\
                                <li class="plan-benefits-list_item">Also available with eSIM</li>'
                                //footer
                                dataAmount.innerHTML = '20GB'
                                pricingAmount.innerHTML = '£10 '
                                checkoutDeepLinkHref.href = 'www.google.com'
                            } else if (index === 2) {
                                //£20 plan
                                //plan information header
                                planInformationHeader.innerHTML = 'Unlimited Social + Music + Video'
                                planInformationText.innerHTML = 'On 20 apps in the UK without eating your data allowance'
                                //plan information accordion 

                                planInformationAccordionInner.innerHTML = '<!--Item 1-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"\
                                            xmlns="http://www.w3.org/2000/svg">\
                                            <path fill-rule="evenodd" clip-rule="evenodd"\
                                                d="M1.61231 18.3128L13.1188 18.2524L13.2024 24.2741C13.2195 25.4707 14.657 26.0686 15.5171 25.2363L18.8118 22.0521L24.8628 27.8163L27.2176 4.29858L1.61231 18.3128ZM22.6085 8.34123L6.87604 16.9518L13.5099 16.917L22.6085 8.34123ZM14.4469 17.8662L14.5356 24.2554C14.536 24.2839 14.5696 24.2978 14.5901 24.2779L17.9156 21.0639L15.6632 18.8674L20.9803 11.7081L14.4469 17.8662ZM17.4286 18.7266L25.5245 7.82573L23.8099 24.9495L17.4286 18.7266Z"\
                                                fill="white" />\
                                        </svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Social</h4>\
                                        <p id="modal-p-elem">Unlimited use of these social apps and websites: Snapchat, Instagram, WhatsApp, Facebook, Twitter, Pinterest and Facebook Messenger.</p>\
                                    </div>\
                                </div>\
                                <!--Item 1 -- END -->\
                                <!--Item 2-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"\
                                            xmlns="http://www.w3.org/2000/svg">\
                                            <path fill-rule="evenodd" clip-rule="evenodd"\
d="M28.7625 8.223C25.95 5.27925 22.125 3.66675 18 3.66675C13.875 3.66675 10.05 5.27925 7.2375 8.20425C4.5375 10.998 3 14.8042 3 18.6667L3 24.6667C3 25.0792 3.3375 25.4167 3.75 25.4167C4.1625 25.4167 4.5 25.0792 4.5 24.6667L4.5 26.9167C4.5 28.9792 6.1875 30.6667 8.25 30.6667C10.3125 30.6667 12 28.9792 12 26.9167L12 20.9167C12 18.8542 10.3125 17.1667 8.25 17.1667C6.1875 17.1667 4.5 18.8542 4.5 20.9167L4.5 18.6667C4.5 15.198 5.8875 11.7667 8.30625 9.25425C10.8563 6.6105 14.2875 5.16675 18 5.16675C21.7125 5.16675 25.1437 6.6105 27.6937 9.25425C30.1125 11.7855 31.5 15.198 31.5 18.6667L31.5 20.9167C31.5 18.8542 29.8125 17.1667 27.75 17.1667C25.6875 17.1667 24 18.8542 24 20.9167L24 26.9167C24 28.9792 25.6875 30.6667 27.75 30.6667C29.8125 30.6667 31.5 28.9792 31.5 26.9167L31.5 24.6667C31.5 25.0792 31.8375 25.4167 32.25 25.4167C32.6625 25.4167 33 25.0792 33 24.6667L33 18.6667C33 14.823 31.4625 11.0167 28.7625 8.223ZM6 20.9167C6 19.6792 7.0125 18.6667 8.25 18.6667C9.4875 18.6667 10.5 19.6792 10.5 20.9167L10.5 26.9167C10.5 28.1542 9.4875 29.1667 8.25 29.1667C7.0125 29.1667 6 28.1542 6 26.9167L6 20.9167ZM27.75 29.1667C28.9875 29.1667 30 28.1542 30 26.9167L30 20.9167C30 19.6792 28.9875 18.6667 27.75 18.6667C26.5125 18.6667 25.5 19.6792 25.5 20.9167L25.5 26.9167C25.5 28.1542 26.5125 29.1667 27.75 29.1667Z"\                                                fill="white" />\
                                        </svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Music</h4>\
                                        <p id="modal-p-elem">Unlimited use of these music apps and websites: Spotify, Apple music, Amazon music, Tidal, Deezer, Napster and Primordial.</p>\
                                    </div>\
                                </div>\
                                <!--Item 2 -- END -->\
                                <!--Item 3-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7221 16.9221C31.2017 17.1846 31.5 17.6879 31.5 18.2347C31.5 18.7815 31.2017 19.2848 30.7361 19.5395L9.73152 31.5929C9.27085 31.8527 8.70723 31.8501 8.24901 31.5859C7.79079 31.3218 7.50605 30.8354 7.5 30.2974L7.50005 5.97903C7.50605 5.45016 7.79079 4.96375 8.24901 4.6996C8.70722 4.43545 9.27084 4.43281 9.74177 4.69855L30.5707 16.8579C30.6218 16.8736 30.6724 16.8949 30.7221 16.9221ZM9.09522 30.1187L9.09527 6.16824L29.7848 18.2463L9.09522 30.1187Z" fill="white"/>\
</svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Video</h4>\
                                        <p id="modal-p-elem">Unlimited streaming on these video apps and websites: YouTube, Netflix, Prime Video, My5 and TikTok.</p>\
                                    </div>\
                                </div>\
                                <!--Item 3 -- END -->\
                                '
                                //plan benefits 
                                //just <li> elements 
                                planBenefitsAccordionInner.innerHTML = '<li class="plan-benefits-list_item">Rolling 30-day subscription, cancel anytime</li>\
                                <li class="plan-benefits-list_item">Unlimited calls, text & picture messages</li>\
                                <li class="plan-benefits-list_item">Use our 5G network on 5G-enabled phones</li>\
                                <li class="plan-benefits-list_item">Exclusive rewards & discounts with VOXI drop</li>\
                                <li class="plan-benefits-list_item">WiFi Calling, 4G Calling and Visual Voicemail</li>\
                                <li class="plan-benefits-list_item">Also available with eSIM</li>'
                                //footer
                                dataAmount.innerHTML = '<span>100GB</span> 300GB'
                                pricingAmount.innerHTML = '£20 '
                                checkoutDeepLinkHref.href = 'www.google.com'
                            } else if (index === 3) {
                                //£15 plan
                                //plan information header
                                planInformationHeader.innerHTML = 'Unlimited Social + Music + Video'
                                planInformationText.innerHTML = 'On 20 apps in the UK without eating your data allowance'
                                //plan information accordion 
                                planInformationAccordionInner.innerHTML = '<!--Item 1-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"\
                                            xmlns="http://www.w3.org/2000/svg">\
                                            <path fill-rule="evenodd" clip-rule="evenodd"\
                                                d="M1.61231 18.3128L13.1188 18.2524L13.2024 24.2741C13.2195 25.4707 14.657 26.0686 15.5171 25.2363L18.8118 22.0521L24.8628 27.8163L27.2176 4.29858L1.61231 18.3128ZM22.6085 8.34123L6.87604 16.9518L13.5099 16.917L22.6085 8.34123ZM14.4469 17.8662L14.5356 24.2554C14.536 24.2839 14.5696 24.2978 14.5901 24.2779L17.9156 21.0639L15.6632 18.8674L20.9803 11.7081L14.4469 17.8662ZM17.4286 18.7266L25.5245 7.82573L23.8099 24.9495L17.4286 18.7266Z"\
                                                fill="white" />\
                                        </svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Social</h4>\
                                        <p id="modal-p-elem">Unlimited use of these social apps and websites: Snapchat, Instagram, WhatsApp, Facebook, Twitter, Pinterest and Facebook Messenger.</p>\
                                    </div>\
                                </div>\
                                <!--Item 1 -- END -->\
                                <!--Item 2-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"\
                                            xmlns="http://www.w3.org/2000/svg">\
                                            <path fill-rule="evenodd" clip-rule="evenodd"\
d="M28.7625 8.223C25.95 5.27925 22.125 3.66675 18 3.66675C13.875 3.66675 10.05 5.27925 7.2375 8.20425C4.5375 10.998 3 14.8042 3 18.6667L3 24.6667C3 25.0792 3.3375 25.4167 3.75 25.4167C4.1625 25.4167 4.5 25.0792 4.5 24.6667L4.5 26.9167C4.5 28.9792 6.1875 30.6667 8.25 30.6667C10.3125 30.6667 12 28.9792 12 26.9167L12 20.9167C12 18.8542 10.3125 17.1667 8.25 17.1667C6.1875 17.1667 4.5 18.8542 4.5 20.9167L4.5 18.6667C4.5 15.198 5.8875 11.7667 8.30625 9.25425C10.8563 6.6105 14.2875 5.16675 18 5.16675C21.7125 5.16675 25.1437 6.6105 27.6937 9.25425C30.1125 11.7855 31.5 15.198 31.5 18.6667L31.5 20.9167C31.5 18.8542 29.8125 17.1667 27.75 17.1667C25.6875 17.1667 24 18.8542 24 20.9167L24 26.9167C24 28.9792 25.6875 30.6667 27.75 30.6667C29.8125 30.6667 31.5 28.9792 31.5 26.9167L31.5 24.6667C31.5 25.0792 31.8375 25.4167 32.25 25.4167C32.6625 25.4167 33 25.0792 33 24.6667L33 18.6667C33 14.823 31.4625 11.0167 28.7625 8.223ZM6 20.9167C6 19.6792 7.0125 18.6667 8.25 18.6667C9.4875 18.6667 10.5 19.6792 10.5 20.9167L10.5 26.9167C10.5 28.1542 9.4875 29.1667 8.25 29.1667C7.0125 29.1667 6 28.1542 6 26.9167L6 20.9167ZM27.75 29.1667C28.9875 29.1667 30 28.1542 30 26.9167L30 20.9167C30 19.6792 28.9875 18.6667 27.75 18.6667C26.5125 18.6667 25.5 19.6792 25.5 20.9167L25.5 26.9167C25.5 28.1542 26.5125 29.1667 27.75 29.1667Z"\                                                fill="white" />\
                                        </svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Music</h4>\
                                        <p id="modal-p-elem">Unlimited use of these music apps and websites: Spotify, Apple music, Amazon music, Tidal, Deezer, Napster and Primordial.</p>\
                                    </div>\
                                </div>\
                                <!--Item 2 -- END -->\
                                <!--Item 3-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7221 16.9221C31.2017 17.1846 31.5 17.6879 31.5 18.2347C31.5 18.7815 31.2017 19.2848 30.7361 19.5395L9.73152 31.5929C9.27085 31.8527 8.70723 31.8501 8.24901 31.5859C7.79079 31.3218 7.50605 30.8354 7.5 30.2974L7.50005 5.97903C7.50605 5.45016 7.79079 4.96375 8.24901 4.6996C8.70722 4.43545 9.27084 4.43281 9.74177 4.69855L30.5707 16.8579C30.6218 16.8736 30.6724 16.8949 30.7221 16.9221ZM9.09522 30.1187L9.09527 6.16824L29.7848 18.2463L9.09522 30.1187Z" fill="white"/>\
</svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Video</h4>\
                                        <p id="modal-p-elem">Unlimited streaming on these video apps and websites: YouTube, Netflix, Prime Video, My5 and TikTok.</p>\
                                    </div>\
                                </div>\
                                <!--Item 3 -- END -->\
                                '
                                //plan benefits 
                                //just <li> elements 
                                planBenefitsAccordionInner.innerHTML = '<li class="plan-benefits-list_item">Rolling 30-day subscription, cancel anytime</li>\
                                <li class="plan-benefits-list_item">Unlimited calls, text & picture messages</li>\
                                <li class="plan-benefits-list_item">Use our 5G network on 5G-enabled phones</li>\
                                <li class="plan-benefits-list_item">Exclusive rewards & discounts with VOXI drop</li>\
                                <li class="plan-benefits-list_item">WiFi Calling, 4G Calling and Visual Voicemail</li>\
                                <li class="plan-benefits-list_item">Also available with eSIM</li>'
                                //footer
                                dataAmount.innerHTML = '35GB'
                                pricingAmount.innerHTML = '£15 '
                                checkoutDeepLinkHref.href = 'www.google.com'
                            } else if (index === 4) {
                                //£35 plan
                                //plan information header
                                planInformationHeader.innerHTML = 'Unlimited Data'
                                planInformationText.innerHTML = 'So you can snap post and stream as much as you like without ever running out of data.'
                                //plan information accordion 

                                planInformationAccordionInner.innerHTML = '<!--Item 1-->\
                                <div class="plan-benefit-item">\
                                    <div class="plan-benefit-item_col-1">\
<svg width="32" height="32" viewBox="5 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.9844 17.9077C27.7883 17.2228 28.4864 16.588 29.0825 15.9994C30.615 14.4585 31.684 12.9752 32.2835 11.5405C32.8835 10.1041 33.1782 8.3151 33.1782 6.17202C33.1782 5.65803 32.5784 5.02139 32.051 5.02075C30.0008 5.02075 28.2126 5.33434 26.6894 5.96806C25.1668 6.60123 23.6716 7.65265 22.1953 9.12101C21.6118 9.71159 20.9776 10.4091 20.2914 11.2146L16.0944 11.4378C15.7568 11.4802 15.469 11.6573 15.2336 11.9927L12.5903 16.5245C12.4923 16.696 12.4443 16.8872 12.4443 17.085C12.4443 17.3605 12.544 17.6153 12.77 17.8864L13.5445 18.6602C13.844 18.938 14.2379 19.0365 14.6526 18.9214L17.4735 18.0525L20.1466 20.7255L19.2831 23.5295C19.2445 23.6446 19.2325 23.7525 19.2325 23.8734C19.2325 24.1773 19.3428 24.4595 19.5582 24.6748L20.3428 25.4578C20.73 25.804 21.2406 25.8695 21.6803 25.6055L26.2642 22.928C26.5413 22.73 26.7181 22.4427 26.7658 22.0508L26.9844 17.9077ZM20.7774 23.7728L21.846 20.3036L17.8953 16.3531L17.4636 16.486L14.4257 17.422L14.0313 17.0307L16.4254 12.9205L21.0187 12.6782L21.2282 12.4295C21.9716 11.5467 22.6497 10.7953 23.2577 10.1799C24.5987 8.84608 25.9355 7.90608 27.2654 7.35302C28.5039 6.83777 29.9733 6.55989 31.6753 6.5246C31.6453 8.32308 31.3838 9.80266 30.8994 10.9623C30.3827 12.1988 29.4245 13.5284 28.0237 14.9368C27.4021 15.5507 26.6503 16.2293 25.7694 16.971L25.5207 17.1804L25.5035 17.5052L25.2806 21.7689L21.1708 24.1662L20.7774 23.7728Z" fill="white"/>\
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.29832 26.0401C9.27523 26.0966 9.25175 26.1544 9.22782 26.2138C8.61211 27.7412 8.55024 27.8813 8.43421 28.0143L6.08106 30.7106L9.65349 30.4979C12.1398 30.3499 15.7139 28.8821 17.2527 26.4414C18.4617 24.5237 18.1889 21.8581 16.3675 20.5592C14.514 19.2375 11.7008 19.7276 10.295 21.5215C9.39065 22.6756 8.98571 23.8386 9.18987 25.2764L9.29832 26.0401ZM15.9838 25.6414C14.4483 28.077 10.5877 28.9396 9.56436 29.0006C9.87612 28.6433 10.1503 27.9529 10.4597 27.1739C10.9094 26.0414 11.4335 24.7218 12.2553 23.967C11.4885 24.0205 11.0896 24.4405 10.675 25.0655C10.5186 23.9639 10.9038 23.1765 11.4757 22.4467C12.3826 21.2894 14.293 20.9222 15.4966 21.7805C16.6657 22.6142 16.7578 24.4138 15.9838 25.6414Z" fill="white"/>\
<path d="M26.5888 11.6678C26.003 11.0821 26.003 10.1323 26.5888 9.54652C27.1745 8.96073 28.1243 8.96073 28.7101 9.54652C29.2959 10.1323 29.2959 11.0821 28.7101 11.6678C28.1243 12.2536 27.1745 12.2536 26.5888 11.6678Z" fill="white"/>\
</svg>\
                                    </div>\
                                    <div class="plan-benefit-item_col-2">\
                                        <h4>Unlimited Data</h4>\
                                        <p id="modal-p-elem">Unlike other VOXI plans that come with unlimited data on social media, this plan comes with unlimited data for everything.</p>\
                                    </div>\
                                </div>\
                                <!--Item 1 -- END -->\
                                '
                                //plan benefits 
                                //just <li> elements 
                                planBenefitsAccordionInner.innerHTML = '<li class="plan-benefits-list_item">Rolling 30-day subscription, cancel anytime</li>\
                                <li class="plan-benefits-list_item">Unlimited calls, text & picture messages</li>\
                                <li class="plan-benefits-list_item">Use our 5G network on 5G-enabled phones</li>\
                                <li class="plan-benefits-list_item">Exclusive rewards & discounts with VOXI drop</li>\
                                <li class="plan-benefits-list_item">WiFi Calling, 4G Calling and Visual Voicemail</li>\
                                <li class="plan-benefits-list_item">Also available with eSIM</li>'
                                //footer
                                dataAmount.innerHTML = 'Unlimited Data'
                                pricingAmount.innerHTML = '£35 '
                                checkoutDeepLinkHref.href = 'www.google.com'
                            }
                        })
                    }
                    croCta.dataset.hasListener = "true"
                })
                //close modal
                var modalMainHeader = document.querySelector('#modal-heading')
                if (!modalMainHeader.dataset.hasListener) {
                    modalMainHeader.addEventListener('click', function () {
                        if (!vt750InsertedModal.classList.contains('cro-hide')) {
                            vt750InsertedModal.classList.add('cro-hide')
                            croTarget.classList.remove('cro-background-blur')
                            croBody.classList.remove('cro-stop-scroll')
                        }
                    })
                }
                modalMainHeader.dataset.hasListener = "true"
            }

            //function to hide see plan detail links 
            function hideSeePlanDetails() {
                //remove see plan details
                var seePlanDetailsLink = document.querySelectorAll('[data-component-name="LinkWithIcon"]')
                for (var i = 0; i < seePlanDetailsLink.length; i++) {
                    if (seePlanDetailsLink) {
                        if (!seePlanDetailsLink[i].parentElement.parentElement.parentElement.classList.contains('cro-hide')) {
                            seePlanDetailsLink[i].parentElement.parentElement.parentElement.classList.add('cro-hide')
                        }
                    }
                }
            }
            ////////
        }
    }