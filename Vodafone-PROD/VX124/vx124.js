 //polling function config
 var disney_nodeCheck_pxFuncFired = 0
 var disney_nodeCheck_pxInterval = setInterval(disney_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

 //polling function
 function disney_nodeCheck_pxPollFunc() {
     disney_nodeCheck_pxFuncFired += 1

     if (disney_nodeCheck_pxFuncFired >= 20) {
         //try 20 times, if not found, clear px func
         clearInterval(disney_nodeCheck_pxInterval);
     }

     if (document.body.nodeType === 1) {
         //clear polling when found
         clearInterval(disney_nodeCheck_pxInterval)
         //MUTATION OBSERVER
         let disney_observer = new MutationObserver((mutations) => {
             mutations.forEach((mutation) => {
                 let disney_oldValue = mutation.oldValue
                 let disney_newValue = mutation.target.textContent
                 if (disney_oldValue !== disney_newValue) {
                     var windowLocation = window.location
                     if (!windowLocation.pathname === '/mobile/phones/pay-monthly-contracts' || !windowLocation.pathname === '/mobile/pay-monthly-contracts' || windowLocation.href.indexOf('#airtimeplans') > -1 || windowLocation.href.indexOf('#phoneplan') > -1 || windowLocation.href.indexOf('#add-ons') > -1) {
                         disney_observer.disconnect()
                     } else {
                         var grid = document.querySelectorAll('[data-component-name="SimpleGrid"]')[3]
                         if (grid) {
                             var croCard = document.querySelector('.CRO-disneyCont')
                             var handsetBannerCRO = document.querySelectorAll('[data-component-name="FullWidthNotification"]')[1]
                             var handsetFilterSelection = document.querySelector('[data-selector="brand-filter__samsung"]')
                             if (handsetBannerCRO && handsetFilterSelection && handsetBannerCRO.innerHTML.includes('Samsung Galaxy S25') && !handsetFilterSelection.outerHTML.includes('logo-selected')) {
                                 //insert card
                                 if (!croCard) {
                                     addContentGridPanel()
                                 }
                             } else {
                                 if (croCard) {
                                     croCard.parentElement.remove()
                                 }
                             }
                         }
                     }
                 }
             })
         })

         disney_observer.observe(document.body, {
             //characterDataOldValue: true,
             subtree: true,
             childList: true,
             //characterData: true,
             attributes: true
         })

         //Reconnect mutation observer if user navigates back 
         window.navigation.addEventListener("navigate", (event) => {
             //start observing again
             disney_observer.observe(document.body, {
                 //characterDataOldValue: true,
                 subtree: true,
                 childList: true,
                 //characterData: true,
                 attributes: true
             })
         })

         function addContentGridPanel() {
             //CHANGES HERE
             var grid = document.querySelectorAll('[data-component-name="SimpleGrid"]')[3]
             var target = grid.childNodes[4]
             if (target) {
                 var targetClasses = grid.childNodes[4].classList.toString()
                 var newDiv = '<div class="' + targetClasses + '">\
                                         <div class="CRO-disneyCont">\
                                             <div class="cro-content_container">\
                                                 <div class="cro-disney-card-logo">\
                                                 <svg version="1.1" id="svg1" width="2087.96" height="1176.932" viewBox="0 0 2087.96 1176.932" sodipodi:docname="12a70951-8cba-4e89-9bc1-469db7298d49.ai" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="svg-cro-styling">\
                                     <defs id="defs1">\
                                         <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2">\
                                         <path d="M 0,882.699 H 1565.974 V 0 H 0 Z" transform="translate(-141.44631,-273.6001)" id="path2"></path>\
                                         </clipPath>\
                                         <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4">\
                                         <path d="M 0,882.699 H 1565.974 V 0 H 0 Z" transform="translate(-581.85041,-429.58571)" id="path4"></path>\
                                         </clipPath>\
                                         <clipPath clipPathUnits="userSpaceOnUse" id="clipPath6">\
                                         <path d="M 0,882.699 H 1565.974 V 0 H 0 Z" transform="translate(-1202.3773,-249.5776)" id="path6"></path>\
                                         </clipPath>\
                                         <clipPath clipPathUnits="userSpaceOnUse" id="clipPath8">\
                                         <path d="M 0,882.699 H 1565.974 V 0 H 0 Z" transform="translate(-1072.7767,-221.21191)" id="path8"></path>\
                                         </clipPath>\
                                         <clipPath clipPathUnits="userSpaceOnUse" id="clipPath10">\
                                         <path d="M 0,882.699 H 1565.974 V 0 H 0 Z" transform="translate(-888.50875,-384.37551)" id="path10"></path>\
                                         </clipPath>\
                                         <clipPath clipPathUnits="userSpaceOnUse" id="clipPath12">\
                                         <path d="M 0,882.699 H 1565.974 V 0 H 0 Z" transform="translate(-598.81841,-263.58411)" id="path12"></path>\
                                         </clipPath>\
                                         <clipPath clipPathUnits="userSpaceOnUse" id="clipPath14">\
                                         <path d="M 0,882.699 H 1565.974 V 0 H 0 Z" transform="translate(-779.10444,-350.79901)" id="path14"></path>\
                                         </clipPath>\
                                         <clipPath clipPathUnits="userSpaceOnUse" id="clipPath16">\
                                         <path d="M 0,882.699 H 1565.974 V 0 H 0 Z" transform="translate(-1497.9489,-316.69981)" id="path16"></path>\
                                         </clipPath>\
                                         <clipPath clipPathUnits="userSpaceOnUse" id="clipPath18">\
                                         <path d="M 0,882.699 H 1565.974 V 0 H 0 Z" transform="translate(-357.78471,-623.96591)" id="path18"></path>\
                                         </clipPath>\
                                     </defs>\
                                     <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1">\
                                         <inkscape:page x="0" y="0" inkscape:label="1" id="page1" width="2087.96" height="1176.932" margin="23.802401 52.853333 58.924 65.145737" bleed="0"></inkscape:page>\
                                     </sodipodi:namedview>\
                                     <g id="layer-MC0" inkscape:groupmode="layer" inkscape:label="Layer 1">\
                                         <path id="path1" d="m 0,0 c -3.737,3.859 -6.622,8.038 -5.744,13.09 0.841,4.869 10.377,9.167 15.197,10.588 46.438,13.695 85.803,14.385 85.803,14.385 0,0 -0.367,-16.664 -0.449,-33.512 -0.154,-31.92 0.69,-64.323 0.69,-64.323 0,0 -52.384,15.256 -95.497,59.772 m 135.948,253.82 c -44.198,12.507 -114.877,29.145 -192.242,8.52 -14.37,-3.831 -24.133,-10.167 -30.973,-22.195 -3.405,-6.014 -6.555,-12.511 -4.835,-19.143 1.479,-5.632 9.53,-7.608 15.993,-8.642 6.222,-0.98 20.311,-1.72 24.109,2.812 1.984,2.367 2.025,9.033 -8.293,11.196 -3.807,0.798 -14.177,1.164 -14.97,2.909 0,0 0.355,1.214 6.047,2.975 2.513,0.777 20.954,8.365 71.332,6.744 59.914,-1.929 112.242,-15.957 167.577,-37.75 54.146,-21.325 114.998,-59.884 150.69,-105.792 13.502,-17.366 30.264,-45.907 32.466,-69.94 5.347,-58.363 -51.653,-107.613 -167.375,-103.661 -19.778,0.676 -43.817,5.371 -43.817,5.371 l -2.4,112.665 c 0,0 48.967,0.373 103.115,-17.447 4.606,-1.516 9.241,-4.531 9.661,-9.004 0.299,-3.439 -2.414,-6.389 -5.459,-9.052 -5.605,-4.902 -13.326,-7.029 -15.027,-9.11 -1.226,-1.5 -1.236,-3.788 0.357,-5.053 4.072,-3.149 14.057,-5.291 20.805,-4.695 13.653,1.206 22.733,9.103 29.591,19.437 7.312,11.019 11.473,39.036 -27.416,56.912 -50.271,23.107 -115.97,18.758 -115.97,18.758 0,0 -0.339,15.283 -1.015,25.451 -1.13,16.684 -5.748,49.468 -20.949,58.922 -2.778,1.709 -6.188,1.912 -8.111,-0.682 -2.946,-3.854 -5.848,-18.521 -6.487,-22.331 C 96.628,107.882 96.937,77.292 96.628,76.862 96.454,76.659 96.28,76.495 96.039,76.312 95.44,75.93 59.113,71.595 24.041,56.405 10.041,50.342 -9.98,39.403 -16.052,25.321 -23.887,7.151 -10.109,-12.738 13.134,-34.76 32.82,-53.413 61.858,-73.044 83.359,-83.2 c 5.477,-2.587 11.921,-5.776 11.921,-5.776 0,0 1.389,-13.016 2.512,-20.54 4.043,-27.111 24.708,-23.16 30.413,-21.998 9.264,1.887 11.042,8.053 12.322,15.187 0.699,3.896 0.406,9.536 0.406,9.536 0,0 13.998,-3.227 23.403,-4.938 27.336,-5.052 57.037,-5.922 82.78,-2.405 102.949,14.066 128.893,62.575 137.087,75.52 14.252,22.516 44.477,85.258 -46.579,178.386 -20.803,21.277 -80.928,79.878 -201.676,114.048" style="fill:white;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(1.3333333,0,0,-1.3333333,188.59507,812.13187)" clip-path="url(#clipPath2)"></path>\
                                         <path id="path3" d="m 0,0 c 10.751,13.864 30.655,31.065 44.527,39.343 10.871,6.488 20.26,8.266 27.271,5.188 4.165,-1.828 7.489,-5.601 8.056,-10.655 C 81.714,18.245 63.676,5.183 51.617,-1.85 24.208,-17.835 -8.209,-14.222 -9.045,-12.774 -9.17,-12.394 -2.483,-3.271 0,0 m -38.483,-0.413 c 0,0 -1.009,2.113 -1.657,3.699 -4.482,11.14 5.411,23.702 14.439,31.398 17.576,14.981 32.538,14.622 32.538,14.622 0,0 -3.58,-2.866 -6.553,-5.467 C -25.38,21.387 -38.483,-0.413 -38.483,-0.413 m 69.757,-38.306 c 21.77,8.526 38.579,20.772 55.599,38.191 9.939,10.111 18.663,26.737 15.463,41.889 -1.599,7.532 -5.039,12.72 -11.332,18.144 -3.132,2.69 -10.301,6.493 -16.131,7.648 -1.691,0.335 -3.488,0.465 -4.223,0.941 -0.831,0.529 -1.494,1.619 -2.296,2.628 C 64.54,75.564 56.969,80.191 51.536,82.059 34.838,87.843 12.553,83.48 -2.651,77.068 -18.735,70.261 -33.566,60.282 -44.834,48.202 -74.403,16.498 -61.416,-8.608 -58.788,-13.287 c 2.238,-3.963 6.393,-8.229 7.3,-12.375 0.548,-2.464 0.059,-5.684 0.16,-8.595 0.207,-6.672 3.108,-13.546 8.118,-17.975 3.588,-3.156 8.751,-4.103 13.94,3.766 1.738,2.635 4.636,8.013 4.636,8.013 0,0 6.032,-3.494 20.604,-4.511 10.864,-0.758 25.744,2.512 35.304,6.245" style="fill:white;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(1.3333333,0,0,-1.3333333,775.80053,604.15107)" clip-path="url(#clipPath4)"></path>\
                                         <path id="path5" d="m 0,0 c -5.649,-5.358 -24.355,-15.881 -43.74,-18.059 18.48,35.816 41.433,62.176 54.155,76.245 14.802,16.668 16.743,1.531 16.743,1.531 C 30.608,30.295 9.196,8.161 0,0 M 32.074,95.069 C -2.814,119.284 -59.103,42.51 -83.867,4.442 c -3.688,19.384 9.422,43.966 9.422,43.966 0,0 21.024,36.397 24,43.793 2.867,7.439 4.539,22.727 0.927,24.247 -3.278,1.51 -8.938,-3.385 -8.938,-3.385 -47.211,-42.371 -53.809,-89.377 -53.809,-89.377 -4.464,-25.314 0.755,-43.092 8.409,-55.534 -26.241,-55.912 -39.082,-104.675 -35.664,-133.515 3.18,-21.951 18.91,-37.821 28.451,-41.173 9.639,-4.022 11.353,7.568 11.353,7.568 7.806,59.642 21.455,99.511 37.702,138.916 49.206,-11.309 86.24,36.603 99.35,59.491 7.705,13.743 11.863,32.093 11.86,49.348 -0.004,19.66 -5.408,37.899 -17.122,46.282" style="fill:white;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(1.3333333,0,0,-1.3333333,1603.1697,844.16187)" clip-path="url(#clipPath6)"></path>\
                                         <path id="path7" d="m 0,0 c 2.35,8.959 -5.8,18.781 -13.175,20.614 -6.878,1.423 -59.685,-8.485 -66.002,-10.178 -6.793,-1.822 -3.763,4.561 -3.763,4.561 l 8.161,27.611 c 0,0 50.403,1.94 57.745,3.169 6.781,1.219 7.191,6.005 7.191,6.005 0,0 0.873,7.903 0.625,15.277 -0.744,7.903 -7.062,7.17 -7.062,7.17 -19.492,2.038 -46.284,-0.259 -46.284,-0.259 l 6.76,21.186 c 0,0 53.615,2.609 74.002,7.309 10.469,2.469 4.313,12.754 4.313,12.754 -12.711,25.423 -27.363,23.989 -27.363,23.989 -42.165,1.412 -103.446,-9.768 -110.13,-13.078 -6.253,-2.835 -5.574,-7.547 2.576,-17.821 8.755,-10.825 23.471,-9.811 23.471,-9.811 l -12.916,-26.727 c -10.555,-0.744 -14.166,-4.032 -14.166,-4.032 -6.081,-6.491 2.307,-25.67 2.307,-25.67 0,0 -18.307,-41.066 -5.035,-62.758 14.264,-22.77 31.126,-21.681 31.126,-21.681 C -55.523,-44.71 -2.814,-11.105 0,0" style="fill:white;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(1.3333333,0,0,-1.3333333,1430.3689,881.9828)" clip-path="url(#clipPath8)"></path>\
                                         <path id="path9" d="m 0,0 c 0,0 -7.471,3.493 -9.358,-3.957 -1.898,-7.374 0.916,-15.234 0.916,-15.234 18.587,-63.07 22.814,-100.33 22.814,-100.33 0,0 0.862,-10.964 -1.273,-11.568 -1.488,-1.132 -3.148,0.431 -3.148,0.431 -2.135,-0.075 -22.511,34.112 -22.511,34.112 l -3.957,6.695 c -22.425,36.193 -36.02,48.516 -36.02,48.516 -3.18,2.975 -11.342,11.169 -21.508,-0.119 -10.178,-11.363 -18.145,-47.847 -21.347,-82.153 -2.728,-34.231 -0.647,-53.712 4.344,-61.928 5.499,-8.323 16.097,-11.158 24.84,-4.032 9.24,7.105 7.504,52.257 8.96,75.415 1.401,23.255 3.687,19.105 3.687,19.105 2.038,0.549 12.625,-20.733 12.625,-20.733 0,0 27.88,-57.076 45.389,-65.528 17.735,-8.431 32.009,5.142 37.411,17.853 5.487,12.798 14.824,55.136 0.927,102.056 C 28.808,-14.49 0,0 0,0" style="fill:white;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(1.3333333,0,0,-1.3333333,1184.6783,664.43133)" clip-path="url(#clipPath10)"></path>\
                                         <path id="path11" d="m 0,0 c -0.721,15.612 -2.581,55.47 -6.937,73.48 -1.888,7.753 -5.02,14.824 -12.654,17.73 -0.878,0.332 -1.902,0.63 -2.565,0.745 -4.774,0.927 -7.508,-5.649 -8.795,-8.92 -3.771,-9.685 -6.486,-32.801 -7.23,-40.006 -2.239,-21.844 -4.064,-73.6 -0.274,-99.974 1.595,-11.048 5.231,-18.225 16.401,-20.54 4.534,-0.942 12.782,-0.759 16.409,1.556 3.166,1.97 5.375,5.813 6.115,9.108 2.047,9.185 1.254,22.222 0.841,32.022 C 0.821,-23.231 0.528,-11.702 0,0" style="fill:white;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(1.3333333,0,0,-1.3333333,798.42453,825.48653)" clip-path="url(#clipPath12)"></path>\
                                         <path id="path13" d="m 0,0 c -24.104,12.813 -63.766,12.842 -88.307,9.785 -25.353,-3.138 -59.281,-11.045 -73.771,-31.876 -5.528,-7.949 -8.773,-20.167 -6.23,-30.116 1.437,-5.527 5.424,-9.731 11.199,-12.736 10.272,-5.348 44.531,-6.495 59.8,-8.133 14.39,-1.544 40.892,-4.105 55.498,-10.199 0,0 13.834,-4.822 13.742,-12.717 -0.034,-3.903 -2.951,-7.008 -5.912,-9.123 -21.681,-15.361 -51.476,-19.725 -77.978,-19.292 -8.978,0.125 -16.384,1.537 -25.502,5.45 -3.883,1.702 -8.923,4.797 -8.243,10.103 1.088,8.489 10.79,10.584 18.505,9.853 4.296,-0.394 9.92,-2.23 14.139,-3.884 16.996,-6.709 24.753,-12.361 39.706,-10.083 5.58,0.845 24.921,5.037 27.521,13.006 0.648,1.942 -0.284,4.037 -1.711,5.488 -2.038,2.086 -13.675,6.614 -16.832,7.758 -11.391,4.047 -32.985,7.758 -44.978,8.219 -15.74,0.557 -37.391,-2.663 -46.367,-15.727 -8.092,-11.778 -9.913,-35.491 30.247,-55.435 18.668,-9.271 41.281,-13.391 62.141,-11.104 11.924,1.366 46.254,6.714 59.228,34.02 6.981,14.693 6.296,34.307 -1.216,48.246 -4.936,9.189 -10.98,21.42 -55.782,27.059 -7.155,0.901 -59.864,7 -64.703,7.758 -2.676,0.419 -15.025,1.884 -10.694,6.594 1.216,1.356 4.965,2.364 7.133,2.98 27.67,7.555 62.79,6.695 91.839,8.329 6.489,0.399 21.254,1.294 28.387,3.557 6.795,2.115 12.414,6.925 13.981,14.399 C 5.624,-3.855 3.72,-1.985 0,0" style="fill:white;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(1.3333333,0,0,-1.3333333,1038.8059,709.2)" clip-path="url(#clipPath14)"></path>\
                                         <path id="path15" d="m 0,0 h -82.803 c -0.91,28.621 -3.805,56.884 -8.658,84.671 -0.834,4.774 -4.978,8.248 -9.803,8.248 h -22.317 c -4.357,0 -7.656,-3.975 -6.849,-8.277 5.206,-27.728 8.31,-55.987 9.284,-84.642 h -84.124 c -3.848,0 -6.968,-3.134 -6.968,-7 v -25.39 c 0,-3.866 3.12,-7 6.968,-7 h 84.124 c -0.974,-28.655 -4.078,-56.914 -9.284,-84.642 -0.807,-4.301 2.492,-8.277 6.849,-8.277 h 22.317 c 4.825,0 8.969,3.474 9.803,8.249 4.853,27.786 7.748,56.049 8.658,84.67 H 0 c 3.848,0 6.968,3.134 6.968,7 V -7 c 0,3.866 -3.12,7 -6.968,7" style="fill:white;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(1.3333333,0,0,-1.3333333,1997.2652,754.6656)" clip-path="url(#clipPath16)"></path>\
                                         <path id="path17" d="m 0,0 c 3.278,-2.278 7.883,-0.594 11.167,2.944 28.401,30.609 59.47,57.227 94.861,81.398 232.202,158.586 573.058,135.54 772.498,-65.44 65.51,-65.677 101.573,-136.179 120.49,-191.591 1.384,-4.053 5.159,-6.785 9.424,-6.785 h 22.9 c 4.757,0 8.139,4.69 6.61,9.216 C 1013.133,-96.759 965.071,-16.083 895.238,49.528 685.897,246.719 346.774,268.637 110.476,107.407 71.819,81.294 33.404,47.854 -0.341,9.641 -3.667,5.875 -2.543,1.767 0,0" style="fill:white;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(1.3333333,0,0,-1.3333333,477.04627,344.97747)" clip-path="url(#clipPath18)"></path>\
                                     </g>\
                                 </svg>\
                                 </div>\
                                 <div class="cro-content-card">\
                                             <h3>3 months of Disney+ on us</h3>\
                                             <p>Claim Disney+ Standard with ads when you buy a phone or a SIM only plan with us. After you buy, look out for a text from us with details on how to claim. £4.99 from month 4.</p>\
                                             </div>\
                                         </div>\
                                         </div>\
                                     </div>'
                 target.insertAdjacentHTML('beforebegin', newDiv)
             }
         }
     }
 }