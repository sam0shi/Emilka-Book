let player = document.getElementById('player');
let scoreDisplay = document.getElementById('score');
let startButton = document.getElementById('startButton');
let restartButton = document.getElementById('restartButton');
let mainMenuButton = document.getElementById('mainMenuButton');
let finalScoreDisplay = document.getElementById('finalScore');
let welcomeScreen = document.getElementById('welcomeScreen');
let gameContainer = document.getElementById('gameContainer');
let gameOverScreen = document.getElementById('gameOverScreen');

let score = 0;
let playerPosition = 50; // Позиция игрока (в процентах от ширины контейнера)
let gameActive = false;
let enemyInterval; // Переменная для хранения интервала генерации врагов

// Установка начальной позиции игрока
player.style.left = playerPosition + 'vw';

// Обработка нажатий кнопок
document.getElementById('leftButton').addEventListener('click', moveLeft);
document.getElementById('rightButton').addEventListener('click', moveRight);
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
mainMenuButton.addEventListener('click', goToMainMenu);

function moveLeft() {
    if (playerPosition > 5) { // Лимит слева
        playerPosition -= 5;
        player.style.left = playerPosition + 'vw';
    }
}

function moveRight() {
    if (playerPosition < 95) { // Лимит справа
        playerPosition += 5;
        player.style.left = playerPosition + 'vw';
    }
}

function startGame() {
    resetGame(); // Сбросить состояние игры
    gameActive = true;
    welcomeScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    gameOverScreen.style.display = 'none';

    enemyInterval = setInterval(() => {
        if (gameActive) {
            generateEnemy();
        }
    }, 1300);
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = 'Очки: ' + score;

    // Очистить игровое поле от предыдущих врагов и пуль
    let enemies = document.querySelectorAll('.enemy');
    let bullets = document.querySelectorAll('.bullet');
    
    enemies.forEach(enemy => enemy.remove());
    bullets.forEach(bullet => bullet.remove());
}

function generateEnemy() {
    let enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.style.position = 'absolute';
    enemy.style.left = Math.random() * 100 + 'vw'; // Случайная позиция по горизонтали
    enemy.style.top = '0px'; // Начальная позиция врага
    document.getElementById('gameContainer').appendChild(enemy);

    let fallInterval = setInterval(() => {
        let enemyBottom = parseFloat(getComputedStyle(enemy).getPropertyValue('top'));
        
        if (enemyBottom > window.innerHeight) {
            clearInterval(fallInterval);
            enemy.remove();
            score++; // При уклонении от врага
            scoreDisplay.textContent = 'Очки: ' + score;
        } else {
            enemy.style.top = (enemyBottom + 7) + 'px'; // Скорость падения
        }

        // Проверка на столкновение с игроком
        checkCollisionWithEnemy(player, enemy);

        // Вызов функции стрельбы
        if (gameActive && Math.random() < 0.1) { // Вероятность стрельбы
            shoot(enemy);
        }
    }, 100);
}

function shoot(enemy) {
    let bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.position = 'absolute';

    // Центрирование пули относительно врага
    bullet.style.left = enemy.offsetLeft + (enemy.offsetWidth / 2) - 5 + 'px'; 
    bullet.style.top = enemy.offsetTop + enemy.offsetHeight + 'px'; // Пуля создается чуть ниже врага
    document.getElementById('gameContainer').appendChild(bullet);

    let bulletInterval = setInterval(() => {
        let bulletTop = parseFloat(getComputedStyle(bullet).getPropertyValue('top'));
        
        if (bulletTop > window.innerHeight) {
            clearInterval(bulletInterval);
            bullet.remove(); // Удаляем пулю, если она ушла за пределы окна
        } else {
            bullet.style.top = (bulletTop + 5) + 'px'; // Скорость пули
        }

        // Проверка на столкновение с игроком
        checkCollision(player, bullet, bulletInterval);
    }, 20);
}

function checkCollision(player, bullet, interval) {
    let playerBounding = player.getBoundingClientRect();
    let bulletBounding = bullet.getBoundingClientRect();

    // Проверяем пересечение границ пули и игрока
    if (
        playerBounding.left < bulletBounding.right &&
        playerBounding.right > bulletBounding.left &&
        playerBounding.bottom > bulletBounding.top &&
        playerBounding.top < bulletBounding.bottom // Проверка для верхней границы
    ) {
        gameOver();
        clearInterval(interval);
    }
}

function checkCollisionWithEnemy(player, enemy) {
    let playerBounding = player.getBoundingClientRect();
    let enemyBounding = enemy.getBoundingClientRect();

    // Проверяем пересечение границ врага и игрока
    if (
        playerBounding.left < enemyBounding.right &&
        playerBounding.right > enemyBounding.left &&
        playerBounding.bottom > enemyBounding.top &&
        playerBounding.top < enemyBounding.bottom // Проверка для верхней границы
    ) {
        gameOver(); // Игрок умирает при столкновении с врагом
        enemy.remove(); // Удаляем врага, если произошло столкновение
    }
}

function gameOver() {
    gameActive = false;
    clearInterval(enemyInterval); // Остановить генерацию врагов
    gameContainer.style.display = 'none';
    gameOverScreen.style.display = 'block';
    finalScoreDisplay.textContent = 'Ваши очки: ' + score;
}

// Перезапуск игры
function restartGame() {
    resetGame();
    startGame();
}

// Переход на главную страницу
function goToMainMenu() {
    window.location.href = 'index.html'; // Переход на index.html
}


