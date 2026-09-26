const slider = document.querySelector(".selection-slider");
const circle = document.querySelector(".circle");
const screen = document.querySelector(".main-screen");
const btn = document.querySelectorAll("btn");
const delBtn = document.getElementById("deleteBtn");
const resBtn = document.getElementById("resetBtn");
const subBtn = document.getElementById("submitBtn");

const text_white = "hsl(0, 100%, 100%)";

const theme2_bg_gray_200 = "hsl(0, 0%, 90%)";
const theme2_bg_gray_300 = "hsl(0, 5%, 81%)";
const theme2_bg_gray_100 = "hsl(0, 0%, 93%)";
const theme2_keys_blue_500 = "hsl(185, 42%, 37%)";
const theme2_keys_blue_600 = "hsl(185, 58%, 25%)";
const theme2_keys_orange_700 = "hsl(25, 98%, 40%)";
const theme2_keys_orange_800 = "hsl(25, 99%, 27%)";
const theme2_text_gray_900 = "hsl(60, 10%, 19%)";

const theme3_bg_purple_950 = "hsl(268, 75%, 9%)";
const theme3_bg_purple_900 = "hsl(268, 71%, 12%)";
const theme3_keys_purple_800 = "hsl(281, 89%, 26%)";
const theme3_keys_purple_400 = "hsl(285, 91%, 52%)";
const theme3_keys_cyan_500 = "hsl(176, 100%, 44%)";
const theme3_keys_cyan_400 = "hsl(177, 92%, 70%)";
const theme3_keys_purple_850 = "hsl(268, 47%, 21%)";
const theme3_keys_purple_750 = "hsl(290, 70%, 36%)";
const theme3_text_yellow_300 = "hsl(52, 100%, 62%)";
const theme3_text_blue_950 = "hsl(198, 20%, 13%)";

let counter = 0;
slider.addEventListener('click', () => {
    if(counter <= 1){
        if(counter == 0){
            circle.classList.remove("first");
            circle.classList.add("second");
            counter++;
        } else {
            circle.classList.remove("second");
            circle.classList.add("third");
            counter++;
        }
    } else {
        circle.classList.remove("third");
        circle.classList.add("first");
        counter = 0;
    }
});