document.addEventListener('DOMContentLoaded', function () {

    let num_gen = document.getElementById("generate")
    let max_num = document.getElementById("maximum")
    let result = document.getElementById("result")
    let reset_num = document.getElementById("reset")
    let start_game = document.getElementById("start")
    let guess = document.getElementById("guess")
    let enter_click = document.getElementById("guess_enter")
    let the_guess = document.getElementById("empty")
    let num_guess = document.getElementById("guess_num")
    let guess_remain = document.getElementById("remains")
    let num_past = document.getElementById("past")
    let nowin = document.getElementById("didyawin")

    num_gen.addEventListener("click", number);
    reset_num.addEventListener("click", restart);
    start_game.addEventListener("click", start);
    enter_click.addEventListener("click", play);

    function number() {
        max_nu = parseInt(max_num.value);

        if (isNaN(max_nu) || max_nu < 1) {
            alert("not a valid input");
            return
        }
        let random_number = Math.floor(Math.random() * max_nu + 1);
        result.innerHTML = random_number;
        max_num.disabled=true;
        num_gen.disabled=true;
    }

    function start() {
        if (isNaN(num_guess.value) || num_guess.value < 1) {
            alert("not a valid input");
            return
        }
        if (isNaN(parseInt(maximum.value))){
            alert("Please input Max Number Value");
            return
        }
        max_num.setAttribute("disabled", true);
        num_guess.setAttribute("disabled", true);
        guess.disabled=false;
        guess_remain.innerHTML = num_guess.value
        start_game.disabled=true;
    }

    function restart() {
        max_num.disabled = false;
        num_gen.disabled = false;
        max_num.value="";
        num_guess.disabled = false;
        num_guess.value="";
        guess.value="";
        guess.disabled = true;
        start_game.disabled = false;
        return;
    }

    function play() {
        result = parseInt(result.innerText)
        user_guess = parseInt(guess.value)
        let guesses = 0

        if (parseInt(guess_remain.innerText)==1 && result!=user_guess){
            guess.disabled=true
            nowin.innerHTML="You ran out of guesses... click 'Restart' to play again"
        }

        if (isNaN(user_guess) || user_guess < 1) {
            alert("not a valid input");
        }

        else if (result > user_guess) {
            the_guess.innerHTML = "Too Small"
            guesses = guesses+1
        }

        else if (result < user_guess) {
            the_guess.innerHTML = "Too Large"
            guesses = guesses+1

        }

        else {
            the_guess.innerHTML = "CORRECT"
            guess.value = '&nbsp;';
            guess.disabled = true
            num_past = "click 'Restart to play again"


        }

        result = document.getElementById("result")
        guess.value = '&nbsp;';

        guess_remain.innerHTML = guess_remain.innerHTML-guesses
        num_past.innerHTML = user_guess

    }
});