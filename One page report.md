# Project Report


## 1. Project Purpose
The goal of this project was to build a functional, browser based tool that moves beyond static text to teach Software Engineering concepts. I wanted to create a "sandbox" where users could see immediate responses to their actions. The project specifically targets the "Logic and Algorithms" sector of the syllabus, providing a guided interface that uses real code behavior to explain abstract programming structures.



## 2. Key Design Decisions

### **Development Workflow**
Even as a solo project, I moved away from a rigid Waterfall model. I used an **Agile inspired approach**, building the core JavaScript subprograms first before touching the CSS. This meant I had a working "engine" for the logic puzzles and data handling early on. By prioritizing functionality over aesthetics in the first week, I was able to spend more time debugging the parameter passing between my main modules.

### **Interface & UX Strategy**
I decided on a "Single Page Application" (SPA) feel to keep the user experience seamless. 
* **The 3 Click Rule:** I mapped the navigation so that no educational module is more than three clicks away. 
* **Directions & Responses:** I built a dedicated 'Feedback Header' that updates dynamically. Instead of generic alerts, the system uses custom DOM updates to show the user the direct result of their logic choices.
* **Security Gate:** I chose to implement a custom "Bot Check" puzzle at the start. This wasn't just for flair it serves as a practical demonstration of **Selection** logic for the student before they even access the main content.

### **Technical Stack & Data Handling**
I stuck to Vanilla JS, HTML5, and CSS3 to ensure the project remains lightweight and portable. For data storage, I implemented a **JavaScript Array of Objects**. This allows the system to scale; if I want to add a new "Sorting" or "SDLC" module, I just add a new object to the array rather than hardcoding a new HTML page.



## 3. System Functionality

### **Core Features**
* **Interactive Modules:** Users engage with logic based scenarios that provide real time feedback.
* **Navigation Logic:** A central subprogram handles all transitions, ensuring that the global state (user progress) is maintained.
* **Responsive Layout:** The CSS is built to handle different screen sizes, ensuring the educational content is readable on both laptops and tablets.

### **Code Architecture**
The project is heavily modularized. I made the decision to use **subprograms with parameter passing** for almost every interaction. For example, the function that renders the "Directions" takes a string parameter, allowing me to reuse the same block of code for every different stage of the app. This kept the script file clean and significantly reduced the time I spent fixing syntax errors during the debugging phase.


## 4. Version Control
The project was developed and documented using GitHub. This acted as my secure storage and allowed me to keep a detailed commit history. Having a "Safety Net" was vital when implementing the more complex iteration loops if a loop broke the browser, I could easily revert to a previous stable build.
