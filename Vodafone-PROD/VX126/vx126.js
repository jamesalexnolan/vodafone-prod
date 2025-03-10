/////GENERAL TEMPLATE/////
////POLLING FUNCTION////
//polling function config
var vx126_nodeCheck_pxFuncFired = 0
var vx126_nodeCheck_pxInterval = setInterval(vx126_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

//polling function
function vx126_nodeCheck_pxPollFunc() {
    vx126_nodeCheck_pxFuncFired += 1

    if (vx126_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vx126_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vx126_nodeCheck_pxInterval)
        //MUTATION OBSERVER
        let vx126_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vx126_oldValue = mutation.oldValue
                let vx126_newValue = mutation.target.textContent
                if (vx126_oldValue !== vx126_newValue) {
                    const cro_pathNames = [
                        '/mobile/phones/pay-monthly-contracts', 
                        '/mobile/phones/pay-monthly-contracts/apple', 
                        '/mobile/phones/pay-monthly-contracts/samsung', 
                        '/mobile/phones/pay-monthly-contracts/google', 
                        '/mobile/phones/pay-monthly-contracts/motorola', 
                        '/mobile/phones/pay-monthly-contracts/honor', 
                        '/mobile/phones/pay-monthly-contracts/doro'
                    ]
                    if (cro_pathNames.includes(window.location.pathname)) {
                        var SVGIcons = document.querySelectorAll('[class="injected-svg"]')
                        var fiveGIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 73" fill="none" class="injected-svg" data-src="https://cdn.vodafone.co.uk/mobile/phones/pay-monthly-contracts/assets//ws10/icons/UkBrandIcons/5g.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M83.391 46.876h15.895l-6.809 3.342-1.731 8.708-.602.116c-2.683.52-5.538.783-8.483.783-2.242 0-4.275-.478-6.04-1.42-1.796-.957-3.243-2.445-4.303-4.422-1.034-1.92-1.678-4.322-1.913-7.139-.23-2.769.026-6.056.765-9.772 1.507-7.576 4.04-13.267 7.534-16.915 3.549-3.707 7.637-5.586 12.154-5.586 3.418 0 6.039.86 7.79 2.553 1.458 1.412 2.772 3.307 3.918 5.644L115 13.64c-2.064-4.232-4.807-7.568-8.163-9.922C103.316 1.25 98.297 0 91.923 0c-4.649 0-9.692 1.047-14.986 3.109-5.088 1.973-10.021 5.997-14.665 11.96-4.158 5.458-7.186 12.25-8.994 20.18l-.53 2.323-1.156-2.082c-1.385-2.495-3.693-4.491-6.86-5.933-4.182-1.906-9.714-2.872-16.44-2.872h-1.113l1.475-7.417-7.412-3.639h20.036l-.007.036h15.185L59.18 1.968H17.854l-7.51 37.784a66.082 66.082 0 0 1 9.574-.683c2.374 0 4.96.302 7.689.896 2.824.616 5.166 1.776 6.964 3.449 1.45 1.352 2.196 2.976 2.221 4.825l.014.957-.08-.003c-.108.941-.393 2.465-1.163 4.015a.391.391 0 0 1-.016.032l-.018.035c-.167.299-.35.598-.547.893-.963 1.441-2.56 2.722-4.746 3.81a15.256 15.256 0 0 1-6.856 1.627c-3.015 0-6.098-.689-9.167-2.046-2.706-1.198-5.133-2.86-6.957-4.75L0 64.406s26.729 17.665 45.819 0a30.206 30.206 0 0 0 2.965-3.77 26.078 26.078 0 0 0 2.235-4.13l1.067-2.466.654 2.606c.724 2.882 1.841 5.455 3.322 7.65l.074.11s10.922 17.568 48.476 2.465l.565-2.465 7.083-33.193H87.027l-3.636 15.66v.002Z" fill="#E60000"></path></svg>'
                        for (var i = 0; i < SVGIcons.length; i++) {
                            if (SVGIcons[i].outerHTML.includes('ultra')) {
                                SVGIcons[i].outerHTML = fiveGIcon
                            }
                        }
                    } else {
                        vx126_observer.disconnect()
                    }
                }
            })
        })

        vx126_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        })

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vx126_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })
        })
    }
}