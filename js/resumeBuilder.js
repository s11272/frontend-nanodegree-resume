/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append(["Czaruś wspaniały"]);

var name = "hamlet";
var age = 32;

console.log(name);

var awsomeThoughs = "I am czaruś, and I am awsome";

var funThoughs = awsomeThoughs.replace("awsome", "fun");

//$("#main").append(funThoughs);

var formattedName = "Czarosław Żmuda";
var formattedRole = "Tester goProgramowania";

HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);

$("#header").prepend(HTMLheaderName);
$("#header").prepend(HTMLheaderRole);

var a = "audacity";
var b = "";

b = a.slice(1, a.length).replace("u", "U");
console.log(b);

var newArray = [];
newArray[newArray.length-1] = newArray[newArray.length-1]+1

console.log(newArray[2])
