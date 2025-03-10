 ////POLLING FUNCTION////
    //polling function config
    var vx100_pxFuncFired = 0;
    var vx100_pxInterval = setInterval(vx100_pxPollFunc, 100);

    //polling function
    function vx100_pxPollFunc() {
        vx100_pxFuncFired += 1;

        if (vx100_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vx100_pxInterval);
        }

        if (document.querySelectorAll('.background__image')[1]) {
            //clear polling when found
            clearInterval(vx100_pxInterval);
            vx100_p1andHero_updates()
        }
    }

    function vx100_p1andHero_updates() {
        //UPDATE HERO BANNER//
        //update hero image
        document.querySelector('.background__image').classList.add('vx100_hero_background_img')
        //update hero text
        document.querySelector('.hello__text > p').innerText = 'iPhone 15 Pro Max. Capture more than ever before.'
        //update hero sub-header
        document.querySelector('.hello__text > p:nth-child(2)').innerText = 'From £34 a month*. Plus £40 upfront. With eligible trade-in. Ends 14 March. Price increases April 2025.'
        //update CTA href 
        document.querySelector('.hello__text > a').href = 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-15-pro-max'

        //UPDATE P1 TO SAMSUNG//
        //change p1 card image
        document.querySelectorAll('.background__image')[1].classList.add('vx100_p1_background_img')
        //change p1 title
        document.querySelectorAll('.block__text--heading')[0].innerText = 'Samsung Galaxy S24 Ultra - From £59 a month*​'
        //change p1 subheader
        document.querySelectorAll('.block__text--shout')[0].innerText = 'Plus £40 upfront. Save £288 on Unlimited Max Airtime Plan. Ends 4 April. Price increases April 2025.'
        //change p1 CTA 
        document.querySelectorAll('.promo-card__button-area')[0].innerHTML = '<a href="https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/samsung/galaxy-s24-ultra-5g" class="button button--tertiary " sec_uuid="31a7060ac8d3">Buy now</a>'
    }