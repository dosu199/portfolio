
window.onload = () => {

        function rotateClockWise() {

                angle = 45;
                dice.style.transform = "rotate(" + angle + "deg)";
        }
        function startingPosition() {
                angle = 0;
                dice.style.transform = "rotate(" + angle + "deg)";
        }


        function rotateAntiClockWise() {
                angle = -55;
                dice.style.transform = "rotate(" + angle + "deg)";
        }

        function random() {
                number.innerHTML = Math.floor(Math.random() * 6 + 1);
        }

        function chagneColor() {

                let randRed = Math.floor(Math.random() * 256);
                let randGreen = Math.floor(Math.random() * 256);
                let randBlue = Math.floor(Math.random() * 256);
                dice.style.backgroundColor = 'rgb(' + randRed + ',' + randGreen + ',' + randBlue + ')';
        };
        function diceTransition() {
                dice.style.transition = "all 0.3s";
        }

        let number = document.getElementById("number");
        let dice = document.getElementById("dice");

        dice.addEventListener("click", (e) => {
                
                setTimeout(random, 300);
                rotateClockWise();
                setTimeout(rotateAntiClockWise, 100);
                setTimeout(startingPosition, 200)
                chagneColor();
                diceTransition()
        });


};
