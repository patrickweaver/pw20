---
layout: layouts/blob.hbs
title: Patrick Weaver
pageHeader: Icon
---

<canvas id="canvas" style="
/* border: 1px solid black;  */
/* width: 32px; height: 32px; */
"></canvas>

<script>
  const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

  canvas.width = 400;
  canvas.height = 400;
  
  function drawCanvas3(spacing, lineWidth) {
  ctx.clearRect(0, 0, 400, 400);
  ctx.translate(-0.5, -0.5);
  ctx.lineWidth = parseInt(lineWidth);
  
  // Line 1
  ctx.beginPath();
  ctx.strokeStyle = "#9ea6ff";
  ctx.moveTo(10, 390);
  ctx.lineTo(10, 10);
  ctx.stroke();
  
  // Line 2
  ctx.beginPath();
  ctx.strokeStyle = "#9efff7";
  ctx.moveTo(10 + (30 / 4 * 1), 390);
  ctx.lineTo(10 + (380 / 4 * 1), 10);
  ctx.stroke();

  // Line 3
  ctx.beginPath();
  ctx.strokeStyle = "#ffe79e";
  ctx.moveTo(10 + (30 / 4 * 2), 390);
  ctx.lineTo(10 + (380 / 4 * 2), 10);
  ctx.stroke();

  // Line 4
  ctx.beginPath();
  ctx.strokeStyle = "#ff9ecf";
  ctx.moveTo(10 + (30 / 4 * 3), 390);
  ctx.lineTo(10 + (380 / 4 * 3), 10);
  ctx.stroke();

  // Line 4
  ctx.beginPath();
  ctx.strokeStyle = "#a6ff9e";
  ctx.moveTo(10 + (30 / 4 * 4), 390);
  ctx.lineTo(10 + (380 / 4 * 4), 10);
  ctx.stroke();

  // Line 1
  ctx.beginPath();
  ctx.strokeStyle = "#9ea6ff";
  ctx.moveTo(390 - (30 / 4 * 4), 100);
  ctx.lineTo(390 - (280 / 4 * 4), 390);
  ctx.stroke();
  
  // Line 2
  ctx.beginPath();
  ctx.strokeStyle = "#9efff7";
  ctx.moveTo(390 - (30 / 4 * 3), 100);
  ctx.lineTo(390 - (280 / 4 * 3), 390);
  ctx.stroke();

  // Line 3
  ctx.beginPath();
  ctx.strokeStyle = "#ffe79e";
  ctx.moveTo(390 - (30 / 4 * 2), 100);
  ctx.lineTo(390 - (280 / 4 * 2), 390);
  ctx.stroke();

  // Line 4
  ctx.beginPath();
  ctx.strokeStyle = "#ff9ecf";
  ctx.moveTo(390 - (30 / 4 * 1), 100);
  ctx.lineTo(390 - (280 / 4 * 1), 390);
  ctx.stroke();

  // Line 4
  ctx.beginPath();
  ctx.strokeStyle = "#a6ff9e";
  ctx.moveTo(390, 100);
  ctx.lineTo(390, 390);
  ctx.stroke();

  ctx.resetTransform();
}

drawCanvas3(10, 30)
</script>
