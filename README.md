GitHub LINK: [https://git.cs.dal.ca/narayanan/a2_aishwarya_narayanan.git]

# AppointmentPlus
The primary goal of the web application is to provide an effective appointment management system with doctors and patients. It avoids the long wait time for patients in having consultations with doctors through efficient appointment booking system and email reminders.  The doctors are free to provide or change their agenda through this application which enables the patients to view their desired doctors schedule and make appointments with them. This application will be a great time saver for both doctors and patients in many ways. 

# Built with 
* Angular 7 – MVC framework for creating single page application 
* Bootstrap – Framework used for designing and building the responsive UI
* TypeScript - Scripting Language used for functionalities
* HTML and CSS - Used for basic designing of webpage

# Instructions:

1.	   The application can be tested in the local machine by cloning or downloading the FCS git repository with the command: -  
	git clone https://git.cs.dal.ca/narayanan/a2_aishwarya_narayanan.git
2.	   After cloning the repository navigate to the folder which has the boilerplate files and run the command “npm install”. 

3.	   Once all the dependencies have been installed, run the command “ng build”.

4.     Run “ng serve” and navigate to the url http://localhost:4200

5.     The first page is the home page of the application which provides the basic details about the application and has navigation to the login page by clicking the login button.

6.     The user can be logged in as either patients or doctors. By clicking the login button, the respective login page appears for that specific user (patients/doctors).

7.      After logging in as a doctor, the doctors home page will be loaded where they can see their upcoming schedule for the week. A tip “pop up” will appear in the page to help the new users for using the application.

8.	   By clicking the add icon for creating a new schedule in the doctor’s home page, you will be redirected to a "create schedule" page where the doctors can fill in the necessary details to make a new schedule for them. After providing the required details, the form will be validated. If the form is valid, the details will be saved, and the feedback will be given to the user.

# Web pages
There are four pages that are developed currently in this application: -
-  Login page
-  Home page
-  Doctors schedule 
-  Create new schedule

***Used bootstrap nav bar for creation of navigation bar on each of the pages except the login page.[2]***
 
## Login page
There are two different views for doctors and patients for the login page. It allows the user to provide email id and password.  Proper form validations are done to check if the fields are empty and to the email format of the email id field. If the form is invalid appropriate feedbacks are provided to the user to input the correct details.

***For email validation, I have referred [1] using javascript and regex.***
***Used bootstrap card views for creating a responsive card-based design in the login page. [2]***

## Home page
The home page is the landing page of the application.   The user can view what the application is about, and it has navigation to the login page for the respective users. 

## Doctors Schedule
This page provides a weekly schedule for the doctors for each day along with the location. It has a status tag, stating if the schedule is completed/current/upcoming. The doctor can see their schedule by filtering the desired status. For the new users, the tip pop up provides useful tips on how to use the application to improve the usability of the application. This page can only be accessed by users who are logged in as doctors.

## Create new schedule
This page enables the users who are logged in as doctors to create a new schedule for the upcoming week. It enables users to select the date, location, timing, and additional comments.  Proper form validation is done by validating the date format and timing format. If they are incorrect appropriate error messages will be displayed for better user experience. Once all the details are given, a success message will be displayed to the user to let them know that their schedule has been created.
The form validations which are done here are: - 
- If the user enters incorrect date format or alphabets or invalid characters, they will be prompted with the message “Date format is invalid”. 
- When the user provides incorrect time format like unwanted alphabets or characters, they will be prompted with “Incorrect time format”
-  If any of the input field is left blank, then they will get appropriate error message stating that those fields are required.
- The comments field in this web page is considered optional. 
-  Once all the details are validated and the details in the form will be saved with proper feedback. 

***For date and time format validation, I have referred [3] for javascript and regex pattern***

# Version control 
Used [GitLab](https://git.cs.dal.ca/narayanan/a2_aishwarya_narayanan.git) for versioning. 

## Design Ideas
> [1] Tags / webdesign. (n.d.). Retrieved from https://dribbble.com/tags/webdesign

## Image Credits
> [1] Patient Information. (n.d.). Retrieved from https://www.michigangastro.com/patients

> [2] Wedia. (n.d.). General Practitioners (GPs) & Doctors in the Netherlands. Retrieved from https://www.iamexpat.nl/expat-info/dutch-healthcare-system/general-practitioners-gp-doctors-netherlands

> [3] (n.d.). Retrieved from https://www.fauquierhealth.org/patients-visitors

> [4] Markets, I. I. (2019, January 08). Trends in Healthcare Workforce Management Systems Market during forecast period 2019-2024: Explore strategies. Retrieved from https://www.openpr.com/news/1477817/Trends-in-Healthcare-Workforce-Management-Systems-Market-during-forecast-period-2019-2024-Explore-strategies-of-top-players-operating-in-this-industry-such-as-Automatic-Data-Processing-Infor-Kronos-Mckesson-Corporation.html

> [5] Love doctors background banner poster. (n.d.). Retrieved from https://pngtree.com/freebackground/love-doctors-background-banner-poster_814348.html

> [6] Stethoscope Wallpaper. (n.d.). Retrieved from http://www.jakpost.travel/pl/stethoscope-wallpaper/

## References
> [1] Tutorialspoint.com. (n.d.). JavaScript Form Validation. Retrieved from https://www.tutorialspoint.com/javascript/javascript_form_validations.htm

> [2] Otto, M., & Thornton, J. (n.d.). Introduction. Retrieved from https://getbootstrap.com/docs/4.1/getting-started/introduction/

>[3] The first Regular Expression Library on the Web! (n.d.). Retrieved from http://regexlib.com/

>[4] (n.d.). Retrieved from https://angular.io/docs

