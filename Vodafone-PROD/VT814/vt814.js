function requestIdleCallbackFallback(callback, options) {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(callback, options)
        } else {
            setTimeout(callback, options && options.timeout ? options.timeout : 0)
        }
    }

    function waitForStableDOM(callback, interval = 10) {
        let done = false

        const tryCallback = () => {
            if (!done) {
                done = true
                clearInterval(checkDOM)
                requestIdleCallbackFallback(callback, {
                    timeout: 500
                })
            }
        }

        const checkDOM = setInterval(() => {
            if (document.readyState === "complete") {
                tryCallback()
            }
        }, interval)
    }

    //CALL BACK FUNC
    function runObserverCallbackIfReady(observer) {
        var megaNav = document.querySelector('[data-test="menu-list"]')
        if (!megaNav) return
        var insertedCroLink = document.querySelector('[data-test="cro-link"]')
        if (!insertedCroLink) {
            insertStudentLink()
        } else {
            if (observer && typeof observer.disconnect === 'function') {
                observer.disconnect()
            }
        }
    }

    //MUTATION OBSERVER
    function initContentObserver() {
        const contentObserver = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                runObserverCallbackIfReady(contentObserver)
            }
        })

        const config = {
            childList: true,
            subtree: true
        }
        contentObserver.observe(document.body, config)

        runObserverCallbackIfReady(contentObserver)
    }

    waitForStableDOM(initContentObserver)

    function insertStudentLink() {
        var megaNav = document.querySelector('[data-test="menu-list"]')
        var megaNavLinks = megaNav?.querySelectorAll('li')
        if (megaNav && megaNavLinks && megaNavLinks[2]) {
            var croLink = megaNavLinks[2].outerHTML
            megaNavLinks[2].insertAdjacentHTML('afterend', croLink)
            var insertedLink = megaNavLinks[2].nextElementSibling
            if (insertedLink) {
                insertedLink.setAttribute('data-test', 'cro-link')
                var aTag = insertedLink.querySelector('a')
                var spanTag = insertedLink.querySelector('span')
                if (aTag && spanTag) {
                    aTag.setAttribute('href', '/acquisition/students')
                    spanTag.innerHTML = '<span class="">Student deals</span>'
                }
            }
        }
    }