var pxFuncFired = 0;
var pxInterval = setInterval(pxPollFunc, 100);

//polling function
function pxPollFunc() {
    pxFuncFired += 1;

    if (pxFuncFired >= 20) {
        //try 20 times, if not found clear px func
        clearInterval(pxInterval);
    }

    //check for element
    if (document.querySelectorAll('[class*="Headingstyle__Heading-sc"]')[1] && document.querySelector('[aria-label="Choose this plan"]')) {
        //clear polling func
        clearInterval(pxInterval)
        //make changes
        vt591_landing_page_changes()

        //event listener to trigger changes to pop-out
        var vt591_details_link = document.querySelectorAll('[class*="Interactionstyle__Button-sc"]')

        for (var i = 0; i < vt591_details_link.length; i++) {
            if (vt591_details_link[i].innerText.includes('See plan details')) {
                vt591_details_link[i].addEventListener('click', function () {
                    var pxFuncFired = 0;
                    var pxInterval = setInterval(pxPollFunc, 100);

                    //polling function
                    function pxPollFunc() {
                        pxFuncFired += 1;

                        if (pxFuncFired >= 20) {
                            //try 20 times, if not found clear px func
                            clearInterval(pxInterval);
                        }

                        //target element 
                        vt591_popout_text = document.querySelectorAll('[class*="Headingstyle__Heading-sc"]')[47]

                        if (vt591_popout_text) {
                            //clear polling when found
                            clearInterval(pxInterval);
                            //ACTIONS HERE 
                            vt591_popout_text.innerHTML = '45GB'

                            //change cta href
                            document.querySelectorAll('[aria-label="Choose this plan"]')[4].addEventListener('click', function () {
                                window.location = 'https://www.voxi.co.uk/acquisition/plans?planId=117009'
                            })
                        }
                    }
                })
                break;
            }
        }

    }
}

function vt591_landing_page_changes() {
    //replace header text 
    document.querySelectorAll('[class*="Headingstyle__Heading-sc"]')[1].innerHTML = 'Students get 3x data on £10 and 3x data on £15 plans, plus <span class="sc-nFrIV fvCIvJ">first month FREE on any plan!</span>'

    //replace flag text 
    //document.querySelectorAll('[class*="Paragraphstyle__Paragraph-sc"]')[7].innerText = '3x Data'
    document.querySelectorAll('[class*="SimpleGridstyle__SimpleGridColumn-sc"] > div > p')[0].innerText = '3x Data'

    //replace card text
    //account for countdown
    if (document.querySelector("#root > div > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(5) > div").children.length === 2) {
        document.querySelectorAll('[class*="Headingstyle__Heading-sc"]')[14].innerText = '45GB'
    } else if (document.querySelector("#root > div > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(5) > div").children.length === 1) {
        document.querySelectorAll('[class*="Headingstyle__Heading-sc"]')[6].innerText = '45GB'
    }

    //change cta href
    document.querySelector('[aria-label="Choose this plan"]').addEventListener('click', function () {
        window.location = 'https://www.voxi.co.uk/acquisition/plans?planId=117009'
    })
}

//account for navigating backwards
window.addEventListener("popstate", function (e) {
    setInterval(pxPollFunc, 100)
})