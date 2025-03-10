////POLLING FUNCTION////
    //polling function config
    var vt586_nodeCheck_pxFuncFired = 0;
    var vt586_nodeCheck_pxInterval = setInterval(vt586_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

    //polling function
    function vt586_nodeCheck_pxPollFunc() {
        vt586_nodeCheck_pxFuncFired += 1;

        if (vt586_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vt586_nodeCheck_pxInterval);
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vt586_nodeCheck_pxInterval);
            //MUTATION OBSERVER
            let vt586_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vt586_oldValue = mutation.oldValue;
                    let vt586_newValue = mutation.target.textContent;
                    if (vt586_oldValue !== vt586_newValue) {
                        //MATCH URL CONDITION
                        if (window.location.href.indexOf('/sim-only-plans') > -1) {
                            //CODE HERE
                            var inserted_banner = document.querySelector('.vt586_banner_container')
                            if (!inserted_banner) {
                                vt586BannerChanges()
                            } else {
                                vt586_observer.disconnect()
                            }
                        } else {
                            vt586_observer.disconnect()
                        }
                    }
                });
            });

            vt586_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                vt586_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                });
            })
            //functions to call
            function vt586BannerChanges() {
                var orig_banners = document.querySelectorAll('[role="banner"]')[1];

                if (orig_banners) {
                    // Create new banner and hide old banner
                    var newBanner = document.createElement('div');
                    newBanner.classList.add('vt586_banner_container');
                    var vt586_banner = `<div class="sc-dacFVT aEDNK"><div class="sc-bTvRvy iBJkyV"><div class="sc-kIeSmD ezuaMz"><picture class="sc-dIUfKc XOdiB vt586_banner_container">
                    <source media="(min-width: 1025px) and (-webkit-min-device-pixel-ratio: 1.5) and (min-resolution: 144dpi)" srcset="https://images.ctfassets.net/49k3mgcbymb9/CzIrPl8Ht3X4h4lMUzxIA/fc6141872fd0f178460ea353391e20c9/desktop_plans_page_kv_hero_banner_2x.webp">
                    <source media="(min-width: 1025px)" srcset="https://images.ctfassets.net/49k3mgcbymb9/7BkdDI7gVJ06bBwPKK7rZy/e8abf9b5918439ef6c38180e1d3a0382/DESKTOP_PLANSPAGE_2024_JULY_AUG_3360x420-v2_1.png">
                    <source media="(min-width: 1025px)" srcset="https://images.ctfassets.net/49k3mgcbymb9/7BkdDI7gVJ06bBwPKK7rZy/e8abf9b5918439ef6c38180e1d3a0382/DESKTOP_PLANSPAGE_2024_JULY_AUG_3360x420-v2_1.png">
                    <source media="(min-width: 768px) and (-webkit-min-device-pixel-ratio: 1.5) and (min-resolution: 144dpi)" srcset="https://images.ctfassets.net/49k3mgcbymb9/3QXZuvEpvts7Q6F609mD2k/7aca6f77f7b89e85b2f980c1979d2970/tablet_planspage_2024_july_aug_2112x468_1_2x.webp">
                    <source media="(min-width: 768px)" srcset="https://images.ctfassets.net/49k3mgcbymb9/7BkdDI7gVJ06bBwPKK7rZy/e8abf9b5918439ef6c38180e1d3a0382/DESKTOP_PLANSPAGE_2024_JULY_AUG_3360x420-v2_1.png">
                    <source media="(min-width: 768px)" srcset="https://images.ctfassets.net/49k3mgcbymb9/EzpGb7pcQhknHAkv2f7T4/16ee5f95908372401f4282b788a3e131/tablet_planspage_2024_july_aug_2112x468_1_1x.webp">
                    <source media="(max-width: 767px) and (-webkit-min-device-pixel-ratio: 1.5) and (min-resolution: 144dpi)" srcset="https://images.ctfassets.net/49k3mgcbymb9/3mwU7WucGDTDliUGtlxkc3/06fbc84585fac995b8bd349a18315e17/mobile_plans_page_kv_hero_banner_2x.webp">
                    <source media="(max-width: 767px)" srcset="https://images.ctfassets.net/49k3mgcbymb9/7BkdDI7gVJ06bBwPKK7rZy/e8abf9b5918439ef6c38180e1d3a0382/DESKTOP_PLANSPAGE_2024_JULY_AUG_3360x420-v2_1.png">
                    <source media="(max-width: 767px)" srcset="https://images.ctfassets.net/49k3mgcbymb9/4W7uQP5XFbh9xLFz8BqDIu/6f48750f224c20b08c40f9a66f6a0bd7/mobile_plans_page_kv_hero_banner_1x.webp">
                    <img alt="September promo image plans page" class="sc-idOjMB hHGtJo" sec_uuid_js:web.vodafone.co.uk="4e26abdc6a13">
                    </picture></div></div></div><div class="sc-jUElsq Fmloi">
                    <p size="1" data-component-name="Paragraph" class="Paragraphstyle__Paragraph-sc-ejay05-0 dXnRqc">T&Cs apply. Offer ends 10.10.24. Selected apps, UK only</p></div>`;
                    newBanner.innerHTML = vt586_banner;

                    orig_banners.parentElement.insertBefore(newBanner, orig_banners);

                    orig_banners.style.display = 'none';

                    newBanner.firstChild.addEventListener('click', function () {
                        // click first plan card - ( deep link causes issues )
                        document.querySelectorAll('[aria-label="Choose this plan"]')[0].click()
                    });
                }
            }
        }
    }