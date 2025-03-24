////MUTATION OBSERVER - PARENT ELEMENT////
    //mutation observer 
    const vtxxxObserver = new MutationObserver((mutationsList, vtxxxObserver) => {
        //check for mutations
        for (const mutation of mutationsList) {
            if (mutation.target.matches('[role="tabpanel"]')) {
                //CHANGES HERE
                vt708Changes()
            }
        }
    });

    //define the configuration for the MutationObserver
    const vtxxxObserverConfig = {
        childList: true,
        subtree: true,
    };

    //start observing changes
    vtxxxObserver.observe(document.body, vtxxxObserverConfig);

    function vt708Changes() {
        //target element 
        var upgBanner = document.querySelector('[data-selector="marketing-content"]')
        var vt708Elem = document.querySelector('.vt708_container')
        if (upgBanner && !vt708Elem) {
            //insert carousel
            var croCards = '<div class="vt708_container">    <div class="carousel-container">        <div class="carousel">            <div class="carousel-inner">                <div class="carousel-item">                    <div class="card-container">                        <div class="card-content">                            <div class="card-content_img" style="background: url(https://images.vodafone.co.uk/gbnnsauqav4t/2GstPpA6Oal0C4p32zYHbn/b344e8c1b6d1e28e3d51d0bee5e54d03/samsung_s25_dc_16x9_small.webp);"> </div>                            <div class="card-content_copy">                                <h4>Save £432 with Samsung S25 and get epic AI</h4>                                <p>Plus, save even more with an eliginle trade-in. Offer ends 18 march.</p>                                <div class="card-content_link"> <a                                        href="https://www.vodafone.co.uk/web-shop/login?successReturnUrl=/mobile/phones/pay-monthly-contracts/samsung/galaxy-s25?icmp=web-cvm-U&O/pm/bau/galaxy-s25-U&O/ret/02.25/ntst">Upgrade                                        to Galaxy S25</a> <svg width="20" height="21" viewBox="0 0 20 21" fill="none"                                        xmlns="http://www.w3.org/2000/svg">                                        <path d="M6.4585 3.04639L13.5418 10.1297L6.4585 17.2131" stroke="#BD0000"                                            stroke-miterlimit="10" stroke-linecap="round" />                                    </svg> </div>                            </div>                        </div>                    </div>                </div>                <div class="carousel-item">                    <div class="card-container">                        <div class="card-content">                            <div class="card-content_img" style="background: url(https://images.vodafone.co.uk/gbnnsauqav4t/3lvPHHd6m4tLnAgvr1yKYR/efbcc28c89fe03d1167b452337559e02/evo_dc_16x9_small.webp);"> </div>                            <div class="card-content_copy">                                <h4>Upgrade with Vodafone EVO</h4>                                <p>Spread the cost of your Phone across 24 - 36 months (with interest free credit at 0%                                    APR) and upgrade early. </p>                                <div class="card-content_link"> <a                                        href="https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts?icmp=web-evoUAO/pm/ret/02.24/ntst">How                                        it works</a> <svg width="20" height="21" viewBox="0 0 20 21" fill="none"                                        xmlns="http://www.w3.org/2000/svg">                                        <path d="M6.4585 3.04639L13.5418 10.1297L6.4585 17.2131" stroke="#BD0000"                                            stroke-miterlimit="10" stroke-linecap="round" />                                    </svg> </div>                            </div>                        </div>                    </div>                </div>                <div class="carousel-item">                    <div class="card-container">                        <div class="card-content">                            <div class="card-content_img" style="background: url(https://images.vodafone.co.uk/gbnnsauqav4t/4SvKSgiigXhUO7eOga8iSv/fb24173c92125aa16b082ef0c383f967/simo_dc_16x9_small.webp);"> </div>                            <div class="card-content_copy">                                <h4>Unlimited Data - just £23 a month</h4>                                <p>Save £240 on our Unlimited Plus plan. Increases to £24.80 on 1 April 2026. Monthly                                    price rises each April by £1.80.</p>                                <div class="card-content_link"> <a                                        href="https://www.vodafone.co.uk/web-shop/login?successReturnUrl=mobile/best-sim-only-deals?planId=121466&icmp=sim-upgrades-page/UAO/banner/Unlimited-Plus/ret/02.25/ntst">Get                                        this deal</a> <svg width="20" height="21" viewBox="0 0 20 21" fill="none"                                        xmlns="http://www.w3.org/2000/svg">                                        <path d="M6.4585 3.04639L13.5418 10.1297L6.4585 17.2131" stroke="#BD0000"                                            stroke-miterlimit="10" stroke-linecap="round" />                                    </svg> </div>                            </div>                        </div>                    </div>                </div>            </div>        </div>    </div></div>'
            upgBanner.innerHTML = croCards
            //image link clicks
            const cardImages = document.querySelectorAll('.carousel-item')
            cardImages.forEach(function (cardImage, index) {
                cardImage.addEventListener('click', function () {
                    if (index === 0) {
                        window.location = 'https://www.vodafone.co.uk/web-shop/login?successReturnUrl=/mobile/phones/pay-monthly-contracts/samsung/galaxy-s25?icmp=web-cvm-U&O/pm/bau/galaxy-s25-U&O/ret/02.25/ntst'
                    }
                    if (index === 1) {
                        window.location = 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts?icmp=web-evoUAO/pm/ret/02.24/ntst'
                    }
                    if (index === 2) {
                        window.location = 'https://www.vodafone.co.uk/web-shop/login?successReturnUrl=mobile/best-sim-only-deals?planId=121466&icmp=sim-upgrades-page/UAO/banner/Unlimited-Plus/ret/02.25/ntst'
                    }
                })
            })
        }
    }