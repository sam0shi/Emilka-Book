const stringsArray = [
    "Терпение и труд на хуй идут. ©Эмиль",
    "Все попадают в ад или в рай, а я в дабуди дабудай. ©Мудрец",
    "Искал медь, сгорел медведь. ©Мудрец",
    "Вы мои марионетки, а я ваш куколд. ©Суперзлодей",
    "Лучше обосраться и пожалеть, чем просто обосраться. ©Аташка",
    "Кто посрал и не смывает, по ебалу получает. ©Эми",
    "Когда я хочу послушать умных людей, я просто начинаю говорить. ©Эмиль",
    "Когда я молчу, не стоит меня перебивать. ©Сабака",
    "Запомни, а то забудешь, а что запоминать, я уже забыл. ©Мудрец",
    "7 лет не пил и не курил, а потом меня отдали в школу. ©Сэм",
    "Работа не волк, работа это work. ©Атаджонсон",
    "Что посеешь, то хуй найдёшь. ©Мудрец",
    "Лысый, иди пописай. ©Батя",
    "Ключ разводной знаешь? Я разводил. ©Алекс",
    "Марианскую впадину знаешь? Я замариновал. ©Человек-Шашлык",
    "Кто рано встаёт, тому весь день спать хочется. ©Мудрец",
    "Лето без кваса, как шашлындос без пиваса. ©Человек-Шашлык",
    "Запомните твари... Запомнили? Теперь забудьте! ©Сабака",
    "Ты не ты, когда за тобой бегут менты. ©Узбек младший",
    "Посрать без пука, как шашлык без лука. ©Человек-Шашлык",
    "Don't worry, be happy. Pey wiski, love siski. ©Эми",
    "Бабки не главное, главное - их пенсия. ©Мудрец",
    "Неважно кто с кем спит, главное, чтобы все выспались. ©Батя",
    "Алкоголь - враг человечества, но в библии сказано: 'Возлюби врага своего'. ©Ишшин",
    "Запомните: после чёрной полосы всегда идёт белая. Если тебя сегодня укусила злая собака, то завтра обязательно укусит добрая. ©Мудрец",
    "На работе подарили полотенце с голой женщиной. Жене полотенце понравилось, но голую женщину, к сожалению, пришлось выгнать. ©Сэм",
    "Слышал, что скупой платит дважды, теперь хочу работать у скупого. ©Эмиль",
    "Вина Дизеля знаешь? Я заправил. ©Алекс",
    "Неважно, кто ты, белый или чёрный, главное, что не чёрный. ©Алекс",
    "Когда я упал, звезда загадала желание. ©Алекс",
    "Чем гуще лес, шкибиди доп доп доп йес йес. ©Мудрец",
    "Без труда, скибиди да. ©Мудрец",
    "Не лысел, не мужик. ©Аташка",
    "Если в детстве кушал манку, дашь люлей любому танку. ©Батя",
    "Соединённые штаты знаешь? Я соединил. ©Алекс",
    "Как говорил мой дед: 'Я твой дед'. ©Эми ",
    "Stone island знаешь? Я заставил стонать. ©Алекс ",
    "У меня два кулака: один для дрочки, другой для твоей почки. ©Эмиль",
    "У кого не лысая башка, у того хуй меньше половины пирожка. ©Аташка",
    "Если совы заключают союз, то это советский союз. ©Батя",
    "Знаешь что такое заземление? Я заземлил. ©Алекс",
    "Важно не то, что не важно, а важно то, что важно. ©Аташка",
    "Суп из одной рыбы называется уха, а из 5 рыб УХАХАХАХАХА. ©Мудрец",
    "Хозяйство вести, не хером трясти. ©Батя ©Эмиль",
    "Боюсь только Аллаха и пьяного казаха. ©Хан Еблан",
    "Позвоночник знаешь? Я позвонил. ©Алекс",
    "Кто знает... Тот знает. ©Мудрец",
    "Раньше я думал, что вечной любви не существует. Потом я встретил Эмиля. ©Батя",
    "И у мужчин, и у женщин бывают невероятно тяжелые моменты в жизни. У женщин — роды. У мужчин — миссия в ГТА с вертолетиком. ©Эми",
    "Я всегда говорю правду, даже когда вру. ©Алекс",
    "Работа не волк. Никто не волк. Только волк — волк. ©Атаджонсон",
    "Делай, как надо. Как не надо, не делай. ©Мудрец",
    "Я себе ни в чем не отказываю, и всем советую ни в чем мне не отказывать. ©Алекс",
    "Очко - понятие растяжимое. ©Батя ©Эмиль ©Аташка",
    "Остановку знаешь? Я остановил. ©Алекс",
    "Вы имеете право, но не имеете лево. ©Руи",
    "Шаг в лево, шаг в право - это два шага. ©Агашка",
    "Топлёное молоко знаешь? Я утопил. ©Алекс",
    "Завтра рано вставать, встану послезавтра. ©Мудрец",
    "Если заблудился в лесу, то иди домой. ©Эмиль",
    "Не бойся когда ты один, бойся когда ты два. ©Аташка",
    "Не важно кто прав, важно кто лев. ©Мудрец",
    "Собакам нельзя доверять, потому что они издают Lie. ©Люцифер",
    "Любишь яйца жухать, люби и пальцы нюхать. ©Батя",
    "Льва Толствого знаешь? Я накормил. ©Алекс",
    "У всех лысых одинаковые причёски. ©Аташка",
    "Семь раз отпей, один раз отлей. ©Мудрец",
    "Горчицу знаешь? Я огорчил. ©Алекс",
    "Три слова - это два слова. ©Мудрец",
    "Неудобно - это когда выпрашивал и не стоит. ©Марид",
    "Никогда не сдавайся, ты же не квартира. ©Алекс",
    "Это не у меня нет девушки, это ни у одной девушки нет меня. ©Эми",
    "Я бы выиграл, если б не проиграл. ©Суперзлодей ©Сабака",
    "Левой дрочу, правой жопу щекочу. ©Батя",
    "Избил бомжа, что бы он спал в больнице, а не на улице. ©Эмиль",
    "Не сдал экзамен по русскому языку, потому что он родной, а родных не сдают. ©Кофе",
    "Я встаю чтобы разбудить будильник. ©Мудрец",
    "Обожаю гулять по болотам, очень затягивает. ©Мудрец"

];

// Функция для генерации случайного значения
let remainingStrings = [...stringsArray];

// Функция для генерации случайного значения
function getRandomString() {
    if (remainingStrings.length === 0) {
        // Если все строки были показаны, сбросить массив
        remainingStrings = [...stringsArray]; 
    }
    
    // Выбор случайной строки
    const randomIndex = Math.floor(Math.random() * remainingStrings.length);
    const randomString = remainingStrings[randomIndex];

    // Удаляем выбранную строку из массива оставшихся строк
    remainingStrings.splice(randomIndex, 1);

    return randomString;
}

// Обработчик события для кнопки
document.getElementById('random-button').addEventListener('click', function() {
    const randomString = getRandomString();
    document.getElementById('result').textContent = randomString;
});

// Функция для проверки размера окна
function checkWindowSize() {
    const existingMessage = document.querySelector('.message');

    if (window.innerWidth >= 950) {
        // Очищаем всё содержимое body, кроме сообщения
        if (!existingMessage) {
            document.body.innerHTML = ''; // Удаляем все элементы
            const message = document.createElement('div');
            message.className = 'message';
            message.innerText = 'Сайт доступен только на мобильных устройствах.';
            document.body.appendChild(message);
        }
    } else {
        // Удаляем сообщение и восстанавливаем весь контент сайта
        if (existingMessage) {
            existingMessage.remove(); // Удаляем сообщение из DOM
        }
        // Здесь можно добавить логику для восстановления контента, если это необходимо
    }
}

// Проверяем размер окна при загрузке страницы
checkWindowSize();

// Проверяем размер окна при изменении размера
window.addEventListener('resize', checkWindowSize);


 // Функция, которая будет выполняться при нажатии кнопки
 document.getElementById('minigame').onclick = function() {
    window.location.href = 'indexemilo.html'; 
};
