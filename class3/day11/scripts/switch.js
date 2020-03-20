var today = "wednesday";
var timeOfTheDay = 12;
var result;
switch (today) {
  case "monday":
    result = 10000;
    break;
  case "tuesday":
    result = 11000;
    break;
  case "wednesday":
    result = 9000;
    if (timeOfTheDay <= 12) {
      result += 2000;
    } else if (timeOfTheDay > 12) {
      result += 4000;
    }
    break;
  case "thursday":
    result = 5000;
    break;
  case "friday":
    result = 3000;
    break;

  default:
    result = 25000;
    break;
}

console.log(result);
