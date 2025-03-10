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
        const upgBanner = document.querySelector('[data-component-name="StandardBanner"]')

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

            var croCards = '  <div class="vt708_container">        <div class="carousel-container">            <button class="arrow left">&#10094;</button>            <div class="carousel">                <div class="carousel-inner">                    <div class="carousel-item">Card 1</div>                    <div class="carousel-item">Card 2</div>                    <div class="carousel-item">Card 3</div>                </div>            </div>            <button class="arrow right">&#10095;</button>        </div>            <div class="dots">            <span class="dot" data-index="0"></span>            <span class="dot" data-index="1"></span>            <span class="dot" data-index="2"></span>        </div>    </div>'
            upgBanner.closest('[class*="Containerstyle__ContainerContent-sc"]').innerHTML = croCards
            croCaroselFuncualty()
        }
    }