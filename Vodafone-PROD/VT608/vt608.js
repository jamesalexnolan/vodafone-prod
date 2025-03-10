//mutation observer 
let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let oldValue = mutation.oldValue;
        let newValue = mutation.target.textContent;
        if (oldValue !== newValue) {
            //CSS checker 
            if (document.location.pathname === "/sim-only-plans" || document.location.pathname === "/acquisition/students" || document.location.pathname === "/acquisition/plans") {
                document.querySelector('[id="vt608-style"]').innerHTML = ''
            } else if (window.location.href.indexOf('phones/') > -1 && document.querySelector('[id="vt608-style"]').innerHTML === '') {
                document.querySelector('[id="vt608-style"]').innerHTML = '    /* choose plan button */    .vt850_button_1_Styling {        background: #F28705 !important;        color: black !important;        border-radius: 8px !important;    }    .vt850_button_1_Styling_active {        background: #0BB80E !important;        color: black !important;    }    /* log in to add device */    .vt850_button_2_Styling {        border: 1px solid white !important;        color: white !important;        border-radius: 8px !important;    }    /* adjust border color */    #plans-offers>div>div {        border-color: #045E7A !important;        border-radius: 8px 8px 8px 8px;        background: #262525;    }    #plans-offers>div>div:nth-of-type(2) {        border-color: #045E7A !important;        border-radius: 0px 8px 8px 8px;        background: #262525;    }    /* flag adjustment */    .vt850_flag_styling {        background: #045E7A !important;        border-radius: 8px 8px 0px 0px !important;    }    .vt850_flag_styling_p {        color: white !important    }    .vt580_border-radius {        border-radius: 8px !important;    }    /*color and storage selection*/    #root>div>div:nth-of-type(3)>div:nth-of-type(2)>div>div>div:nth-of-type(4)>div>div>div>div>div>div>div>div:nth-of-type(2)>div>select,    #root>div>div:nth-of-type(3)>div:nth-of-type(2)>div>div>div:nth-of-type(4)>div>div>div>div>div:nth-of-type(2)>div>div>div:nth-of-type(2)>div>select {        border-radius: 8px !important;    }    /*payment option*/    #root>div>div:nth-of-type(3)>div:nth-of-type(2)>div>div>div:nth-of-type(4)>div>div>div>div>fieldset>div>div>span>label,    #root>div>div:nth-of-type(3)>div:nth-of-type(2)>div>div>div:nth-of-type(4)>div>div>div>div>fieldset>div>div:nth-of-type(2)>span>label {        border-radius: 8px !important;        background: #0D0D0C;    }    /*make final selection*/    #root>div>div:nth-child(3)>div>div>div>div>div>div>div:nth-of-type(2)>div:nth-of-type(5)>div>div>div:nth-of-type(3)>div {        border-radius: 8px !important;    }    /* btn 1 border radius*/    #root>div>div:nth-of-type(3)>div:nth-of-type(2)>div>div>div:nth-of-type(4)>div>div>div:nth-of-type(2)>div:nth-of-type(6)>div>button {        border-radius: 8px !important;    }    /*Radio buttons*/    #pay-monthly-radio-0-radio>label::after,    #pay-monthly-radio-1-radio>label::after,    #pay-monthly-radio-2-radio>label::after,    #pay-monthly-radio-3-radio>label::after {        background-color: #0BB80E;    }    /*notification background*/    #root>div>div:nth-child(3)>div:nth-child(2)>div>div>div:nth-child(5)>div>div>div>div>div>div>div:nth-child(4)>div {        background-color: #262525;    }'
            }

            if (document.location.pathname != "/sim-only-plans" && window.location.href.indexOf('phones/') > -1) {
                //change button function
                //add class to buttons
                //select buttons
                var vt850_btn_1 = document.querySelector('#root>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(5)>div>div>div:nth-child(2)>div:nth-child(6)>div>button')
                //document.querySelector('#root>div>div:nth-child(3)>div:nth-child(2)>div>div>div:nth-child(4)>div>div>div>div>div:nth-child(1)>button')
                var vt850_btn_2 = document.querySelector('#root>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(5)>div>div>div:nth-child(2)>div:nth-child(6)>div:nth-child(2)>button')
                //document.querySelector('#root>div>div:nth-child(3)>div:nth-child(2)>div>div>div:nth-child(4)>div>div>div>div>div:nth-child(2)>button')
                //add styling class in first instance 
                if (vt850_btn_1 && vt850_btn_2) {
                    vt850_btn_1.classList.add('vt850_button_1_Styling')
                    vt850_btn_2.classList.add('vt850_button_2_Styling')

                    //button one
                    var vt850_btn_1 = document.querySelector('#root>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(5)>div>div>div:nth-child(2)>div:nth-child(6)>div>button')
                    if (vt850_btn_1) {
                        if (vt850_btn_1.classList.contains('vt850_button_1_Styling')) {
                            if (vt850_btn_1.innerText === 'Phone selected') {
                                vt850_btn_1.classList.remove('vt850_button_1_Styling')
                                vt850_btn_1.classList.add('vt850_button_1_Styling_active')
                            }
                        } else if (!vt850_btn_1.classList.contains('vt850_button_1_Styling')) {
                            if (vt850_btn_1.innerText != 'Phone selected') {
                                vt850_btn_1.classList.add('vt850_button_1_Styling')
                            }
                        }
                    }
                    //button two
                    var vt850_btn_2 = document.querySelector('#root>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(5)>div>div>div:nth-child(2)>div:nth-child(6)>div:nth-child(2)>button')
                    if (vt850_btn_2) {
                        if (!vt850_btn_2.classList.contains('vt850_button_2_Styling')) {
                            if (vt850_btn_2.innerText === 'VOXI customer? Sign in') {
                                vt850_btn_2.classList.add('vt850_button_2_Styling')
                            }
                        }
                    }

                    if (document.querySelector("#root > div > div:nth-child(3) > div:nth-child(2) > div > div > div:nth-child(5) > div > div > div > div > div > div > div > div > div > span > span > span > svg > path")) {
                        //change icon colour
                        document.querySelector("#root > div > div:nth-child(3) > div:nth-child(2) > div > div > div:nth-child(5) > div > div > div > div > div > div > div > div > div > span > span > span > svg > path").setAttribute("fill", "#2995CE")
                    }

                    var vt850_btn_1_container = document.querySelector('#root>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(5)>div>div>div:nth-child(2)>div:nth-child(6)>div')
                    //handle clicks on first btn
                    vt850_btn_1_container.addEventListener('click', function () {
                        //remove class when clicked 
                        if (vt850_btn_1.classList.contains('vt850_button_1_Styling')) {
                            vt850_btn_1.classList.remove('vt850_button_1_Styling')
                        }
                    })
                }

                //card styling
                var vt850_card = document.querySelectorAll('#plans-offers > div > div')

                if (vt850_card.length > 1) {
                    for (var i = 0; i < vt850_card.length; i++) {
                        if (vt850_card[i].innerText.length < 21 && vt850_card[i].innerText.length > 0) {
                            //add flag styling
                            vt850_card[i].classList.add('vt850_flag_styling')
                            vt850_card[i].firstChild.classList.add('vt850_flag_styling_p')

                            //add class to plans-offers for styling
                            document.querySelector('#plans-offers').classList.add('vt580_tracking')
                            //remove styling if needed 
                        }
                    }

                    //desktop
                    //card buttons
                    if (screen.width > 880) {
                        var vt580_card_buttons = document.querySelectorAll('#plans-offers > div > div > div >div:nth-child(4) > div > div > div > button')
                        for (var i = 0; i < vt580_card_buttons.length; i++) {
                            vt580_card_buttons[i].classList.add('vt850_button_1_Styling')
                        }
                    } else if (screen.width < 880) {
                        //mobile
                        var vt580_card_buttons = document.querySelectorAll('#plans-offers > div > div > div >div:nth-child(3) > div > div > div > button')
                        for (var i = 0; i < vt580_card_buttons.length; i++) {
                            vt580_card_buttons[i].classList.add('vt850_button_1_Styling')
                        }
                    }
                }
            } else {
                observer.disconnect()
            }
        }
    });
});

observer.observe(document.body, {
    characterDataOldValue: true,
    subtree: true,
    childList: true,
    characterData: true
});

//Reconnect mutation observer if user navigates back 
window.navigation.addEventListener("navigate", (event) => {
    //start observing again
    observer.observe(document.body, {
        characterDataOldValue: true,
        subtree: true,
        childList: true,
        characterData: true
    });
})