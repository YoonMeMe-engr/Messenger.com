const mobilemenuTag = document.querySelector(".mobilemenu");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const overLayMenuTag = document.querySelector(".overLayMenu");
const rightTag = document.querySelector(".right");
const footerTag = document.querySelector(".footer");
const motherTag = document.querySelector(".mother");

mobilemenuTag.addEventListener("click" , () => {
    if (mobilemenuTag.classList.contains("isOpened")) {
        line1Tag.classList.remove("rotatePlus45Deg");   
        line2Tag.classList.remove("rotateMinus45Deg");
        mobilemenuTag.classList.remove("isOpened");
        overLayMenuTag.classList.remove("showOverLayMenu");
        rightTag.classList.remove("rightTag");
        footerTag.classList.remove("footerTag");
        motherTag.classList.remove("motherTag");
    } else {
        line1Tag.classList.add("rotatePlus45Deg");   
        line2Tag.classList.add("rotateMinus45Deg");
        mobilemenuTag.classList.add("isOpened");
        overLayMenuTag.classList.add("showOverLayMenu");
        rightTag.classList.add("rightTag");
        footerTag.classList.add("footerTag");
        motherTag.classList.add("motherTag");
    }
});