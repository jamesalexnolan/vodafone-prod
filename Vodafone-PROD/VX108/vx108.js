/**IGNORE THIS SECTION */
////POLLING FUNCTION////
//polling function config
var vx108_nodeCheck_pxFuncFired = 0
var vx108_nodeCheck_pxInterval = setInterval(vx108_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

//polling function
function vx108_nodeCheck_pxPollFunc() {
    vx108_nodeCheck_pxFuncFired += 1

    if (vx108_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vx108_nodeCheck_pxInterval)
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vx108_nodeCheck_pxInterval)
        vx108_heroElementUpdates()
        vx108_pElementUpdates()
        ////MUTATION OBSERVER////
        //mutation to handle p1,p2,p3 changes 
        //mutation observer 
        const vx108Observer = new MutationObserver((mutationsList, vx108Observer) => {
            //check for mutations
            for (const mutation of mutationsList) {
                if (mutation.target.matches('.section--gutter')) {
                    //CHANGES HERE
                    vx108_heroElementUpdates()
                    vx108_pElementUpdates()
                }
            }
        });

        //define the configuration for the MutationObserver
        const vx108ObserverConfig = {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        };

        //start observing changes
        vx108Observer.observe(document.body, vx108ObserverConfig);
    }
}

///EVENT LISTENER - PAGE RE-SIZE///
/*Accounts for instances where user/tester changes page from mobile to desktop*/
window.addEventListener('resize', function (event) {
    vx108_heroElementUpdates()
    vx108_pElementUpdates()
});
/**IGNORE THIS SECTION --- END */


/*

HERO BANNER

*/
function vx108_heroElementUpdates() {
    if (document.querySelector('[data-component-name="PartnerBanner"]')) {
        //image changes 
        var vx108_desktopImg_p5 = 'https://placehold.co/1075x500'
        var vx108_mobileImg_p5 = 'https://placehold.co/375x300'

        //set attrbute style 
        //background-image: url()

        if (screen.width > 880) {
            //DESKTOP
            //image
            document.querySelector('[data-component-name="PartnerBanner"]').querySelector('[class*="ImageContainerstyle__ImageWrapper"]').setAttribute('style', 'background-image: url(' + vx108_desktopImg_p5 + ');')
        } else if (screen.width < 880) {
            //MOBILE
            //image
            document.querySelector('[data-component-name="PartnerBanner"]').querySelector('[class*="ImageContainerstyle__ImageWrapper"]').setAttribute('style', 'background-image: url(' + vx108_mobileImg_p5 + ');')
        }

        //Header 
        document.querySelector('[data-component-name="PartnerBanner"]').querySelector('[data-component-name="Heading"]').innerText = 'iPhone 15 Pro Max - save £432'
        //Sub-Header
        document.querySelector('[data-component-name="PartnerBanner"]').querySelector('[data-component-name="Paragraph"]').innerText = 'Plus, save up to £540 when you trade in eligible phone. Ends 15 August.'
        //CTA text
        document.querySelector('[data-component-name="PartnerBanner"]').querySelector('[data-component-name="Button"]').innerText = 'iPhone 15 Pro Max'
        //CTA link 
        document.querySelector('[data-component-name="PartnerBanner"]').querySelector('[data-component-name="Button"]').setAttribute('href', 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-15-pro-max')
    }
}
/*

HERO BANNER --- END

*/

/*

P ELEMENTS 

*/
function vx108_pElementUpdates() {
    //check all p elements are populated 
    var pElements = document.querySelectorAll('[data-component-name="DiscoveryGrid"]')

    for (var i = 0; i < pElements.length; i++) {
        var pElementsText = pElements[i].querySelectorAll('[data-component-name="Paragraph"]')
        for (var z = 0; z < pElementsText.length; z++) {
            if (pElementsText[z].innerText !== '') {
                ///P1 CHANGES///
                var homepageP1 = document.querySelector('[data-cro-id="homepage-discoverygrid-1"]>div:nth-child(1)')
                //image changes 
                var homepageP1_Small = 'https://www.vodafone.co.uk/cs/groups/public/documents/images/vfcon130035.webp'
                var homepageP1_Small2x = 'https://www.vodafone.co.uk/cs/groups/public/documents/images/vfcon130036.webp'
                var homepageP1_className = document.querySelector('[data-cro-id="homepage-discoverygrid-1"]>div:nth-child(1)').querySelector('[data-component-name="Image"] > img').classList.toString()

                homepageP1.querySelector('[data-component-name="Image"]').innerHTML = '<picture data-component-name="Image"><source media="(min-width: 1441px)" srcset="' + homepageP1_Small2x + '"><source media="(min-width: 1025px)" srcset="' + homepageP1_Small2x + '?w=1440&amp;fit=fill"><source media="(min-width: 768px)" srcset="' + homepageP1_Small2x + '?w=1024&amp;fit=fill"><source media="(min-width: 0px)" srcset="' + homepageP1_Small + ', ' + homepageP1_Small2x + ' 2x"><img alt="Samsung Galaxy Z Flip6, Galaxy AI is here" src="' + homepageP1_Small2x + '" width="100%" height="auto" class="' + homepageP1_className + '"></picture>'

                //Header 
                homepageP1.querySelector('[data-component-name="Heading"]').innerText = 'Samsung Galaxy Z Fold6 - save up to £1004'
                //Sub-Header
                homepageP1.querySelector('[data-component-name="Paragraph"]').innerText = 'When you trade in an eligible phone. Ends 15 August.'
                //CTA text
                homepageP1.querySelector('[data-component-name="LinkWithIcon"]').querySelector('[data-component-name="LinkWithIcon"]>div:nth-child(2)').innerText = 'Buy Galaxy Z Fold6'
                //CTA link 
                homepageP1.querySelector('[data-component-name="LinkWithIcon"]').setAttribute('href', 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/samsung/galaxy-z-fold6?icmp=CBU_Home_HeroBanner_SamsungZFold6_19/07/2024')
                homepageP1.querySelector('[data-component-name="Interaction"]').setAttribute('href', 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/samsung/galaxy-z-fold6?icmp=CBU_Home_HeroBanner_SamsungZFold6_19/07/2024')
                ///P1 CHANGES -- END///
            }
        }
    }
}
/*

P ELEMENTS --- END

*/