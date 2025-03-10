  ////POLLING FUNCTION////
    //polling function config
    var vt629_pxFuncFired = 0;
    var vt629_pxInterval = setInterval(vt629_pxPollFunc, 100);

    //polling function
    function vt629_pxPollFunc() {
        vt629_pxFuncFired += 1;

        if (vt629_pxFuncFired >= 20) {
            //try 20 times, if not found clear px func
            clearInterval(vt629_pxInterval);
        }

        //target element 
        var vt629_p1Container = document.querySelector('.section--gutter')
        var vt629_p1Text = document.querySelectorAll(".promo-card--inner>div:nth-child(3)>a>div>div:nth-child(2)>div")[1].innerText

        if (vt629_p1Container && document.querySelectorAll(".background__image")[7] && vt629_p1Text != '') {
            //clear polling when found
            clearInterval(vt629_pxInterval);
            //ACTIONS HERE 
            vt629_p1Changes()
        }

        //vt629 changes 
        function vt629_p1Changes() {
            //capture original p1 data 
            //first element//
            //header
            var vt629_header_1_text = document.querySelectorAll("[class*=block__text--heading]")[0].textContent
            var vt629_header_1_text = vt629_header_1_text.replace(/\n/g, '')
            //text
            var vt629_text_1 = document.querySelectorAll("[class*=block__text--shout]")[0].textContent
            var vt629_text_1 = vt629_text_1.replace(/\n/g, '')
            //CTA 
            //text
            var vt629_cta_text_1 = document.querySelector(".promo-card--inner>div:nth-child(1)>a>div>div:nth-child(2)>div").innerText
            //href
            var vt629_cta_1_href = document.querySelector(".promo-card--inner>div>a").getAttribute('href')
            //IMG
            var vt629_img_1 = document.querySelectorAll(".background__image")[1].outerHTML

            //second element//
            //header
            var vt629_header_2_text = document.querySelectorAll("[class*=block__text--heading]")[1].textContent
            var vt629_header_2_text = vt629_header_2_text.replace(/\n/g, '')
            //text
            var vt629_text_2 = document.querySelectorAll("[class*=block__text--shout]")[1].textContent
            var vt629_text_2 = vt629_text_2.replace(/\n/g, '')
            //CTA 
            //text
            var vt629_cta_text_2 = document.querySelector(".promo-card--inner>div:nth-child(2)>a>div>div:nth-child(2)>div").innerText
            //href
            var vt629_cta_2_href = document.querySelector(".promo-card--inner>div:nth-child(2)>a").getAttribute('href')
            //IMG
            var vt629_img_2 = document.querySelectorAll(".background__image")[2].outerHTML

            //third element//
            //header
            var vt629_header_3_text = document.querySelectorAll("[class*=block__text--heading]")[2].textContent
            var vt629_header_3_text = vt629_header_3_text.replace(/\n/g, '')
            //text
            var vt629_text_3 = document.querySelectorAll("[class*=block__text--shout]")[2].textContent
            var vt629_text_3 = vt629_text_3.replace(/\n/g, '')
            //CTA 
            //text
            var vt629_cta_text_3 = document.querySelector(".promo-card--inner>div:nth-child(3)>a>div>div:nth-child(2)>div").innerText
            //href
            var vt629_cta_3_href = document.querySelector(".promo-card--inner>div:nth-child(3)>a").getAttribute('href')
            //IMG
            var vt629_img_3 = document.querySelectorAll(".background__image")[3].outerHTML

            //capture original p2 data 
            //first element//
            //header
            var vt629_header_1_text_2 = document.querySelectorAll("[class*=block__text--heading]")[3].textContent
            var vt629_header_1_text_2 = vt629_header_1_text_2.replace(/\n/g, '')
            //text
            var vt629_text_1_2 = document.querySelectorAll("[class*=block__text--shout]")[3].textContent
            var vt629_text_1_2 = vt629_text_1_2.replace(/\n/g, '')
            //CTA 
            //text
            var vt629_cta_text_1_2 = document.querySelectorAll(".promo-card--inner>div:nth-child(1)>a>div>div:nth-child(2)>div")[1].innerText
            //href
            var vt629_cta_1_href_2 = document.querySelectorAll(".promo-card--inner>div>a")[1].getAttribute('href')
            //IMG
            var vt629_img_1_2 = document.querySelectorAll(".background__image")[5].outerHTML

            //second element//
            //header
            var vt629_header_2_text_2 = document.querySelectorAll("[class*=block__text--heading]")[4].textContent
            var vt629_header_2_text_2 = vt629_header_2_text_2.replace(/\n/g, '')
            //text
            var vt629_text_2_2 = document.querySelectorAll("[class*=block__text--shout]")[4].textContent
            var vt629_text_2_2 = vt629_text_2_2.replace(/\n/g, '')
            //CTA 
            //text
            var vt629_cta_text_2_2 = document.querySelectorAll(".promo-card--inner>div:nth-child(2)>a>div>div:nth-child(2)>div")[1].innerText
            //href
            var vt629_cta_2_href_2 = document.querySelectorAll(".promo-card--inner>div:nth-child(2)>a")[1].getAttribute('href')
            //IMG
            var vt629_img_2_2 = document.querySelectorAll(".background__image")[6].outerHTML

            //third element//
            //header
            var vt629_header_3_text_2 = document.querySelectorAll("[class*=block__text--heading]")[5].textContent
            var vt629_header_3_text_2 = vt629_header_3_text_2.replace(/\n/g, '')
            //text
            var vt629_text_3_2 = document.querySelectorAll("[class*=block__text--shout]")[5].textContent
            var vt629_text_3_2 = vt629_text_3_2.replace(/\n/g, '')
            //CTA 
            //text
            var vt629_cta_text_3_2 = document.querySelectorAll(".promo-card--inner>div:nth-child(3)>a>div>div:nth-child(2)>div")[1].innerText
            //href
            var vt629_cta_3_href_2 = document.querySelectorAll(".promo-card--inner>div:nth-child(3)>a")[1].getAttribute('href')
            //IMG
            var vt629_img_3_2 = document.querySelectorAll(".background__image")[7].outerHTML

            //create new p1 element
            var vt629_p1_elem = '<div class="vt629-p1-container">\
                                    <div class="vt629-p1-1-element">\
                                        <div class="vt629-p1-1-content">\
                                            <div class="vt629-p1-1-img">'+ vt629_img_1 + '</div>\
                                            <div class="vt629-p1-1-text">\
                                                <h3>'+ vt629_header_1_text + '</h3>\
                                                <p>'+ vt629_text_1 + '</p>\
                                                <a href="'+ vt629_cta_1_href + '">' + vt629_cta_text_1 + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style=""><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"></path></svg></a>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="vt610-right-elems">\
                                        <div class="vt629-p1-2-element">\
                                            <div class="vt629-p1-2-content">\
                                                <div class="vt629-p1-2-img">'+ vt629_img_2 + '</div>\
                                                <div class="vt629-p1-2-text">\
                                                    <h3>'+ vt629_header_2_text + '</h3>\
                                                    <p>'+ vt629_text_2 + '</p>\
                                                    <a href="'+ vt629_cta_2_href + '">' + vt629_cta_text_2 + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style=""><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"></path></svg></a>\
                                                </div>\
                                            </div>\
                                        </div>\
                                        <div class="vt629-p1-3-element">\
                                            <div class="vt629-p1-3-content">\
                                                <div class="vt629-p1-3-img">'+ vt629_img_3 + '</div>\
                                                <div class="vt629-p1-3-text">\
                                                    <h3>'+ vt629_header_3_text + '</h3>\
                                                    <p>'+ vt629_text_3 + '</p>\
                                                    <a href="'+ vt629_cta_3_href + '">' + vt629_cta_text_3 + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style=""><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"></path></svg></a>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <p class="vt629_footerCondi">*From 2025, the monthly price and out of bundle charges will increase each April by the Consumer Price Index rate of inflation published in January of that year + 3.9%. This does not affect any Device Plans.</p>'

            //insert new element
            document.querySelectorAll('.spring')[3].innerHTML = vt629_p1_elem

            //create new p1 element
            var vt629_p2_elem = '<div class="vt629-p2-container">\
                                    <div class="vt629-p2-1-element">\
                                        <div class="vt629-p2-1-content">\
                                            <div class="vt629-p2-1-img">'+ vt629_img_1_2 + '</div>\
                                            <div class="vt629-p2-1-text">\
                                                <h3>'+ vt629_header_1_text_2 + '</h3>\
                                                <p>'+ vt629_text_1_2 + '</p>\
                                                <a href="'+ vt629_cta_1_href_2 + '">' + vt629_cta_text_1_2 + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style=""><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"></path></svg></a>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="vt610-right-elems">\
                                        <div class="vt629-p2-2-element">\
                                            <div class="vt629-p2-2-content">\
                                                <div class="vt629-p2-2-img">'+ vt629_img_2_2 + '</div>\
                                                <div class="vt629-p2-2-text">\
                                                    <h3>'+ vt629_header_2_text_2 + '</h3>\
                                                    <p>'+ vt629_text_2_2 + '</p>\
                                                    <a href="'+ vt629_cta_2_href_2 + '">' + vt629_cta_text_2_2 + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style=""><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"></path></svg></a>\
                                                </div>\
                                            </div>\
                                        </div>\
                                        <div class="vt629-p2-3-element">\
                                            <div class="vt629-p2-3-content">\
                                                <div class="vt629-p2-3-img">'+ vt629_img_3_2 + '</div>\
                                                <div class="vt629-p2-3-text">\
                                                    <h3>'+ vt629_header_3_text_2 + '</h3>\
                                                    <p>'+ vt629_text_3_2 + '</p>\
                                                    <a href="'+ vt629_cta_3_href_2 + '">' + vt629_cta_text_3_2 + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style=""><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"></path></svg></a>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <p class="vt629_footerCondi">*From 2025, the monthly price and out of bundle charges will increase each April by the Consumer Price Index rate of inflation published in January of that year + 3.9%. This does not affect any Device Plans.</p>'

            //insert new element
            document.querySelectorAll('.spring')[5].innerHTML = vt629_p2_elem

            //click events for images
            //p1
            document.querySelector('.vt629-p1-1-img').addEventListener('click', function () {
                window.location = document.querySelector('.vt629-p1-1-text>a').getAttribute('href')
            })
            //p2
            document.querySelector('.vt629-p1-2-img').addEventListener('click', function () {
                window.location = document.querySelector('.vt629-p1-2-text>a').getAttribute('href')
            })
            //p3
            document.querySelector('.vt629-p1-3-img').addEventListener('click', function () {
                window.location = document.querySelector('.vt629-p1-3-text>a').getAttribute('href')
            })

            //click events for images
            //p1
            document.querySelector('.vt629-p2-1-img').addEventListener('click', function () {
                window.location = document.querySelector('.vt629-p2-1-text>a').getAttribute('href')
            })
            //p2
            document.querySelector('.vt629-p2-2-img').addEventListener('click', function () {
                window.location = document.querySelector('.vt629-p2-2-text>a').getAttribute('href')
            })
            //p3
            document.querySelector('.vt629-p2-3-img').addEventListener('click', function () {
                window.location = document.querySelector('.vt629-p2-3-text>a').getAttribute('href')
            })
        }
    }