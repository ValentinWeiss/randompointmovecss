window.onload = function () {
  let buttons = document.getElementsByClassName("btn");
  console.log(buttons);
  let num = 1;
  for (const btn of buttons) {
    btn.addEventListener("mouseenter", (e) => {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var size = Math.max(rect.width, rect.height) * 2.3;
      console.log(e.target);
      console.log(e.target.childNodes);
      e.target.childNodes[num].style.left = x + "px";
      e.target.childNodes[num].style.top = y + "px";
      e.target.childNodes[num].style.width = size + "px";
      e.target.childNodes[num].style.height = size + "px";
    });
    btn.addEventListener("mouseleave", (e) => {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      e.target.childNodes[num].style.left = x + "px";
      e.target.childNodes[num].style.top = y + "px";
      e.target.childNodes[num].style.width = "0px";
      e.target.childNodes[num].style.height = "0px";
    });
  }
};
