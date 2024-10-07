const button_next = document.getElementById('button_next'),
      block = localStorage.getItem('block'),
      lives = localStorage.getItem('lives'),
      today = new Date().getDate(),
      date_block = new Date(block).getDate() + 1;

const handleSetClick = () => {
    localStorage.setItem('response', JSON.stringify([]))
    window.location.href = './index336.html';
}

document.addEventListener('DOMContentLoaded', () => {
    if (block) {
        if (date_block < today) {
            localStorage.setItem('lives', '3');
            button_next.addEventListener('click', handleSetClick);
        }
    } else {
        if (!block && !lives) {
            localStorage.setItem('lives', '3');
            button_next.addEventListener('click', handleSetClick);
        }
    
        if (!block && lives > 0) {
            button_next.addEventListener('click', handleSetClick);
        }
    }
});