//CREDENTIALS
//https://tcc6-www.vodafone.co.uk/broadband/services/dashboard
//DNU7000722460
//testing1

//VARIANT 1
//polling function config
var pxFuncFired = 0;
var pxInterval = setInterval(pxPollFunc, 250);

//polling function
function pxPollFunc() {
    pxFuncFired += 1;

    if (pxFuncFired >= 50) {
        //try 50 times, if not found clear px func
        clearInterval(pxInterval);
    }

    //target element 
    //button selection
    var vt577_btn = document.querySelector('.vfuk-PlainCard__footer-container > button')
    //paragraph selection 
    var vt577_address_line = document.querySelector('[class*="Paragraphstyle__Paragraph"]')

    if (vt577_btn && vt577_address_line) {
        //clear polling when found
        clearInterval(pxInterval);
        //apply changes
        vt577_button_changes()
    }
}

function vt577_button_changes() {
    //CSS
    var styleElement = document.createElement('style');
    //cta style
    styleElement.textContent += `
[aria-label="View upgrade offers"] {
    border-radius: 5px; 
}
`
    //desktop
    styleElement.textContent += `
 @media only screen and (min-width: 1100px) {
    [aria-label="View upgrade offers"] {
        width: 50% !important;
        max-width: 450px;
    }
 }
`;

    //tablet
    styleElement.textContent += `
 @media only screen and (min-width: 603px) and (max-width: 1099px) {
    [aria-label="View upgrade offers"] {
        width: 50% !important; 
    }
 }
`;

    //mobile
    styleElement.textContent += `
 @media only screen and (max-width: 602px) {
    [aria-label="View upgrade offers"] {
        width: 70% !important; 
    }
 }
`
    //append the style element to the head of the document
    document.head.appendChild(styleElement);
    //CSS

    //button selection
    var vt577_btn = document.querySelector('.vfuk-PlainCard__footer-container > button')

    //paragraph selection 
    var vt577_address_line = document.querySelector('[class*="Paragraphstyle__Paragraph"]')

    //move button
    vt577_address_line.parentNode.insertBefore(vt577_btn, vt577_address_line.nextSibling)

    //hide text 
    vt577_address_line.style.display = 'none'
}

// //VARIANT 2
// //polling function
// var pxFuncFired = 0;
// var pxInterval = setInterval(pxPollFunc, 100);

// //polling function
// function pxPollFunc() {
//     pxFuncFired += 1;

//     if (pxFuncFired >= 20) {
//         //try 20 times, if not found clear px func
//         clearInterval(pxInterval);
//     }

//     //target element 
//     //button selection
//     var vt577_btn = document.querySelector('.vfuk-PlainCard__footer-container > button')
//     //discount section
//     var vt577_discount_section = document.querySelector('.vfuk-Section__discount-wrapper')

//     if (vt577_btn && vt577_discount_section) {
//         //clear polling when found
//         clearInterval(pxInterval);
//         //apply changes
//         vt577_button_changes()
//     }
// }

// function vt577_button_changes() {
//     var styleElement = document.createElement('style');
//     //cta style
//     styleElement.textContent += `
// [aria-label="View upgrade offers"] {
//     border-radius: 5px; 
// }
// `
//     //append the style element to the head of the document
//     document.head.appendChild(styleElement);
//     //CSS
//     //button selection
//     var vt577_btn = document.querySelector('.vfuk-PlainCard__footer-container > button')

//     //discount section
//     var vt577_discount_section = document.querySelector('.vfuk-Section__discount-wrapper')

//     //move button
//     vt577_discount_section.parentNode.insertBefore(vt577_btn, vt577_discount_section)
// }