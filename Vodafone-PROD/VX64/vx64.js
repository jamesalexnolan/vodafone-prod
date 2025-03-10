 /////GENERAL TEMPLATE/////
    ////POLLING FUNCTION////
    //polling function config
    var vtxxx_nodeCheck_pxFuncFired = 0
    var vtxxx_nodeCheck_pxInterval = setInterval(vtxxx_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

    //polling function
    function vtxxx_nodeCheck_pxPollFunc() {
        vtxxx_nodeCheck_pxFuncFired += 1

        if (vtxxx_nodeCheck_pxFuncFired >= 20) {
            //try 20 times, if not found, clear px func
            clearInterval(vtxxx_nodeCheck_pxInterval);
        }

        if (document.body.nodeType === 1) {
            //clear polling when found
            clearInterval(vtxxx_nodeCheck_pxInterval)
            //MUTATION OBSERVER
            let vtxxx_observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    let vtxxx_oldValue = mutation.oldValue
                    let vtxxx_newValue = mutation.target.textContent
                    if (vtxxx_oldValue !== vtxxx_newValue) {
                        const vx64UpdatedBanner = document.querySelector('.vx62_banner_updated')
                        if (!vx64UpdatedBanner) {
                            vx64UpdateBanner()
                        } else {
                            vtxxx_observer.disconnect()
                        }
                    }
                })
            })

            vtxxx_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })

            //Reconnect mutation observer if user navigates back 
            window.navigation.addEventListener("navigate", (event) => {
                //start observing again
                vtxxx_observer.observe(document.body, {
                    //characterDataOldValue: true,
                    subtree: true,
                    childList: true,
                    //characterData: true,
                    attributes: true
                })
            })
        }
        function vx64UpdateBanner() {
            const element = document.querySelector('[id*="Broadband"] > div > div > div > p:nth-child(43)')
            const oldTerms = element;
            const newTerms = document.createElement('p');
            newTerms.classList.add('VX64-terms', 'Paragraphstyle__Paragraph-sc-ejay05-0', 'bKVFPq');
            newTerms.innerHTML = `
                  <span class="Spanstyle__Span-sc-151et84-0 kWVpKG ContentfulRichTextstyle__Inline-sc-1twaevf-3 gfkycM" data-component-name="Span">Giftcloud £50 eGift:&nbsp;</span>
                  Giftcloud £50 eGift: Offer ends at 23.59 on 30 October 2024 and is subject to availability. To claim your £50 eGift voucher you must be (i) an existing VOXI pay monthly mobile plan, SIM only airtime plan or SIM only data plan customer; and (ii) a new Vodafone Home Broadband customer signing up to an eligible home broadband plan. Offer valid when you purchase an eligible Home Broadband plan online using the email address registered to your VOXI account and the link in the email received from VOXI. The purchase should be completed in one session to ensure the sale is tracked correctly. Plans purchased through our partners and other affiliate sites are excluded. Each customer can claim up to a maximum of one voucher. Offer subject to Vodafone’s terms at vodafone.co.uk/broadband. Giftcloud will send your chosen Voucher to the email address provided by you at the time of purchase of the eligible plan. You have 90 days to activate your eGift by sending it to your email or mobile phone. After this time the gift will no longer be available, eGifts should be treated like cash and cannot be replaced if lost or stolen. Please check the redemption instructions and terms and conditions of your chosen eGift before making your choice. No cash alternative. This Offer may not be used on pre-existing orders or in conjunction with any other offer. Vodafone broadband services are subject to a credit check, acceptance and availability in your area. Minimum term agreement applies. Full Offer terms apply <a href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2f%2fvodafoneuk.imicampaign.com%2fexternalaccessweb%2fTrackURLSrv%3Fcampaignkw%3Dnotrack%26linkid%3D17277906210104%26tid%3Dcc-1_1727791141006120641%26signature%3D4E0DADAEDCC75B301CE5A84ED849116C&data=05%7c02%7cmarcell.raba1%40vodafone.com%7cafd19b84187f4daa39d508dce226e650%7c68283f3b84874c86adb3a5228f18b893%7c0%7c0%7c638633903971338983%7cUnknown%7cTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7c0%7c%7c%7c&sdata=KJ4qBOOZNZM73xLBiguujcDrWQHJLwnmuwwuxJzhvyc%3D&reserved=0">Terms and conditions | Vodafone UK</a>. Offer is subject to Giftcloud’s terms and conditions available at: <a href="https://www.giftcloud.com/uk/terms/">https://www.giftcloud.com/uk/terms/</a> and privacy policy: <a href="https://www.giftcloud.com/uk/privacy">https://www.giftcloud.com/uk/privacy</a>
                  `;
            oldTerms.replaceWith(newTerms);

            const oldCopy = document.querySelector('#content > div.StandardBannerstyle__FullWidthContainer-sc-1omjje9-0.demmub > div > div > div:nth-child(1) > div > div > div');
            const newCopy = document.createElement('div');
            newCopy.classList.add('ContentWrapperstyle__ContentWrapper-sc-1ew6hq8-0', 'bvjFAR');
            newCopy.innerHTML = `
                  <h1 size="2" data-component-name="Heading" class="vx62_banner_updated Headingstyle__Heading-sc-1yyt9pt-0 jJcCkF">VOXI customers get Vodafone Fibre 2 broadband for just £24 a month*, plus a £50 gift card</h1>
                  <p size="2" data-component-name="Paragraph" class="Paragraphstyle__Paragraph-sc-ejay05-0 biDyPO">The all-new Power Hub router, built with WiFi 6, auto-optimises for the fastest connection across all your devices. Use your registered VOXI email address when prompted.<br/><br/>Ends 30 October</p>
                  <div class="ContentWrapperstyle__BannerButtonWrapper-sc-1ew6hq8-1 egugBV"></div>
                  <p size="1" data-component-name="Paragraph" class="Paragraphstyle__Paragraph-sc-ejay05-0 cEEWGB">*Monthly plan increases each April  by £3</p>
                  `;
            oldCopy.replaceWith(newCopy);
        }
    }