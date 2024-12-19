# About Me Portfolio

This is a personal portfolio website project designed to showcase my skills, projects, and resume. The website includes:
- **Home Page**: Introduction and welcome message.
- **About Page**: Personal details, hobbies, photo gallery, and a downloadable/expandable resume.
- **Projects Page**: Highlights of my key projects.
- **Skills Page**: Categorized list of technical and non-technical skills.
- **Contact Page**: A contact form and links to social media profiles.

## Prerequisites

Before running this project, ensure you have the following installed:
- **Web Browser** (e.g., Google Chrome, Firefox, or Edge)
- **Visual Studio Code** (or any text editor of your choice)
- **Live Server Extension** (for running the website locally in Visual Studio Code)

## Project Structure

```plaintext
project/
├── index.html              # Home Page
├── about.html              # About Me Page
├── projects.html           # Projects Page
├── skills.html             # Skills Page
├── contact.html            # Contact Page
├── styles.css              # Stylesheet
├── slideshow.js            # JavaScript for slideshow and resume toggle
├── documents/              # Folder for resume and other documents
│   └── Edmarck_Resume.pdf  # Resume file
├── Picture/                # Folder for images used in the project
│   ├── haloreach.jpeg
│   ├── coffee.jpeg
│   ├── jp.jpeg
│   ├── dloxpizza.jpeg
│   ├── shiningbook.jpg
│   └── haloring.jpeg
```

## How to Run the Project

### 1. Clone or Download the Repository
- Clone this repository to your local machine using Git:
  ```bash
  git clone https://github.com/your-username/portfolio.git
  ```
- Or download the ZIP file and extract it.

### 2. Open the Project in Visual Studio Code
1. Open **Visual Studio Code**.
2. Click on `File` > `Open Folder...` and select the folder containing the project files.

### 3. Install the Live Server Extension
1. Open the **Extensions View** in Visual Studio Code by clicking on the square icon in the sidebar or pressing `Ctrl+Shift+X`.
2. Search for `Live Server` and click **Install**.

### 4. Run the Project Locally
1. Right-click on the `index.html` file in the Explorer sidebar.
2. Select **Open with Live Server**.
3. Your default browser will open with the project running locally.

### 5. Navigate Through the Pages
- Use the navigation bar to explore different pages:
  - Home
  - About Me
  - Projects
  - Skills
  - Contact

### 6. Contact Form Functionality
- The contact form uses **Formspree** to send messages.
- Replace the `action` attribute in the `contact.html` form with your Formspree endpoint:
  ```html
  <form action="https://formspree.io/f/mYOURFORMID" method="POST">
  ```
- To get your Formspree endpoint, create an account at [Formspree](https://formspree.io/) and set up a form.

## Notes
- Ensure all linked files (e.g., images and documents) are in the correct folders.
- If adding new images or files, update their paths in the HTML code accordingly.
