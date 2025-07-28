import {questions} from './questions.js';

let currentQuestion = 0;
let correctAnswers = 0;
let totalAnswers = 0;
let currentCategory = 'all';
let filteredQuestions = [...questions];
let questionAttempted = false;

function updateStats() {
    document.getElementById('correct').textContent = correctAnswers;
    document.getElementById('total').textContent = totalAnswers;
    const accuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
    
    const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function filterQuestions() {
    if (currentCategory === 'all') {
        filteredQuestions = [...questions];
    } else {
        filteredQuestions = questions.filter(q => q.category === currentCategory);
    }
    currentQuestion = 0;
    showQuestion();
}

function showQuestion() {
    if (filteredQuestions.length === 0) return;
    
    const question = filteredQuestions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').style.display = 'none';
    questionAttempted = false;
    updateStats();
}

function normalizeCode(code) {
    return code.trim()
                .replace(/\s+/g, ' ')
                .replace(/\s*:\s*/g, ':')
                .replace(/\s*=\s*/g, '=')
                .replace(/\s*,\s*/g, ',')
                .replace(/\s*\(\s*/g, '(')
                .replace(/\s*\)\s*/g, ')')
                .replace(/\s*\[\s*/g, '[')
                .replace(/\s*\]\s*/g, ']')
                .replace(/\s*\{\s*/g, '{')
                .replace(/\s*\}\s*/g, '}');
}

function check() {
    const userAnswer = document.getElementById('answer').value.trim();
    const question = filteredQuestions[currentQuestion];
    const feedback = document.getElementById('feedback');
    
    if (!userAnswer) {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = 'Please write some code first.';
        feedback.style.display = 'block';
        return;
    }

    const normalizedUser = normalizeCode(userAnswer);
    const normalizedCorrect = normalizeCode(question.answer);
    
    let isCorrect = normalizedUser === normalizedCorrect;
    
    if (!isCorrect && question.alternatives) {
        isCorrect = question.alternatives.some(alt => normalizeCode(alt) === normalizedUser);
    }
    
    // Only count towards stats if this is the first attempt on this question
    if (!questionAttempted) {
        totalAnswers++;
        if (isCorrect) {
            correctAnswers++;
        }
        questionAttempted = true;
    }
    
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = 'Correct!';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Incorrect. Expected:<div class="solution">${question.answer}</div>`;
    }
    
    feedback.style.display = 'block';
    updateStats();
}

function hint() {
    const question = filteredQuestions[currentQuestion];
    const feedback = document.getElementById('feedback');
    
    feedback.className = 'feedback hint';
    feedback.innerHTML = question.hint;
    feedback.style.display = 'block';
}

function next() {
    currentQuestion = (currentQuestion + 1) % filteredQuestions.length;
    showQuestion();
}

// Category selection
document.querySelectorAll('.category').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        filterQuestions();
    });
});

// Handle tab and backspace in textarea
document.getElementById('answer').addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        
        // Insert 4 spaces at cursor position
        this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
        
        // Move cursor after the inserted spaces
        this.selectionStart = this.selectionEnd = start + 4;
    } else if (e.key === 'Backspace') {
        const start = this.selectionStart;
        const end = this.selectionEnd;
        
        // If no selection and cursor is after 4 spaces, delete all 4
        if (start === end && start >= 4) {
            const beforeCursor = this.value.substring(start - 4, start);
            if (beforeCursor === '    ') {
                e.preventDefault();
                this.value = this.value.substring(0, start - 4) + this.value.substring(start);
                this.selectionStart = this.selectionEnd = start - 4;
            }
        }
    }
});

// Add on functions to buttons
document.querySelector('.check-btn').addEventListener('click', check);
document.querySelector('.hint-btn').addEventListener('click', hint);
document.querySelector('.next-btn').addEventListener('click', next);

// Initialize
showQuestion();