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
            function croCaroselFuncualty() {
                let currentIndex = 0;
                const carousel = document.querySelector(".carousel")
                const dots = document.querySelectorAll(".dot")
                const totalSlides = document.querySelectorAll(".carousel-item").length
                let startX = 0
                let endX = 0

                function updateCarousel() {
                    const offset = 7.5 //adjust for the margin effect (2.5% left + 2.5% right)
                    carousel.style.transform = `translateX(-${(currentIndex * 85) + offset}%)`
                    dots.forEach((dot, idx) => {
                        dot.classList.toggle("active", idx === currentIndex)
                    });
                }

                function moveSlide(step) {
                    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
                    updateCarousel()
                }

                function setSlide(index) {
                    currentIndex = index;
                    updateCarousel()
                }

                // **Swipe Gesture Handling**
                carousel.addEventListener("touchstart", (e) => {
                    startX = e.touches[0].clientX
                });

                carousel.addEventListener("touchmove", (e) => {
                    endX = e.touches[0].clientX
                });

                carousel.addEventListener("touchend", () => {
                    let swipeDistance = startX - endX
                    if (swipeDistance > 50) {
                        moveSlide(1) //swipe left
                    } else if (swipeDistance < -50) {
                        moveSlide(-1) //swipe right
                    }
                });

                dots.forEach(dot => {
                    dot.addEventListener("click", () => {
                        setSlide(parseInt(dot.getAttribute("data-index")))
                    })
                })

                updateCarousel()
            }
            //insert carousel
            var croCards = '<div class="vt708_container">    <div class="carousel-container">        <div class="carousel">            <div class="carousel-inner">                <div class="carousel-item">                    <div class="card-container">                        <div class="card-content">                            <div class="card-content_img" style="background: url(https://images.vodafone.co.uk/gbnnsauqav4t/2GstPpA6Oal0C4p32zYHbn/b344e8c1b6d1e28e3d51d0bee5e54d03/samsung_s25_dc_16x9_small.webp);">                             </div>                            <div class="card-content_copy">                                <h4>Save £432 with Samsung S25 and get epic AI</h4>                                <p>Plus, save even more with an eliginle trade-in. Offer ends 18 march.</p>                                <div class="card-content_link"> <a                                        href="https://www.vodafone.co.uk/web-shop/login?successReturnUrl=/mobile/phones/pay-monthly-contracts/samsung/galaxy-s25?icmp=web-cvm-U&O/pm/bau/galaxy-s25-U&O/ret/02.25/ntst">Upgrade                                        to Galaxy S25</a> <svg width="20" height="21" viewBox="0 0 20 21" fill="none"                                        xmlns="http://www.w3.org/2000/svg">                                        <path d="M6.4585 3.04639L13.5418 10.1297L6.4585 17.2131" stroke="#BD0000"                                            stroke-miterlimit="10" stroke-linecap="round" />                                    </svg> </div>                            </div>                        </div>                    </div>                </div>                <div class="carousel-item content-red-evo">                    <div class="card-container">                        <div class="card-content">                            <div class="card-content_copy">                                <h4>Vodafone EVO</h4>                                <h4>The smarter place to buy a new phone with interest-free credit (0% APR)</h4>                                <p>Spread the cost of your Phone across 24 - 36 months (with interest free credit at 0%                                    APR) and <b>upgrade early.</b></p>                                <p>This means you’ll have two contracts, a Phone Plan and an Airtime Plan.</p>                                <div class="card-content_link content-red-evo-link"> <a                                        href="https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts?icmp=web-evoUAO/pm/ret/02.24/ntst">How                                        it works</a> <svg width="20" height="21" viewBox="0 0 20 21" fill="none"                                        xmlns="http://www.w3.org/2000/svg">                                        <path d="M6.4585 3.04639L13.5418 10.1297L6.4585 17.2131" stroke="#BD0000"                                            stroke-miterlimit="10" stroke-linecap="round" />                                    </svg> </div>                            </div>                        </div>                    </div>                </div>                <div class="carousel-item">                    <div class="card-container">                        <div class="card-content">                            <div class="card-content_img" style="background: url(https://images.vodafone.co.uk/gbnnsauqav4t/4SvKSgiigXhUO7eOga8iSv/fb24173c92125aa16b082ef0c383f967/simo_dc_16x9_small.webp);">                            </div>                            <div class="card-content_copy">                                <h4>Unlimited Data - just £23 a month</h4>                                <p>Save £240 on our Unlimited Plus plan. Increases to £24.80 on 1 April 2026. Monthly                                    price rises each April by £1.80.</p>                                <div class="card-content_link"> <a                                        href="https://www.vodafone.co.uk/web-shop/login?successReturnUrl=mobile/best-sim-only-deals?planId=121466&icmp=sim-upgrades-page/UAO/banner/Unlimited-Plus/ret/02.25/ntst">Get                                        this deal</a> <svg width="20" height="21" viewBox="0 0 20 21" fill="none"                                        xmlns="http://www.w3.org/2000/svg">                                        <path d="M6.4585 3.04639L13.5418 10.1297L6.4585 17.2131" stroke="#BD0000"                                            stroke-miterlimit="10" stroke-linecap="round" />                                    </svg> </div>                            </div>                        </div>                    </div>                </div>            </div>        </div>    </div>    <div class="dots"> <span class="dot" data-index="0"></span> <span class="dot" data-index="1"></span> <span            class="dot" data-index="2"></span> </div></div>'
            upgBanner.innerHTML = croCards
            croCaroselFuncualty()
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