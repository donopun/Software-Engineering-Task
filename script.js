const questionBank = [
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which language adds style to a page?", answer: "css" },
    { question: "A named container for data is called a...", answer: "variable" },
    { question: "True or False: JavaScript is only for browsers.", answer: "false" }
];

let currentIdx = 0;
let score = 0;
let studentName = "";

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    
    if (viewId === 'quiz-view') { renderQuestion(); }
}

function validateEmail() {
    const email = document.getElementById('email-input').value;
    // Extracting a name from the email for the "Welcome" message
    studentName = email.split('@')[0]; 

    if (email.includes('@')) {
        // Show Welcome Screen
        document.getElementById('welcome-msg').innerText = `Welcome, ${studentName}!`;
        showView('dashboard-view');
    } else {
        document.getElementById('login-error').innerText = "Enter a valid email.";
    }
}

function renderQuestion() {
    const qText = document.getElementById('question-text');
    const container = document.getElementById('quiz-container');

    if (currentIdx < questionBank.length) {
        qText.innerText = questionBank[currentIdx].question;
        document.getElementById('answer-input').value = "";
        document.getElementById('feedback-text').innerText = "";
    } else {
        // CONGRATS SCREEN
        container.innerHTML = `
            <h1 style="color: #28a745;">🎉 Congratulations!</h1>
            <p>You finished the Software Engineering Quiz.</p>
            <h2>Final Score: ${score} / ${questionBank.length}</h2>
            <button class="primary-btn" onclick="location.reload()">Restart</button>
        `;
    }
}

function processAndValidate() {
    const userIn = document.getElementById('answer-input').value.toLowerCase().trim();
    const correctIn = questionBank[currentIdx].answer;
    const feedback = document.getElementById('feedback-text');

    if (userIn === correctIn) {
        score++;
        currentIdx++;
        feedback.style.color = "green";
        feedback.innerText = "Correct! Well done.";
        document.getElementById('score-display').innerText = `Score: ${score}`;
        setTimeout(renderQuestion, 1000);
    } else {
        feedback.style.color = "red";
        feedback.innerText = "Try again!";
    }
}
