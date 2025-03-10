/**IGNORE THIS SECTION */
////POLLING FUNCTION////
//polling function config
var vx67_nodeCheck_pxFuncFired = 0;
var vx67_nodeCheck_pxInterval = setInterval(vx67_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

//polling function
function vx67_nodeCheck_pxPollFunc() {
    vx67_nodeCheck_pxFuncFired += 1;

    if (vx67_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vx67_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vx67_nodeCheck_pxInterval);
        vx67_pElementUpdates()
        ////MUTATION OBSERVER////
        //mutation to handle p1,p2,p3 changes 
        //mutation observer 
        const vx128bserver = new MutationObserver((mutationsList, vx128bserver) => {
            //check for mutations
            for (const mutation of mutationsList) {
                if (mutation.target.matches('.section--gutter')) {
                    //CHANGES HERE
                    vx67_pElementUpdates()
                }
            }
        });

        //define the configuration for the MutationObserver
        const vx128bserverConfig = {
            characterDataOldValue: true,
            subtree: true,
            childList: true,
            characterData: true,
            attributes: true
        };

        //start observing changes
        vx128bserver.observe(document.body, vx128bserverConfig);
    }
}

///EVENT LISTENER - PAGE RE-SIZE///
/*Accounts for instances where user/tester changes page from mobile to desktop*/
window.addEventListener('resize', function (event) {
    vx67_pElementUpdates()
});
/**IGNORE THIS SECTION -- END*/

/**CHANGES TO P ELEMENT MADE BELOW*/
///FUNCTION TO CALL///
function vx67_pElementUpdates() {
    //check all p element CTA's are populated
    var p_elements = document.querySelectorAll('[data-component-name="DiscoveryCard"]')
        if (p_elements[1] && p_elements[1].querySelector('div>div:nth-child(2)>div').innerText !== '') {
            ///P2 CHANGES///
            //image changes 
            //mobile img
            var vx67_mobileImg_p2 = 'https://images.vodafone.co.uk/gbnnsauqav4t/NkU2PPxsETU0q2tfDtbHk/5f6733ea1ef03686dfdd2712459a66f0/MB-WEb-Tile-PH-podium.jpg'
            //desktop img
            //var vx67_desktopImg_p2 = 'https://images.vodafone.co.uk/gbnnsauqav4t/5AefUdYtGsUJte4Zcg3TWi/ca465cfd88cc3b4e298419c93f62b9d0/DT-WEb-Tile-PH-podium.jpg'
            //set HTML
            p_elements[1].querySelector('[data-component-name="Image"]>source').setAttribute('srcset', vx67_mobileImg_p2)
            p_elements[1].querySelector('[data-component-name="Image"]>source:nth-child(2)').setAttribute('srcset', vx67_mobileImg_p2)
            p_elements[1].querySelector('[data-component-name="Image"]>source:nth-child(3)').setAttribute('srcset', vx67_mobileImg_p2)
            p_elements[1].querySelector('[data-component-name="Image"]>source:nth-child(4)').setAttribute('srcset', vx67_mobileImg_p2)
            p_elements[1].querySelector('[data-component-name="Image"]>img').setAttribute('src', vx67_mobileImg_p2)
            //Header 
            p_elements[1].querySelector('div>div>h3').innerText = 'Upgrade your broadband'
            //Sub-Header
            p_elements[1].querySelector('div>div>p').innerText = 'Supercharge your broadband experience with one of our deals today.'
            //CTA text
            p_elements[1].querySelector('div>div:nth-child(2)>a>div:nth-child(2)').innerText = 'Log in to see upgrade deals'
            //CTA link 
            p_elements[1].querySelector('div>div:nth-child(2)>a').setAttribute('href', 'https://www.vodafone.co.uk/broadband/services/dashboard?icmp=web-hbb-hp/hbb/hbbret-BAU-HP/03.25/ntst')
            p_elements[1].querySelector('a').setAttribute('href', 'https://www.vodafone.co.uk/broadband/services/dashboard?icmp=web-hbb-hp/hbb/hbbret-BAU-HP/03.25/ntst')
            ///P2 CHANGES -- END///
        }
}