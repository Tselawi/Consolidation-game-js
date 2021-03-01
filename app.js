document.addEventListener('DOMContentLoaded', ()=>{

const myObject = [
    {
       name:'borderVs',
       img: 'images/gaming-border.png' 
    }
]  
const grid = document.querySelector('.grid');

function createBoard() {
    let border = document.createElement('img');
    border.setAttribute('src', 'images/gaming-border.png')
    border.setAttribute('data-id', i)
    grid.appendChild(border);
}
createBoard();
});




