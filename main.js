const bg = document.body
const show_score = document.getElementById("show_score")
const colors_inpt = document.querySelectorAll("main .guess_color")

document.addEventListener("keydown", function (event) {         
    if (event.code == "Enter") {          
        event.preventDefault()
        if(colors_inpt[0] === document.activeElement){
            colors_inpt[1].focus()
        }else if(colors_inpt[1] === document.activeElement){
            colors_inpt[2].focus()
        }else if(colors_inpt[2] === document.activeElement){
            colors_inpt[0].focus()
    
            Game.checkValues()
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
        this.newValues()
        bg.style.backgroundColor = "rgb(" + this.R + ", " + this.G + ", " + this.B +")"
        console.log(this.R, this.G, this.B)

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

        this.newGame()
    }

}

Game.newGame()