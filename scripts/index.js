import { radioPlayerInit } from './radioPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';

const playerBtn   = document.querySelectorAll('.player-btn'),
      playerBlock = document.querySelectorAll('.player-block'),
      temp        = document.querySelector('.temp');

const deactivation = () => {
    temp.getElementsByClassName.display = 'none';
    
    playerBtn.forEach(btn => {
        btn.classList.remove('active');
    });
    playerBlock.forEach(block => {
        block.classList.remove('active');
    });
}

playerBtn.forEach((btn, i) => {
    btn.addEventListener('click', e => {

        deactivation();

        btn.classList.add('active');
        playerBlock[i].classList.add('active')
    });
});

radioPlayerInit();
videoPlayerInit();
musicPlayerInit();