(function() {
    // svg element variables
    var svg = d3.select('svg');
    var circle = svg.append("circle")
        .attr("cx", 500)
        .attr("cy", 500)
        .attr("r", 50)
        .style('fill', 'green');
    // Spiral variables
    var a = 5;
    var t = 0;

    function randomColour() {
      let randomColour = Math.floor(Math.random() * 16777215).toString(16);
      return "#" + randomColour;
    }

    function moveCircle(posX, posY) {
      circle.transition().duration(1000)
        .attr('cx', posX + 500)
        .attr('cy', posY + 500)
        .style('fill', randomColour());
    }

    function moveCircleInSpiral() {
      let posX = a * t * Math.cos(t);
      let posY = a * t * Math.sin(t);
      console.log(posX, posY);
      moveCircle(posX, posY);
      if (t !== 100) {
        t += 1;
      } else {
        t = 0;
      }
    };

    function moveCircleRandomly() {
      let posX = Math.floor(Math.random() * svg.style("width");
      let posY = Math.floor(Math.random() * svg.style("width"));
      console.log(posX, posY);
    }

    circle.on('click', function() {
        moveCircleInSpiral()
    });

})();
