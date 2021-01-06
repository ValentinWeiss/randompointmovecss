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

  let inputs = document.getElementsByClassName("inputstyleinput");
  console.log(inputs);
  for (const btn of inputs) {
    let curX = null;
    let curY = null;
    btn.addEventListener("mousemove", (e) => {
      curX = e.clientX;
      curY = e.clientY;
    });
    btn.addEventListener("focusin", (e) => {
      var rect = e.target.getBoundingClientRect();
      var x = curX - rect.left;
      var y = curY - rect.top;
      var size = Math.max(rect.width, rect.height) * 2.3;
      let svg = e.target.parentNode.childNodes[1];
      svg.style.left = x + "px";
      svg.style.top = y + "px";
      svg.style.width = size + "px";
      svg.style.height = size + "px";
    });
    btn.addEventListener("focusout", (e) => {
      var rect = e.target.getBoundingClientRect();
      var x = curX - rect.left;
      var y = curY - rect.top;
      let svg = e.target.parentNode.childNodes[1];
      svg.style.left = x + "px";
      svg.style.top = y + "px";
      svg.style.width = "0px";
      svg.style.height = "0px";
    });
  }
};
