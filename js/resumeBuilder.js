
var bio = {
	"name" : "Sterling Archer",
	"role" : "Secret Agent",
	"contacts":{
		"email":"sterling.archer@example.com",
		"github":"codenameduchessExample",
		"location": "New York City, New York",
		"mobile": "555-934-8397",
		"twitter": "@codenameduchess",
		"blog": "http://sterlingBlog@example.com"
	},
	"pictureURL" : "images/Archer.jpg",
	"welcomeMessage":"Welcome to the danger zone!",
	"skills": ["Intelligence","Marksmanship", "Creativity", "Disguise","Lacrosse", "Mixology"]
};


var work = {
	"jobs":[
	{
		"employer": "The International Secret Intelligence Service (ISIS)",
		"title":"Field Agent",
		"dates": "1990-2014",
		"location": "New York City, New York",
		"description":"Conduct covert espionage, surveillance and intelligence activities."
	},
	{
		"employer": "Bob's Burgers",
		"title":"Owner",
		"dates": "2013-2014",
		"location": "Ocean City, New Jersey",
		"description":"Managed different areas of restaurant operations such as food preparation \
		,customer relations, vendors’ relations, money managment, and inventory control."
	},
	{
		"employer": "Self",
		"title":"Entepreneur",
		"dates": "2014-2015",
		"location": "Medellín, Colombia",
		"description": "Customer relations, vendors’ relations, money managment, and inventory control/delivery."
	},
	{
		"employer": "Central Intelligence Agency (CIA)",
		"title":"Field Agent",
		"dates": "2015-Present",
		"location": "New York City, New York",
		"description":"Conduct covert espionage, surveillance and intelligence activities."
	},
	]
}

var education = {
	"school":[
	{
		"name": "Georgetown University",
		"dates": 2010,
		"location": "Washington, D.C",
		"degree": "BA",
		"majors": ["English", "Comparitive Literature"]
	}
	],

	"onlineCourses":[
	{
		"title": "Intro to HTML and CSS",
		"school":"Udacity",
		"date": 2015,
		"url": "http://www.udacity.com"
	},

	{
		"title": "Responsive Web Design Fundamentals",
		"school":"Udacity",
		"date": 2015,
		"url": "http://www.udacity.com"
	},

	{
		"title": "Responsive Images",
		"school":"Udacity",
		"date": "2015",
		"url": "http://www.udacity.com"
	},

	{
		"title": "Javascript Basics",
		"school":"Udacity",
		"date": 2015,
		"url": "http://www.udacity.com"
	}
	]
}

var projects = {
	"projects":[
	{
		"title": "P1: Build a Portfolio Site",
		"dates":"April 13, 2015",
		"description": "Develop responsive website that displays images, descriptions, and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
		"images": ["images/portfolio.jpg"]
	},
	{
		"title": "Project P2: Online Resume",
		"dates":"May 11, 2015",
		"description": "Solving multipart problems that mimics a real-life challenge a front-end developer faces. Applying knowlege of variables, objects, JSON functions.",
		"images": ["images/responsive.png"]
	}
	]
}






function displayWork()
{
	if (work.jobs.length > 0)
	{
		$("#workExperience").append(HTMLworkStart);

		for (var job in work.jobs){
			var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedWorkDates= HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedWorkDates);


			var formattedWorkDescription= HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}


var displayProjects = function(){
	projects.display();
}

projects.display = function()
{
	for (project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

var displayEducation = function(){
	education.display();
}

education.display = function()
{
	for (school in education.school)
	{
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.school[school].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.school[school].degree);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.school[school].location);
		var formattedschoolDates = HTMLschoolDates.replace("%data%",education.school[school].dates);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.school[school].majors.join(', '));

		$(".education-entry:last").append(formattedName + formattedschoolDegree);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolMajor);
		$(".education-entry:last").append(formattedschoolLocation);
	}

	$("#education").append(HTMLonlineClasses);

	for (onlineCourse in education.onlineCourses)
	{
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
		var formattedschoolName = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
		var formattedOnlineDate = HTMLschoolDates.replace("%data%",education.onlineCourses[onlineCourse].date);
		var formattedschoolURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);

		$(".education-entry:last").append(formattedOnlineTitle + formattedschoolName);
	  	$(".education-entry:last").append(formattedOnlineDate);
		$(".education-entry:last").append(formattedschoolURL);
	}
}

var displayBio = function()
{
	bio.display();
}

bio.display = function()
{
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedPic= HTMLbioPic.replace("%data%",bio.pictureURL);
	var formattedWelcomeMes= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedPic);
	$("#header").append(formattedWelcomeMes);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedLocation);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedLocation);
	$("#footerContacts").append(formattedGithub);


	if (bio.skills.length > 0)
	{
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills)
		{
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

function displayEnhancements(){
	$('#mapDiv').append(googleMap);
	$("#enhancementDiv").append(HTMLEnhanceStart);
	$('.enhance-entry:last').append(dangerZone);
}

function locationizer(work_obj){
	var locations = [];

	for (var job in work_obj.jobs){
		locations.push(work_obj.jobs[job].location);
	}
	return locations;
}

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}



//Display Everything!!!
displayBio();
displayProjects();
displayEducation();
displayWork();
locationizer(work);
displayEnhancements();

//$('#main').append(internationalizeButton);


