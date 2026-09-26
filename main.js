const body = document.body;

const slider = document.querySelector(".selection-slider");
const circle = document.querySelector(".circle");
const screen = document.querySelector(".main-screen");
const keypad = document.querySelector(".main-keys");
const btn = document.querySelectorAll(".btn");
const operator = document.querySelectorAll(".op");
const delBtn = document.getElementById("deleteBtn");
const resBtn = document.getElementById("resetBtn");
const subBtn = document.getElementById("submitBtn");

const text_white = "hsl(0, 100%, 100%)";

//theme 2
const theme2_bg_gray_200 = "hsl(0, 0%, 90%)";
const theme2_bg_gray_300 = "hsl(0, 5%, 81%)";
const theme2_bg_gray_100 = "hsl(0, 0%, 93%)";
const theme2_keys_blue_light = "hsl(185, 42%, 50%)";
const theme2_keys_blue_500 = "hsl(185, 42%, 37%)";
const theme2_keys_blue_600 = "hsl(185, 58%, 25%)";
const theme2_keys_orange_light = "hsl(25, 98%, 50%)"
const theme2_keys_orange_700 = "hsl(25, 98%, 40%)";
const theme2_keys_orange_800 = "hsl(25, 99%, 27%)";
const theme2_text_gray_900 = "hsl(60, 10%, 19%)";

//theme 3
const theme3_bg_purple_950 = "hsl(268, 75%, 9%)";
const theme3_bg_purple_900 = "hsl(268, 71%, 12%)";
const theme3_keys_purple_light = "hsl(281, 89%, 50%)";
const theme3_keys_purple_800 = "hsl(281, 89%, 26%)";
const theme3_keys_purple_400 = "hsl(285, 91%, 52%)";
const theme3_keys_cyan_light = "hsl(176, 100%, 50%)"
const theme3_keys_cyan_500 = "hsl(176, 100%, 44%)";
const theme3_keys_cyan_400 = "hsl(177, 92%, 70%)";
const theme3_keys_purple_2light = "hsl(268, 47%, 40%)";
const theme3_keys_purple_850 = "hsl(268, 47%, 21%)";
const theme3_keys_purple_750 = "hsl(290, 70%, 36%)";
const theme3_text_yellow_300 = "hsl(52, 100%, 62%)";
const theme3_text_blue_950 = "hsl(198, 20%, 13%)";

let counter = 0;
slider.addEventListener('click', () => {
    if(counter <= 1){
        if(counter == 0){
            circle.classList.add("second");
            body.style.setProperty("--bg-navy-850", theme2_bg_gray_200);
            body.style.setProperty("--text-white", theme2_text_gray_900);
            slider.style.setProperty("--bg-navy-900", theme2_bg_gray_300);
            keypad.style.setProperty("--bg-navy-900", theme2_bg_gray_300);
            screen.style.setProperty("--bg-navy-950", theme2_bg_gray_100);
            screen.style.setProperty("--text-white", theme2_text_gray_900);
            btn.forEach(key => {
                key.style.setProperty("--text-white", text_white);
                key.style.setProperty("--text-navy-750", theme2_text_gray_900);
            });
            delBtn.style.setProperty("--keys-navy-light", theme2_keys_blue_light);
            delBtn.style.setProperty("--keys-navy-700", theme2_keys_blue_500);
            delBtn.style.setProperty("--keys-navy-800", theme2_keys_blue_600);
            delBtn.style.setProperty("--text-white", text_white);
            resBtn.style.setProperty("--keys-navy-light", theme2_keys_blue_light);
            resBtn.style.setProperty("--keys-navy-700", theme2_keys_blue_500);
            resBtn.style.setProperty("--keys-navy-800", theme2_keys_blue_600);
            resBtn.style.setProperty("--text-white", text_white);
            subBtn.style.setProperty("--keys-red-light", theme2_keys_orange_light);
            subBtn.style.setProperty("--keys-red-600", theme2_keys_orange_700);
            subBtn.style.setProperty("--keys-red-800", theme2_keys_orange_800);
            subBtn.style.setProperty("--text-white", text_white);
            counter++;
        } else {
            circle.classList.remove("second");
            circle.classList.add("third");
            body.style.setProperty("--bg-navy-850", theme3_bg_purple_950);
            body.style.setProperty("--text-white", theme3_text_yellow_300);
            circle.style.setProperty("--keys-red-light", theme3_keys_cyan_light);
            circle.style.setProperty("--keys-red-600", theme3_keys_cyan_500);
            slider.style.setProperty("--bg-navy-900", theme3_bg_purple_900);
            keypad.style.setProperty("--bg-navy-900", theme3_bg_purple_900);
            screen.style.setProperty("--bg-navy-950", theme3_bg_purple_900);
            screen.style.setProperty("--text-white", theme3_text_yellow_300);
            btn.forEach(key => {
                key.style.setProperty("--keys-gray-200", theme3_keys_purple_850);
                key.style.setProperty("--keys-gray-orange-400", theme3_keys_purple_750);
                key.style.setProperty("--text-white", theme3_keys_purple_light);
                key.style.setProperty("--text-navy-750", theme3_text_yellow_300);
            });
            delBtn.style.setProperty("--keys-navy-light", theme3_keys_purple_2light);
            delBtn.style.setProperty("--keys-navy-700", theme3_keys_purple_800);
            delBtn.style.setProperty("--keys-navy-800", theme3_keys_purple_400);
            delBtn.style.setProperty("--text-white", text_white);
            resBtn.style.setProperty("--keys-navy-light", theme3_keys_purple_2light);
            resBtn.style.setProperty("--keys-navy-700", theme3_keys_purple_800);
            resBtn.style.setProperty("--keys-navy-800", theme3_keys_purple_400);
            resBtn.style.setProperty("--text-white", text_white);
            subBtn.style.setProperty("--keys-red-light", theme3_keys_cyan_light);
            subBtn.style.setProperty("--keys-red-600", theme3_keys_cyan_500);
            subBtn.style.setProperty("--keys-red-800", theme3_keys_cyan_400);
            subBtn.style.setProperty("--text-white", theme3_text_blue_950);
            counter++;
        }
    } else {
        circle.classList.remove("third");
        body.style.setProperty("--bg-navy-850", "");
        body.style.setProperty("--text-white", "");
        circle.style.setProperty("--keys-red-light", "");
        circle.style.setProperty("--keys-red-600", "");
        slider.style.setProperty("--bg-navy-900", "");
        keypad.style.setProperty("--bg-navy-900", "");
        screen.style.setProperty("--bg-navy-950", "");
        screen.style.setProperty("--text-white", "");
        btn.forEach(key => {
            key.style.setProperty("--keys-gray-200", "");
            key.style.setProperty("--keys-gray-orange-400", "");
            key.style.setProperty("--text-white", "");
            key.style.setProperty("--text-navy-750", "");
        });
        delBtn.style.setProperty("--keys-navy-light", "");
        delBtn.style.setProperty("--keys-navy-700", "");
        delBtn.style.setProperty("--keys-navy-800", "");
        delBtn.style.setProperty("--text-white", "");
        resBtn.style.setProperty("--keys-navy-light", "");
        resBtn.style.setProperty("--keys-navy-700", "");
        resBtn.style.setProperty("--keys-navy-800", "");
        resBtn.style.setProperty("--text-white", "");
        subBtn.style.setProperty("--keys-red-light", "");
        subBtn.style.setProperty("--keys-red-600", "");
        subBtn.style.setProperty("--keys-red-800", "");
        subBtn.style.setProperty("--text-white", "");
        counter = 0;
    }
});

btn.forEach(key => {
    key.addEventListener('click', () => {
        screen.value += key.textContent;
    });
});

resBtn.addEventListener('click', () => {
    screen.value = "";
});

subBtn.addEventListener('click', () => {
    screen.value = eval(screen.value);
});