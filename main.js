const explanationLabel = Array.from(
  document.querySelectorAll(".explanation-point")
);
const explanationDescription = Array.from(
  document.querySelectorAll(".explanation-item")
);

explanationDescription.forEach((item, index) => {
  item.addEventListener("mouseover", (e) => {
    // console.log("ini ketika hover", e.target);
    // if (e.target.classList.contains("explanation-item")) {
    //   explanationLabel[index].classList.toggle("explanation-hovered");
    explanationLabel[index].classList.add("explanation-hovered");

    // // toggle auto-scroll
    // explanationLabel[index].scrollIntoView();
    // }
  });

  item.addEventListener("mouseleave", (e) => {
    // console.log("ini ketika leave", e.target);
    // if (e.target.classList.contains("explanation-item")) {
    // explanationLabel[index].classList.toggle("explanation-hovered");
    explanationLabel[index].classList.remove("explanation-hovered");
    // }
  });
});
