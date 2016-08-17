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

var skills = ["terefere", "hahahah", "ojtam ojtam"];

var bio = {
  "name" : "Czczcz",
  "role" : "srutututu",
  "contacts" : {
    "mobile" : "650 500 000",
    "email" : "john@egzample.xom",
    "github" : "www.githum/madafaka",
    "twitter" : "elementary",
    "location" : "san francisco"
  },
  "WelcomeMessage" : "Welcome!!!",
  "skills" : ["awsomnes", "holahola", "srutututut"],
  "biopic" : "images/and.jpg"
};

HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
HTMLskills = HTMLskills.replace("%data%", bio.skills);

$("#header").append(HTMLheaderName);
$("#header").append(HTMLheaderRole);
$("#header").append(HTMLbioPic);
$("#header").append(HTMLmobile);
$("#header").append(HTMLwelcomeMsg);
$("#header").append(HTMLskills);
