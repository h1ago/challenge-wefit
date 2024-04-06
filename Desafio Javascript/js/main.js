const btnSecondaryCss = {
    'background-color': '#27a844',
    'border-color': '#27a844',
}

$('.btn-group-vertical').css({
    'flex-direction': 'initial',
    'flex-wrap': 'wrap',
    'gap': '4px'
});

$('.btn-group-vertical > .btn').css({
    'width': 'auto',
    'border-radius': '0.25rem'
});

$('.jumbotron').css({
    'background-color': '#6b757e',
    'text-align': 'end',
    'color': 'var(--white)'
});

$('.jumbotron a').css(btnSecondaryCss);

$('.jumbotron hr').css({
    'border-color': '#c1c2c4'
});

$('.card-body:has(h5.card-title:contains("Animais")) a').css(btnSecondaryCss);

const cardContainer = document.querySelectorAll('.row')[2];
const cardSelectors = document.querySelectorAll('.col-lg-3');
const cards = Array.from(cardSelectors);

const sortedCards = [
    cards[3],
    cards[0],
    cards[2],
    cards[1]
];

cards.forEach(card => cardContainer.removeChild(card));
sortedCards.forEach(card => cardContainer.appendChild(card));

const list = document.querySelector('.list-group');
const newItems = ["Quarto item", "Quinto item"];
newItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = item;
    list.appendChild(li);
})

const listItems = document.querySelectorAll('.list-group-item');
listItems[0].classList.remove('active');
listItems[3].classList.add('active');