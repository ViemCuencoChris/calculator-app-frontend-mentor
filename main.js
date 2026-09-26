const body = document.body;

const slider = document.querySelector(".selection-slider");
const circle = document.querySelector(".circle");
const screen = document.querySelector(".main-screen");
const keypad = document.querySelector(".main-keys");
const btn = document.querySelectorAll(".btn");
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
            body.style.backgroundColor = theme2_bg_gray_200;
            body.style.color = theme2_text_gray_900;
            slider.style.backgroundColor = theme2_bg_gray_300;
            screen.style.backgroundColor = theme2_bg_gray_100;
            screen.style.color = theme2_text_gray_900;
            keypad.style.backgroundColor = theme2_bg_gray_300;
            btn.forEach((key) => {
                key.style.color = theme2_text_gray_900;
            });
            delBtn.style.backgroundColor = theme2_keys_blue_500;
            delBtn.style.borderBottomColor = theme2_keys_blue_600;
            resBtn.style.backgroundColor = theme2_keys_blue_500;
            resBtn.style.borderBottomColor = theme2_keys_blue_600;
            subBtn.style.backgroundColor = theme2_keys_orange_700;
            subBtn.style.borderBottomColor = theme2_keys_orange_800;

            delBtn.addEventListener('mouseenter', () => {
                delBtn.style.backgroundColor = theme2_keys_blue_light;
            });
            delBtn.addEventListener('mouseleave', () => {
                delBtn.style.backgroundColor = theme2_keys_blue_500;
                delBtn.style.borderBottomColor = theme2_keys_blue_600;
            });

            resBtn.addEventListener('mouseenter', () => {
                resBtn.style.backgroundColor = theme2_keys_blue_light;
            });
            resBtn.addEventListener('mouseleave', () => {
                resBtn.style.backgroundColor = theme2_keys_blue_500;
                resBtn.style.borderBottomColor = theme2_keys_blue_600;
            });

            subBtn.addEventListener('mouseenter', () => {
                subBtn.style.backgroundColor = theme2_keys_orange_light;
            });
            subBtn.addEventListener('mouseleave', () => {
                subBtn.style.backgroundColor = theme2_keys_orange_700;
                subBtn.style.borderBottomColor = theme2_keys_orange_800;
            });
            counter++;
        } else {
            circle.classList.remove("second");
            circle.classList.add("third");
            body.style.backgroundColor = theme3_bg_purple_950;
            body.style.color = theme3_text_yellow_300;
            slider.style.backgroundColor = theme3_bg_purple_900;
            circle.style.backgroundColor = theme3_keys_cyan_400;
            
            circle.addEventListener('mouseenter', () => {
                circle.style.backgroundColor = theme3_keys_cyan_light;
            })
            circle.addEventListener('mouseleave', () => {
                circle.style.backgroundColor = theme3_keys_cyan_400;
            })
            
            screen.style.backgroundColor = theme3_bg_purple_900;
            screen.style.color = theme3_text_yellow_300;
            keypad.style.backgroundColor = theme3_bg_purple_900;
            btn.forEach((key) => {
                key.style.color = theme3_text_yellow_300;
                key.style.backgroundColor = theme3_keys_purple_850;
                key.style.borderBottomColor = theme3_keys_purple_750;
                key.addEventListener('mouseenter', () => {
                    key.style.backgroundColor = theme3_keys_purple_2light;
                });
                key.addEventListener('mouseleave', () => {
                    key.style.backgroundColor = theme3_keys_purple_850;
                    key.style.borderBottomColor = theme3_keys_purple_750;
                });
            });
            delBtn.style.backgroundColor = theme3_keys_purple_800;
            delBtn.style.borderBottomColor = theme3_keys_purple_400;
            resBtn.style.backgroundColor = theme3_keys_purple_800;
            resBtn.style.borderBottomColor = theme3_keys_purple_400;
            subBtn.style.backgroundColor = theme3_keys_cyan_500;
            subBtn.style.borderBottomColor = theme3_keys_cyan_400;
            subBtn.style.color = theme3_text_blue_950;

            delBtn.addEventListener('mouseenter', () => {
                delBtn.style.backgroundColor = theme3_keys_purple_light;
            });
            delBtn.addEventListener('mouseleave', () => {
                delBtn.style.backgroundColor = theme3_keys_purple_800;
                delBtn.style.borderBottomColor = theme3_keys_purple_400;
            });

            resBtn.addEventListener('mouseenter', () => {
                resBtn.style.backgroundColor = theme3_keys_purple_light;
            });
            resBtn.addEventListener('mouseleave', () => {
                resBtn.style.backgroundColor = theme3_keys_purple_800;
                resBtn.style.borderBottomColor = theme3_keys_purple_400;
            });

            subBtn.addEventListener('mouseenter', () => {
                subBtn.style.backgroundColor = theme3_keys_cyan_light;
            });
            subBtn.addEventListener('mouseleave', () => {
                subBtn.style.backgroundColor = theme3_keys_cyan_500;
                subBtn.style.borderBottomColor = theme3_keys_cyan_400;
            });
            counter++;
        }
    } else {
        circle.classList.remove("third");
        body.style.backgroundColor = "";
        body.style.color = "";
        slider.style.backgroundColor = "";
        circle.style.backgroundColor = "";
        screen.style.backgroundColor = "";
        screen.style.color = "";
        keypad.style.backgroundColor = "";
        btn.forEach((key) => {
            key.style.color = "";
            key.style.backgroundColor = "";
            key.style.borderBottomColor = "";
        });
        delBtn.style.backgroundColor = "";
        delBtn.style.borderBottomColor = "";
        resBtn.style.backgroundColor = "";
        resBtn.style.borderBottomColor = "";
        subBtn.style.backgroundColor = "";
        subBtn.style.borderBottomColor = "";
        subBtn.style.color = "";
        counter = 0;
    }
});