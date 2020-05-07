export function createTodaysFormatedDate(){
    let todayDate = new Date()
    let date = todayDate.toLocaleDateString() ;
    let [month,day,year] = date.split('/')
    let newDate = `${year}-${month}-${day}`
    return newDate
}