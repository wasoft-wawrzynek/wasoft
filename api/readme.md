# WaSoft API

This folder contains the backend API for the WaSoft project. The API is responsible for handling contact form submissions and sending emails securely and reliably.

## Technologies Used
- **Azure Functions** — Serverless compute for scalable, event-driven execution
- **.NET 6 (C#)** — Modern, high-performance backend development
- **SendGrid** — Email delivery service for contact form notifications

## Tools & Design Patterns
- **Dependency Injection** — For modular, testable code
- **Configuration via `local.settings.json` and `host.json`** — Easy environment management
- **Async/Await** — Efficient, non-blocking I/O operations
- **Separation of Concerns** — Clear division between data models, business logic, and email sending

## Key Features
- Receives and validates contact form data
- Sends emails using SendGrid
- Designed for easy integration with the front-end client app

## CI/CD & Hosting
Automated deployment to Azure is handled via CI/CD pipelines. Any changes merged into the master branch are automatically built and deployed to Azure Functions.

---

For front-end details, see the [`client-app`](../client-app/readme.md) folder.
