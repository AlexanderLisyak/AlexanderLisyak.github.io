const icon = document.getElementById("icon");
icon.onclick = function (switchTheme) {
    document.body.classList.toggle('dark__theme');
    if(document.body.classList.contains('dark__theme')){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.png"
    }
}


// calculate functional

const display = document.getElementById("display");

const buttons = Array.from(document.querySelectorAll("button"))


buttons.map((button) =>{
    button.addEventListener("click", (e) =>{
        switch(e.target.innerText){
            case "C":
                display.innerText = "";
            break;

            case "=":
                try{
                    display.innerText = eval(display.innerText);
                }catch (e){
                    display.innerText = "Error!";
                }
            break;

            default:
                display.innerText += e.target.innerText;
        }
    })
})

