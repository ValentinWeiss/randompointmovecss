window.onload = function () {
  let buttons = document.getElementsByClassName("btn");
  console.log(buttons);
  for (const btn of buttons) {
    btn.addEventListener("mouseenter", (e) => {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var size = Math.max(rect.width, rect.height) * 2.3;
      e.target.childNodes[0].style.left = x + "px";
      e.target.childNodes[0].style.top = y + "px";
      e.target.childNodes[0].style.width = size + "px";
      e.target.childNodes[0].style.height = size + "px";
    });
    btn.addEventListener("mouseleave", (e) => {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      e.target.childNodes[0].style.left = x + "px";
      e.target.childNodes[0].style.top = y + "px";
      e.target.childNodes[0].style.width = "0px";
      e.target.childNodes[0].style.height = "0px";
    });
  }
};
