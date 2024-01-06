var today = new Date();
console.log(today);
var day = today.getDay();
console.log(day);
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is : " + dayList[day]+".");
var hrs = today.getHours();
var mins = today.getMinutes();
var sex = today.getSeconds();
var prepand = (hrs>=12)? "PM":"AM";
if(hrs>=12){
    hrs = hrs - 12;
    console.log("Current time is : "+ hrs + prepand +" : "+ mins + " : " + sex);
}
else{
    console.log("Current Time : "+ hrs + prepand +" : "+ mins + " : " + sex);
}