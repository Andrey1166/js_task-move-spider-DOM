'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();

  let coordY = e.clientY - wallCoords.top - wall.clientTop;
  let coordX = e.clientX - wallCoords.left - wall.clientLeft;

  coordX = Math.max(
    spider.clientWidth / 2,
    Math.min(coordX, wall.clientWidth - spider.clientWidth / 2),
  );

  coordY = Math.max(
    spider.clientHeight / 2,
    Math.min(coordY, wall.clientHeight - spider.clientHeight / 2),
  );

  spider.style.top = coordY - spider.clientHeight / 2 + 'px';
  spider.style.left = coordX - spider.clientWidth / 2 + 'px';
});
