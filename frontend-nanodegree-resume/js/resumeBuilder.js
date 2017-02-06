var bio = {
	"name" : "Jackie Li",
	"role" : "Web Developer",
	"contacts" : {
        "mobile": "000-000-0000",
        "email": "jackieli311@gmail.com",
        "github": "https://github.com/jackieli311",
        "location": "New York, New York",
	},
	"welcomeMessage" : "Welcome Back",
	"skills" : [
		"Coding", "Cinematic Trivia", "Video Games", "History Facts",
		],
	"biopic" : "images/dog.jpg"
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$('#header').prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$('#header').prepend(formattedName);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	$('#header').append(formattedImage);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$('#header').append(formattedMessage); 
	$('#header').append(HTMLskillsStart);
	if(bio.skills.length> 0) {
		for(skills in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
			$('#skills').append(formattedSkills);
			}
	}
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts.skype);
	$('#topContacts').append(formattedMobile,formattedEmail,formattedSkype,formattedtwitter);
	$('#footerContacts').append(formattedMobile,formattedEmail,formattedSkype,formattedtwitter);
};

var work = {
  "jobs": [
    {
      "employer": "X.Ai",
      "title": "AI Trainer",
      "location": "New York, New York",
      "dates": "June 2015 - September 2016",
      "description": "Analyze language data and classify according to guidelines, with a high level of efficiency and accuracy while providing ongoing feedback and analysis for evolving internally built tools and guidelines."
    },
  ]
};

work.display = function(){
	for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLocation);
	var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedWorkDates);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkDescription);
	}
};

var projects = {
	"projects": [{
	"title": "Front-End Developer Training",
	"dates" : "September 2016-Future",
	"description" : "Udacity front-end developer program" 
	"images": ["images/fry.jpg"]
	}
],
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart); 
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects(project).title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects(project).dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects(project).description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length) > 0) {
		   for (image in projects.projects[project].images)	{
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects(project).image[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}	
	}
};


var education = {
	"schools" : [
	{
		"name" : "Stony Brook University",
		"city" : "Stony Brook, NY",
		"degree" : "BA in Political Science",
		"dates" : "2010-2015",
		"url" : "http://www.stonybrook.edu/"
	},
	{
		"name" : "Univeristy of Sussex",
		"city" : "Brighton, UK",
		"dates" : "Fall 2014",
		"url" : "http://www.sussex.ac.uk/"
	}
	{
		"title": "Udacity Front-End Developer Course",
		"school": "Udacity",
		"dates": "September 2016-Feburary 2017",
		"url": "https://www.udacity.com/"
	}
	],
};

education.display = function(){
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolUrl = HTMLonlineURL.replace("%data%",education.schools[school].url);
		$(".education-entry:last").append(formattedSchoolUrl);
	};
	$(".education-entry:last").append(HTMLonlineClasses);
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses.title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses.school);
	$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses.dates);
	$(".education-entry:last").append(formattedOnlineDates);
	var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses.url);
	$(".education-entry:last").append(formattedOnlineUrl);
};

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);