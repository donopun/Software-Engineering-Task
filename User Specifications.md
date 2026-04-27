# Project Overview
## Aim
To deliver instructional content for Stage 6 Software Engineering students through an intuitive web browser interface that responds clearly to user inputs.

# Functional Requirements
## Interactive UI
The system must build a website that functions properly and responds to all user interactions with accurate, visible feedback.
## State Driven Navigation
The UI must maintain an internal state to allow users to toggle between distinct instructional modules and sections of content without a full page reload.
## Input Processing and Validation
The system must capture user inputs and return relevant, logic-based responses. Inputs must be validated before processing  invalid entries must be handled without crashing the application.
## Dynamic View Display
The UI must update in real time to show progress, status, or feedback changes without manual page refreshes.
## Data Storage
The system must use a data structure to store and organise all information including module content, quiz questions, and user progress.

# Non-Functional Requirements
## Performance (Efficiency)
The system must update within 100ms of user interaction for a smooth experience.
Usability
The interface must incorporate the three-click rule — users must be able to find any educational content within three clicks from the main dashboard.
## Data Encryption
The system must handle data securely. All user inputs must be sanitised against XSS. If authentication is added, passwords must use SHA-256 hashing.
## Usability (UX)
The interface must function responsively across desktop and mobile devices using CSS media queries.

# Constraints
## Resource Limitation
Must use free and open source tools only. Must be accessible through a standard web browser with no paid or specialised software required.
## Technology
Development is limited to HTML5, CSS3, Python, and JavaScript.
## Completion Date
Product must be complete by Term 2, Week 2.
## Data Storage
System must use internal data structures — Arrays or Dictionaries — for all data handling. No external database or API permitted.

# Acceptance Criteria
## Performance
Interface responds to user inputs within 100ms with no visible delay during standard use.
## Usability
All instructional content is reachable in a maximum of three clicks from the main dashboard.
## Navigation
Users can navigate between all modules without broken links, incomplete loads, or console errors. 
