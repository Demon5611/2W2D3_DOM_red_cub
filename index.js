const box = document.querySelector(".box");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

btn1.addEventListener("click", function () {
  box.style[input1.value] = [input2.value];
});

/*не смог прикрутить блок id="very-important-message" из html*/
btn2.addEventListener("click", function () {
  box.innerText = `${input3.value}`;
  box.style.cssText = `
    dyspley: flex;
    text-align: center;
    line-height:300px;
    `;
});
