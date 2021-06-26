for(i=0;i<870;i++)
{
   let box=document.createElement("div");
   box.className="box";
   container.appendChild(box);
}
let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.classList.toggle("chgclr");
  });
});