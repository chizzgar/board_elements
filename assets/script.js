(() => {
    const reloadTaskBtn = document.querySelector('.reloadTask')
    const checkingTaskBtn = document.querySelector('.checkingTask')
    const chek_answerTxt = document.querySelector('.chek_answer')
    const checkTask = document.querySelector('.checkTask');
    const numders_voice = document.getElementById('numders_voice');
    const soundButton = document.querySelector('.icon_speaker_button');

    let winVar = 1;
    let isPlaying = false;

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
        checkTask.style.background = 'transparent';
        chek_answerTxt.firstElementChild !== null && chek_answerTxt.removeChild(chek_answerTxt.firstElementChild);
        winVar = 1;
    });


    checkingTaskBtn.addEventListener('click', () => {
        if (winVar === 1) {
            chek_answerTxt.innerHTML = '<div><span>&#128516;</span>&#8195;Молодец!</div>'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<div><span>&#128528</span>&#8195;Попробуй еще!</div>'
            checkTask.style.background = 'lightpink'
        }
        winVar = 0;
    });

    
})();