const calculateBirthDay = ()=>{
    let inDate = getBirthDate()
    let currentDate = getCurrentDate()
    console.log(getAgeOfUser().day)
    const outputYear = document.querySelector('#year')
    outputYear.innerHTML = `${' number of years:' + getAgeOfUser().year}`
    const outputMonth = document.querySelector('#month')
    outputMonth.innerHTML = `${' number of months:' + getAgeOfUser().mon}`
    const outputDay = document.querySelector('#days')
    outputDay.innerHTML = `${' number of days:' + getAgeOfUser().day}`
}



const getAgeOfUser = ()=>{
    let inDate = getBirthDate()
    let currentDate = getCurrentDate()

    let relativeAge = currentDate.year - inDate.year
    let relativeMon = inDate.mon > currentDate.mon // 09 > 03 = true
    let relativeDay = inDate.day < currentDate.day // 12 < 24 = true
    let relative = relativeMon ? relativeDay : false // true

    let age = {}

    age.year = relative ? relativeAge - 1 : relativeAge
    age.mon = relative ? (age.year * 12) + currentDate.mon : (age.year * 12) + (currentDate.mon - inDate.mon)
    age.day = Math.floor((age.year * 365.2425) + ((12 - (inDate.mon - currentDate.mon)) * 30.44) + ((currentDate.day - inDate.day) - 1))
    return age
}




// TODO: getBirthDate - for getting input value of date birthday from user

const getBirthDate = ()=>{
    let inDate = document.querySelector('#inputDate').value
    inDate = inDate.split('-')
    let outDate = {}

    outDate.year = Number(inDate[0])
    outDate.mon = Number(inDate[1])
    outDate.day = Number(inDate[2])

    return outDate
}
getBirthDate()
// TODO: getCurrentDte - get current date from system

const getCurrentDate = ()=>{
    let date = new Date
    let currentDate = {}
    let months = 
        ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    currentDate.day = date.getDate()
    currentDate.mon = date.getMonth() + 1
    currentDate.year = date.getFullYear()
    currentDate.full = `${currentDate.day}-${months[date.getMonth()]}, ${currentDate.year}`
    return currentDate
}

