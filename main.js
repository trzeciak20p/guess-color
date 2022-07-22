const bg = document.body
const show_score = document.getElementById("show_score")
const colors_inpt = document.querySelectorAll("main .guess_color")
let score_showed = false

colors_inpt[1].addEventListener("keydown", function (event) {
    if (this.value.length == 0 && event.code == "Backspace") { 
        z = 1
        colors_inpt[0].focus()
    }
})
colors_inpt[2].addEventListener("keydown", function (event) {
    if (this.value.length == 0 && event.code == "Backspace") { 
        colors_inpt[1].focus()
    }
})

document.addEventListener("keydown", function (event) {             //eo enter-owe rzeczy  
    if (event.code == "Enter") {          
        event.preventDefault()

        if(colors_inpt[0] === document.activeElement){
            colors_inpt[1].focus()
        }else if(colors_inpt[1] === document.activeElement){
            colors_inpt[2].focus()
        }else if(colors_inpt[2] === document.activeElement){
            if(score_showed){
                Game.newGame()
            }else{
                score_showed = true
                Game.checkValues()
            }
        }else{
            colors_inpt[0].focus()
        }
    }
})

let Game = {

    newValues: function (){
        this.R = Math.floor(Math.random() * 256)
        this.G = Math.floor(Math.random() * 256)
        this.B = Math.floor(Math.random() * 256)
    },

    newGame: function(){
        show_score.innerHTML = null
        score_showed = false
        for(i = 0; i < 3; i++){
            colors_inpt[i].value = null
        }
        colors_inpt[0].focus()      //focus na input

        this.newValues()        //losowanie nowych wartości
        bg.style.backgroundColor = "rgb(" + this.R + ", " + this.G + ", " + this.B +")"     //ustawianie koloru tła
        // console.log(this.R, this.G, this.B)

    },

    checkValues: function(){
        let score
        let r = parseInt(colors_inpt[0].value)
        let g = parseInt(colors_inpt[1].value)
        let b = parseInt(colors_inpt[2].value)
        
        if (r == this.R && g == this.G && b == this.B) {
            score = "u won les go!"
        }else{

            score = "WRONG!  <br> <span>" + this.R + " " + this.G + " " + this.B + "</span>"


        }




        show_score.innerHTML = score

    }

}

Game.newGame()
colors_inpt[0].focus()