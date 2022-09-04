const accordionHeaders = document.querySelectorAll(".accordion-header");
const acctiveStr = "is-active";

[...accordionHeaders].forEach(item => item.addEventListener("click", handleClickAccordion));
function handleClickAccordion(e) {
    const content = e.target.nextElementSibling;
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle(acctiveStr);
    if(!content.classList.contains("is-active")) {
    content.style.height = "0px";
    }
    const icon = e.target.querySelector(".icon")
    icon.classList.toggle("fa-angle-down")
    icon.classList.add("fa-angle-up")
}
