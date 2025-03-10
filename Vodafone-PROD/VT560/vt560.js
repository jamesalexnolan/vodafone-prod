////MUTATION OBSERVER////
let vt560_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let vt560_oldValue = mutation.oldValue;
        let vt560_newValue = mutation.target.textContent;
        if (vt560_oldValue !== vt560_newValue) {
            //target elements
            var vt560TargetElem = document.querySelectorAll("#plans-offers > [class*='SimpleGridstyle__SimpleGrid'] > div > div > div:nth-child(2) > div > div > div > div:nth-child(2)")

            if (vt560TargetElem) {
                vt560TextChanges()
            }
        }
    });
});

vt560_observer.observe(document.body, {
    characterDataOldValue: true,
    subtree: true,
    childList: true,
    characterData: true
});

function vt560TextChanges() {
    //create elements 
    var vt560InfoText = '<div class="sc-iUuxWY dzYbDL"><span aria-hidden="true" data-component-name="Icon"\
            class="Iconstyle__Icon-sc-yxw4v5-0 gtiuUC"><span><span><svg xmlns="http://www.w3.org/2000/svg"\
                        viewBox="0 0 24 24" fill="none" class="injected-svg"\
                        data-src="/assets/voxi/icons/VoxiIcons/refresh.svg"\
                        xmlns:xlink="http://www.w3.org/1999/xlink">\
                        <path clip-rule="evenodd"\
                            d="M8.249 17.977c-1.94-1.254-3.166-3.5-3.166-5.98C5.083 8.127 8.04 5 11.673 5c.388 0 .772.036 1.15.106l.184-.983A7.259 7.259 0 0 0 11.672 4c-4.197 0-7.589 3.587-7.589 7.997 0 2.938 1.518 5.595 3.906 6.994a.323.323 0 0 1-.062.006H3.75v1h4.177c.73 0 1.322-.592 1.322-1.322v-4.177h-1v3.479Zm6.832-11.822v4.177h-1V6.155c0-.73.592-1.322 1.322-1.322h4.177v1h-2.584c1.91 1.477 3.084 3.746 3.084 6.223 0 4.389-3.65 7.94-8.146 7.94a8.372 8.372 0 0 1-1.615-.155l.193-.982c.464.091.94.138 1.422.138 3.95 0 7.146-3.11 7.146-6.94 0-2.624-1.512-4.984-3.861-6.166a.321.321 0 0 0-.138.264Z">\
                        </path>\
                    </svg></span></span></span>\
        <div class="Spacingstyle__Spacing-sc-14allya-0 eMKKfg">\
            <p size="2" data-component-name="Paragraph" class="Paragraphstyle__Paragraph-sc-ejay05-0 lmwZUL">\
                Rolling 30-day subscription, cancel anytime</p>\
        </div>\
    </div>\
    <div class="sc-iUuxWY dzYbDL"><span aria-hidden="true" data-component-name="Icon"\
            class="Iconstyle__Icon-sc-yxw4v5-0 gtiuUC"><span><span><svg xmlns="http://www.w3.org/2000/svg"\
                        viewBox="0 0 24 24" fill="none" class="injected-svg"\
                        data-src="/assets/voxi/icons/VoxiIcons/refresh.svg"\
                        xmlns:xlink="http://www.w3.org/1999/xlink">\
                        <path clip-rule="evenodd"\
                            d="M5 3H15V9C15 10.1046 14.1046 11 13 11H5V9H2L5 6V3ZM4.41421 8H6V10H13C13.5523 10 14 9.55228 14 9V4H6V6.41421L4.41421 8ZM19 12V15L22 18H19C19 19.1046 18.1046 20 17 20H9V12H19ZM19.5858 17L18 15.4142V13H10V19H17C17.5523 19 18 18.5523 18 18V17H19.5858ZM16.5 15.5V14.5H11.5V15.5H16.5ZM16.5 16.5V17.5H11.5V16.5H16.5ZM7.5 5.5H12.5V6.5H7.5V5.5ZM12.5 7.5H7.5V8.5H12.5V7.5Z">\
                        </path>\
                    </svg></span></span></span>\
        <div class="Spacingstyle__Spacing-sc-14allya-0 eMKKfg">\
            <p size="2" data-component-name="Paragraph" class="Paragraphstyle__Paragraph-sc-ejay05-0 lmwZUL">Rolling\
                Unlimited calls, texts & MMS</p>\
        </div>\
    </div>\
    <div class="sc-iUuxWY dzYbDL"><span aria-hidden="true" data-component-name="Icon"\
            class="Iconstyle__Icon-sc-yxw4v5-0 gtiuUC"><span><span><svg xmlns="http://www.w3.org/2000/svg"\
                        viewBox="0 0 24 24" fill="none" class="injected-svg"\
                        data-src="/assets/voxi/icons/VoxiIcons/refresh.svg"\
                        xmlns:xlink="http://www.w3.org/1999/xlink">\
                        <path clip-rule="evenodd"\
                            d="M23.25 11.72L11.6591 0.75L5.86363 6.23502H6.92613L11.6591 1.75559L22.1875 11.72L17.8409 15.8338L17.6477 17.1136L23.25 11.72ZM11.7173 22.1828L6.50388 17.1136C6.42165 17.1936 6.33943 17.2556 6.2489 17.3238C6.13802 17.4074 6.01469 17.5004 5.86363 17.6472L11.6258 23.25L17.1136 17.914H16.1075L11.7173 22.1828ZM7.90909 6.92906C7.8649 7.26534 7.79861 7.62564 7.73232 7.98594C7.66604 8.34625 7.59975 8.70655 7.55556 9.04283H4.0202C3.93182 9.04283 3.93182 9.04283 3.93182 9.13891C3.88763 9.37912 3.84343 9.5953 3.79924 9.81148C3.75505 10.0277 3.71086 10.2438 3.66667 10.484H3.75505L3.75506 10.484C4.02021 10.388 4.28536 10.2919 4.5505 10.2919C4.90404 10.2919 5.25758 10.2919 5.52273 10.388C5.96465 10.484 6.31818 10.7723 6.67172 11.1566C7.02525 11.5409 7.11364 12.0213 7.20202 12.5017C7.2904 12.8861 7.2904 13.3665 7.20202 13.7508C7.20202 14.3273 7.02525 14.8077 6.84848 15.2881C6.49495 15.9607 6.14141 16.4411 5.52273 16.7293C5.16919 16.9215 4.81566 17.0175 4.46212 17.1136H3.57828C3.22475 17.1136 2.87121 17.0175 2.60606 16.9215C2.16414 16.7293 1.81061 16.5371 1.45707 16.1528C1.19192 15.8646 1.01515 15.4803 0.926768 14.9998C0.75 14.7116 0.75 14.4234 0.75 14.039V13.5586H3.04798V14.6155C3.22475 14.8077 3.40152 14.9998 3.66667 14.9998H4.10859C4.30524 14.9286 4.40466 14.8045 4.51501 14.6667L4.51503 14.6667C4.55346 14.6187 4.59323 14.5691 4.63889 14.5194C4.75673 14.3273 4.79602 14.1351 4.8353 13.943C4.85494 13.8469 4.87458 13.7508 4.90404 13.6547V12.9821C4.90404 12.79 4.81566 12.6939 4.72727 12.5978C4.63889 12.4057 4.46212 12.3096 4.28535 12.3096C3.93182 12.2135 3.57828 12.4057 3.22475 12.6939H3.13636C2.82702 12.5978 2.53977 12.5258 2.25253 12.4537C1.96528 12.3816 1.67803 12.3096 1.36869 12.2135C1.72222 10.484 1.98737 8.75459 2.25253 6.92906C2.16414 6.83297 7.90909 6.92906 7.90909 6.92906ZM13.611 6.92446C13.068 6.83246 12.6154 6.92446 12.1629 7.01646C11.5294 7.20047 10.8958 7.47647 10.2623 7.93648C9.62872 8.30448 9.08568 8.85649 8.72365 9.5005C8.27112 10.2365 7.9996 11.0645 7.90909 11.8925C7.90909 12.3525 7.90909 12.8126 7.9996 13.2726C7.9996 13.6406 8.0901 13.9166 8.27112 14.2846C8.54264 14.9286 8.90466 15.4806 9.4477 15.9406C9.62872 16.1246 9.90024 16.3086 10.1718 16.4926C10.7148 16.7686 11.2578 17.0446 11.8914 17.0446C12.3439 17.1366 12.7965 17.1366 13.1585 17.0446C13.792 16.9526 14.3351 16.5846 14.8781 16.2166C14.9412 16.0883 15.0483 16.0048 15.1381 15.9347C15.177 15.9043 15.2127 15.8765 15.2401 15.8486C15.1496 16.2166 15.0591 16.5846 15.0591 16.9526H16.8693C17.1863 15.5026 17.4339 13.982 17.6728 12.5144L17.6729 12.5143L17.6729 12.5143C17.7068 12.3058 17.7406 12.0985 17.7743 11.8925H13.3395L12.9775 13.7326H15.1496L15.0591 13.9166L15.0591 13.9166C14.8781 14.1006 14.6971 14.2846 14.4256 14.4686C14.1541 14.6526 13.8825 14.7446 13.5205 14.8366H12.706C12.4344 14.8366 12.1629 14.8366 11.9819 14.7446C11.2578 14.4686 10.8053 14.0086 10.5338 13.2726L10.5127 13.1453C10.4303 12.6489 10.3598 12.2247 10.4433 11.8005L10.4433 11.8005C10.5338 11.3405 10.6243 10.8805 10.8958 10.5125C11.3483 9.77651 11.9819 9.3165 12.7965 9.2245C13.1585 9.1325 13.5205 9.1325 13.973 9.3165C14.3351 9.4085 14.6066 9.5925 14.8781 9.86851C15.1496 10.1445 15.3306 10.4205 15.4212 10.7885H15.5117H18.1364C18.0896 10.6459 18.0489 10.5094 18.0095 10.3775C17.8965 9.99884 17.7947 9.65767 17.5933 9.3165C17.2313 8.58049 16.6883 8.02848 15.9642 7.66047C15.2401 7.20047 14.4256 6.92446 13.611 6.92446ZM19.1591 10.6705L20.1818 11.6932L19.1591 12.7159V10.6705ZM21.2046 11.6932L20.1818 10.6705V12.7159L21.2046 11.6932Z">\
                        </path>\
                    </svg></span></span></span>\
        <div class="Spacingstyle__Spacing-sc-14allya-0 eMKKfg">\
            <p size="2" data-component-name="Paragraph" class="Paragraphstyle__Paragraph-sc-ejay05-0 lmwZUL">Rolling\
                5G enabled plan & WiFi calling</p>\
        </div>\
    </div>'

    var vt560TargetElem = document.querySelectorAll("#plans-offers > [class*='SimpleGridstyle__SimpleGrid'] > div > div > div:nth-child(2) > div > div > div > div:nth-child(2)")

    for (var i = 0; i < vt560TargetElem.length; i++) {
        if (vt560TargetElem[i].children.length === 1) {
            //change HTML
            vt560TargetElem
                .forEach(elem =>
                    elem.innerHTML = vt560InfoText
                )
        }
    }
}