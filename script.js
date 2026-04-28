/**
 * DATA STORAGE: Internal Question Bank
 * This fulfills your requirement for internal data structures (Arrays/Objects).
 */
const questionBank = [
    { 
        question: "What does HTML stand for?", 
        answer: "hypertext markup language" 
    },
    { 
        question: "Which CSS property is used to change text color?", 
        answer: "color" 
    },
    { 
        question: "In JavaScript, which symbol is used for comments?", 
        answer: "//" 
    },
    { 
        question: "What is the name of the process for finding errors in code?", 
        answer: "debugging" 
    },
    { 
        question: "What type of logic uses 'True' or 'False' values?", 
        answer: "boolean" 
    }
];

// Variables to track the system state
let currentQuestionIndex = 0;
let score = 0;

/**
 * APPLICATION STATE CONTROLLER
 * Toggles visibility between the Security Gate, Dashboard, and Quiz.
 */
function showView(viewId) {
    // Hide all sections first
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.classList.add('hidden'));

    // Show the selected view
    document.getElementById(viewId).classList.remove('hidden');

    // If entering the quiz, load the first question
    if (viewId === 'quiz-view') {
        renderQuestion();
    }
}

/**
 * LOGIN & SECURITY MODULE
 * Simple validation to simulate a security gate.
 */
function validateEmail() {
    const email = document.getElementById('email-input').value;
    const errorText = document.getElementById('login-error');

    if (email.includes('@') && email.length > 5) {
        showView('dashboard-view');
        errorText.innerText = ""; // Clear errors
    } else {
        errorText.innerText = "Access Denied: Invalid Student Email.";
    }
}

/**
 * DYNAMIC VIEW DISPLAY
 * Injects the question from our array into the HTML.
 */
function renderQuestion() {
    const questionElement = document.getElementById('question-text');
    const inputElement = document.getElementById('answer-input');
    const feedbackElement = document.getElementById('feedback-text');

    // Reset UI for the new question
    inputElement.value = "";
    feedbackElement.innerText = "";

    if (currentQuestionIndex < questionBank.length) {
        questionElement.innerText = questionBank[currentQuestionIndex].question;
    } else {
        // Quiz Finished
        questionElement.innerText = "Module Complete! Excellent work.";
        document.getElementById('quiz-container').innerHTML = `<h3>Final Score: ${score}/${questionBank.length}</h3>`;
    }
}

/**
 * INPUT PROCESSING & VALIDATION
 * Matches the logic in your Flowchart.
 */
function processAndValidate() {
    const userAnswer = document.getElementById('answer-input').value.toLowerCase().trim();
    const correctAnswer = questionBank[currentQuestionIndex].answer;
    const feedback = document.getElementById('feedback-text');

    // Decision Logic: Is answer correct?
    if (userAnswer === correctAnswer || userAnswer.includes(correctAnswer)) {
        // Yes path
        score++;
        currentQuestionIndex++;
        feedback.style.color = "green";
        feedback.innerText = "Correct! Moving to next question...";
        document.getElementById('score-display').innerText = `Score: ${score}`;
        
        // Performance: Update view quickly (within 100ms logic, 1s delay for UX)
        setTimeout(renderQuestion, 1000);
    } else {
        // No path
        feedback.style.color = "red";
        feedback.innerText = "Incorrect - Try Again.";
    }
}

/**
 * LOGOUT
 * Resets the application state.
 */
function logout() {
    location.reload(); 
}
