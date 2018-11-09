'use strict';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 200);
context.lineTo(200, 200);
context.lineTo(200, 100);
context.closePath();
context.fillStyle = '#f00';
context.fill();
