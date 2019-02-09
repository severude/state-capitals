/*
   State Capital Challenge
   All rights reserved
*/
var questions = [
  new Question("Which city is the capital of Alabama?", ["Birmingham", "Montgomery", "Mobile"], "Montgomery", "Montgomery is the capital of Alabama"),
  new Question("Which city is the capital of Alaska?", ["Anchorage", "Fairbanks", "Juneau"], "Juneau", "Juneau is the capital of Alaska"),
  new Question("Which city is the capital of Arizona?", ["Phoenix", "Tucson", "Flagstaff"], "Phoenix", "Phoenix is the capital of Arizona"),
  new Question("Which city is the capital of Arkansas?", ["Little Rock", "Fort Smith", "Fayetteville"], "Little Rock", "Little Rock is the capital of Arkansas"),
  new Question("Which city is the capital of California?", ["Los Angeles", "San Francisco", "Sacramento"], "Sacramento", "Sacramento is the capital of California"),
  new Question("Which city is the capital of Colorado?", ["Denver", "Colorado Springs", "Boulder"], "Denver", "Denver is the capital of Colorado"),
  new Question("Which city is the capital of Connecticut?", ["Bridgeport", "Hartford", "New Haven"], "Hartford", "Hartford is the capital of Connecticut"),
  new Question("Which city is the capital of Delaware?", ["Wilmington", "Dover", "Newark"], "Dover", "Dover is the capital of Delaware"),
  new Question("Which city is the capital of Florida?", ["Miami", "Jacksonville", "Tallahassee"], "Tallahassee", "Tallahassee is the capital of Florida"),
  new Question("Which city is the capital of Georgia?", ["Atlanta", "Augusta", "Columbus"], "Atlanta", "Atlanta is the capital of Georgia"),
  new Question("Which city is the capital of Hawaii?", ["Honolulu", "Pearl City", "Kailua"], "Honolulu", "Honolulu is the capital of Hawaii"),
  new Question("Which city is the capital of Idaho?", ["Boise", "Nampa", "Pocatello"], "Boise", "Boise is the capital of Idaho"),
  new Question("Which city is the capital of Illinois?", ["Chicago", "Springfield", "Rockford"], "Springfield", "Springfield is the capital of Illinois"),
  new Question("Which city is the capital of Indiana?", ["Indianapolis", "Fort Wayne", "Evansville"], "Indianapolis", "Indianapolis is the capital of Indiana"),
  new Question("Which city is the capital of Iowa?", ["Des Moines", "Cedar Rapids", "Davenport"], "Des Moines", "Des Moines is the capital of Iowa"),
  new Question("Which city is the capital of Kansas?", ["Kansas City", "Wichita", "Topeka"], "Topeka", "Topeka is the capital of Kansas"),
  new Question("Which city is the capital of Kentucky?", ["Louisville", "Lexington", "Frankfort"], "Frankfort", "Frankfort is the capital of Kentucky"),
  new Question("Which city is the capital of Louisiana?", ["New Orleans", "Baton Rouge", "Shreveport"], "Baton Rouge", "Baton Rouge is the capital of Louisiana"),
  new Question("Which city is the capital of Maine?", ["Portland", "Bangor", "Augusta"], "Augusta", "Augusta is the capital of Maine"),
  new Question("Which city is the capital of Maryland?", ["Baltimore", "Annapolis", "Frederick"], "Annapolis", "Annapolis is the capital of Maryland"),
  new Question("Which city is the capital of Massachusetts?", ["Boston", "Worcester", "Springfield"], "Boston", "Boston is the capital of Massachusetts"),
  new Question("Which city is the capital of Michigan?", ["Detroit", "Grand Rapids", "Lansing"], "Lansing", "Lansing is the capital of Michigan"),
  new Question("Which city is the capital of Minnesota?", ["Minneapolis", "St. Paul", "Rochester"], "St. Paul", "St. Paul is the capital of Minnesota"),
  new Question("Which city is the capital of Mississippi?", ["Jackson", "Gulfport", "Hattiesburg"], "Jackson", "Jackson is the capital of Mississippi"),
  new Question("Which city is the capital of Missouri?", ["Kansas City", "St. Louis", "Jefferson City"], "Jefferson City", "Jefferson City is the capital of Missouri"),
  new Question("Which city is the capital of Montana?", ["Billings", "Missoula", "Helena"], "Helena", "Helena is the capital of Montana"),
  new Question("Which city is the capital of Nebraska?", ["Omaha", "Lincoln", "North Platte"], "Lincoln", "Lincoln is the capital of Nebraska"),
  new Question("Which city is the capital of Nevada?", ["Las Vegas", "Reno", "Carson City"], "Carson City", "Carson City is the capital of Nevada"),
  new Question("Which city is the capital of New Hampshire?", ["Manchester", "Concord", "Nashua"], "Concord", "Concord is the capital of New Hampshire"),
  new Question("Which city is the capital of New Jersey?", ["Newark", "Trenton", "Atlantic City"], "Trenton", "Trenton is the capital of New Jersey"),
  new Question("Which city is the capital of New Mexico?", ["Albuquerque", "Las Cruces", "Santa Fe"], "Santa Fe", "Santa Fe is the capital of New Mexico"),
  new Question("Which city is the capital of New York?", ["New York", "Buffalo", "Albany"], "Albany", "Albany is the capital of New York"),
  new Question("Which city is the capital of North Carolina?", ["Charlotte", "Raleigh", "Greensboro"], "Raleigh", "Raleigh is the capital of North Carolina"),
  new Question("Which city is the capital of North Dakota?", ["Fargo", "Bismarck", "Grand Forks"], "Bismarck", "Bismarck is the capital of North Dakota"),
  new Question("Which city is the capital of Ohio?", ["Columbus", "Cleveland", "Cincinnati"], "Columbus", "Columbus is the capital of Ohio"),
  new Question("Which city is the capital of Oklahoma?", ["Oklahoma City", "Tulsa", "Norman"], "Oklahoma City", "Oklahoma City is the capital of Oklahoma"),
  new Question("Which city is the capital of Oregon?", ["Portland", "Eugene", "Salem"], "Salem", "Salem is the capital of Oregon"),
  new Question("Which city is the capital of Pennsylvania?", ["Philadelphia", "Pittsburgh", "Harrisburg"], "Harrisburg", "Harrisburg is the capital of Pennsylvania"),
  new Question("Which city is the capital of Rhode Island?", ["Providence", "Warwick", "Cranston"], "Providence", "Providence is the capital of Rhode Island"),
  new Question("Which city is the capital of South Carolina?", ["Columbia", "Charleston", "Greenville"], "Columbia", "Columbia is the capital of South Carolina"),
  new Question("Which city is the capital of South Dakota?", ["Sioux Falls", "Rapid City", "Pierre"], "Pierre", "Pierre is the capital of South Dakota"),
  new Question("Which city is the capital of Tennessee?", ["Memphis", "Nashville", "Knoxville"], "Nashville", "Nashville is the capital of Tennessee"),
  new Question("Which city is the capital of Texas?", ["Houston", "Dallas", "Austin"], "Austin", "Austin is the capital of Texas"),
  new Question("Which city is the capital of Utah?", ["Salt Lake City", "Provo", "Ogden"], "Salt Lake City", "Salt Lake City is the capital of Utah"),
  new Question("Which city is the capital of Vermont?", ["Burlington", "Rutland", "Montpelier"], "Montpelier", "Montpelier is the capital of Vermont"),
  new Question("Which city is the capital of Virginia?", ["Virginia Beach", "Richmond", "Roanoke"], "Richmond", "Richmond is the capital of Virginia"),
  new Question("Which city is the capital of Washington?", ["Seattle", "Olympia", "Spokane"], "Olympia", "Olympia is the capital of Washington"),
  new Question("Which city is the capital of West Virginia?", ["Charleston", "Huntington", "Morgantown"], "Charleston", "Charleston is the capital of West Virginia"),
  new Question("Which city is the capital of Wisconsin?", ["Milwaukee", "Madison", "Green Bay"], "Madison", "Madison is the capital of Wisconsin"),
  new Question("Which city is the capital of Wyoming?", ["Cheyenne", "Casper", "Laramie"], "Cheyenne", "Cheyenne is the capital of Wyoming")
];
var quiz = new Quiz(questions);
var quizUI = new QuizUI();
document.getElementById('quiz').style.display = 'none';

var button = document.getElementById('btn');
button.onclick = function() {
	document.getElementById('intro').style.display = 'none';
	document.getElementById('quiz').style.display = 'block';
	quizUI.displayNext();
};
