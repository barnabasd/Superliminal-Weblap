const wrappers = document.querySelectorAll(".magic");

function recalc() {
    wrappers.forEach(wrapper => {
        const scrollDivider = parseInt(wrapper.getAttribute("data-scroll-divider"));
        const defaultmargindata = wrapper.getAttribute("data-pos").split("-");
        wrapper.style.marginTop = `calc(${parseInt(defaultmargindata[1])}% + ${scrollY / scrollDivider}px)`;
        wrapper.style.marginLeft = defaultmargindata[0] + "%";
        const rotateDivider = parseInt(wrapper.getAttribute("data-rotate-divider"));
        const rotatemod = parseInt(wrapper.getAttribute("data-rotate-add"));
        const positive = wrapper.getAttribute("data-rotate-positive") == "true" ? "" : "-";
        const rotate = (scrollY / rotateDivider) + rotatemod;
        wrapper.style.transform = `rotate(${positive}${rotate}deg)`;
    });
}

document.addEventListener('scroll', recalc);
recalc();
