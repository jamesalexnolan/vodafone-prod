//a/b test re-direct (9am to 5pm)
if (window.location.href.indexOf('vodafone.co.uk/search/') > -1) {
    //capture query parameter 
    var fullPageURL = window.location.href
    var queryIndex = fullPageURL.indexOf('?')
    var newURL = 'https://www.vodafone.co.uk/smart-search/'
    //set date
    var d = new Date();
    var currentHourGMT = d.getUTCHours() + 1 //daylight savings
    var currentDayGMT = d.getUTCDay()
    //check date and query
    if ((currentHourGMT >= 9 && currentHourGMT < 17) && ([1, 2, 3, 4, 5].includes(currentDayGMT))) {
        if (queryIndex !== -1) {
            var query = fullPageURL.substring(queryIndex)
            newURL += query
            window.location = newURL
        } else {
            window.location = 'https://www.vodafone.co.uk/smart-search/'
        }
    }
}

//a-b test redirect (out of office hours)
if (window.location.href.indexOf('https://www.vodafone.co.uk/smart-search/') > -1) {
    //capture query parameter 
    var fullPageURL = window.location.href
    var queryIndex = fullPageURL.indexOf('?')
    var newURL = 'https://www.vodafone.co.uk/search/'
    //set date
    var d = new Date();
    var currentDayGMT = d.getUTCDay()
    var currentHourGMT = d.getUTCHours() + 1 //daylight savings
    if (!(currentHourGMT >= 9 && currentHourGMT < 17) || (([6, 7].includes(currentDayGMT)))) {
        if (queryIndex !== -1) {
            var query = fullPageURL.substring(queryIndex)
            newURL += query
            window.location = newURL
        } else {
            window.location = 'https://vodafone.co.uk/search/'
        }
    }
}


//Control
if (window.location.href.indexOf('https://www.vodafone.co.uk/smart-search/') > -1) {
    //capture query parameter 
    var fullPageURL = window.location.href
    var queryIndex = fullPageURL.indexOf('?')
    var newURL = 'https://www.vodafone.co.uk/search/'
    if (queryIndex !== -1) {
        var query = fullPageURL.substring(queryIndex)
        newURL += query
        window.location = newURL
    } else {
        window.location = 'https://vodafone.co.uk/search/'
    }
}