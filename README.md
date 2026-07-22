# School Management System

A Full Stack web application for managing students and their grades.

## Technologies

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express
- SQLite

## Features

### Students
- Add students
- Edit student information
- Delete students
- View all students

### Grades
- Add grades to students
- View grades by student
- Validate subjects and scores

## Screenshots

### Students

<img width="1364" height="625" alt="image" src="https://github.com/user-attachments/assets/e9e51284-9c9a-4275-89e7-28f4228d9fe3" />

### Manage Grades

<img width="1252" height="650" alt="image" src="https://github.com/user-attachments/assets/26d3a0d7-e360-4fed-9513-4d1867e046fd" />

## Installation

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API

### Students

- GET `/students`
- POST `/students`
- PUT `/students/:id`
- DELETE `/students/:id`

### Grades

- GET `/grades/:studentId`
- POST `/grades`

## Future Improvements

- Attendance management
- Filter students by year
- Filter grades by subject
- Dashboard with statistics
- Improve the user interface

## Author

Luciano
