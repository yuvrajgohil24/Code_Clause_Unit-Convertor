var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var option_from, option_to;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

option_from = inputType.value;
option_to = resultType.value;

function myResult() {
  option_from = inputType.value;
  option_to = resultType.value;

  var minTohour = 1 / 60;
  var secTohour = 1 / 3600;

  // minute to hour
  if (option_from === "minutes" && option_to === "hours") {
    result.value = Number(input.value) * minTohour;
  }
  // minute to seconds
  else if (option_from === "minutes" && option_to === "seconds") {
    result.value = Number(input.value) * 60;
  }
  // minute to minutes
  else if (option_from === "minutes" && option_to === "minutes") {
    result.value = input.value;
  }
  // minute to miliseconds
  else if (option_from === "minutes" && option_to === "miliseconds") {
    result.value = Number(input.value) * 60000;
  }
  // minute to day
  else if (option_from === "minutes" && option_to === "day") {
    result.value = Number(input.value) * 0.0006944444;
  }
  // minute to week
  else if (option_from === "minutes" && option_to === "week") {
    result.value = Number(input.value) * 0.0000992063;
  }
  // minute to year
  else if (option_from === "minutes" && option_to === "year") {
    result.value = Number(input.value) * 0.0000019013;
  }

  //hours to minutes
  if (option_from === "hours" && option_to === "minutes") {
    result.value = Number(input.value) * 60;
  }
  //hours to seconds
  else if (option_from === "hours" && option_to === "seconds") {
    result.value = Number(input.value) * 3600;
  }
  //hours to hours
  else if (option_from === "hours" && option_to === "hours") {
    result.value = input.value;
  }
  //hours to miliseconds
  else if (option_from === "hours" && option_to === "miliseconds") {
    result.value = Number(input.value) * 3600000;
  }
  //hours to day
  else if (option_from === "hours" && option_to === "day") {
    result.value = Number(input.value) * 0.0416666667;
  }
  //hours to week
  else if (option_from === "hours" && option_to === "week") {
    result.value = Number(input.value) * 0.005952381;
  }
  //hours to year
  else if (option_from === "hours" && option_to === "year") {
    result.value = Number(input.value) * 0.0001140771;
  }

  //seconds to hours
  if (option_from === "seconds" && option_to === "hours") {
    result.value = Number(input.value) * secTohour;
  }
  //seconds to minutes
  else if (option_from === "seconds" && option_to === "minutes") {
    result.value = Number(input.value) * minTohour;
  }
  //seconds to seconds
  else if (option_from === "seconds" && option_to === "seconds") {
    result.value = input.value;
  }
  //seconds to miliseconds
  else if (option_from === "seconds" && option_to === "miliseconds") {
    result.value = Number(input.value) * 1000;
  }
  //seconds to day
  else if (option_from === "seconds" && option_to === "day") {
    result.value = Number(input.value) * 0.0000115741;
  }
  //seconds to week
  else if (option_from === "seconds" && option_to === "week") {
    result.value = Number(input.value) * 0.0000016534;
  }
  //seconds to year
  else if (option_from === "seconds" && option_to === "year") {
    result.value = Number(input.value) * 3.168808781e-8;
  }

  //miliseconds to hours
  if (option_from === "miliseconds" && option_to === "hours") {
    result.value = Number(input.value) * 2.777777777e-7;
  }
  //miliseconds to minutes
  else if (option_from === "miliseconds" && option_to === "minutes") {
    result.value = Number(input.value) * 0.0000166667;
  }
  //miliseconds to seconds
  else if (option_from === "miliseconds" && option_to === "seconds") {
    result.value = Number(input.value) * 0.001;
  }
  //miliseconds to miliseconds
  else if (option_from === "miliseconds" && option_to === "miliseconds") {
    result.value = input.value;
  }
  //miliseconds to day
  else if (option_from === "miliseconds" && option_to === "day") {
    result.value = Number(input.value) * 1.157407407e-8;
  }
  //miliseconds to week
  else if (option_from === "miliseconds" && option_to === "week") {
    result.value = Number(input.value) * 1.653439153e-9;
  }
  //miliseconds to year
  else if (option_from === "miliseconds" && option_to === "year") {
    result.value = Number(input.value) * 3.168808781e-11;
  }

  //day to hours
  if (option_from === "day" && option_to === "hours") {
    result.value = Number(input.value) * 24;
  }
  //day to minutes
  else if (option_from === "day" && option_to === "minutes") {
    result.value = Number(input.value) * 1440;
  }
  //day to seconds
  else if (option_from === "day" && option_to === "seconds") {
    result.value = Number(input.value) * 86400;
  }
  //day to miliseconds
  else if (option_from === "day" && option_to === "miliseconds") {
    result.value = Number(input.value) * 86400000;
  }
  //day to day
  else if (option_from === "day" && option_to === "day") {
    result.value = input.value;
  }
  //day to week
  else if (option_from === "day" && option_to === "week") {
    result.value = Number(input.value) * 0.1428571429;
  }
  //day to year
  else if (option_from === "day" && option_to === "year") {
    result.value = Number(input.value) * 0.0027378508;
  }

  //week to hours
  if (option_from === "week" && option_to === "hours") {
    result.value = Number(input.value) * 168;
  }
  //week to minutes
  else if (option_from === "week" && option_to === "minutes") {
    result.value = Number(input.value) * 10080;
  }
  //week to seconds
  else if (option_from === "week" && option_to === "seconds") {
    result.value = Number(input.value) * 604800;
  }
  //week to miliseconds
  else if (option_from === "week" && option_to === "miliseconds") {
    result.value = Number(input.value) * 604800000;
  }
  //week to day
  else if (option_from === "week" && option_to === "day") {
    result.value = Number(input.value) * 7;
  }
  //week to week
  else if (option_from === "week" && option_to === "week") {
    result.value = input.value;
  }
  //week to year
  else if (option_from === "week" && option_to === "year") {
    result.value = Number(input.value) * 0.0191649555;
  }

  //year to hours
  if (option_from === "year" && option_to === "hours") {
    result.value = Number(input.value) * 8766;
  }
  //year to minutes
  else if (option_from === "year" && option_to === "minutes") {
    result.value = Number(input.value) * 525960;
  }
  //year to seconds
  else if (option_from === "year" && option_to === "seconds") {
    result.value = Number(input.value) * 31557600;
  }
  //year to miliseconds
  else if (option_from === "year" && option_to === "miliseconds") {
    result.value = Number(input.value) * 31557600000;
  }
  //year to day
  else if (option_from === "year" && option_to === "day") {
    result.value = Number(input.value) * 365.25;
  }
  //year to week
  else if (option_from === "year" && option_to === "week") {
    result.value = Number(input.value) * 52.178571429;
  }
  //year to year
  else if (option_from === "year" && option_to === "year") {
    result.value = input.value;
  }
}
