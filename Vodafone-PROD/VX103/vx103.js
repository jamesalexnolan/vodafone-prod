 ////POLLING FUNCTION////
    //inital load changes
    //polling function config
    var vx103_pxFuncFired = 0;
    var vx103_pxInterval = setInterval(vx103_pxPollFunc, 100);
    
    //polling function
    function vx103_pxPollFunc() {
        vx103_pxFuncFired += 1;
    
        if (vx103_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vx103_pxInterval);
        }
    
        if (document.querySelector("#content > div:nth-child(1) > div > div > div > ul > li > div > div.background__image.lazyloaded")) {
            //ACTIONS HERE 
            vx103_iosUpdates()
    
            //mutation to handle p1,p2,p3 changes 
            ////MUTATION OBSERVER - PARENT ELEMENT////
            //mutation observer 
            const vx103Observer = new MutationObserver((mutationsList, vx103Observer) => {
                //check for mutations
                for (const mutation of mutationsList) {
                    if (mutation.target.matches('.section--gutter.c--black')) {
                        //CHANGES HERE
                        vx103_iosUpdates()
                    }
                }
            });
    
            //define the configuration for the MutationObserver
            const vx103ObserverConfig = {
                childList: true,
                subtree: true,
            };
    
            //start observing changes
            vx103Observer.observe(document.body, vx103ObserverConfig);
        }
    }
    
    function vx103_iosUpdates() {
        //check all p element CTA's are populated
        var p_elements = document.querySelectorAll('.grid__item.promo-card__item')
        for (var i = 0; i < p_elements.length; i++) {
            if (document.querySelector("#content > div:nth-child(1) > div > div > div > ul > li > div > div.background__image.lazyloaded") && p_elements[i].querySelector('div>div:nth-child(2)>div').innerText !== '') {
                //clear polling when found
                clearInterval(vx103_pxInterval);
                ///HERO BANNER CHANGES///
                //Header 
                document.querySelector('#content > div:nth-child(1) > div > div.js-carousel-content > div > ul > li > div > div.spring.section > div > h2').innerText = 'Capture more than ever before.'
                //Sub-Header
                document.querySelector('#content > div:nth-child(1) > div > div > div > ul > li > div > div> div > p').innerText = 'Save £432 on your Airtime Plan. Ends 25 June.'
                //CTA text
                document.querySelector('#content > div:nth-child(1) > div > div > div > ul > li > div > div.spring.section > div > a').innerText = 'Buy iPhone 15 Pro Max'
                //CTA link 
                document.querySelector('#content > div:nth-child(1) > div > div > div > ul > li > div > div.spring.section > div > a').setAttribute('href', 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-15-pro-max?icmp=CBU_HP_Hero_ios test__iPhone15ProMax_12/06/2024')
                //IMG changes 
                //mobile img
                var vx103_mobileImg_hero = 'vfcon129305'
                //desktop img
                var vx103_desktopImg_hero = 'vfcon129304'
                //set HTML
                if (screen.width > 880) {
                    document.querySelector('.background__image.lazyloaded').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx103_desktopImg_hero + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx103_desktopImg_hero + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx103_desktopImg_hero + '.jpg" srcset="/cs/groups/public/documents/images/' + vx103_desktopImg_hero + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
                } else if (screen.width < 880) {
                    document.querySelector('.background__image.lazyloaded').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx103_desktopImg_hero + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_hero + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx103_desktopImg_hero + '.jpg" srcset="/cs/groups/public/documents/images/' + vx103_desktopImg_hero + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
                }
    
                ///P1 CHANGES///
                //IMG changes 
                //mobile img
                var vx103_mobileImg_p1 = 'vfcon128699'
                //desktop img
                var vx103_desktopImg_p1 = 'vfcon128698'
                //set HTML
                document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx103_mobileImg_p1 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx103_mobileImg_p1 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx103_desktopImg_p1 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx103_mobileImg_p1 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_p1 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_p1 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_p1 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx103_mobileImg_p1 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx103_desktopImg_p1 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx103_desktopImg_p1 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
                //Header 
                document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div>h3').innerText = 'Samsung Galaxy S24 Ultra – save £704'
                //Sub-Header
                document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div>p').innerText = 'When you claim £200 cashback*. Save £432 on Airtime Plan £72 on your phone. Ends 25 June.'
                //CTA text
                document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div:nth-child(2)>div').innerText = 'Buy Samsung Galaxy S24 Ultra'
                //CTA link 
                document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div:nth-child(2)>div').setAttribute('href', 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/samsung/galaxy-s24-ultra-5g?icmp=CBU_Home_P1_SamsungS24Ultra_iostest_12/06/2024')
            }
        }
    }