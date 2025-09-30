 function requestIdleCallbackFallback(callback, options) {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(callback, options)
        } else {
            setTimeout(callback, options && options.timeout ? options.timeout : 0)
        }
    }

    function waitForStableDOM(callback, interval = 100) {
        let done = false

        const tryCallback = () => {
            if (!done) {
                done = true
                clearInterval(checkDOM)
                requestIdleCallbackFallback(callback, { timeout: 500 })
            }
        }

        const checkDOM = setInterval(() => {
            if (document.readyState === "complete") {
                tryCallback()
            }
        }, interval)
    }

    //wait for global
    window.waitForGlobal = function (keyPath, callback) {
        var args = keyPath.split('.')
        if (window.checkNested(window, args)) {
            callback();
        } else {
            setTimeout(function () {
                window.waitForGlobal(keyPath, callback);
            }, 100)
        }
    }
    window.checkNested = function (obj, args) {
        for (var i = 0; i < args.length; i++) {
            if (!obj || !Object.prototype.hasOwnProperty.call(obj, args[i])) {
                return false;
            }
            obj = obj[args[i]]
        }
        return true
    }

    //CALL BACK FUNC
    function runObserverCallbackIfReady(observer) {
        window.waitForGlobal("utag.vfuk_data", function () {
            var purchaseType = utag.vfuk_data?.purchase_type
            if (purchaseType && purchaseType !== '') {
                if (purchaseType === "acquisition") { //change as needed i.e. acquisition
                    vt811CTAs()
                } else {
                    if (observer && typeof observer.disconnect === 'function') {
                        observer.disconnect()
                    }
                }
            }
        })
    }

    //MUTATION OBSERVER
    function initContentObserver() {
        const contentObserver = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                runObserverCallbackIfReady(contentObserver)
            }
        })

        const config = { childList: true, subtree: true }
        contentObserver.observe(document.body, config)
    }

    waitForStableDOM(initContentObserver)

    //function to call 
    function vt811CTAs() {
        /***GLOBAL VARS***/
        //build your own CTA
        var buildYourOwnCTA = document.querySelector('[class*="UpfrontCostAndCTAstyle__CTAWrapper"]')
        //prebuild plans 
        //var preBuiltPlans = document.querySelector('[class*="PreBuiltstyle__CarouselWrapper-sc"]')
        var preBuiltPlans = document.querySelector('[class*="PrebuiltPlanCardstyle__CardWrapper-sc"]')
        //FIGURE OUT CLASSES HERE (THIS DOES NOT WORK ON DESKTOP)
        //insertedCTA
        var insertedCTA = document.querySelector('#vt811CTA')
        //target elem 
        var vt811TargetElem = document.querySelectorAll('h2')
        /***MAIN FUNCTION***/
        for (let i = 0; i < vt811TargetElem.length; i++) {
            if (vt811TargetElem[i].textContent.trim() === "Choose your plans, or build your own") {
                if (buildYourOwnCTA && preBuiltPlans && !insertedCTA) {
                    //function variables 
                    // var preBuiltTitlesContainer = preBuiltPlans?.parentElement
                    var preBuiltTitlesContainer = preBuiltPlans?.closest('div[class*="Spacingstyle__Spacing-sc"]')
                    var buildYourOwnContainer = buildYourOwnCTA?.parentElement
                    //add classes to original containers
                    preBuiltTitlesContainer.classList.add('vt811-display-hidden')
                    buildYourOwnContainer.classList.add('vt811-display-hidden')
                    //insert CTAs
                    var vt811NewCTA = '<div id="vt811CTA" class="vt811-container">    <div class="vt811-ctas">        <div class="vt811-cta-1 vt811-cta-container">            <div class="vt811-cta_pre_built">                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">                    <path                        d="M4.46094 12L12.5 16.5938L20.5391 12M4.46094 15.375L12.5 19.9688L20.5391 15.375M12.5 13.2188L20.5391 8.625L12.5 4.03125L4.46094 8.625L12.5 13.2188Z"                        stroke="#0D0D0D" stroke-linecap="round" stroke-linejoin="round" />                </svg>                <h5>Pre-built plans</h5>                <p>Pick from popular plans designed for different needs</p>            </div>        </div>        <div class="vt811-cta-2 vt811-cta-container">            <div class="vt811-cta_build_your_own">                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">                    <path                        d="M12.0001 8.03123C12.0001 8.30738 12.2239 8.53123 12.5001 8.53123C12.7762 8.53123 13.0001 8.30738 13.0001 8.03123H12.0001ZM13.0001 6.49998C13.0001 6.22384 12.7762 5.99998 12.5001 5.99998C12.2239 5.99998 12.0001 6.22384 12.0001 6.49998H13.0001ZM12.0001 17.5C12.0001 17.7762 12.2239 18 12.5001 18C12.7762 18 13.0001 17.7762 13.0001 17.5H12.0001ZM13.0001 12.68C13.0001 12.4039 12.7762 12.18 12.5001 12.18C12.2239 12.18 12.0001 12.4039 12.0001 12.68H13.0001ZM18.0001 6.49998C18.0001 6.22384 17.7762 5.99998 17.5001 5.99998C17.2239 5.99998 17.0001 6.22384 17.0001 6.49998H18.0001ZM17.0001 17.4999C17.0001 17.7761 17.2239 17.9999 17.5001 17.9999C17.7762 17.9999 18.0001 17.7761 18.0001 17.4999H17.0001ZM18.0001 9.99119C18.0001 9.71505 17.7762 9.49119 17.5001 9.49119C17.2239 9.49119 17.0001 9.71505 17.0001 9.99119H18.0001ZM8.00008 15.8649C8.00008 15.5888 7.77622 15.3649 7.50008 15.3649C7.22394 15.3649 7.00008 15.5888 7.00008 15.8649H8.00008ZM7.00008 17.4999C7.00008 17.7761 7.22394 17.9999 7.50008 17.9999C7.77622 17.9999 8.00008 17.7761 8.00008 17.4999H7.00008ZM8.00008 6.49998C8.00008 6.22384 7.77622 5.99998 7.50008 5.99998C7.22394 5.99998 7.00008 6.22384 7.00008 6.49998H8.00008ZM7.00008 13.0312C7.00008 13.3074 7.22394 13.5312 7.50008 13.5312C7.77622 13.5312 8.00008 13.3074 8.00008 13.0312H7.00008ZM5.98633 3.51758V3.01758V3.51758ZM21.0138 3.51758H21.5138V3.01758H21.0138V3.51758ZM3.98633 18.5451H3.48633H3.98633ZM12.5001 8.03123H13.0001V6.49998H12.5001H12.0001V8.03123H12.5001ZM12.5001 17.5H13.0001V12.68H12.5001H12.0001V17.5H12.5001ZM17.5001 7.49998H18.0001V6.49998H17.5001H17.0001V7.49998H17.5001ZM17.5001 17.4999H18.0001V9.99119H17.5001H17.0001V17.4999H17.5001ZM7.50008 15.8649H7.00008V17.4999H7.50008H8.00008V15.8649H7.50008ZM7.50008 6.49998H7.00008V13.0312H7.50008H8.00008V6.49998H7.50008ZM5.98633 3.51758V4.01758H21.0138V3.51758V3.01758H5.98633V3.51758ZM21.0138 3.51758H20.5138V18.5451H21.0138H21.5138V3.51758H21.0138ZM21.0138 18.5451H20.5138C20.5138 18.9429 20.3558 19.3244 20.0745 19.6057L20.428 19.9593L20.7816 20.3128C21.2504 19.844 21.5138 19.2081 21.5138 18.5451H21.0138ZM20.428 19.9593L20.0745 19.6057C19.7932 19.887 19.4117 20.0451 19.0138 20.0451V20.5451V21.0451C19.6769 21.0451 20.3128 20.7817 20.7816 20.3128L20.428 19.9593ZM19.0138 20.5451V20.0451H5.98633V20.5451V21.0451H19.0138V20.5451ZM5.98633 20.5451V20.0451C5.5885 20.0451 5.20697 19.887 4.92567 19.6057L4.57211 19.9593L4.21856 20.3128C4.6874 20.7817 5.32329 21.0451 5.98633 21.0451V20.5451ZM4.57211 19.9593L4.92567 19.6057C4.64436 19.3244 4.48633 18.9429 4.48633 18.5451H3.98633H3.48633C3.48633 19.2081 3.74972 19.844 4.21856 20.3128L4.57211 19.9593ZM3.98633 18.5451H4.48633V5.51758H3.98633H3.48633V18.5451H3.98633ZM3.98633 5.51758H4.48633C4.48633 5.11975 4.64436 4.73822 4.92567 4.45692L4.57211 4.10336L4.21856 3.74981C3.74972 4.21865 3.48633 4.85454 3.48633 5.51758H3.98633ZM4.57211 4.10336L4.92567 4.45692C5.20697 4.17561 5.5885 4.01758 5.98633 4.01758V3.51758V3.01758C5.32329 3.01758 4.6874 3.28097 4.21856 3.74981L4.57211 4.10336ZM8.74633 14.5H8.24633C8.24633 14.9121 7.91222 15.2462 7.50008 15.2462V15.7462V16.2462C8.46451 16.2462 9.24633 15.4644 9.24633 14.5H8.74633ZM7.50008 15.7462V15.2462C7.08794 15.2462 6.75383 14.9121 6.75383 14.5H6.25383H5.75383C5.75383 15.4644 6.53565 16.2462 7.50008 16.2462V15.7462ZM6.25383 14.5H6.75383C6.75383 14.0878 7.08794 13.7537 7.50008 13.7537V13.2537V12.7537C6.53565 12.7537 5.75383 13.5355 5.75383 14.5H6.25383ZM7.50008 13.2537V13.7537C7.91222 13.7537 8.24633 14.0878 8.24633 14.5H8.74633H9.24633C9.24633 13.5355 8.46451 12.7537 7.50008 12.7537V13.2537ZM13.7151 11.4337H13.2151C13.2151 11.8459 12.881 12.18 12.4688 12.18V12.68V13.18C13.4333 13.18 14.2151 12.3982 14.2151 11.4337H13.7151ZM12.4688 12.68V12.18C12.0567 12.18 11.7226 11.8459 11.7226 11.4337H11.2226H10.7226C10.7226 12.3982 11.5044 13.18 12.4688 13.18V12.68ZM11.2226 11.4337H11.7226C11.7226 11.0216 12.0567 10.6875 12.4688 10.6875V10.1875V9.68748C11.5044 9.68748 10.7226 10.4693 10.7226 11.4337H11.2226ZM12.4688 10.1875V10.6875C12.881 10.6875 13.2151 11.0216 13.2151 11.4337H13.7151H14.2151C14.2151 10.4693 13.4333 9.68748 12.4688 9.68748V10.1875ZM18.7463 8.74623H18.2463C18.2463 9.15838 17.9122 9.49249 17.5001 9.49249V9.99249V10.4925C18.4645 10.4925 19.2463 9.71066 19.2463 8.74623H18.7463ZM17.5001 9.99249V9.49249C17.0879 9.49249 16.7538 9.15838 16.7538 8.74623H16.2538H15.7538C15.7538 9.71066 16.5357 10.4925 17.5001 10.4925V9.99249ZM16.2538 8.74623H16.7538C16.7538 8.33409 17.0879 7.99998 17.5001 7.99998V7.49998V6.99998C16.5357 6.99998 15.7538 7.78181 15.7538 8.74623H16.2538ZM17.5001 7.49998V7.99998C17.9122 7.99998 18.2463 8.33409 18.2463 8.74623H18.7463H19.2463C19.2463 7.78181 18.4645 6.99998 17.5001 6.99998V7.49998Z"                        fill="#0D0D0D" />                </svg>                <h5>Build your own</h5>                <p>Customise your Phone and Airtime plans to suit you</p>            </div>        </div>    </div></div>'
                    vt811TargetElem[i].parentElement.insertAdjacentHTML('afterend', vt811NewCTA)
                    //update copy (pre built)
                    var preBuiltPElem = preBuiltTitlesContainer?.querySelector('div>p')
                    preBuiltPElem.innerHTML = 'Choose your contract length'
                    preBuiltPElem.classList.add('vt811-pre_built-header-p')
                    //remove original text (pre built)
                    var preBuiltTitles = preBuiltTitlesContainer?.querySelectorAll('h5')
                    for (let j = 0; j < preBuiltTitles.length; j++) {
                        preBuiltTitles[j].remove()
                        break
                    }
                    //insert new text (build your own)
                    var vt811InsertedHeadings = '<div class="vt811-intro-text">    <h5>Ready to customise your perfect plan?</h5>    <p>Choose your upfront cost, length of contract, data allowance and extras.</p></div>'
                    buildYourOwnCTA.insertAdjacentHTML('beforebegin', vt811InsertedHeadings)
                    //update CTA copy (build your own)
                    buildYourOwnCTA.querySelector('button').innerHTML = 'Start building'
                    //toggle functionality
                    var preBuiltCROCTA = document.querySelector('.vt811-cta-1')
                    var buildYourOwnCROCTA = document.querySelector('.vt811-cta-2')
                    //click functionality 
                    //pre-built plans
                    preBuiltCROCTA.addEventListener('click', function () {
                        preBuiltTitlesContainer.classList.remove('vt811-display-hidden')
                        buildYourOwnContainer.classList.add('vt811-display-hidden')
                        preBuiltCROCTA.classList.add('selected')
                        buildYourOwnCROCTA.classList.remove('selected')
                        /*PRE BUILD TRACKING*/
                    })
                    //bulid your own CTA 
                    buildYourOwnCROCTA.addEventListener('click', function () {
                        buildYourOwnContainer.classList.remove('vt811-display-hidden')
                        preBuiltTitlesContainer.classList.add('vt811-display-hidden')
                        buildYourOwnCROCTA.classList.add('selected')
                        preBuiltCROCTA.classList.remove('selected')
                        /*BUILD YOUR OWN TRACKING*/
                    })
                }
                //break
            }
        }
    }