My Multi-Step Subscription Form App

This project is a multi-step subscription form app built with Angular. It helps users go through various steps to fill in their personal information, select subscription plans, and confirm their choices.
This app demonstrates the use of Angular forms, form validation, and reactive programming to handle user data and multi-step form navigation.

---------------------------------------------------------------------------
  
Technologies Used
This project leverages the following technologies:

Angular: A TypeScript-based open-source web application framework for building reactive single-page applications.
Reactive Forms: Angular's form management strategy to create dynamic and customizable forms.
TypeScript: A strongly typed superset of JavaScript used throughout the app.
RxJS: Reactive programming with observables for managing data flow and events.
HTML/CSS: Markup and styling of the user interface.
Bootstrap: (Optional) For responsive design and UI components.

----------------------------------------------------------------------------

Features
Multi-step form with validations on each step.
Form controls with reactive programming.
Subscription plan selection with dynamic pricing (monthly/yearly toggle).
Smooth form navigation and confirmation step.
Integration with backend services (optional).

----------------------------------------------------------------------------

Installation
Clone the repository:

git clone https://github.com/yourusername/multi-step-subscription-form.git

Install dependencies:
npm install

Run the app:

ng serve

Open your browser and navigate to:
http://localhost:4200
-----------------------------------------------------------------------------

Usage
Personal Information Step: Users provide their personal details such as name, email, and address.
Subscription Plan Step: Users select their desired subscription plan. The pricing is dynamically updated based on the user's selection (monthly or yearly).
Confirmation Step: The final step where users review and confirm their information before submission.
Form Steps Overview
Step 1: Collect personal information such as name, email, address, etc.
Step 2: Display available subscription plans using radio buttons for selection. The pricing changes dynamically based on whether the user selects monthly or yearly billing.
Step 3: Confirmation screen showing a summary of the user's inputs.

