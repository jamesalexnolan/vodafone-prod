    ////MUTATION OBSERVER - BODY////
    let vtxxx_observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            let vtxxx_oldValue = mutation.oldValue;
            let vtxxx_newValue = mutation.target.textContent;
            if (vtxxx_oldValue !== vtxxx_newValue) {
                if (window.location.href.indexOf('#add-ons') > -1 || window.location.href.indexOf('#airtimeplans') > -1 || window.location.href.indexOf('#phoneplan') > -1) {
                    if (document.querySelector('.cro-timer') && !document.querySelector('.cro-timer').classList.contains('hide_element')) {
                        document.querySelector('.cro-timer').classList.add('hide_element')
                    }
                } else {
                    if (document.querySelectorAll('[class*="Containerstyle__ContainerContent-sc"]')[1] && !document.querySelector('.cro-timer')) {
                        //ACTIONS HERE 
                        croTimer()
                    }

                    if (document.querySelector('.cro-timer') && document.querySelector('.cro-timer').classList.contains('hide_element')) {
                        document.querySelector('.cro-timer').classList.remove('hide_element')
                    }
                }
            }
        });
    });

    vtxxx_observer.observe(document.body, {
        //characterDataOldValue: true,
        subtree: true,
        childList: true,
        //characterData: true
        attributes: true
    });

    //insert timer
    function croTimer() {
        document.querySelectorAll('[class*="Containerstyle__ContainerContent-sc"]')[1].insertAdjacentHTML('afterEnd', '\
            <div class="cro-timer">\
                <div class="countdown-container">\
                    <div class="countdown-section">\
                            <h4></h4>\
                        <div class="timer" id="countdown">\
                            <div class="countdown-item" id="countdown-days">\
                                <h5></h5>\
                                <p>days</p>\
                            </div>\
                            <div class="countdown-item" id="countdown-hours">\
                                <h5></h5>\
                                <p>hours</p>\
                            </div>\
                            <div class="countdown-item"id="countdown-minutes">\
                                <h5></h5>\
                                <p>mins</p>\
                            </div>\
                            <div class="countdown-item" id="countdown-seconds">\
                                <h5></h5>\
                                <p>secs</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            ')
        //timer functionality 
        function updateCountdown() {
            const targetDate = new Date('July 25, 2024 22:00:00').getTime()
            const now = new Date().getTime()
            const difference = targetDate - now

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            document.getElementById('countdown-days').querySelector('h5').innerHTML = (days < 10 ? '0' : '') + days
            document.getElementById('countdown-hours').querySelector('h5').innerHTML = (hours < 10 ? '0' : '') + hours
            document.getElementById('countdown-minutes').querySelector('h5').innerHTML = (minutes < 10 ? '0' : '') + minutes
            document.getElementById('countdown-seconds').querySelector('h5').innerHTML = (seconds < 10 ? '0' : '') + seconds
        }

        setInterval(updateCountdown, 1000)
        updateCountdown()

        //update title based on URL 
        var urlIndex = [
            'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-15-pro',
            'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/google/pixel-8',
            'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/apple/iphone-15-plus', 
            'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/samsung/galaxy-z-flip6'
        ]

        var titleIndex = [
            'iPhone 15 Pro',
            'Google Pixel 8',
            'iPhone 15 Plus', 
            'Samsung Galaxy Z Flip6'
        ]

        if (urlIndex.some(url => window.location.href.includes(url))) {
            console.log('true')
            var counterHeader = titleIndex.indexOf(urlIndex)
            console.log(counterHeader)
        }

        var matchedIndex = urlIndex.findIndex(URL => window.location.href.includes(URL));
        var counterTitle = document.querySelector('.countdown-section>h4')

        if (matchedIndex !== -1) {
            var counterHeader = titleIndex[matchedIndex];
            console.log(counterHeader)
            counterTitle.innerHTML = counterHeader + ' offer ends in'
        }
    }