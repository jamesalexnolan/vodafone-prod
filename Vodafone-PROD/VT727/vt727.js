//polling function config
var vt722_nodeCheck_pxFuncFired = 0
var vt722_nodeCheck_pxInterval = setInterval(vt722_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds
//polling function
function vt722_nodeCheck_pxPollFunc() {
    vt722_nodeCheck_pxFuncFired += 1
    if (vt722_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vt722_nodeCheck_pxInterval)
    }
    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt722_nodeCheck_pxInterval)
        //MUTATION OBSERVER
        let vt722_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt722_oldValue = mutation.oldValue
                let vt722_newValue = mutation.target.textContent
                if (vt722_oldValue !== vt722_newValue) {
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('#airtimeplans') > -1) {
                        var simPlanPickers = document.querySelector('[data-selector="plans-data-filters"]>div')
                        if (simPlanPickers) {
                            vt722AirTimePicker()
                            vt722_observer.disconnect()
                            document.body.addEventListener('click', function (event) {
                                if (event.target.closest('[class*="Pickerstyle__PickerItemWrapper-sc"]') && window.location.href.indexOf('#airtimeplans') > -1) {
                                    ////POLLING FUNCTION////
                                    //polling function config
                                    var vt722_pxFuncFired = 0
                                    var vt722_pxInterval = setInterval(vt722_pxPollFunc, 100)
                                    //polling function
                                    function vt722_pxPollFunc() {
                                        vt722_pxFuncFired += 1
                                        if (vt722_pxFuncFired >= 20) {
                                            //try 20 times, if not found clear px func
                                            clearInterval(vt722_pxInterval)
                                        }
                                        //target element 
                                        var crobanner = document.querySelector('.vt722_title')
                                        if (crobanner) {
                                            //clear polling when found
                                            clearInterval(vt722_pxInterval)
                                            //ACTIONS HERE 
                                            vt722AirTimePicker()
                                        }
                                    }
                                }
                            })
                        }
                    } else {
                        vt722_observer.disconnect()
                    }
                }
            })
        })
        vt722_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        })
        //reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt722_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })
        })
    }
    //function to call
    //banner insert and functionality 
    function vt722AirTimePicker() {
        //capture prices    
        var vt722_pricing = document.querySelectorAll('[data-subtitle*="from"]')
        var pricingArray = []
        vt722_pricing.forEach(function (vt722_price) {
            var price = vt722_price.innerHTML.replace(/[a-z £]/g, '')
            pricingArray.push(price)
        })
        //insert banner
        var simPlanPickers = document.querySelector('[data-component-name="SimpleGrid"]')
        var bannerTarget = simPlanPickers.parentElement.parentElement.parentElement.parentElement
        var initalPricing = pricingArray[pricingArray.length - 1] - pricingArray[0]
        //var vt722Banner = '<div class="vt722_banner">Spend £' + initalPricing + ' and get Unlimited data</div>'
        var vt722Banner = '<div class="vt722_banner">\
                                <div class="vt722_banner-content">\
                                    <div class="vt722_banner-content-icon">\
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\
                                            <path d="M21.9867 17.4549L21.9334 17.5933C21.5017 18.5933 17.6767 19.3666 14.6667 19.3666C11.3534 19.3666 7.33337 18.4349 7.33337 17.2833C7.33337 16.5649 8.38337 15.9299 9.97837 15.5566H10" stroke="white" stroke-width="2" stroke-miterlimit="10"/>\
                                            <path d="M22 17.4534V21.8851C21.2167 22.8017 17.5 23.2834 14.6667 23.2834C11.8334 23.2834 8.11671 22.6167 7.33337 21.6984V17.2717" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\
                                            <path d="M22 20.04C22.8333 20.3983 23.3333 20.855 23.3333 21.35" stroke="white" stroke-width="2" stroke-miterlimit="10"/>\
                                            <path d="M23.3333 21.3499V25.9516C22.55 26.8683 18.8333 27.3499 16 27.3499C13.1666 27.3499 9.44996 26.6833 8.66663 25.7649V22.4316" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\
                                            <path d="M23.3334 11.2067C24.1667 11.565 24.6667 12.0217 24.6667 12.5167" stroke="white" stroke-width="2" stroke-miterlimit="10"/>\
                                            <path d="M24.6667 12.5166V16.4516C23.8833 17.3683 20.1667 17.8499 17.3333 17.8499C14.5 17.8499 10.7833 17.1833 10 16.2649V13.1083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\
                                            <path d="M16 10.05C20.05 10.05 23.3333 9.11723 23.3333 7.96663C23.3333 6.81604 20.05 5.8833 16 5.8833C11.9499 5.8833 8.66663 6.81604 8.66663 7.96663C8.66663 9.11723 11.9499 10.05 16 10.05Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>\
                                            <path d="M23.3333 7.96664V12.5683C22.55 13.485 18.8333 13.9666 16 13.9666C13.1666 13.9666 9.44996 13.3 8.66663 12.3816V7.96664" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\
                                        </svg>\
                                    </div>\
                                    <div class="vt722_banner-content-text">\
                                        <p class="vt722_title">Enjoy endless streaming and browsing with an unlimited data plan - for just £' + initalPricing + ' more a month</p>\
                                        <p class="vt722_link">See Unlimited Airtime Plans</p>\
                                    </div>\
                                </div>\
                            </div>'
        var crobanner = document.querySelector('.vt722_title')
        if (!crobanner) {
            bannerTarget.insertAdjacentHTML('afterend', vt722Banner)
        }
        //click events on cards
        var vt722_cards = document.querySelector('[data-selector="plans-data-filters"]>div').children
        Array.from(vt722_cards).forEach(function (vt722_card, index) {
            //update banner text
            vt722_card.addEventListener('click', function () {
                var selectedPrice = pricingArray[index]
                var unlimitedPrice = pricingArray[pricingArray.length - 1]
                var upliftPrice = unlimitedPrice - selectedPrice
                var crobanner = document.querySelector('.vt722_title')
                if (index === vt722_cards.length - 1) { // === unlimited
                    crobanner.innerHTML = "Enjoy endless streaming, browsing, and sharing with our Unlimited Airtime Plan"
                } else {
                    crobanner.innerHTML = "Enjoy endless streaming and browsing with an unlimited data plan - for just £" + upliftPrice + " more a month"
                }
            })
        })
        //banner click
        var vt722_banner = document.querySelector('.vt722_banner-content')
        if (!vt722_banner.dataset.hasListener) {
            vt722_banner.addEventListener('click', function () {
                var vt722_cardContent = document.querySelectorAll('[data-selector="plans-data-filters"]>div>div')
                vt722_cardContent[vt722_cardContent.length - 1].querySelector('span>label').click()
            })
        }
        vt722_banner.dataset.hasListener = "true"
    }
}