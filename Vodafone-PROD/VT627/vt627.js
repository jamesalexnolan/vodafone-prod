 ////MUTATION OBSERVER////
 let vt627_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let vt627_oldValue = mutation.oldValue;
        let vt627_newValue = mutation.target.textContent;
        if (vt627_oldValue !== vt627_newValue) {
            //changes here 
            //target element 
            var vt627_targetElem = document.querySelector('[data-selector="ils-options"]')
            var vt627_targetElemFailSafe = document.querySelector("#ILS-tab > div > div > div > div:nth-child(2) > div:nth-child(6) > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > span > span > span > svg")

            if (vt627_targetElem && vt627_targetElemFailSafe) {
                if (!document.querySelector('[id="vt627_planCard"]')) {
                    vt627_clonedElem()
                }
            }
        }
    });
});

vt627_observer.observe(document.body, {
    //characterDataOldValue: true,
    subtree: true,
    childList: true,
    //characterData: true
    attributes: true
});

function vt627_clonedElem() {
    //clone element 
    var vt627_planCard = document.querySelectorAll('[data-selector="plan-card"]')[document.querySelectorAll('[data-selector="plan-card"]').length - 1];
    var vt627_clonedElem = vt627_planCard.cloneNode(true);
    vt627_clonedElem.id = 'vt627_planCard';
    //insert element
    document.querySelector('[data-selector="ils-options"]').insertBefore(vt627_clonedElem, document.querySelector('[data-selector="ils-options"]').firstChild);

    //adjust cloned element 
    var vt627_newElem = document.querySelector('[id="vt627_planCard"]')
    //remove flag 
    document.querySelector("#vt627_planCard > div > div > div > div > div > div > div").remove()
    //change icon 
    document.querySelector("#vt627_planCard > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > span > span > span > svg").outerHTML = '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="stroke: white;">\
            <path\
                d="M5.76562 17.2705V16.7705V17.2705ZM5.25 27.7705H4.75H5.25ZM3.75 15.7705H3.25H3.75ZM5.25 12.7705V12.2705V12.7705ZM32.25 12.7705H32.75V12.2705H32.25V12.7705ZM9.68064 6.02796L9.68063 5.52796L9.67907 5.52796L9.68064 6.02796ZM15.75 12.778V13.278H16.25V12.778H15.75ZM10.44 12.778V12.278V12.778ZM6.69001 9.02796H7.19001V9.02796L6.69001 9.02796ZM20.25 9.77051H20.75H20.25ZM24 6.02051V5.52051V6.02051ZM20.25 30.7705V31.2705C20.5261 31.2705 20.75 31.0466 20.75 30.7705H20.25ZM15.75 30.7705H15.25C15.25 31.0466 15.4739 31.2705 15.75 31.2705V30.7705ZM20.25 10.586H20.75H20.25ZM5.76562 17.7705H30.2344V16.7705H5.76562V17.7705ZM30.2344 17.7705C30.2385 17.7705 30.2425 17.7722 30.2454 17.7751L30.9525 17.068C30.7621 16.8775 30.5037 16.7705 30.2344 16.7705V17.7705ZM30.2454 17.7751C30.2484 17.778 30.25 17.782 30.25 17.7861H31.25C31.25 17.5168 31.143 17.2584 30.9525 17.068L30.2454 17.7751ZM30.25 17.7861V27.7705H31.25V17.7861H30.25ZM30.25 27.7705C30.25 28.4335 29.9866 29.0694 29.5178 29.5383L30.2249 30.2454C30.8813 29.589 31.25 28.6988 31.25 27.7705H30.25ZM29.5178 29.5383C29.0489 30.0071 28.413 30.2705 27.75 30.2705V31.2705C28.6783 31.2705 29.5685 30.9018 30.2249 30.2454L29.5178 29.5383ZM27.75 30.2705H8.25V31.2705H27.75V30.2705ZM8.25 30.2705C7.58696 30.2705 6.95107 30.0071 6.48223 29.5383L5.77513 30.2454C6.4315 30.9018 7.32174 31.2705 8.25 31.2705V30.2705ZM6.48223 29.5383C6.01339 29.0694 5.75 28.4335 5.75 27.7705H4.75C4.75 28.6988 5.11875 29.589 5.77513 30.2454L6.48223 29.5383ZM5.75 27.7705V17.7861H4.75V27.7705H5.75ZM5.75 17.7861C5.75 17.782 5.75165 17.778 5.75458 17.7751L5.04747 17.068C4.857 17.2584 4.75 17.5168 4.75 17.7861H5.75ZM5.75458 17.7751C5.75751 17.7722 5.76148 17.7705 5.76562 17.7705V16.7705C5.49626 16.7705 5.23794 16.8775 5.04747 17.068L5.75458 17.7751ZM31.75 15.7705C31.75 16.0357 31.6446 16.2901 31.4571 16.4776L32.1642 17.1847C32.5393 16.8096 32.75 16.3009 32.75 15.7705H31.75ZM31.4571 16.4776C31.2696 16.6652 31.0152 16.7705 30.75 16.7705V17.7705C31.2804 17.7705 31.7891 17.5598 32.1642 17.1847L31.4571 16.4776ZM30.75 16.7705H5.25V17.7705H30.75V16.7705ZM5.25 16.7705C4.98478 16.7705 4.73043 16.6652 4.54289 16.4776L3.83579 17.1847C4.21086 17.5598 4.71957 17.7705 5.25 17.7705V16.7705ZM4.54289 16.4776C4.35536 16.2901 4.25 16.0357 4.25 15.7705H3.25C3.25 16.3009 3.46071 16.8096 3.83579 17.1847L4.54289 16.4776ZM4.25 15.7705V14.2705H3.25V15.7705H4.25ZM4.25 14.2705C4.25 14.0053 4.35536 13.7509 4.54289 13.5634L3.83579 12.8563C3.46071 13.2314 3.25 13.7401 3.25 14.2705H4.25ZM4.54289 13.5634C4.73043 13.3759 4.98478 13.2705 5.25 13.2705V12.2705C4.71957 12.2705 4.21086 12.4812 3.83579 12.8563L4.54289 13.5634ZM5.25 13.2705H32.25V12.2705H5.25V13.2705ZM31.75 12.7705V15.7705H32.75V12.7705H31.75ZM9.68064 6.52796H12V5.52796H9.68064V6.52796ZM12 6.52796C12.862 6.52796 13.6886 6.87037 14.2981 7.47986L15.0052 6.77275C14.2082 5.97572 13.1272 5.52796 12 5.52796V6.52796ZM14.2981 7.47986C14.9076 8.08935 15.25 8.916 15.25 9.77796H16.25C16.25 8.65079 15.8022 7.56978 15.0052 6.77275L14.2981 7.47986ZM15.25 9.77796V12.778H16.25V9.77796H15.25ZM15.75 12.278H10.44V13.278H15.75V12.278ZM10.44 12.278C9.57806 12.278 8.75141 11.9355 8.14191 11.3261L7.43481 12.0332C8.23184 12.8302 9.31284 13.278 10.44 13.278V12.278ZM8.14191 11.3261C7.53242 10.7166 7.19001 9.88991 7.19001 9.02796H6.19001C6.19001 10.1551 6.63778 11.2361 7.43481 12.0332L8.14191 11.3261ZM7.19001 9.02796C7.19001 8.36627 7.45233 7.73156 7.91948 7.26294L7.21127 6.55695C6.55725 7.21301 6.19001 8.10159 6.19001 9.02796L7.19001 9.02796ZM7.91948 7.26294C8.38663 6.79433 9.02051 6.53002 9.6822 6.52796L9.67907 5.52796C8.75271 5.53086 7.86528 5.90088 7.21127 6.55695L7.91948 7.26294ZM25.56 12.2705H20.25V13.2705H25.56V12.2705ZM20.75 12.7705V9.77051H19.75V12.7705H20.75ZM20.75 9.77051C20.75 9.34371 20.8341 8.9211 20.9974 8.52679L20.0735 8.1441C19.8599 8.65974 19.75 9.21239 19.75 9.77051H20.75ZM20.9974 8.52679C21.1607 8.13248 21.4001 7.7742 21.7019 7.47241L20.9948 6.7653C20.6001 7.15995 20.2871 7.62847 20.0735 8.1441L20.9974 8.52679ZM21.7019 7.47241C22.0037 7.17062 22.362 6.93123 22.7563 6.7679L22.3736 5.84402C21.858 6.0576 21.3894 6.37065 20.9948 6.7653L21.7019 7.47241ZM22.7563 6.7679C23.1506 6.60457 23.5732 6.52051 24 6.52051V5.52051C23.4419 5.52051 22.8892 5.63044 22.3736 5.84402L22.7563 6.7679ZM24 6.52051H26.31V5.52051H24V6.52051ZM26.31 6.52051C26.973 6.52051 27.6089 6.7839 28.0778 7.25274L28.7849 6.54563C28.1285 5.88926 27.2383 5.52051 26.31 5.52051V6.52051ZM28.0778 7.25274C28.5466 7.72158 28.81 8.35747 28.81 9.02051H29.81C29.81 8.09225 29.4413 7.20201 28.7849 6.54563L28.0778 7.25274ZM28.81 9.02051C28.81 9.88246 28.4676 10.7091 27.8581 11.3186L28.5652 12.0257C29.3622 11.2287 29.81 10.1477 29.81 9.02051H28.81ZM27.8581 11.3186C27.2486 11.9281 26.422 12.2705 25.56 12.2705V13.2705C26.6872 13.2705 27.7682 12.8227 28.5652 12.0257L27.8581 11.3186ZM15.75 13.2705H20.25V12.2705H15.75V13.2705ZM19.75 12.7705V30.7705H20.75V12.7705H19.75ZM20.25 30.2705H15.75V31.2705H20.25V30.2705ZM16.25 30.7705V12.7705H15.25V30.7705H16.25ZM18 8.836C18.4641 8.836 18.9092 9.02038 19.2374 9.34857L19.9445 8.64146C19.4288 8.12573 18.7293 7.836 18 7.836V8.836ZM19.2374 9.34857C19.5656 9.67675 19.75 10.1219 19.75 10.586H20.75C20.75 9.85666 20.4603 9.15718 19.9445 8.64146L19.2374 9.34857ZM19.75 10.586V12.7705H20.75V10.586H19.75ZM16.25 12.7705V10.586H15.25V12.7705H16.25ZM16.25 10.586C16.25 10.1219 16.4344 9.67675 16.7626 9.34857L16.0555 8.64146C15.5397 9.15718 15.25 9.85666 15.25 10.586H16.25ZM16.7626 9.34857C17.0908 9.02038 17.5359 8.836 18 8.836V7.836C17.2707 7.836 16.5712 8.12573 16.0555 8.64146L16.7626 9.34857Z"\
                fill="white" />\
            </svg>'
    //change text content/links 
    //header
    document.querySelector("#vt627_planCard > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > h2").innerHTML = 'Get 100GB at £10 a month* for 18 months on an additional SIM only plan.'
    //remove p element 
    document.querySelector("#vt627_planCard > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > p").innerHTML = 'Offer applied in basket.'
    //CTA 
    document.querySelector("#vt627_planCard > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > button").innerHTML = 'Add to Basket'
    //insert text
    var vt627_tandc = '<p style="font-size: small; padding-top: 8px;">*Annual Price Increase: monthly plan increases annually on 1 April by £1.80 for Pay monthly Airtime Plans (inc 20% VAT)</p>'
    document.querySelector("#vt627_planCard > div > div > div > div").insertAdjacentHTML('beforeend', vt627_tandc)
    //button re-direct
    var vt627_CTA = document.querySelector("#vt627_planCard > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(2)")
    vt627_CTA.addEventListener('click', function () {
        window.location = 'https://www.vodafone.co.uk/basket?planSkuId=120753&login=true&icmp=100gbtest/2024'
    })
}