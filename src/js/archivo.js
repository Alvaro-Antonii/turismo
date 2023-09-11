var animation = bodymovin.loadAnimation({
    container: document.getElementById("anima"),
    path:"https://assets.codepen.io/162656/award.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
    name:"cat"
})

// const animatedEls = document.getElementById("anima");

// for (const animatedEl of animatedEls) {
//   const id = animatedEl.id;
//   lottie.loadAnimation({
//     container: document.getElementById(id),
//     renderer: "svg",
//     loop: true,
//     autoplay: true,
//     path: `https://assets.codepen.io/162656/${id}.json`
//   });
// }