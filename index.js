const dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December']
Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
Date.prototype.dateFormat = function(format) {
  let date = new Date(this.valueOf());
  let dd = date.getDate().toString().length>1?date.getDate():"0"+date.getDate()
  let mm = (date.getMonth()+1).toString().length>1? (date.getMonth()+1):"0"+ (date.getMonth()+1)
  let yyyy = date.getFullYear();
  let formattedDate = format.replace("dd",dd).replace("mm",mm).replace("yyyy",yyyy)
  return formattedDate
}
//get Names of Day and Month
Date.prototype.getDayName=function(){
  let date = new Date(this.valueOf());
  let dayNo=date.getDay();
  return dayNames[dayNo]
}
Date.prototype.getMonthName=function(){
  let date = new Date(this.valueOf());
  let dayNo=date.getMonth();
  return monthNames[dayNo]
}
//leapyear
Date.prototype.isLeapYear=function(){
  let date = new Date(this.valueOf());
  let year = date.getFullYear()
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

Date.prototype.nextLeapYear=function(){
  let date = new Date(this.valueOf());
  let year = date.getFullYear()
  while(1){
    leap_year = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
    if(leap_year){
      return year
    }
    year=year+1
  }
}

Date.prototype.previousLeapYear=function(){
  let date = new Date(this.valueOf());
  let year = date.getFullYear()
  while(1){
    leap_year = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
    if(leap_year){
      return year
    }
    year=year-1
  }
}
