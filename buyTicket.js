


const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.modal-close');

function showBuyTickets() {
    modal.classList.add('open');
}
function closeByTicket() {
    modal.classList.remove('open');
}
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}
modalClose.addEventListener('click', closeByTicket);
modal.addEventListener('click', closeByTicket);
modalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
});

