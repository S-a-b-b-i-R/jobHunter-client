# Technologies Used

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

# Features

-   [x] **Authentication**
        User can sign up and login to the app using their email and password. User can also sign in using their Google account as well as GitHub account.
-   [x] **Create, Read, Update, Delete (CRUD) operations**
        User can create, read, update and delete jobs. However, one user cannot update or delete jobs posted by others. User can only update or delete jobs posted by them. Users can also apply for jobs posted by others except jobs posted by him/herself.
-   [x] **Search By Text**
        User can search for jobs by text in the all jobs page. I have used $regex on the back-end to return jobs that match the search text.
-   [x] **Filter By Category**
        User can filter jobs by category in the home and applied jobs page.
-   [x] **Real time data render using TanStack Query**
        I have used React Query to fetch data from the back-end and render it in the front-end. React Query also caches the data and updates it in real time. So when an user applies for a job, the applicants number gets updated in real time.
-   [x] **JWT Tokens**
        I have used JWT tokens to authenticate users. When a user signs up or logs in, a JWT token is generated and stored in the cookies. When the user logs out, the token is removed. This token is used to authenticate users and protect routes where token is validated before returning data.
-   [x] **Firebase**
        The app is using Firebase for authentication. Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, remote configuration, and hosting for your static files. I have used Firebase to create a user authentication system for the app.
-   [x] **Out of Scope**
        Admin panel, email verification, forgot password, reset password, etc. are out of scope for this project.

[Demo](https://job-hunter-cb240.firebaseapp.com/)
