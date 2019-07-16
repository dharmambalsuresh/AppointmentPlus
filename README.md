## **Assignment Four**

## AppointmentPlus
The main purpose of the web application “AppointmentPlus” is to ease the patient experience in making appointments with doctors. The users can easily find a doctor in a particular hospital and book an appointment online at their desired time based on the specific doctor's availability. The patients are free to cancel their appointments within a stipulated time which benefits other patients to get that particular time slot. The application will provide email reminders to users before a day of their doctor appointment.
The application facilitates the doctors by providing them with the upcoming schedule of consultations for the following week. It also enables them to create a new schedule with their available time period.  Each doctor will have a customized profile of their own along with their list of patient’s medical records whom they treated. Hence the application will provide a hassle-free appointment system which will streamline the workflow for both doctors and patients in many ways.


## Features
(**Aishwarya Narayanan**  - **B00820313**)  
The two features that are mentioned in Assingment-3 are: -
1. Create New Appointment Schedule 
2. Upcoming Schedule of Appointments

Assignment 4 submission focuses on one of the two features for the doctor user base:- "Create New Appointment Schedule" 

This feature enables the doctors to create a new schedule for the specific time period mentioning their availability, location, and additional message. Once the required details are given, the form will be validated to check if the details are in the correct format, if not appropriate error messages will be displayed to the user. After successful validation, the schedule details will be stored in the database. This schedule of available slots created by doctors will be displayed to the patients when they are booking an appointment with a specific doctor.

-   A user can navigate to this page by logging in as doctor and by clicking the "plus" icon in the "Appointments" page of a doctor.  

-   Create appointment schedule page allows the doctors to create appointment timeslots for themselves for a particular date.

-   The user can fill in the required details and the validation is done for every field in the page.

-   Multiple timeslots can be added by clicking the "plus" icon near the timeslot field.

-   For every dynamic div, the validations are done to check if the time format is correct and if it is not null.

-   On successfull validation, the appointment schedule will be created and the details will be stored in the database.


## Filenames
(**Aishwarya Narayanan**  - **B00820313**)  
   - Server/createSchedule.js
   - src/app/createappointment/createappointment


## Frontend technologies used:

-  Angular 7 – MVC framework for creating single page application 
-  Bootstrap – Framework used for designing and building the responsive UI
-  TypeScript - Scripting Language used for functionalities
-  HTML and CSS - Used for basic designing of webpage


## Database used:
-  MySQL (Database)(Deployed in Cloud- Microsofr Azure) - Relational database used for storing AppointmentPlus records.
 
## Back End Framework

-   Express - Routing and Middleware framework used for retrieving data from the database to the client application. 
-   Node.js - Open source, cross-platform runtime environment for developing server-side applications.


## Setup Instructions

**Front end setup**

1. The application can be tested in the local machine by cloning or downloading the FCS git repository with the command: -  
	   git clone https://git.cs.dal.ca/narayanan/a2_aishwarya_narayanan.git

2. After cloning the repository navigate to the folder which has the boilerplate files and run the command “npm install”. 

3. Install Angular : **npm install -g @angular/cli**	


**Connecting to Back-end Server**

6.  Go into the server folder in the root folder of the application : **cd server**

7.  Install all dependencies from the back-end folder where the boilerplate files are located: **npm install**

8.  Within the server folder, run the server : **npm start**


**Running the Front-end**

9.  Navigate to the root folder of the project.

10. Start the front end by running the command "ng serve" in the command prompt

12. Launch the browser and navigate to `http://localhost:4200/`

## Folder Structure

Back-end folder structure : -

app.js 
Bootstrap file of the server application which redirects the incoming requests to apporpriate routes

Database (sub folder under server folder)
Database configuration is made in this folder in dbconfig.js file

Routes (sub folder under server folder)
All the routes to handle the incoming requests from client, is placed here.

Front-end folder structure: -





## References
> [1] Tutorialspoint.com. (n.d.). JavaScript Form Validation. Retrieved from https://www.tutorialspoint.com/javascript/javascript_form_validations.htm

> [2] Otto, M., & Thornton, J. (n.d.). Introduction. Retrieved from https://getbootstrap.com/docs/4.1/getting-started/introduction/

> [3] The first Regular Expression Library on the Web! (n.d.). Retrieved from http://regexlib.com/

> [4] (n.d.). Retrieved from https://angular.io/docs

