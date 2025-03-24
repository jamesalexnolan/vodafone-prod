    ////POLLING FUNCTION////
    //polling function config
    var VT708_pxFuncFired = 0
    var VT708_pxInterval = setInterval(VT708_pxPollFunc, 100)

    //polling function
    function VT708_pxPollFunc() {
        VT708_pxFuncFired += 1

        if (VT708_pxFuncFired >= 100) {
            //try 100 times, if not found clear px func
            clearInterval(VT708_pxInterval)
        }

        //target element 
        const upgBanner = document.querySelector('[data-selector="marketing-content"]')
        if (upgBanner) {
            //clear polling when found
            clearInterval(VT708_pxInterval)
            //ACTIONS HERE 
            function croCaroselFuncualty() {
                let currentIndex = 0
                const carousel = document.querySelector(".carousel")
                const dots = document.querySelectorAll(".dot")
                const totalSlides = document.querySelectorAll(".carousel-item").length
                const leftArrow = document.querySelector(".arrow.left")
                const rightArrow = document.querySelector(".arrow.right")

                function updateCarousel() {
                    carousel.style.transform = `translateX(-${currentIndex * 100}%)`
                    dots.forEach((dot, idx) => {
                        dot.classList.toggle("active", idx === currentIndex)
                    });
                }

                function moveSlide(step) {
                    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
                    updateCarousel()
                }

                function setSlide(index) {
                    currentIndex = index
                    updateCarousel()
                }

                leftArrow.addEventListener("click", () => moveSlide(-1))
                rightArrow.addEventListener("click", () => moveSlide(1))

                dots.forEach(dot => {
                    dot.addEventListener("click", () => {
                        setSlide(parseInt(dot.getAttribute("data-index")))
                    })
                })

                updateCarousel()
            }

            var croCards = '    <div class="vt708_container">        <div class="carousel-container">            <button class="arrow left">&#10094;</button>            <div class="carousel">                <div class="carousel-inner">                    <div class="carousel-item">                        <div class="card-container">                            <div class="card-content">                                <div class="card-content_img">                                    <img src="https://loremflickr.com/290/170">                                </div>                                <div class="card-content_copy">                                    <h4>Save £432 with Samsung S25 and get epic AI</h4>                                    <p>Plus, save even more with an eliginle trade-in. Offer ends 18 march.</p>                                    <div class="card-content_link">                                        <a href="">Upgrade to Galaxy S25</a>                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none"                                            xmlns="http://www.w3.org/2000/svg">                                            <path d="M6.4585 3.04639L13.5418 10.1297L6.4585 17.2131" stroke="#BD0000"                                                stroke-miterlimit="10" stroke-linecap="round" />                                        </svg>                                    </div>                                </div>                            </div>                        </div>                    </div>                    <div class="carousel-item">                        <div class="card-container">                            <div class="card-content">                                <div class="card-content_img">                                    <img src="https://loremflickr.com/290/170">                                </div>                                <div class="card-content_copy">                                    <h4>Upgrade with Vodafone EVO</h4>                                    <p>Spread the cost of your Phone across 24 - 36 months (with interest free credit at                                        0% APR) and upgrade early. </p>                                        <div class="card-content_link">                                            <a href="">How it works</a>                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"                                                xmlns="http://www.w3.org/2000/svg">                                                <path d="M6.4585 3.04639L13.5418 10.1297L6.4585 17.2131" stroke="#BD0000"                                                    stroke-miterlimit="10" stroke-linecap="round" />                                            </svg>                                        </div>                                </div>                            </div>                        </div>                    </div>                    <div class="carousel-item">                        <div class="card-container">                            <div class="card-content">                                <div class="card-content_img">                                    <img src="https://loremflickr.com/290/170">                                </div>                                <div class="card-content_copy">                                    <h4>Unlimited Data - just £23 a month</h4>                                    <p>Save £240 on our Unlimited Plus plan. Increases to £24.80 on 1 April 2026.                                        Monthly price rises each April by £1.80.</p>                                        <div class="card-content_link">                                            <a href="">Get this deal</a>                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"                                                xmlns="http://www.w3.org/2000/svg">                                                <path d="M6.4585 3.04639L13.5418 10.1297L6.4585 17.2131" stroke="#BD0000"                                                    stroke-miterlimit="10" stroke-linecap="round" />                                            </svg>                                        </div>                                </div>                            </div>                        </div>                    </div>                </div>            </div>            <button class="arrow right">&#10095;</button>        </div>        <div class="dots">            <span class="dot" data-index="0"></span>            <span class="dot" data-index="1"></span>            <span class="dot" data-index="2"></span>        </div>    </div>'
            upgBanner.innerHTML = croCards
            croCaroselFuncualty()
        }
    }