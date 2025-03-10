//mutation to handle p1,p2,p3 changes 
////MUTATION OBSERVER////
//mutation observer 
const vx67Observer = new MutationObserver((mutationsList, vx67Observer) => {
    //check for mutations
    for (const mutation of mutationsList) {
        if (mutation.target.matches('.section--gutter.c--black')) {
            //CHANGES HERE
            vx67_P1toP3Updates()
        }
    }
});

//define the configuration for the MutationObserver
const vx67ObserverConfig = {
    childList: true,
    subtree: true,
};

//start observing changes
vx67Observer.observe(document.body, vx67ObserverConfig);

function vx67_P1toP3Updates() {
    //check all p element CTA's are populated
    var p_elements = document.querySelectorAll('.grid__item.promo-card__item')
    for (var i = 0; i < p_elements.length; i++) {
        if (p_elements[i].querySelector('div>div:nth-child(2)>div').innerText !== '') {
            ///P1 CHANGES///
            //image changes 
            //mobile img
            var vx67_mobileImg_p1 = 'vfcon128699'
            //desktop img
            var vx67_desktopImg_p1 = 'vfcon128698'
            //set HTML
            //***this will only work if img url is /cs/groups/public/documents/images/ if the img URL doesn't match this, paths will need updating
            if (screen.width > 880) {
                document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx67_desktopImg_p1 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx67_desktopImg_p1 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p1 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p1 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            } else if (screen.width < 880) {
                document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx67_desktopImg_p1 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p1 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p1 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p1 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            }
            //Header 
            document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div>h3').innerText = 'Samsung Galaxy S24 Ultra – save £704'
            //Sub-Header
            document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div>p').innerText = 'When you claim £200 cashback*. Save £432 on Airtime Plan £72 on your phone. Ends 25 June.'
            //CTA text
            document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div:nth-child(2)>div').innerText = 'Buy Samsung Galaxy S24 Ultra'
            //CTA link 
            document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div:nth-child(2)>div').setAttribute('href', 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/samsung/galaxy-s24-ultra-5g?icmp=CBU_Home_P1_SamsungS24Ultra_iostest_12/06/2024')
            ///P1 CHANGES -- END///

            ///P2 CHANGES///
            //image changes 
            //mobile img
            var vx67_mobileImg_p2 = 'vfcon128699'
            //desktop img
            var vx67_desktopImg_p2 = 'vfcon128698'
            //set HTML
            //***this will only work if img url is /cs/groups/public/documents/images/ if the img URL doesn't match this, paths will need updating
            if (screen.width > 880) {
                document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx67_desktopImg_p2 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx67_desktopImg_p2 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p2 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p2 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            } else if (screen.width < 880) {
                document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx67_desktopImg_p2 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p2 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p2 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p2 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            }
            //Header 
            document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('div>div>h3').innerText = 'Samsung Galaxy S24 Ultra – save £704'
            //Sub-Header
            document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('div>div>p').innerText = 'When you claim £200 cashback*. Save £432 on Airtime Plan £72 on your phone. Ends 25 June.'
            //CTA text
            document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('div>div:nth-child(2)>div').innerText = 'Buy Samsung Galaxy S24 Ultra'
            //CTA link 
            document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('div>div:nth-child(2)>div').setAttribute('href', 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/samsung/galaxy-s24-ultra-5g?icmp=CBU_Home_p2_SamsungS24Ultra_iostest_12/06/2024')
            ///P2 CHANGES -- END///

            ///P3 CHANGES///
            //image changes 
            //mobile img
            var vx67_mobileImg_p3 = 'vfcon128699'
            //desktop img
            var vx67_desktopImg_p3 = 'vfcon128698'
            //set HTML
            //***this will only work if img url is /cs/groups/public/documents/images/ if the img URL doesn't match this, paths will need updating
            if (screen.width > 880) {
                document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx67_desktopImg_p3 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx67_desktopImg_p3 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p3 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p3 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            } else if (screen.width < 880) {
                document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx67_desktopImg_p3 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx67_mobileImg_p3 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p3 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx67_desktopImg_p3 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            }
            //Header 
            document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('div>div>h3').innerText = 'Samsung Galaxy S24 Ultra – save £704'
            //Sub-Header
            document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('div>div>p').innerText = 'When you claim £200 cashback*. Save £432 on Airtime Plan £72 on your phone. Ends 25 June.'
            //CTA text
            document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('div>div:nth-child(2)>div').innerText = 'Buy Samsung Galaxy S24 Ultra'
            //CTA link 
            document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('div>div:nth-child(2)>div').setAttribute('href', 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/samsung/galaxy-s24-ultra-5g?icmp=CBU_Home_p3_SamsungS24Ultra_iostest_12/06/2024')
            ///P3 CHANGES -- END///
        }
    }
}