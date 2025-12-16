// ===== QUIZ DATA =====
const quizData = {
    easy: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correct: 1
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "How many days are in a week?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What color is the sky on a clear day?",
            options: ["Green", "Blue", "Red", "Yellow"],
            correct: 1
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correct: 3
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is the opposite of hot?",
            options: ["Warm", "Cold", "Cool", "Freezing"],
            correct: 1
        },
        {
            question: "Which animal is known as the King of the Jungle?",
            options: ["Tiger", "Elephant", "Lion", "Bear"],
            correct: 2
        },
        {
            question: "How many hours are in a day?",
            options: ["12", "24", "36", "48"],
            correct: 1
        }
    ],
    medium: [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
            correct: 2
        },
        {
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            correct: 0
        },
        {
            question: "Which programming language is known as the 'language of the web'?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correct: 2
        },
        {
            question: "What year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2
        },
        {
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            correct: 2
        },
        {
            question: "Which country has the largest population?",
            options: ["India", "USA", "China", "Indonesia"],
            correct: 2
        },
        {
            question: "What is the square root of 144?",
            options: ["10", "11", "12", "13"],
            correct: 2
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1
        },
        {
            question: "What is the boiling point of water in Celsius?",
            options: ["90°C", "95°C", "100°C", "105°C"],
            correct: 2
        }
    ],
    hard: [
        {
            question: "What is the time complexity of QuickSort in the average case?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            correct: 1
        },
        {
            question: "Which physicist developed the theory of general relativity?",
            options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
            correct: 2
        },
        {
            question: "What is the Heisenberg Uncertainty Principle related to?",
            options: ["Thermodynamics", "Quantum Mechanics", "Classical Mechanics", "Relativity"],
            correct: 1
        },
        {
            question: "In which year was the first computer virus created?",
            options: ["1971", "1983", "1986", "1991"],
            correct: 0
        },
        {
            question: "What is the derivative of sin(x)?",
            options: ["cos(x)", "-cos(x)", "tan(x)", "-sin(x)"],
            correct: 0
        },
        {
            question: "Which element has the atomic number 79?",
            options: ["Silver", "Platinum", "Gold", "Mercury"],
            correct: 2
        },
        {
            question: "What is the Riemann Hypothesis concerned with?",
            options: ["Prime numbers", "Geometry", "Algebra", "Calculus"],
            correct: 0
        },
        {
            question: "Who proved Fermat's Last Theorem?",
            options: ["Andrew Wiles", "Pierre de Fermat", "Leonhard Euler", "Carl Gauss"],
            correct: 0
        },
        {
            question: "What is the half-life of Carbon-14?",
            options: ["5,730 years", "10,000 years", "1,000 years", "50,000 years"],
            correct: 0
        },
        {
            question: "In computer science, what does 'NP' stand for in 'NP-complete'?",
            options: ["Non-Polynomial", "Nondeterministic Polynomial", "New Polynomial", "Non-Prime"],
            correct: 1
        }
    ]
};

// ===== STATE MANAGEMENT =====
let currentDifficulty = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timerInterval = null;
let isDarkMode = false;

// ===== DOM ELEMENTS =====
const themeToggle = document.getElementById('themeToggle');
const difficultyScreen = document.getElementById('difficultyScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const selectButtons = document.querySelectorAll('.select-btn');
const difficultyBadge = document.getElementById('difficultyBadge');
const timer = document.getElementById('timer');
const progressBar = document.getElementById('progressBar');
const questionCounter = document.getElementById('questionCounter');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('restartBtn');
const particleCanvas = document.getElementById('particleCanvas');

// ===== THEME TOGGLE =====
themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    
    // Update difficulty mode class if quiz is active
    if (currentDifficulty) {
        updateDifficultyTheme();
    }
    
    // Start/stop particles for hard mode
    if (isDarkMode && currentDifficulty === 'hard') {
        startParticles();
    } else {
        stopParticles();
    }
});

// ===== DIFFICULTY SELECTION =====
selectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentDifficulty = btn.dataset.difficulty;
        startQuiz();
    });
});

// ===== UPDATE DIFFICULTY THEME =====
function updateDifficultyTheme() {
    document.body.classList.remove('easy-mode', 'medium-mode', 'hard-mode');
    if (isDarkMode && currentDifficulty) {
        document.body.classList.add(`${currentDifficulty}-mode`);
        
        if (currentDifficulty === 'hard') {
            startParticles();
        } else {
            stopParticles();
        }
    }
}

// ===== START QUIZ =====
function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData[currentDifficulty].length).fill(null);
    startTime = Date.now();
    
    // Update theme
    updateDifficultyTheme();
    
    // Show quiz screen
    difficultyScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    // Set difficulty badge
    difficultyBadge.textContent = currentDifficulty;
    difficultyBadge.className = `difficulty-badge ${currentDifficulty}`;
    
    // Start timer
    startTimer();
    
    // Load first question
    loadQuestion();
}

// ===== TIMER =====
function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        timer.textContent = `⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// ===== LOAD QUESTION =====
function loadQuestion() {
    const questions = quizData[currentDifficulty];
    const question = questions[currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    
    // Load options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.dataset.index = index;
        
        // Highlight if already answered
        if (userAnswers[currentQuestionIndex] === index) {
            btn.classList.add('selected');
        }
        
        btn.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(btn);
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Show submit button on last question
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// ===== SELECT OPTION =====
function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    
    // Update UI
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
}

// ===== NAVIGATION =====
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    const questions = quizData[currentDifficulty];
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

submitBtn.addEventListener('click', () => {
    stopTimer();
    showResults();
});

// ===== SHOW RESULTS =====
function showResults() {
    const questions = quizData[currentDifficulty];
    const totalQuestions = questions.length;
    let correctCount = 0;
    
    // Calculate score
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const incorrectCount = totalQuestions - correctCount;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    const timeTaken = timer.textContent.replace('⏱️ ', '');
    
    // Determine performance badge
    let badgeClass = 'beginner';
    let badgeText = '🥉 Beginner';
    if (accuracy >= 75) {
        badgeClass = 'advanced';
        badgeText = '🥇 Advanced';
    } else if (accuracy >= 50) {
        badgeClass = 'intermediate';
        badgeText = '🥈 Intermediate';
    }
    
    // Update results screen
    document.getElementById('scoreValue').textContent = correctCount;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('incorrectAnswers').textContent = incorrectCount;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    document.getElementById('timeTaken').textContent = timeTaken;
    
    const performanceBadge = document.getElementById('performanceBadge');
    performanceBadge.textContent = badgeText;
    performanceBadge.className = `performance-badge ${badgeClass}`;
    
    // Show results screen
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
}

// ===== RESTART QUIZ =====
restartBtn.addEventListener('click', () => {
    stopTimer();
    stopParticles();
    currentDifficulty = null;
    document.body.classList.remove('easy-mode', 'medium-mode', 'hard-mode');
    resultsScreen.classList.remove('active');
    difficultyScreen.classList.add('active');
});

// ===== PARTICLE SYSTEM (Hard Mode) =====
let particles = [];
let animationId = null;
const ctx = particleCanvas.getContext('2d');

class Particle {
    constructor() {
        this.reset();
        this.y = Math.random() * particleCanvas.height;
        this.opacity = Math.random() * 0.5 + 0.3;
    }
    
    reset() {
        this.x = Math.random() * particleCanvas.width;
        this.y = -10;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = Math.random() * 0.8 + 0.3;
        this.color = this.getRandomColor();
        this.opacity = Math.random() * 0.5 + 0.3;
    }
    
    getRandomColor() {
        // Elite hacker colors - cyan, magenta, yellow, green
        const colors = [
            'rgba(0, 255, 255, ',    // Cyan
            'rgba(255, 0, 255, ',    // Magenta
            'rgba(255, 255, 0, ',    // Yellow
            'rgba(0, 255, 0, '       // Green
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Gentle floating motion
        this.x += Math.sin(Date.now() * 0.001 + this.y) * 0.1;
        
        if (this.y > particleCanvas.height || this.x < -10 || this.x > particleCanvas.width + 10) {
            this.reset();
        }
    }
    
    draw() {
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color + '0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    // Fewer particles for a more cinematic, less busy feel
    for (let i = 0; i < 35; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    animationId = requestAnimationFrame(animateParticles);
}

function startParticles() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    initParticles();
    animateParticles();
}

function stopParticles() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles = [];
}

// Resize canvas on window resize
window.addEventListener('resize', () => {
    if (isDarkMode && currentDifficulty === 'hard') {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    }
});

// ===== INITIALIZATION =====
console.log('Quiz Platform Loaded Successfully! 🚀');

// ===== MOBILE SWIPE GESTURES =====
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

function handleSwipe() {
    const swipeThreshold = 50;
    const horizontalSwipe = Math.abs(touchEndX - touchStartX);
    const verticalSwipe = Math.abs(touchEndY - touchStartY);
    
    // Only handle horizontal swipes (ignore vertical scrolling)
    if (horizontalSwipe > verticalSwipe && horizontalSwipe > swipeThreshold) {
        if (touchEndX < touchStartX) {
            // Swipe left - Next question
            if (quizScreen.classList.contains('active') && !nextBtn.disabled && nextBtn.style.display !== 'none') {
                nextBtn.click();
                showSwipeIndicator('Next Question →');
            }
        }
        
        if (touchEndX > touchStartX) {
            // Swipe right - Previous question
            if (quizScreen.classList.contains('active') && !prevBtn.disabled) {
                prevBtn.click();
                showSwipeIndicator('← Previous Question');
            }
        }
    }
}

function showSwipeIndicator(text) {
    let indicator = document.querySelector('.swipe-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'swipe-indicator';
        document.body.appendChild(indicator);
    }
    
    indicator.textContent = text;
    indicator.classList.add('show');
    
    setTimeout(() => {
        indicator.classList.remove('show');
    }, 1000);
}

// Add touch event listeners
document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // Only handle keyboard events when quiz is active
    if (!quizScreen.classList.contains('active')) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            if (!prevBtn.disabled) {
                prevBtn.click();
                showKeyboardHint('Previous Question');
            }
            break;
            
        case 'ArrowRight':
            if (!nextBtn.disabled && nextBtn.style.display !== 'none') {
                nextBtn.click();
                showKeyboardHint('Next Question');
            } else if (submitBtn.style.display !== 'none') {
                submitBtn.click();
            }
            break;
            
        case '1':
        case '2':
        case '3':
        case '4':
            const optionIndex = parseInt(e.key) - 1;
            const optionButtons = optionsContainer.querySelectorAll('.option-btn');
            if (optionButtons[optionIndex]) {
                optionButtons[optionIndex].click();
                showKeyboardHint(`Selected Option ${e.key}`);
            }
            break;
            
        case 'Enter':
            if (submitBtn.style.display !== 'none') {
                submitBtn.click();
            } else if (!nextBtn.disabled && nextBtn.style.display !== 'none') {
                nextBtn.click();
            }
            break;
    }
});

function showKeyboardHint(text) {
    let hint = document.querySelector('.keyboard-hint');
    if (!hint) {
        hint = document.createElement('div');
        hint.className = 'keyboard-hint';
        hint.innerHTML = `
            <div style="margin-bottom: 8px; font-weight: 600;">⌨️ Keyboard Shortcuts</div>
            <div><kbd>←</kbd> <kbd>→</kbd> Navigate</div>
            <div><kbd>1</kbd>-<kbd>4</kbd> Select Option</div>
            <div><kbd>Enter</kbd> Submit/Next</div>
        `;
        document.body.appendChild(hint);
    }
    
    hint.classList.add('show');
    
    setTimeout(() => {
        hint.classList.remove('show');
    }, 3000);
}

// Show keyboard hint on first quiz load (desktop only)
let keyboardHintShown = false;
function showInitialKeyboardHint() {
    if (!keyboardHintShown && window.innerWidth > 768) {
        keyboardHintShown = true;
        setTimeout(() => {
            showKeyboardHint('');
        }, 1000);
    }
}

// ===== VISUAL FEEDBACK FOR SELECTED OPTIONS =====
function updateOptionSelection() {
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, index) => {
        if (userAnswers[currentQuestionIndex] === index) {
            btn.classList.add('selected');
            btn.innerHTML = `✓ ${quizData[currentDifficulty][currentQuestionIndex].options[index]}`;
        } else {
            btn.classList.remove('selected');
            btn.textContent = quizData[currentDifficulty][currentQuestionIndex].options[index];
        }
    });
}

// Update the selectOption function to include visual feedback
const originalSelectOption = selectOption;
selectOption = function(index) {
    originalSelectOption(index);
    updateOptionSelection();
};

// ===== ENHANCED START QUIZ =====
const originalStartQuiz = startQuiz;
startQuiz = function() {
    originalStartQuiz();
    showInitialKeyboardHint();
};

// ===== MOBILE ORIENTATION CHANGE =====
window.addEventListener('orientationchange', () => {
    if (isDarkMode && currentDifficulty === 'hard') {
        setTimeout(() => {
            particleCanvas.width = window.innerWidth;
            particleCanvas.height = window.innerHeight;
        }, 100);
    }
});

// ===== PREVENT ACCIDENTAL NAVIGATION =====
window.addEventListener('beforeunload', (e) => {
    if (quizScreen.classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '';
    }
});

console.log('🎮 Mobile gestures enabled: Swipe left/right to navigate');
console.log('⌨️ Keyboard shortcuts enabled: Arrow keys, 1-4, Enter');
