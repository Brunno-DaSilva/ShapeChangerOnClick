$(() => {
  //Variable Counter
  let counter = 0;

  $(".row").on("click", "div", event => {
    if (counter === 0) {
      $(event.currentTarget).attr("class", "circle");
    } else if (counter === 1) {
      $(event.currentTarget).attr("class", "square");
    } else if (counter === 2) {
      $(event.currentTarget).attr("class", "triangle-down");
    } else if (counter === 3) {
      $(event.currentTarget).attr("class", "octagon");
    } else if (counter === 4) {
      $(event.currentTarget).attr("class", "heart");
    } else if (counter === 5) {
      $(event.currentTarget).attr("class", "triangle");
      counter = -1;
    }
    counter++;
  });
});
