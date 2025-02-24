let dino = document.getElementById('dino');
let obstacle = document.getElementById('obstacle');
let scoreDisplay = document.getElementById('score');
let score = 0;
let isJumping = false;
let speed = 6; // Скорость движущегося препятствия

const obstacleModels = [
    'big-penis.png',
    'tiny-penis.png',
    'big-triple-penis.png'
];

const JUMP_HEIGHT = 80; // Максимальная высота прыжка

function startGame() {
    document.getElementById('welcomeScreen').style.display = 'none'; // Скрываем экран приветствия
    document.getElementById('gameContainer').style.display = 'block'; // Показываем игровое поле
    generateObstacle(); // Запускаем генерацию препятствий
}

// Функция для прыжка
function jump() {
    if (isJumping) return;
    isJumping = true;
    let jumpHeight = 0;

    let upInterval = setInterval(() => {
        if (jumpHeight >= JUMP_HEIGHT) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                jumpHeight -= 5;
                dino.style.bottom = jumpHeight + 'px';
            }, 20);
        }
        jumpHeight += 5;
        dino.style.bottom = jumpHeight + 'px';
    }, 20);
}

// Генерация препятствий
function generateObstacle() {
    let randomTime = Math.random() * 2000 + 1000; // В случайном диапазоне времени
    obstacle.style.left = '100%'; // Начальное положение справа
    obstacle.style.display = 'block';
    
    // Случайный выбор модели препятствия
    let randomObstacle = obstacleModels[Math.floor(Math.random() * obstacleModels.length)];
    obstacle.style.backgroundImage = `url(${randomObstacle})`;

    const moveObstacle = setInterval(() => {
        let obstaclePosition = parseInt(obstacle.style.left);
        let dinoBottomPosition = parseInt(window.getComputedStyle(dino).bottom);

        // Проверка на столкновение
        if (obstaclePosition <= 60 && obstaclePosition > 20) {
            // Проверка на то, что динозавр на земле (не прыгает) или ниже определенной высоты
            if (!isJumping && dinoBottomPosition <= JUMP_HEIGHT) {
                clearInterval(moveObstacle);
                alert('Игра окончена! Ваш счет: ' + score);
                resetGame();
            }
        }

        if (obstaclePosition <= -30) { // Учитываем размер препятствия
            clearInterval(moveObstacle);
            obstacle.style.display = 'none';
            score++;
            scoreDisplay.innerText = score;
        }

        obstacle.style.left = obstaclePosition - speed + 'px';
    }, 20);

    setTimeout(generateObstacle, randomTime); // Рекурсивный вызов для генерации следующего препятствия
}

function resetGame() {
    score = 0;
    scoreDisplay.innerText = score;
    obstacle.style.display = 'none';
}

// Обработчик события для начала игры
document.getElementById('startButton').onclick = startGame;

// Управление
document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);


document.getElementById('back').onclick = function() {
    window.location.href = 'index.html'; // Укажите здесь путь к вашей странице
};