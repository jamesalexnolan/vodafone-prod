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
                     var vt693CheckoutStyles = document.querySelector('[id="vt693_C"]')
                     var vt693CROCheck = document.querySelector('.x77vt693')
                     if (window.location.href.indexOf('/sim-only-plans') > -1 || window.location.href.indexOf('/acquisition/checkout') > -1) {
                         if (window.location.href.indexOf('/sim-only-plans') > -1) {
                             if (!vt693CROCheck) {
                                 vt693SimOnlyChanges()
                                 vt693SimOnlyStyles.innerHTML = '/*sim only page styles*/    /*card layout change*/    #plans-offers>div[spacing="4"]:first-of-type {        order: 1;    }    #plans-offers>div[spacing="4"]:nth-of-type(2) {        order: 2;    }    #plans-offers>div[spacing="4"]:nth-of-type(3) {        order: 3;    }    #plans-offers>div[spacing="4"]:nth-of-type(4) {        order: 5;    }    #plans-offers>div[spacing="4"]:nth-of-type(5) {        order: 6;    }    #plans-offers>div[spacing="4"]:nth-of-type(6) {        order: 4;    }    /*CTA styles*/ .y77vt693 {width: 250px;}   .k77vt693 {        cursor: pointer;        display: inline-flex;        align-items: center;        justify-content: center;        box-sizing: border-box;        text-align: center;        position: relative;        transition: 0.4s;        line-height: 12px;        width: 100%;        height: 44px;        min-width: 152px;        font-weight: 400;        color: rgb(25, 23, 20);        background: rgb(255, 255, 255);        border-radius: 0px;        padding: 12px 20px;        border: 1px solid transparent;        text-decoration: none;    }    .vt693DesktopStyling {        padding: 0 130px 0 0;    }    /*pop-up styles*/    .vt693_hidden {        display: none;    }    .vt693_pop-up_cont {        position: fixed;        z-index: 999999 !important;        width: 100%;        height: 100%;        top: 0;        left: 0;        transform: translateY(60%) scale(0);        transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);    }    .vt693_pop-up_cont-padding {        position: relative;        padding: 10px;        top: 50%;        left: 50%;        transform: translate(-50%, -50%);        background-color: white;        width: 736px;        height: auto;        display: grid;        justify-content: center;        align-content: center;        box-shadow: 5px 10px 10px rgba(16, 16, 16, 0.4);        background-repeat: no-repeat;        background-size: cover;        background-position: -20px;        width: 832px;    }    .vt693_show {        transform: translateY(0) scale(1);        background-color: rgba(16, 16, 16, 0.4);        transition: background-color 1s ease;    }    .vt693_pop-up_cont-content {        padding: 64px 64px 40px 64px;    }    .vt693_pop-up_cont-content>h3 {        font-weight: bold;        font-size: xx-large;    }    .vt693_pop-up_cont-content>p {        margin: 10px 0px 20px 0px; font-weight: 300;   }    .vt693_pop-up_cont-content>a {        margin: 32px 0px 0px 0px;        display: flex;        justify-content: center;        font-size: 18px; width: 100%;   }    .vt693CTAStylings {        justify-content: end;        width: 80%;    }    /*mobile styles*/    @media only screen and (max-width: 800px) {    .y77vt693 {width: revert;}    .vt693_pop-up_cont-padding {            width: 400px;        }        .vt693CTAStylings {            width: 100%;        }        .vt693_pop-up_cont-content>h3 {            font-size: 26px;        }        .vt693_pop-up_cont-content {            padding: 30px;        }        .vt693_pop-up_cont-content>p,.vt693_pop-up_cont-content>p {            font-size: 16px;        }        .vt693DesktopStyling {            padding: unset;        }    }'
                                 vt693CheckoutStyles.innerHTML = ''
                             } else if (vt693CROCheck) {
                                 vt693_observer.disconnect()
                             }
                         } else if (window.location.href.indexOf('/acquisition/checkout') > -1) {
                             var vt682_container = document.querySelector("#order-summary")
                             if (vt682_container) {
                                 var vt682_container_p = vt682_container.querySelector('p')
                                 if (vt682_container_p) {
                                     if (vt682_container_p.innerHTML === 'Unltd Social 20GB 10 Plan') {
                                         if (!vt693CROCheck) {
                                             vt693CheckoutChanges()
                                             vt693CheckoutStyles.innerHTML = '    /*checkout styles*/    .vt693_order-sum-container {        margin: 20px;        background: black;    }    .vt693_order-sum_padding {        display: flex;        justify-content: center;        align-items: normal;        padding: 20px;    }    .vt693_sum_padding {        display: flex;        align-items: center;        justify-content: end;    }    .vt693_va {        vertical-align: middle;    }    .vt693_p-styling {        display: flex;    }    .vt693_width-svg {        margin-left: -10px;        margin-right: 10px;    }    .vt693_p-styling>div>a {        color: #f28705;    }'
                                             vt693SimOnlyStyles.innerHTML = ''
                                         } else if (vt693CROCheck) {
                                             vt693_observer.disconnect()
                                         }
                                     } else {
                                         vt693_observer.disconnect()
                                     }
                                 }
                             }
                         }
                     } else {
                         var vt693PopUpInserted = document.querySelector('.vt693_pop-up_cont')
                         if (vt693PopUpInserted) {
                             vt693PopUpInserted.remove()
                         }
                         vt693_observer.disconnect()
                         vt693SimOnlyStyles.innerHTML = ''
                         vt693CheckoutStyles.innerHTML = ''
                     }
                 }
             })
         })

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
     //functions to call
     //sim only func
     function vt693SimOnlyChanges() {
         var vt693Cards = document.querySelectorAll('[aria-label="Choose this plan"]')
         if (vt693Cards[0]) {
             //change CTA
             var vt693CTA = '<div class="j77vt693 x77vt693"> <p class="k77vt693">Choose this plan</p></div>'
             vt693Cards[1].insertAdjacentHTML('afterEnd', vt693CTA)
             vt693Cards[1].remove()
             //create and insert pop-up 
             var vt693PopUp = '<div class="vt693_pop-up_cont vt693_hidden"><div class="vt693_pop-up_cont-padding"><div class="vt693_pop-up_cont-content"><h3>Hold on a second...</h3><p>Would you like to get extra 50GB + Unlimited Music + Video for only <strong>£2 extra</strong>?</p><div></div><a href="https://www.voxi.co.uk/acquisition/plans?planId=112839" class="y77vt693"><strong>No, continue with £10 plan</strong></a></div></div></div>'
             //insert pop-up
             document.querySelector('[id="root"]').insertAdjacentHTML('afterBegin', vt693PopUp)
             //populate card with copied html
             var vt693OrginalCard = document.querySelector('[id="plans-offers"]').children[0].innerHTML
             var vt693PopUpCard = document.querySelector('.vt693_pop-up_cont-content>div')
             vt693PopUpCard.innerHTML = vt693OrginalCard
             //replace original pop-up CTA
             var vt693CTA2 = '<div class="j77vt693 y77vt693"> <a href="https://www.voxi.co.uk/acquisition/plans?planId=119664" class="k77vt693">Yes, upgrade</a></div>'
             if (vt693PopUpCard.querySelector('div>div:nth-child(4)>div>div:nth-child(2)>div')) {
                 vt693PopUpCard.querySelector('div>div:nth-child(4)>div>div:nth-child(2)>div').innerHTML = vt693CTA2
             } else if (vt693PopUpCard.querySelector('button').parentElement) {
                 vt693PopUpCard.querySelector('button').parentElement.innerHTML = vt693CTA2
             }
             //click event to trigger pop-up
             var vt693PopUpInserted = document.querySelector('.vt693_pop-up_cont')
             //card adjustments
             var insertedPopUp_CTAcont = vt693PopUpInserted.querySelector('.j77vt693').parentElement
             insertedPopUp_CTAcont.classList.add('vt693CTAStylings')
             insertedPopUp_CTAcont.parentElement.parentElement.classList.add('vt693DesktopStyling')
             var vt693PopUpInserted_paragraphs = vt693PopUpInserted.querySelectorAll('[data-component-name="Paragraph"]')
             vt693PopUpInserted_paragraphs[2].remove()
             vt693PopUpInserted_paragraphs[3].remove()
             vt693PopUpInserted_paragraphs[4].remove()
             var vt693Icon = vt693PopUpInserted.querySelector('[data-component-name="Icon"]')
             if (vt693Icon) {
                 vt693Icon.remove()
             }
             if (vt693PopUpInserted.querySelector('[class*="LinkWithIconstyle__LinkWithIconText"]')) {
                 vt693PopUpInserted.querySelector('[class*="LinkWithIconstyle__LinkWithIconText"]').parentElement.remove()
             } else if (vt693PopUpInserted.querySelector('div>div>div:nth-child(4)>div>div:nth-child(1)')) {
                 vt693PopUpInserted.querySelector('div>div>div:nth-child(4)>div>div:nth-child(1)').remove()
             }
             //show pop-up on click
             document.querySelector('.x77vt693').addEventListener('click', function () {
                 //show pop-up
                 vt693PopUpInserted.classList.remove('vt693_hidden')
                 vt693PopUpInserted.classList.add('vt693_show')

                 //tracking
                 //button click
                 if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                     u
                     utag.vfuk_data.event_action = "button";
                     utag.vfuk_data.event_label = "choose this plan>20gb";
                     utag.vfuk_data.event_category = "in_page";
                     utag.link(utag.vfuk_data);
                 }
                 //pop-up view
                 if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                     utag.vfuk_data.page_overlay = "upsell overlay";
                     utag.vfuk_data.page_name = "voxi>plans>75gb plan>upsell-overlay";
                     utag.view(utag.vfuk_data);
                 }
             })
             //click to remove pop-up
             var vt693Links = document.querySelectorAll('.y77vt693')
             vt693Links.forEach(function (vt693Link, index) {
                 vt693Link.addEventListener('click', function () {
                     vt693PopUpInserted.remove()
                     //tracking
                     if (index === 0) {
                         if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                             utag.vfuk_data.event_name = "cart_add";
                             utag.vfuk_data.event_action = "button";
                             utag.vfuk_data.event_label = "yes upgrade";
                             utag.vfuk_data.page_name = "voxi>plans>75gb plan>upsell-overlay";
                             utag.vfuk_data.event_category = "in_page";
                             utag.link(utag.vfuk_data);
                         }
                     } else if (index === 1) {
                         if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                             utag.vfuk_data.event_name = "cart_add";
                             utag.vfuk_data.event_action = "button";
                             utag.vfuk_data.event_label = "No, Continue with £10 plan";
                             utag.vfuk_data.page_name = "voxi>plans>75gb plan>upsell-overlay";
                             utag.vfuk_data.event_category = "in_page";
                             utag.link(utag.vfuk_data);
                         }
                     }
                 })
             })
         }
     }
     //checkout func
     function vt693CheckoutChanges() {
         var vt693_container = document.querySelector("#order-summary")
         var vt693_newContainer = '    <div class="vt693_order-sum-container x77vt693">        <div class="vt693_order-sum_padding">            <div class="vt693_sum_padding" spacing="0">                <div>                    <span class="vt693_va">                        <svg class="vt693_width-svg" width="40" height="60" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.986 16.4604C24.7006 15.8517 25.3212 15.2874 25.851 14.7642C27.2132 13.3945 28.1635 12.076 28.6963 10.8007C29.2297 9.52388 29.4916 7.93368 29.4916 6.02873C29.4916 5.57185 28.9585 5.00594 28.4896 5.00537C26.6673 5.00537 25.0777 5.28411 23.7238 5.84742C22.3704 6.41024 21.0413 7.34484 19.729 8.65005C19.2104 9.17501 18.6467 9.79503 18.0367 10.511L14.306 10.7094C14.0059 10.7471 13.7501 10.9046 13.5409 11.2026L11.1912 15.2309C11.1042 15.3834 11.0615 15.5533 11.0615 15.7291C11.0615 15.9741 11.1501 16.2005 11.351 16.4415L12.0395 17.1293C12.3057 17.3762 12.6558 17.4638 13.0244 17.3615L15.5319 16.5892L17.9079 18.9652L17.1404 21.4576C17.1061 21.5599 17.0954 21.6558 17.0954 21.7633C17.0954 22.0334 17.1935 22.2842 17.3849 22.4757L18.0824 23.1717C18.4266 23.4794 18.8804 23.5376 19.2713 23.3029L23.3458 20.9229C23.5922 20.747 23.7493 20.4915 23.7918 20.1432L23.986 16.4604ZM18.4687 21.6738L19.4186 18.5901L15.9068 15.0786L15.5231 15.1967L12.8228 16.0287L12.4721 15.6809L14.6002 12.0274L18.6832 11.812L18.8694 11.5909C19.5302 10.8062 20.1329 10.1383 20.6734 9.59128C21.8654 8.40566 23.0537 7.57011 24.2358 7.0785C25.3367 6.6205 26.6429 6.37349 28.1557 6.34212C28.1291 7.94077 27.8966 9.25596 27.466 10.2868C27.0068 11.3858 26.155 12.5677 24.9099 13.8197C24.3573 14.3654 23.689 14.9685 22.906 15.6278L22.6849 15.814L22.6697 16.1026L22.4715 19.8926L18.8184 22.0235L18.4687 21.6738Z" fill="white"/>                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.26556 23.6893C8.24502 23.7395 8.22415 23.791 8.20288 23.8437C7.65559 25.2014 7.60059 25.326 7.49746 25.4441L5.40576 27.8409L8.58126 27.6518C10.7913 27.5203 13.9683 26.2155 15.3361 24.046C16.4108 22.3415 16.1683 19.972 14.5493 18.8175C12.9018 17.6426 10.4011 18.0783 9.15147 19.6728C8.34762 20.6987 7.98768 21.7325 8.16915 23.0105L8.26556 23.6893ZM14.2082 23.335C12.8433 25.4999 9.41169 26.2667 8.50203 26.3209C8.77915 26.0033 9.02288 25.3896 9.29787 24.6972C9.69764 23.6905 10.1635 22.5175 10.894 21.8466C10.2124 21.8941 9.85784 22.2675 9.48926 22.823C9.35021 21.8439 9.69266 21.1439 10.201 20.4952C11.0072 19.4665 12.7053 19.1401 13.7751 19.903C14.8144 20.6441 14.8962 22.2438 14.2082 23.335Z" fill="white"/>                            <path d="M23.6347 10.9138C23.114 10.3931 23.114 9.54892 23.6347 9.02822C24.1554 8.50752 24.9996 8.50752 25.5203 9.02822C26.041 9.54892 26.041 10.3931 25.5203 10.9138C24.9996 11.4345 24.1554 11.4345 23.6347 10.9138Z" fill="white"/>                            </svg>                                                </span>                </div>            </div>            <div spacing="0" class="vt693_p-styling">                <div>                    <p>Would you like to get extra 50GB + Unlimited Music + Video for only £2 extra?</p>                    <a href="https://www.voxi.co.uk/acquisition/plans?planId=119664">Yes, upgrade</a>                </div>            </div>        </div>    </div>'
         vt693_container.insertAdjacentHTML('beforeend', vt693_newContainer)
         //tracking
         document.querySelector('.vt693_p-styling>div>a').addEventListener('click', function () {
             if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                 utag.vfuk_data.event_name = "cart_add";
                 utag.vfuk_data.event_action = "button";
                 utag.vfuk_data.event_label = "yes upgrade_checkout";
                 utag.vfuk_data.event_category = "in_page";
                 utag.link(utag.vfuk_data);
             }
         })
     }
 }