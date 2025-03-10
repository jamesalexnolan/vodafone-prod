////POLLING FUNCTION////
    //polling function config
    var vt519_pxFuncFired = 0;
    var vt519_pxInterval = setInterval(vt519_pxPollFunc, 100);

    //polling function
    function vt519_pxPollFunc() {
        vt519_pxFuncFired += 1;

        if (vt519_pxFuncFired >= 40) { //4 seconds
            //try 40 times, if not found clear px func
            clearInterval(vt519_pxInterval);
        }

        if (window.utag != undefined && window.utag.vfuk_data != undefined && window.utag.vfuk_data.page_name != undefined && window.utag.vfuk_data.page_name === 'uk>shop>basket>concurrent loans') {
            if (window.CRO_SIMPLIFIED_BASKET_CLOP_DATA && window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.deviceName && window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.deviceName != '') {
                if (document.querySelector('[data-component-name="upgrade-plan-info"]>ul>li:nth-child(2)')) {
                    //clear polling when found
                    clearInterval(vt519_pxInterval);
                    //ACTIONS HERE 
                    vt519_CLOPChanges()
                }
            }
        }
    }

    //CLOP CHANGES FUNC//
    function vt519_CLOPChanges() {
        //get remaining time 
        //todays date
        const vt519today = new Date();
        //window object date
        const vt519targetDate = new Date(window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.agreementEndDate);
        //calc the diff using miliseconds
        const vt519differenceInMilliseconds = vt519targetDate - vt519today;
        //calculate diff in days
        const vt519differenceInDays = Math.floor(vt519differenceInMilliseconds / (1000 * 60 * 60 * 24));
        //diff in months and years
        let vt519yearsDifference = vt519targetDate.getFullYear() - vt519today.getFullYear();
        let vt519monthsDifference = vt519targetDate.getMonth() - vt519today.getMonth();

        if (vt519monthsDifference < 0) {
            vt519yearsDifference--;
            vt519monthsDifference += 12;
        }
        // Total months difference
        let totalvt519MonthsDifference = vt519yearsDifference * 12 + vt519monthsDifference;
        /*TEXT CHANGES*/
        //HEADER
        //change text
        //header 
        document.querySelectorAll('[data-component-name="Heading"]')[1].innerHTML = 'How do you want to manage your current Phone Plan?'
        document.querySelectorAll('[data-component-name="Heading"]')[1].style.fontSize = 'xx-large'
        //hide number
        document.querySelectorAll('[data-component-name="Heading"]')[2].remove()

        document.querySelector('.vfuk-BasketCLOP__divider-container').remove()
        //hide number 
        document.querySelectorAll('[data-component-name="SimpleGridColumn"]')[4].remove()
        //change text
        document.querySelectorAll('[data-component-name="Paragraph"]')[0].innerHTML = 'Before you start a new Phone Plan,  \n choose one of these options:'
        //desktop
        if (screen.width > 880) {
            document.querySelectorAll('[data-component-name="Paragraph"]')[0].setAttribute("style", "width: calc(30% + 0px); margin: 25px;")
        } else if (screen.width < 880) { //mobile
            document.querySelectorAll('[data-component-name="Paragraph"]')[0].setAttribute("style", "width: calc(70% + 0px); margin: 25px;")
            document.querySelectorAll('[data-component-name="Heading"]')[1].style.fontSize = 'x-large'
            document.querySelectorAll('[data-component-name="Heading"]')[1].parentElement.style.width = '95%'
            document.querySelectorAll('[data-component-name="Heading"]')[1].parentElement.parentElement.style.justifyContent = 'center'
        }
        document.querySelectorAll('[data-component-name="Paragraph"]')[0].parentElement.setAttribute("style", "display: flex; justify-content: center;")
        //TandC 
        //change text
        document.querySelector('[data-component-name="upgrade-plan-info"]>ul>li').innerHTML = '<span aria-hidden="true" size="2" data-component-name="Icon" class="Iconstyle__Icon-sc-yxw4v5-0 gohqvj" style="width: 20px;"><span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" class="injected-svg" data-src="/upgrade-and-offers/assets/icons/SourceStateIcons/info.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#005ea5" d="M95.75 16.25a80 80 0 1 0 80 80 80 80 0 0 0-80-80M94 55.75a5 5 0 1 1-5 5 5 5 0 0 1 5-5m10 80H88a4 4 0 0 1 0-8h4v-40h-4a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4v44h4a4 4 0 0 1 0 8"></path></svg></span></span></span><b style="display: contents;">Please note:</b> Getting a new phone is subject to a credit check. Having an outstanding balance on one or more existing phones might affect this credit check.'
        //desktop
        if (screen.width > 880) {
            document.querySelector('[data-component-name="upgrade-plan-info"]>ul').setAttribute("style", "display: flex;justify-content: center;max-width: 80%;text-align: left;")
        } else if (screen.width < 880) { //mobile
            document.querySelector('[data-component-name="upgrade-plan-info"]>ul').setAttribute("style", "display: flex;justify-content: center;max-width: 100%;text-align: left;")
        }
        document.querySelector('[data-component-name="upgrade-plan-info"]>ul>li').setAttribute("style", "font-size: smaller;")
        //hide second option
        document.querySelector('[data-component-name="upgrade-plan-info"]>ul>li:nth-child(2)').remove()
        /*TEXT CHANGES --- END*/

        /*ORDER INFO CARDS*/
        //change CTA state
        //select 'I understand' to active CTA
        document.querySelector('[id="user-acceptance-checkbox"]').click()
        //hide check box
        document.querySelector('.vfuk-UserAcceptanceModule__checkbox-wrapper').remove()
        //change option 2 CTA
        //var vt519_ctaWidth = document.querySelector("#root > div:nth-child(3) > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > a").offsetWidth
        document.querySelector('[aria-label="Go to checkout"]').setAttribute("style", "background: black; border: black")
        //document.querySelector('[aria-label="Go to checkout"]').style.width = vt519_ctaWidth + 'px'
        //CTA 1 changes 
        document.querySelector('[aria-label="Pay off before upgrading"]').innerHTML = "Make a payment"
        //capture CTAs
        //CTA one 
        var vt519_originalCTA_1 = document.querySelector('[class*="FunctionalCardPanelstyle__ButtonWrapper-sc"]')
        //CTA two
        var vt519_originalCTA_2 = document.querySelector('.vfuk-UserAcceptanceModule__button-wrapper')

        //create element
        var vt519_infoCards = '<div class="vt519_container">\
        <div class="vt519_cards">\
            <div class="vt519_card vt519_card_1">\
                <div class="vt519_img_container">\
                    <img class="vt519_img" src="' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.basket.imageUrl + '">\
                    </img>\
                </div>\
                <div class="vt519_text_container">\
                    <h5 class="vt519_header">\
                        Pay off your monthly balance in full.\
                        </h5>\
                    <p class="vt519_para"></p>\
                    <p>\
                        Agreement ends: ' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.agreementEndDate +
            '</p>\
                </div>\
                <div class="vt519_CTA_container_1">\
                </div>\
            </div>\
            <div class="vt519_card vt519_card_2">\
                <div class="vt519_img_container">\
                    <img class="vt519_img" src="' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.basket.imageUrl + '">\
                    </img>\
                </div>\
                <div class="vt519_text_container">\
                    <h5 class="vt519_header">\
                        Split my balance into monthly payments.\
                        </h5>\
                    <p class="vt519_para">\
                        You’ll keep paying off this phone alongside your new one, so you’ll pay <strong>£' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.basket.monthlyCost + '</strong> more a month.\
                    </p>\
                    <div class="vt519_infoSection_link">\
                    <span aria-hidden="true" size="2" data-component-name="Icon" class="Iconstyle__Icon-sc-yxw4v5-0 gohqvj"\
                        style="width: 15px; margin-right: 7px;"><span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"\
                                    class="injected-svg" data-src="/upgrade-and-offers/assets/icons/SourceStateIcons/info.svg"\
                                    xmlns:xlink="http://www.w3.org/1999/xlink">\
                                    <path fill="#005ea5"\
                                        d="M95.75 16.25a80 80 0 1 0 80 80 80 80 0 0 0-80-80M94 55.75a5 5 0 1 1-5 5 5 5 0 0 1 5-5m10 80H88a4 4 0 0 1 0-8h4v-40h-4a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4v44h4a4 4 0 0 1 0 8">\
                                    </path>\
                                </svg></span></span></span>How it works\
                    </div>\
                </div>\
                <div class="vt519_CTA_container_2">\
                </div>\
            </div>\
        </div>\
    </div>'

        //insert element
        document.querySelector('[data-component-name="CardBuilder"]').innerHTML = vt519_infoCards
        //populate CTAs 
        //CTA one
        document.querySelector('.vt519_CTA_container_1').appendChild(vt519_originalCTA_1)
        //CTA two
        document.querySelector('.vt519_CTA_container_2').appendChild(vt519_originalCTA_2)
        //Populate text 
        //Option 1 para text
        if (totalvt519MonthsDifference === 0 || totalvt519MonthsDifference === 1) {
            document.querySelectorAll('.vt519_para')[0].innerHTML = 'There\'s <strong>£' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.outstandingBalance + '</strong> left to pay and ' + vt519differenceInDays + ' days remaining on your ' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.deviceName + 'plan.'
        } else {
            document.querySelectorAll('.vt519_para')[0].innerHTML = 'There\'s <strong>£' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.outstandingBalance + '</strong> left to pay and ' + totalvt519MonthsDifference + ' months remaining on your ' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.deviceName + ' plan.'
        }
        //remove 'or' option 
        document.querySelectorAll('[class*="Spacingstyle__Spacing-sc"]')[2].remove()
        //remove second card 
        document.querySelectorAll('[class*="Interactionstyle__BlankInteraction-sc"]')[2].remove()
        //create modal 
        document.querySelector('#root').insertAdjacentHTML('afterBegin', '<div class="mpx-popup">\
        <div class="mpx-content">\
            <div class="mpx-scroll">\
            <div class="mpx-exit">\
            <a href="#" class="mpx-close-btn">\
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <path d="M1.33325 18.6663L18.6666 1.33301M18.6666 18.6663L1.33325 1.33301" stroke="#0D0D0D" stroke-linecap="round" stroke-linejoin="round"/>\
                </svg>\
            </a>\
            </div>\
            <div class="mpx-content-text">\
        <h2>How it works</h2>\
        <div class="mpx-text-section">\
            <h5>Multiple plans, multiple payments</h5>\
            <p>When you take out a new Phone Plan before paying off a previous one, you\'ll have extra monthly payments to manage.</p>\
        </div>\
        <div class="mpx-text-section">\
            <h5>What happens to my current Airtime Plan?</h5>\
            <p>When you get a new Phone Plan, your current Airtime Plan will end and a new one will be taken out with your new device.</p>\
        </div>\
        <div class="mpx-text-section">\
            <h5>How many Device Plans can I have?</h5>\
            <p>You can have up to 6 Device Plans, for a phone, tablet or smartwatch. However, this is subject to credit and affordability checks.</p>\
        </div>\
    </div>\
        </div>\
        </div>\
    </div>');
        //add model functionality 
        document.querySelector('.vt519_infoSection_link').addEventListener('click', function () {
            document.querySelector('.mpx-popup').classList.add('visible');
            document.querySelector('body').classList.add('stop-scrolling');
        })

        //if exit button clicked, remove popup
        document.querySelector('.mpx-close-btn').addEventListener('click', function () {
            document.querySelector('.mpx-popup').classList.remove('visible');
            document.querySelector('body').classList.remove('stop-scrolling');
        });
        /*ORDER INFO CARDS --- END*/
    }