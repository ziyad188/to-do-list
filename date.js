module.exports.getDate = getDate;
function getDate(){
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"

    }
    var today = new Date();
    var currentDay = today.toLocaleDateString("en-US",options);
    return currentDay;
}
module.exports.getDay = getDay;
function getDay(){
    const options = {
        weekday: "long",
    }
    var today = new Date();
    var currentDay = today.toLocaleDateString("en-US",options);
    return currentDay;

}

    