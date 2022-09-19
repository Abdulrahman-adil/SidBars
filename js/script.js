// let myLis = document.querySelectorAll("ul li");
// let myDivs = document.querySelectorAll(".content div");
// myLis.forEach((element) => {
//   // remove Active Class From All Ele
//   element.onclick = function () {
//     myLis.forEach((element) => {
//       element.classList.remove("active");
//     });
//     // Add Active Class From All Ele
//     this.classList.add("active");
//     // Hide All Divs From All Lis
//     myDivs.forEach((ele) => {
//       ele.style.display = "none";
//     });
//   };
// });

let mytBody = document.querySelectorAll(".table th");

mytBody.forEach((ele) => {
  // remove Active Class From All Ele
  ele.onclick = function () {
    mytBody.forEach((ele) => {
      ele.classList.remove("active");
    });
    // Add Active Class From All Ele
    this.classList.add("active");
  };
});
