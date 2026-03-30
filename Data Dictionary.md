userEmail * Data Type: String

Purpose: Stores the unique school email address captured from the Google SSO login to identify the student.

Example: "student2026@school.edu"

isAuthorized * Data Type: Boolean

Purpose: A security flag that stays "False" until the user successfully logs in, then toggles to "True" to allow access to the portal.

Example: True

navState * Data Type: Integer

Purpose: Tracks which module the user is currently viewing to handle the State Driven Navigation (0 for Home, 1 for News, 2 for Sports).

Example: 1

storyTitle * Data Type: String

Purpose: Captures the text input from the "Submit a Story" title field for processing.

Example: "Swimming Carnival Results"

storyContent * Data Type: String

Purpose: Stores the main body of text for a news submission.

Example: "The red house won the relay race..."

isValid * Data Type: Boolean

Purpose: Used during Input Processing to confirm the submission isn't empty before the system attempts to save it.

Example: False

imagePath * Data Type: String

Purpose: Stores the local file path for optimized JPEG images used in the Dynamic View Display.

Example: "images/carnival_optimized.jpg"

newsArray * Data Type: Array

Purpose: An internal data structure that holds multiple "story" objects to be displayed on the News module.

Example: [Object1, Object2, Object3]
