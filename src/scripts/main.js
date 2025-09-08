'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();

  if (e.target === wall) {
    let coordY = e.clientY - wallCoords.y - wall.clientTop;
    let coordX = e.clientX - wallCoords.x - wall.clientLeft;

    if (coordY < spider.clientHeight / 2) {
      coordY = spider.clientHeight / 2;
    }

    if (coordX < spider.clientWidth / 2) {
      coordX = spider.clientWidth / 2;
    }

    if (coordY > wall.clientHeight - spider.clientHeight / 2) {
      coordY = wall.clientHeight - spider.clientHeight / 2;
    }

    if (coordX > wall.clientWidth - spider.clientWidth / 2) {
      coordX = wall.clientWidth - spider.clientWidth / 2;
    }

    if (
      coordY > 0 &&
      coordY < wall.clientHeight &&
      coordX > 0 &&
      coordX < wall.clientWidth
    ) {
      spider.style.top = coordY - spider.clientHeight / 2 + 'px';
      spider.style.left = coordX - spider.clientWidth / 2 + 'px';
    }
  }
});
