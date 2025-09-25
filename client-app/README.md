# WaSoft Client App (Front-End)

This folder contains the front-end of the WaSoft application, built with React, TypeScript, and Vite. The client app provides a fast, interactive user experience for viewing and interacting with the online resume.

## Features

- **Profile & Experience:**  
  Browse my work history, education, skills, and personal interests in a clear, organized format.

- **Contact Form:**  
  Easily reach out to me using the built-in contact form.  
  The contact form communicates with backend API endpoints hosted as Azure Functions.

- **PDF Generation:**  
  Instantly generate and download a professionally formatted PDF version of my resume.

- **Language Switcher:**  
  View the resume in multiple languages for your convenience.

- **Responsive Design:**  
  Enjoy a seamless experience on desktop and mobile devices.

## Technologies & Architecture
- **React** — Component-based UI library for building interactive interfaces
- **TypeScript** — Type safety and modern JavaScript features
- **Vite** — Lightning-fast development server and build tool
- **React Context & Hooks** — State management and side effects
- **Custom Components** — Modular UI elements for resume, contact form, PDF generation, and more
- **i18n** — Internationalization for multi-language support

### Configuration Switching
The app supports easy switching between configurations for local development and production. During development, local settings are used for a smooth experience. When code is finished and deployed via CI/CD pipelines, macros in configuration files are automatically replaced with production values, ensuring secure and correct operation in the live environment.

---

For backend details, see the [`api`](../api/readme.md) folder.