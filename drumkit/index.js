window.addEventListener('keydown', function(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    audio.currentTime = 0;

    if (audio) {
        audio.play();
        key.classList.add('playing');
    }
});

function removeTransition(e) {
    if (e.propertyName == 'transform') {
        this.classList.remove('playing');
    }
}

var keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});