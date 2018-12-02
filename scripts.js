var cardRow1 = document.querySelector('.card-row-1');
var cardRow2 = document.querySelector('.card-row-2');

function leftScrollOne() {
  cardRow1.scrollLeft += -450;
}

function rightScrollOne() {
  cardRow1.scrollLeft += 450;
}

function leftScroll2() {
  cardRow2.scrollLeft += -450;
}

function rightScroll2() {
  cardRow2.scrollLeft += 450;
}