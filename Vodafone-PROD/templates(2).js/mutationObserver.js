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
                    //function here 

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

        runObserverCallbackIfReady(contentObserver)
    }

    waitForStableDOM(initContentObserver)

    //function here 