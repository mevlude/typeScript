//string
var myName = "Mike S";
var myName2 = "Mike";
//number
var myAge = 27;
var myAge2 = 30;
//boolean
var hasHobbies = false;
var hasHobbies2 = true;
//any
var variable = "Mike";
variable = 5;
//array
var myArray = [4, 5, 300];
myArray = [200, "apple"];
//tuples
var address = ["Superstreet", 90];
//enum
var color;
(function (color) {
    color[color["gray"] = 0] = "gray";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue"; //2
})(color || (color = {}));
var myColor = color.green;
console.log(myColor);
var color2;
(function (color2) {
    color2[color2["gray"] = 0] = "gray";
    color2[color2["green"] = 100] = "green";
    color2[color2["blue"] = 101] = "blue"; //2
})(color2 || (color2 = {}));
var myColor2 = color2.green;
console.log(myColor2);
var myColor3 = color2.blue;
console.log(myColor3);
//any
var car = "honda";
car = { model: "honda", year: 2018 };
//union type
var myRealAge;
myRealAge = "30";
myRealAge = 43;
//how to check types
var finalValue = "apple";
if (typeof finalValue == "string") {
    console.log("this is a string");
}
