////MUTATION OBSERVER////
let VT619_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let VT619_oldValue = mutation.oldValue;
        let VT619_newValue = mutation.target.textContent;
        if (VT619_oldValue !== VT619_newValue) {
            //changes here 
            var vt619_title = document.querySelector("#Plans > div:nth-child(1) > div > div > div > div > div > div:nth-child(2)")
            if (vt619_title && vt619_title.innerText === 'Build your plan') {
                var vt619_banner = document.querySelector("#Plans > div:nth-child(2) > div > div > div > div > div > div > div")
                if (vt619_banner) {
                    vt619_banner.style.display = 'none'
                }
            }
        }
    });
});

VT619_observer.observe(document.body, {
    //characterDataOldValue: true,
    subtree: true,
    childList: true,
    //characterData: true
    attributes: true
});