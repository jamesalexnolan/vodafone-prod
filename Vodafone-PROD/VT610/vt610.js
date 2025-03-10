////MUTATION OBSERVER////
let vt610_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let vt610_oldValue = mutation.oldValue;
        let vt610_newValue = mutation.target.textContent;
        if (vt610_oldValue !== vt610_newValue) {
            //Your details section
            if (window.location.href.indexOf('voxi.co.uk/acquisition/checkout') > -1) {

                vt610_yourDetailChanges()
                vt610_observer.disconnect();
            }
        }
    });
});

vt610_observer.observe(document.body, {
    //characterDataOldValue: true,
    subtree: true,
    childList: true,
    //characterData: true
    attributes: true
});

//functions to call
//DETAIL CHANGES
function vt610_yourDetailChanges() {
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
        }

        //target element 
        var vt610_header = document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div > h1")

        if (vt610_header) {
            //clear polling when found
            clearInterval(vt610_pxInterval);
            //capture CTA classes 
            var vt610_ctaClasslist = document.querySelector('[aria-label="Continue"]').classList
            localStorage.setItem('vt610_ctaClasslist', JSON.stringify(Array.from(vt610_ctaClasslist)))
            //insert new footer 
            var vt610_footer = document.querySelector("#root > div > div:nth-child(3) > div:nth-child(3) > div:nth-child(2)")

            if (vt610_footer && !document.querySelector('.vt533-footer')) {
                // Create a new div element with the specified HTML content
                var vt610_newFooter = `
            <div class="vt533-footer">
                <div class="vt533-footer--links">
                    <a href="https://www.voxi.co.uk/terms-conditions" target="_blank">T's & C's</a>
                    <a href="https://www.voxi.co.uk/charges" target="_blank">Charges</a>
                    <a href="https://www.voxi.co.uk/privacy-policy" target="_blank">Privacy Policy</a>
                    <div class="vt533-footer--break"></div>
                    <a href="https://www.voxi.co.uk/terms-conditions#cookie-policy" target="_blank">Cookie Policy</a>
                    <a href="https://www.voxi.co.uk/contact-us" target="_blank">Contact us</a>
                </div>
                <p>© 2024 VOXI trading under Vodafone Ltd. Registered office: Vodafone House, The Connection, Newbury, Berkshire, RG14 2FN</p>
                <p>Registered in England, Registered No.1471587</p>
            </div>
        `;
                //insert new footer
                vt610_footer.insertAdjacentHTML('afterbegin', vt610_newFooter);

                //hide original footer
                document.querySelector("#root > div > div:nth-child(3) > div:nth-child(3) > div:nth-child(2)>div:nth-child(2)").style.display = 'none'
            }
            //hide header 
            var vt610_header = document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div > h1")
            if (vt610_header && !document.querySelector('.vt610_container')) {
                vt610_header.style.display = 'none'
                document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div > p").innerHTML = 'Fill in your details below.'
                //insert secure checkout element
                var vt610_banner = document.querySelector("#root > div > div:nth-child(3) > div > header > div > div > div")
                //adjust logo
                document.querySelector("#root > div > div:nth-child(3) > div > header > div > div > div > a").style.flex = '1'
                //add secure checkout
                var vt610_secure_checkout = '<div class="vt610_container"><p>Secure Checkout<span><svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4876 15.2614C12.4876 14.9853 12.2637 14.7614 11.9876 14.7614C11.7114 14.7614 11.4876 14.9853 11.4876 15.2614H12.4876ZM11.4876 17.1965C11.4876 17.4726 11.7114 17.6965 11.9876 17.6965C12.2637 17.6965 12.4876 17.4726 12.4876 17.1965H11.4876ZM15.4913 6.34414H14.9913H15.4913ZM11.9875 3V2.5V3ZM8.48379 6.34414H8.98379H8.48379ZM19.4988 9.59305L19.9988 9.59298L19.9987 9.09305H19.4988V9.59305ZM19.5 19.0959H20V19.0958L19.5 19.0959ZM4.5 9.59306V9.09306H4L4 9.59306L4.5 9.59306ZM11.4876 15.2614V17.1965H12.4876V15.2614H11.4876ZM12.9052 13.9202C12.9052 14.3631 12.5222 14.7614 12 14.7614V15.7614C13.03 15.7614 13.9052 14.9588 13.9052 13.9202H12.9052ZM12 14.7614C11.4778 14.7614 11.0948 14.3631 11.0948 13.9202H10.0948C10.0948 14.9588 10.97 15.7614 12 15.7614V14.7614ZM11.0948 13.9202C11.0948 13.4773 11.4778 13.079 12 13.079V12.079C10.97 12.079 10.0948 12.8816 10.0948 13.9202H11.0948ZM12 13.079C12.5222 13.079 12.9052 13.4773 12.9052 13.9202H13.9052C13.9052 12.8816 13.03 12.079 12 12.079V13.079ZM15.9913 9.59306V6.34414H14.9913V9.59306H15.9913ZM15.9913 6.34414C15.9913 5.836 15.8864 5.33343 15.6832 4.86534L14.7659 5.26345C14.9149 5.60681 14.9913 5.97396 14.9913 6.34414H15.9913ZM15.6832 4.86534C15.4801 4.39731 15.1831 3.97361 14.8103 3.61778L14.1198 4.34117C14.3977 4.60641 14.6169 4.92001 14.7659 5.26345L15.6832 4.86534ZM14.8103 3.61778C14.4375 3.262 13.9962 2.98094 13.5122 2.78958L13.1445 3.71954C13.5107 3.86429 13.8419 4.07589 14.1198 4.34117L14.8103 3.61778ZM13.5122 2.78958C13.0282 2.59822 12.5102 2.5 11.9875 2.5V3.5C12.3851 3.5 12.7784 3.57477 13.1445 3.71954L13.5122 2.78958ZM11.9875 2.5C11.4649 2.5 10.9469 2.59822 10.4629 2.78958L10.8305 3.71954C11.1967 3.57477 11.5899 3.5 11.9875 3.5V2.5ZM10.4629 2.78958C9.97884 2.98094 9.53755 3.262 9.16479 3.61778L9.85523 4.34117C10.1332 4.07589 10.4644 3.86429 10.8305 3.71954L10.4629 2.78958ZM9.16479 3.61778C8.79198 3.97361 8.49494 4.39731 8.29183 4.86534L9.20916 5.26345C9.35821 4.92001 9.57734 4.6064 9.85523 4.34117L9.16479 3.61778ZM8.29183 4.86534C8.08868 5.33342 7.98379 5.83599 7.98379 6.34414H8.98379C8.98379 5.97396 9.06015 5.60682 9.20916 5.26345L8.29183 4.86534ZM7.98379 6.34414V9.59306H8.98379V6.34414H7.98379ZM4 11.4972V19.0959H5V11.4972H4ZM4 19.0959C4 19.7412 4.26881 20.3551 4.73911 20.804L5.42955 20.0806C5.15157 19.8153 5 19.4605 5 19.0959H4ZM4.73911 20.804C5.20861 21.2521 5.84062 21.5 6.49501 21.5V20.5C6.09119 20.5 5.70832 20.3467 5.42955 20.0806L4.73911 20.804ZM6.49501 21.5H17.505V20.5H6.49501V21.5ZM17.505 21.5C18.1594 21.5 18.7914 21.2521 19.2609 20.804L18.5705 20.0806C18.2917 20.3467 17.9088 20.5 17.505 20.5V21.5ZM19.2609 20.804C19.7312 20.3551 20 19.7412 20 19.0959H19C19 19.4605 18.8484 19.8153 18.5705 20.0806L19.2609 20.804ZM20 19.0958L19.9988 9.59298L18.9988 9.59311L19 19.0959L20 19.0958ZM4 9.59306C4 10.0691 4 10.9408 4 11.4972H5C5 10.9408 5 10.0691 5 9.59307L4 9.59306ZM19.4988 9.09305C16.999 9.09305 14.4992 9.09305 11.9994 9.09306C9.49958 9.09306 6.99979 9.09306 4.5 9.09306V10.0931C6.99979 10.0931 9.49959 10.0931 11.9994 10.0931C14.4992 10.0931 16.999 10.093 19.4988 10.093V9.09305Z" fill="white"/></svg></span></p></div>'
                vt610_banner.insertAdjacentHTML('beforeend', vt610_secure_checkout)

            }
            //hide original transfer number info
            var vt610_container = document.querySelector("#order-summary")
            document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div > div > div:nth-child(2)").classList.add('vt610_hidden_element')
            document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div > div > div:nth-child(3)").classList.add('vt610_hidden_element')
            document.querySelector('[data-component-name="Divider"]').parentElement.classList.add('vt610_hidden_element')
            //create new message
            var vt610_newContainer = '<div class="vt610_order-sum-container" style="\
                                        margin: 20px;\
                                        background: black;\
                                    "><div data-component-name="SimpleGrid" spacing="0" class="SimpleGridstyle__SimpleGrid-sc-1kko36n-0 ixGzkr"\ style="\
                                        display: flex;\
                                        justify-content: center;\
                                        align-items: normal;\
                                        padding: 20px;\
                                    "><div spacing="0" class="SimpleGridstyle__SimpleGridColumn-sc-1kko36n-1 kGDDBm" style="\
                                        display: flex;\
                                        align-items: center;\
                                        justify-content: end;\
                                    "><div class="Spacingstyle__Spacing-sc-14allya-0"><span class="SVGInline iMwk6 t-light" style="vertical-align: middle;"><svg class="SVGInline-svg iMwk6-svg t-light-svg" style="width: 40px;height: 40px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.9375 0.25H12.0625C12.9945 0.25 13.75 1.00552 13.75 1.9375V12.0625C13.75 12.9945 12.9945 13.75 12.0625 13.75H1.9375C1.00552 13.75 0.25 12.9945 0.25 12.0625V1.9375C0.25 1.00552 1.00552 0.25 1.9375 0.25ZM7.82856 5.80863H5.53694V7.108H6.29294V11.2188H7.82856V5.80863ZM6.00944 3.94225C6.00944 4.49744 6.4465 4.92269 6.98987 4.92269C7.54506 4.92269 7.98212 4.49744 7.98212 3.94225C7.98212 3.39887 7.54506 2.95 6.98987 2.95C6.4465 2.95 6.00944 3.39887 6.00944 3.94225Z" style="fill: #5F9BC8 !important;"></path></svg></span></div></div><div spacing="0" class="SimpleGridstyle__SimpleGridColumn-sc-1kko36n-1 jdwWtn" style="\
                                        display: flex;\
                                    "><div class="Spacingstyle__Spacing-sc-14allya-0"><p>You can transfer your number in "My Account" after you\'ve activated your SIM.</p></div></div></div></div>'
            var vt610_orderSummaryContainer = document.querySelector('.vt610_order-sum-container')
            if (!vt610_orderSummaryContainer) {
                var vt610_orderSummaryContainer = document.querySelector('.vt610_order-sum-container')
                vt610_container.insertAdjacentHTML('beforeend', vt610_newContainer)
            }

            // //move transfer number info
            // var vt610_container = document.querySelector("#order-summary")
            // var vt610_tranferNumber = document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div > div > div:nth-child(2)").outerHTML
            // var vt610_transferInfo = document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div > div > div:nth-child(3)").outerHTML
            // vt610_container.insertAdjacentHTML('beforeend', vt610_tranferNumber)
            // vt610_container.insertAdjacentHTML('beforeend', vt610_transferInfo)
            // document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div > div > div:nth-child(2)").classList.add('vt610_hidden_element')
            // document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div > div > div:nth-child(3)").classList.add('vt610_hidden_element')
            // document.querySelector('[data-component-name="Divider"]').parentElement.classList.add('vt610_hidden_element')
        }
        //click on payment details edit button, CTA isn't there 
    }
}
//PAYMENT CHANGES
//click event to trigger polling function
document.body.addEventListener('click', function (event) {
    if (event.target.closest('[aria-label="Continue"]')) {
        //only run on password
        ////POLLING FUNCTION////
        //polling function config
        var vt610_passwordChecker_pxFuncFired = 0;
        var vt610_passwordChecker_pxInterval = setInterval(vt610_passwordChecker_pxPollFunc, 50);

        //polling function
        function vt610_passwordChecker_pxPollFunc() {
            vt610_passwordChecker_pxFuncFired += 1;

            if (vt610_passwordChecker_pxFuncFired >= 10) {
                //try 20 times, if not found clear px func
                clearInterval(vt610_passwordChecker_pxInterval);
            }

            var vt610_continue = document.querySelector('[aria-label="Continue"]')

            //target element 

            if (vt610_continue) {
                //clear polling when found
                clearInterval(vt610_passwordChecker_pxInterval);
                //ACTIONS HERE 
                var vt610_buttonTitle = vt610_continue.parentElement.parentElement.parentElement.parentElement.firstChild
                if (vt610_buttonTitle && vt610_buttonTitle.innerText === 'Set a password') {
                    vt610_paymentChanges()
                }
            }
        }


    }
    //clicks on edit button to fire Payment changes function
    if (event.target.closest('[data-component-name="Link"]')) {
        if (event.target.closest('[data-component-name="Link"]') && event.target.closest('[data-component-name="Link"]').parentElement.innerText.indexOf('Payment details') > -1) {
            vt610_paymentChanges()
        }
    }
});

function vt610_paymentChanges() {
    //wait for payment details section 
    ////POLLING FUNCTION////
    //polling function config
    var vt610_payment_pxFuncFired = 0;
    var vt610_payment_pxInterval = setInterval(vt610_payment_pxPollFunc, 100);

    //polling function
    function vt610_payment_pxPollFunc() {
        vt610_payment_pxFuncFired += 1;

        if (vt610_payment_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vt610_payment_pxInterval);
        }

        //target element 
        var vt610_consent_box = document.querySelector('[id="consentAgreement"]')

        if (vt610_consent_box && !document.querySelector('.vt610_cta')) {
            //clear polling when found
            clearInterval(vt610_payment_pxInterval);
            //get CTA classes 
            var vt610_storedClasslist = localStorage.getItem('vt610_ctaClasslist')
            var vt610_parsedButtonClasslist = JSON.parse(vt610_storedClasslist)
            //Add CTA
            var vt610_consent_container = document.querySelector("#root > div > div:nth-child(3) > div > div:nth-child(3) > div > div > div > ul > li:nth-child(4) > div > div > div:nth-child(5)")
            // var vt610_cta = '<div class="sc-ehSCEj jDjdTd vt610_cta" style="margin: 32px 0 12px 0;><button type="button"class="Interactionstyle__Button-sc-53qagq-0 hBzCkm Buttonstyle__Button-sc-1miyxay-0 cMjpkN"data-component-name="Button">Continue</button></div>'
            var vt610_cta = '<div class="sc-ehSCEj jDjdTd vt610_cta" style="margin: 32px 0 12px 0;"> <button type="button"class="' + vt610_parsedButtonClasslist.join(' ') + '"data-component-name="Button">Add payment card</button></div>'
            vt610_consent_container.insertAdjacentHTML('beforeend', vt610_cta)
            //change promo text
            document.querySelector('[class*=CollapsibleContainerHeaderstyle__Children]').innerHTML = 'Promo code (optional)'
            //hide notifcation
            document.querySelector('[data-component-name="StateNotification"]').parentElement.style.display = 'none'

            //event listener 
            //cta selectors 
            var vt610_CTA = document.querySelector(".vt610_cta>button")
            var vt610_checkBox = window.getComputedStyle(document.querySelector('[class*="Checkboxstyle__Checkbox"]>div'))
            var vt610_checkSelection = vt610_checkBox.backgroundColor
            var vt610_selected = 'rgb(0, 185, 136)'
            var vt610_nonSelected = 'rgb(25, 23, 20)'

            //function to adjust states
            function vt610_ctaStateAdjust() {
                var vt610_CTA = document.querySelector(".vt610_cta>button")
                var vt610_checkBox = window.getComputedStyle(document.querySelector('[class*="Checkboxstyle__Checkbox"]>div'))
                var vt610_checkSelection = vt610_checkBox.backgroundColor
                var vt610_selected = 'rgb(0, 185, 136)'
                var vt610_nonSelected = 'rgb(25, 23, 20)'
                if (vt610_checkSelection === vt610_selected) {
                    if (vt610_CTA.classList.contains('cMjpkN')) {
                        vt610_CTA.classList.remove('cMjpkN')
                        vt610_CTA.classList.add('bcjrcC')
                    }
                } else {
                    if (vt610_CTA.classList.contains('bcjrcC')) {
                        vt610_CTA.classList.remove('bcjrcC')
                        vt610_CTA.classList.add('cMjpkN')
                    }
                }
            }

            //run function initally 
            vt610_ctaStateAdjust()
        }

        //function to show and hide pay details modal
        function vt610_handleCTAClick() {
            //click event to handle CTA functionality 
            var vt610_CTA = document.querySelector(".vt610_cta>button")
            var vt610_CTAContainer = document.querySelector(".vt610_cta")
            var VT610_paymentModal = document.querySelector('[title="Card details form"]')

            if (vt610_CTAContainer) {
                document.body.addEventListener('click', function (event) {
                    if (event.target.closest('.vt610_cta')) {
                        var vt610_CTA = document.querySelector(".vt610_cta>button")
                        var vt610_checkBox = window.getComputedStyle(document.querySelector('[class*="Checkboxstyle__Checkbox"]>div'))
                        var vt610_checkSelection = vt610_checkBox.backgroundColor
                        var vt610_selected = 'rgb(0, 185, 136)'
                        var vt610_nonSelected = 'rgb(25, 23, 20)'
                        //if active
                        if (vt610_CTA.classList.contains('bcjrcC') && vt610_checkSelection === vt610_selected) {
                            if (VT610_paymentModal) {
                                if (VT610_paymentModal.classList.contains('vt610_hidden_element')) {
                                    VT610_paymentModal.classList.remove('vt610_hidden_element')
                                }
                            }
                        }
                        //not active
                        //else if (vt610_CTA.classList.contains('cMjpkN') && vt610_checkSelection === vt610_nonSelected){

                        //}
                    }
                })
            }
        }

        //click event to toggle states 
        document.body.addEventListener('click', function (event) {
            if (event.target.closest('[id="consentAgreement"]')) {
                ////POLLING FUNCTION////
                //polling function config
                var vt610_checkForPayModal_pxFuncFired = 0;
                var vt610_checkForPayModal_pxInterval = setInterval(vt610_checkForPayModal_pxPollFunc, 100);

                //polling function
                function vt610_checkForPayModal_pxPollFunc() {
                    vt610_checkForPayModal_pxFuncFired += 1;

                    if (vt610_checkForPayModal_pxFuncFired >= 20) {
                        //try 20 times, if not found clear px func
                        clearInterval(vt610_checkForPayModal_pxInterval);
                    }

                    //target element 
                    var VT610_TARGET = document.querySelector('[title="Card details form"]')

                    if (VT610_TARGET || !VT610_TARGET) {
                        //clear polling when found
                        clearInterval(vt610_checkForPayModal_pxInterval);
                        //Change button between active and inactive
                        setTimeout(() => {
                            function vt610_ctaStateAdjust() {
                                var vt610_CTA = document.querySelector(".vt610_cta>button")
                                var vt610_checkBox = window.getComputedStyle(document.querySelector('[class*="Checkboxstyle__Checkbox"]>div'))
                                var vt610_checkSelection = vt610_checkBox.backgroundColor
                                var vt610_selected = 'rgb(0, 185, 136)'
                                var vt610_nonSelected = 'rgb(25, 23, 20)'
                                if (vt610_checkSelection === vt610_selected) {
                                    if (vt610_CTA.classList.contains('cMjpkN')) {
                                        vt610_CTA.classList.remove('cMjpkN')
                                        vt610_CTA.classList.add('bcjrcC')
                                        //if payment modal visible 
                                        var vt610_modalClass_pxFuncFired = 0;
                                        var vt610_modalClass_pxInterval = setInterval(vt610_modalClass_pxPollFunc, 50);

                                        //polling function
                                        function vt610_modalClass_pxPollFunc() {
                                            vt610_modalClass_pxFuncFired += 1;

                                            if (vt610_modalClass_pxFuncFired >= 5) {
                                                //try 5 times, if not found clear px func
                                                clearInterval(vt610_modalClass_pxInterval);
                                            }

                                            var VT610_TARGET = document.querySelector('[title="Card details form"]')

                                            if (VT610_TARGET && !VT610_TARGET.classList.contains('vt610_hidden_element')) {
                                                //clear polling when found
                                                clearInterval(vt610_modalClass_pxInterval);
                                                //ACTIONS HERE 
                                                VT610_TARGET.classList.add('vt610_hidden_element')
                                                vt610_handleCTAClick()
                                            }
                                        }
                                    }
                                } else {
                                    if (vt610_CTA.classList.contains('bcjrcC')) {
                                        vt610_CTA.classList.remove('bcjrcC')
                                        vt610_CTA.classList.add('cMjpkN')
                                    }
                                }
                            }
                            vt610_ctaStateAdjust()
                            //function to show and hide pay details modal
                            function vt610_handleCTAClick() {
                                //click event to handle CTA functionality 
                                var vt610_CTA = document.querySelector(".vt610_cta>button")
                                var vt610_CTAContainer = document.querySelector(".vt610_cta")
                                var VT610_paymentModal = document.querySelector('[title="Card details form"]')

                                if (vt610_CTAContainer) {
                                    document.body.addEventListener('click', function (event) {
                                        if (event.target.closest('.vt610_cta')) {
                                            var vt610_CTA = document.querySelector(".vt610_cta>button")
                                            var vt610_checkBox = window.getComputedStyle(document.querySelector('[class*="Checkboxstyle__Checkbox"]>div'))
                                            var vt610_checkSelection = vt610_checkBox.backgroundColor
                                            var vt610_selected = 'rgb(0, 185, 136)'
                                            var vt610_nonSelected = 'rgb(25, 23, 20)'
                                            //if active
                                            if (vt610_CTA.classList.contains('bcjrcC') && vt610_checkSelection === vt610_selected) {
                                                ////POLLING FUNCTION////
                                                //polling function config
                                                var vtxxx_pxFuncFired = 0;
                                                var vtxxx_pxInterval = setInterval(vtxxx_pxPollFunc, 50);

                                                //polling function
                                                function vtxxx_pxPollFunc() {
                                                    vtxxx_pxFuncFired += 1;

                                                    if (vtxxx_pxFuncFired >= 5) {
                                                        //try 20 times, if not found clear px func
                                                        clearInterval(vtxxx_pxInterval);
                                                    }

                                                    if (VT610_paymentModal && VT610_paymentModal.classList.contains('vt610_hidden_element')) {
                                                        //clear polling when found
                                                        clearInterval(vtxxx_pxInterval);
                                                        //ACTIONS HERE 
                                                        VT610_paymentModal.classList.remove('vt610_hidden_element')
                                                    }
                                                }
                                                // if (VT610_paymentModal) {
                                                //    if (VT610_paymentModal.classList.contains('vt610_hidden_element')) {
                                                //         VT610_paymentModal.classList.remove('vt610_hidden_element')
                                                //     }
                                                // }
                                            }
                                            //not active
                                            //else if (vt610_CTA.classList.contains('cMjpkN') && vt610_checkSelection === vt610_nonSelected){

                                            //}
                                        }
                                    })
                                }
                            }
                            vt610_handleCTAClick()
                        }, "500");
                        // //hide payment details
                        // //if (VT610_TARGET) {
                        // ////POLLING FUNCTION////
                        // //polling function config
                        // var vt610_modalClass_pxFuncFired = 0;
                        // var vt610_modalClass_pxInterval = setInterval(vt610_modalClass_pxPollFunc, 99);

                        // //polling function
                        // function vt610_modalClass_pxPollFunc() {
                        //     vt610_modalClass_pxFuncFired += 1;

                        //     if (vt610_modalClass_pxFuncFired >= 5) {
                        //         //try 5 times, if not found clear px func
                        //         clearInterval(vt610_modalClass_pxInterval);
                        //     }

                        //     var VT610_TARGET = document.querySelector('[title="Card details form"]')

                        //     if (VT610_TARGET && !VT610_TARGET.classList.contains('vt610_hidden_element')) {
                        //         //clear polling when found
                        //         clearInterval(vt610_modalClass_pxInterval);
                        //         //ACTIONS HERE 
                        //         VT610_TARGET.classList.add('vt610_hidden_element')
                        //     }
                        // }
                        //}
                    }
                }
            }
        });
    }

    //click on Cred/Debit card and CTA isn't there 
    document.body.addEventListener('click', function (event) {
        if (event.target.closest('[id="cardRadio"]')) {
            if (!document.querySelector('.vt610_cta')) {
                vt610_paymentChanges()
            }
        }
    })
}

//Reconnect mutation observer if user navigates back 
window.addEventListener("hashchange", function (e) {
    //start observing again
    vt610_observer.observe(document.body, {
        characterDataOldValue: true,
        subtree: true,
        childList: true,
        characterData: true
    });
})