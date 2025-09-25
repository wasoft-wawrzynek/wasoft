
# WaSoft Application

Welcome to WaSoft — an interactive online resume and contact platform created by Paweł Wawrzynek. This modern, full-stack web application showcases professional experience, technical skills, and provides a seamless way to get in touch.

## Overview
WaSoft consists of two main components:

- **API (Back-end):** Azure Functions-based service for handling contact form submissions and sending emails (via SendGrid).
- **Client App (Front-end):** Fast, interactive portfolio site built with React, TypeScript, and Vite.


## Features
- Contact form with secure email delivery
- Multilingual support (English, Polish, Silesian)
- Dynamic resume and portfolio sections
- Modern, responsive UI/UX


## Repository Structure
- [`api/`](api/readme.md) — Azure Functions backend for contact form and email (SendGrid)
- [`client-app/`](client-app/readme.md) — Vite-powered React front-end
- [`templates/`](templates/) — Email templates for contact form


## CI/CD, Hosting & Docker Support
Both the front-end and back-end are hosted on Azure. Automated CI/CD pipelines ensure that the latest changes are deployed seamlessly:

- **Continuous Integration:** Every pull request triggers automated builds and tests.
- **Continuous Deployment:** When changes are merged into the `master` branch, both the API and client app are automatically deployed to Azure using GitHub Actions and Azure Pipelines.

This automation enables rapid delivery of new features and bug fixes with minimal manual intervention.

### Docker Support
WaSoft includes Docker support for local development and deployment. You can build and run the application components in containers using the provided Docker configuration files, making it easy to test and deploy in any environment supporting Docker.


## License
This project is licensed under the MIT License.


---

For more details, see the individual readme files in the [`api`](api/readme.md) and [`client-app`](client-app/readme.md) folders.
