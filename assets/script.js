(() => {
    const reloadTaskBtn = document.querySelector('.reloadTask')
    const checkingTaskBtn = document.querySelector('.checkingTask')
    const chek_answerTxt = document.querySelector('.chek_answer')
    const checkTask = document.querySelector('.checkTask');

    const numders_voice = document.getElementById('numders_voice');
    const numders_voice_black = document.getElementById('numders_voice_black');

    const soundButton = document.querySelector('.icon_speaker_button');
    const soundButton_black = document.querySelector('.buttonPlayPausePlayPause_wrap');

    const check_button_old = document.querySelector('.check_your');
    const result_in_head = document.querySelector('.result');
    const reloadTaskBtn_old = document.querySelector('.drop');
    
    

    let winVar = 1;
    let isPlaying = false;
    let isPlaying_black = false;

    soundButton.addEventListener('click', soundPlayPause, false);
    function soundPlayPause() {
        isPlaying ? numders_voice.pause() : numders_voice.play();
    }

    numders_voice.onplaying = function () {
        soundButton.classList.add('animatingSoundIconPlay');
        soundButton.classList.remove('staticSoundIconPause');
        isPlaying = true;
    };
    numders_voice.onpause = function () {
        soundButton.classList.remove('animatingSoundIconPlay');
        soundButton.classList.add('staticSoundIconPause');
        isPlaying = false;
    };

    numders_voice.onended = function () {
        soundButton.classList.remove('animatingSoundIconPlay');
        soundButton.classList.remove('staticSoundIconPause');
        isPlaying = false;
    };

    reloadTaskBtn.addEventListener('click', () => {
        checkTask.classList.remove('chek_answer_rightChoice_color');
        checkTask.classList.remove('chek_answer_wrongChoice_color');
        chek_answerTxt.firstElementChild !== null && chek_answerTxt.removeChild(chek_answerTxt.firstElementChild);
        winVar = 1;
    });

    soundButton_black.addEventListener('click', (e) => onSoundIconClick(e), false);
    function onSoundIconClick(e) {
        // let isPlaying_black = false;
        e.stopPropagation()
        isPlaying ? numders_voice_black.pause() : numders_voice_black.play();
        e.target.classList.toggle('buttonPlayPause--active');
        numders_voice_black.onplaying = function () {
            isPlaying = true;
        };
        numders_voice_black.onpause = function () {
            isPlaying = false;
        };
        numders_voice_black.onended = function () {
            e.target.classList.remove('buttonPlayPause--active');
            isPlaying = false;
        };
    }

    check_button_old.addEventListener('click', onBtnTestClick, false);
    function onBtnTestClick() {
        if (winVar === 1) {
            result_in_head.classList.add('result_win')
        } else {
            result_in_head.classList.remove('result_win')
            result_in_head.classList.add('result_lose')
        }
        winVar = 0; 
    }

    reloadTaskBtn_old.addEventListener('click', () => {
        result_in_head.classList.remove('result_win')
        result_in_head.classList.remove('result_lose')
        winVar = 1;
    });

    checkingTaskBtn.addEventListener('click', () => {
        if (winVar === 1) {
            chek_answerTxt.innerHTML = '<div class="answer_indicator">&#128516;&nbsp;&nbsp;Молодец!</div>';
            checkTask.classList.add('chek_answer_rightChoice_color');
            checkTask.classList.remove('chek_answer_wrongChoice_color');
        } else {
            chek_answerTxt.innerHTML = '<div class="answer_indicator">&#128528;&nbsp;&nbsp;Попробуй&nbsp;еще!</div>';
            checkTask.classList.add('chek_answer_wrongChoice_color');
            checkTask.classList.remove('chek_answer_rightChoice_color');
        }
        winVar = 0;
    });



})();