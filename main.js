const bg = document.body
const show_score = document.getElementById("show_score")
const colors_inpt = document.querySelectorAll("main .guess_color")

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





        show_score.innerText = score
    }


}

Game.newGame()