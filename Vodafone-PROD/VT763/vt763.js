 //polling function config
 var vt763_nodeCheck_pxFuncFired = 0;
 var vt763_nodeCheck_pxInterval = setInterval(vt763_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

 //polling function
 function vt763_nodeCheck_pxPollFunc() {
     vt763_nodeCheck_pxFuncFired += 1;

     if (vt763_nodeCheck_pxFuncFired >= 20) {
         //try 20 times, if not found, clear px func
         clearInterval(vt763_nodeCheck_pxInterval);
     }

     if (document.body.nodeType === 1) {
         //clear polling when found
         clearInterval(vt763_nodeCheck_pxInterval);
         //MUTATION OBSERVER
         let vt763_observer = new MutationObserver((mutations) => {
             mutations.forEach((mutation) => {
                 let vt763_oldValue = mutation.oldValue;
                 let vt763_newValue = mutation.target.textContent;
                 if (vt763_oldValue !== vt763_newValue) {
                     if (window.location.href.indexOf('/sim-only-plans') > -1) {
                         simoFilterFunc()
                     } else {
                         document.querySelector('[id="vt763_SO"]').innerHTML = ''
                         vt763_observer.disconnect()
                     }
                 }
             });
         });

         vt763_observer.observe(document.body, {
             //characterDataOldValue: true,
             subtree: true,
             childList: true,
             //characterData: true,
             attributes: true
         });

         //Reconnect mutation observer if user navigates back 
         window.navigation.addEventListener("navigate", (event) => {
             //start observing again
             vt763_observer.observe(document.body, {
                 //characterDataOldValue: true,
                 subtree: true,
                 childList: true,
                 //characterData: true,
                 attributes: true
             });
         })

         //function to call 
         function simoFilterFunc() {
             //insert drop down menu
             var targetSimoElem = document.querySelector('[class*="Spacingstyle__Spacing-sc"]')
             var vt763DropDownMenu = '    <div class="vt763_spacing">   <div class="vt763_main_cont"> <div id="vt763_menu">   <p>Sort by:</p>        <div class="vt763_dropdown_container">            <button class="vt763_cta">                <p id="vt763_selected">Featured</p>                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">                    <path d="M13.6667 5.70929L8.00001 11.376L2.33334 5.70929" stroke="white" stroke-miterlimit="10"                        stroke-linecap="round" />                </svg>            </button>      <div id="dropdown_menu_secondary_container">      <div class="cro-hidden-menu" id="dropdown_menu_items">                <p class="drop_down_header">Please choose</p>      <div class="drop_down_menu_list">          <p class="drop_down_menu_item selection" id="featured">Featured</p>                <p class="drop_down_menu_item" id="price-low-to-high">Price low to high</p>                <p class="drop_down_menu_item" id="price-high-to-low">Price high to low</p>                <p class="drop_down_menu_item" id="data-most-to-least">Data most to least</p>                <p class="drop_down_menu_item" id="data-least-to-most">Data least to most</p>     </div>   </div>    </div>  </div>  </div>    </div>    </div>'
             var vt763DropDownMenuCont = document.querySelector('.vt763_dropdown_container')
             if (targetSimoElem && !vt763DropDownMenuCont) {
                 targetSimoElem.insertAdjacentHTML('afterend', vt763DropDownMenu)
                 const vt763SimOnlyStyles = document.querySelector('[id="vt763_SO"]')
                 //on click - cta, open menu
                 var dropDownCta = document.querySelector('.vt763_cta')
                 var dropDownMenuContainer = document.querySelector('#dropdown_menu_items')
                 var dropDownMenuContainer_secondary = document.querySelector('#dropdown_menu_secondary_container')
                 //onclick - menu item
                 var croDropDownItems = document.querySelectorAll('.drop_down_menu_item')
                 var selectedOption = document.querySelector('#vt763_selected')
                 for (let i = 0; i < croDropDownItems.length; i++) {
                     croDropDownItems[i].addEventListener('click', function () {
                         //remove selection class
                         for (let y = 0; y < croDropDownItems.length; y++) {
                             if (croDropDownItems[y].classList.contains('selection')) {
                                 croDropDownItems[y].classList.remove('selection')
                             }
                         }
                         //changes based on id
                         var dropDownItemID = croDropDownItems[i].getAttribute('id')
                         //featured
                         if (dropDownItemID === 'featured') {
                             //change selected header
                             selectedOption.innerHTML = 'Featured'
                             //sorting order CSS
                             vt763SimOnlyStyles.innerHTML = ''
                             //TRACKING 
                             if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                                 utag.vfuk_data.event_name = "sort_by_applied";
                                 utag.vfuk_data.event_label = "Hide personalized offer";
                                 utag.vfuk_data.event_action = "Featured";
                                 utag.link(utag.vfuk_data);
                             }
                         }
                         //price low to high
                         if (dropDownItemID === 'price-low-to-high') {
                             //change selected header
                             selectedOption.innerHTML = 'Price low to high'
                             //sorting order CSS
                             vt763SimOnlyStyles.innerHTML = '    /*sim only page styles*/    /*price - low to high*/    /*12*/    #plans-offers>div[spacing="4"]:first-of-type {        order: 2;    }    /*10*/    #plans-offers>div[spacing="4"]:nth-of-type(2) {        order: 1;    }    /*20*/    #plans-offers>div[spacing="4"]:nth-of-type(3) {        order: 4;    }    /*15*/    #plans-offers>div[spacing="4"]:nth-of-type(4) {        order: 3;    }    /*35*/    #plans-offers>div[spacing="4"]:nth-of-type(5) {        order: 5;    }    /*white*/    #plans-offers>div[spacing="4"]:nth-of-type(6) {        order: 6;    }'
                             //TRACKING 
                             if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                                 utag.vfuk_data.event_name = "sort_by_applied";
                                 utag.vfuk_data.event_label = "Hide personalized offer";
                                 utag.vfuk_data.event_action = "Price_low_to_high";
                                 utag.link(utag.vfuk_data);
                             }
                         }
                         //price high to low
                         if (dropDownItemID === 'price-high-to-low') {
                             //change selected header
                             selectedOption.innerHTML = 'Price high to low'
                             //sorting order CSS
                             vt763SimOnlyStyles.innerHTML = '    /*sim only page styles*/    /*price - high to low*/    /*12*/    #plans-offers>div[spacing="4"]:first-of-type {        order: 4;    }    /*10*/    #plans-offers>div[spacing="4"]:nth-of-type(2) {        order: 5;    }    /*20*/    #plans-offers>div[spacing="4"]:nth-of-type(3) {        order: 2;    }    /*15*/    #plans-offers>div[spacing="4"]:nth-of-type(4) {        order: 3;    }    /*35*/    #plans-offers>div[spacing="4"]:nth-of-type(5) {        order: 1;    }    /*white*/    #plans-offers>div[spacing="4"]:nth-of-type(6) {        order: 6;    }'
                             //TRACKING 
                             if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                                 utag.vfuk_data.event_name = "sort_by_applied";
                                 utag.vfuk_data.event_label = "Hide personalized offer";
                                 utag.vfuk_data.event_action = "Price_high_to_low";
                                 utag.link(utag.vfuk_data);
                             }
                         }
                         //data most to least
                         if (dropDownItemID === 'data-most-to-least') {
                             //change selected header
                             selectedOption.innerHTML = 'Data most to least'
                             //sorting order CSS
                             vt763SimOnlyStyles.innerHTML = '    /*sim only page styles*/    /*price - data - high to low*/    /*12*/    #plans-offers>div[spacing="4"]:first-of-type {        order: 3;    }    /*10*/    #plans-offers>div[spacing="4"]:nth-of-type(2) {        order: 5;    }    /*20*/    #plans-offers>div[spacing="4"]:nth-of-type(3) {        order: 2;    }    /*15*/    #plans-offers>div[spacing="4"]:nth-of-type(4) {        order: 4;    }    /*35*/    #plans-offers>div[spacing="4"]:nth-of-type(5) {        order: 1;    }    /*white*/    #plans-offers>div[spacing="4"]:nth-of-type(6) {        order: 6;    }'
                             //TRACKING 
                             if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                                 utag.vfuk_data.event_name = "sort_by_applied";
                                 utag.vfuk_data.event_label = "Hide personalized offer";
                                 utag.vfuk_data.event_action = "Data_most_to_least";
                                 utag.link(utag.vfuk_data);
                             }
                         }
                         //data least to most
                         if (dropDownItemID === 'data-least-to-most') {
                             //change selected header
                             selectedOption.innerHTML = 'Data least to most'
                             //sorting order CSS
                             vt763SimOnlyStyles.innerHTML = '    /*sim only page styles*/    /*price - data - low to high*/    /*12*/    #plans-offers>div[spacing="4"]:first-of-type {        order: 3;    }    /*10*/    #plans-offers>div[spacing="4"]:nth-of-type(2) {        order: 1;    }    /*20*/    #plans-offers>div[spacing="4"]:nth-of-type(3) {        order: 4;    }    /*15*/    #plans-offers>div[spacing="4"]:nth-of-type(4) {        order: 2;    }    /*35*/    #plans-offers>div[spacing="4"]:nth-of-type(5) {        order: 5;    }    /*white*/    #plans-offers>div[spacing="4"]:nth-of-type(6) {        order: 6;    }'
                             //TRACKING 
                             if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
                                 utag.vfuk_data.event_name = "sort_by_applied";
                                 utag.vfuk_data.event_label = "Hide personalized offer";
                                 utag.vfuk_data.event_action = "Data_least_to_most";
                                 utag.link(utag.vfuk_data);
                             }
                         }
                         //add selection class
                         croDropDownItems[i].classList.add('selection')
                         //close dropdown menu
                         dropDownMenuContainer.classList.add('cro-hidden-menu')
                     })
                 }
                 //open/close menu
                 document.addEventListener('click', function (event) {
                     if (!event.target.closest('[id="dropdown_menu_items"]') || !event.target.closest('[class="vt763_cta"]')) {
                         if (!dropDownMenuContainer.classList.contains('cro-hidden-menu')) {
                             dropDownMenuContainer_secondary.classList.add('cro-hidden-menu')
                         }
                     }

                     if (event.target.closest('[class="vt763_cta"]')) {
                         if (dropDownMenuContainer.classList.contains('cro-hidden-menu')) {
                             dropDownMenuContainer.classList.remove('cro-hidden-menu')
                         }
                         if (dropDownMenuContainer_secondary.classList.contains('cro-hidden-menu')) {
                             dropDownMenuContainer_secondary.classList.remove('cro-hidden-menu')
                         }
                     }
                 })
             }
         }
     }
 }