
const slidingimg_wrapper = document.getElementById("slidingimg_wrapper");
const slidingimg = document.getElementById("slidingimg");

document.addEventListener('scroll', () => {
    slidingimg_wrapper.style.marginTop = ((scrollY / 2)) + "px";
    slidingimg.style.transform = "rotate(-" + (scrollY / 24) + "deg)"
});
