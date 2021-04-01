(function() {
    var svg = d3.select('svg');
    var circle = svg.append("circle")
        .attr("cx", 500)
        .attr("cy", 500)
        .attr("r", 50)
        .style('fill', 'green');
    var a = 5;
    var t = 0;


      function moveCircle() {
        let randomColour = Math.floor(Math.random()*16777215).toString(16);
        let colorCode = "#" + randomColour;
        posX = a * t * Math.cos(t);
        posY = a * t * Math.sin(t);
        console.log(posX, posY)

        circle.transition().duration(1000)
          .attr('cx', posX + 500)
          .attr('cy', posY + 500)
          .style('fill', colorCode);
        if (t !== 100) {
          t += 1;
        } else {
          t = 0;
        }
      };


    circle.on('click', function() {
        moveCircle()
    });

})();


// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function drawCircle(x, y, size) {
//     console.log('Drawing circle at', x, y, size);
//     let randomColour = Math.floor(Math.random()*16777215).toString(16);
//     let colorCode = "#" + randomColour;
//     let circle = svg.append("circle")
//         .attr("cx", x)
//         .attr("cy", y)
//         .attr("r", size)
//         .style('fill', colorCode);
//     circle.transition().duration(550).attr('cx', 0).attr('cy', 0);
//
// }
//
// svg.on('click', function() {
//     var coords = d3.mouse(this);
//     console.log(coords);
//     drawCircle(coords[0], coords[1], getRandom(15,100));
// });
