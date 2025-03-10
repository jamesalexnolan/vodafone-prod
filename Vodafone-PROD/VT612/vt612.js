function vt612_changePromoText() {
    //return product titles
    var vt612_targetTexts = document.querySelectorAll('[class*=Headingstyle__Heading-sc]')

    //define an array of possible values to match
    var vt612_valuesToMatch = [
        'iPhone 15',
        'iPhone 15 Pro Max',
        'Galaxy S24 Ultra 5G',
        'Galaxy Z Fold5',
        'Pixel 8 Pro',
        'Pixel Fold'
    ];

    //define text change
    var vt612_promos = [
       'Save £432', // 'iPhone 15',
       'Save £432', // 'iPhone 15 Pro Max',
       'Save £704',// 'Galaxy S24 Ultra 5G',
       'Save £704',// 'Galaxy Z Fold5',
       'Save £756',// 'Pixel 8 Pro',
       'Save £900'// 'Pixel Fold'
    ]

    for (var i = 0; i < vt612_targetTexts.length; i++) {
        var vt612_textContent = vt612_targetTexts[i].innerText.trim();

        //check for matches in the array
        if (vt612_valuesToMatch.includes(vt612_textContent)) {
            //indexed array value
            var index = vt612_valuesToMatch.indexOf(vt612_textContent)
            if (index !== -1) {
                var vt612_textUpdate = vt612_promos[index]
                //find the closest sash to change
                var vt612_targetLabel = vt612_targetTexts[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('[class*="Spanstyle__Span-sc"]')
                if (vt612_targetLabel && vt612_targetLabel.innerHTML === 'Offers Available') {
                    //change text
                    vt612_targetLabel.innerHTML = vt612_textUpdate
                }
            }
        }
    }
}

////MUTATION OBSERVER - BODY////
let vt612_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let vt612_oldValue = mutation.oldValue;
        let vt612_newValue = mutation.target.textContent;
        if (vt612_oldValue !== vt612_newValue) {
            //changes here 
            vt612_changePromoText()
        }
    });
});

vt612_observer.observe(document.body, {
    //characterDataOldValue: true,
    subtree: true,
    childList: true,
    //characterData: true
    attributes: true
});