class CardManager {
    constructor(weaponConfig) {
        this.x = weaponConfig.x;
        this.y = weaponConfig.y;
        this.width = weaponConfig.width;
        this.height = weaponConfig.height;
        this.rand = weaponConfig.rand;

        this.red2 = new Image();
        this.red2.src = weaponConfig.red2;
        this.red1 = new Image();
        this.red1.src = weaponConfig.red1;
        this.blue1 = new Image();
        this.blue1.src = weaponConfig.blue1;
        this.blue2 = new Image();
        this.blue2.src = weaponConfig.blue2;
        this.blue3 = new Image();
        this.blue3.src = weaponConfig.blue3;
        this.blue4 = new Image();
        this.blue4.src = weaponConfig.blue4;
        this.blue5 = new Image();
        this.blue5.src = weaponConfig.blue5;
        this.pink1 = new Image();
        this.pink1.src = weaponConfig.pink1;
        this.pink2 = new Image();
        this.pink2.src = weaponConfig.pink2;
        this.pink3 = new Image();
        this.pink3.src = weaponConfig.pink3;
        this.purple1 = new Image();
        this.purple1.src = weaponConfig.purple1;
        this.purple2 = new Image();
        this.purple2.src = weaponConfig.purple2;
        this.purple3 = new Image();
        this.purple3.src = weaponConfig.purple3;
        this.purple4 = new Image();
        this.purple4.src = weaponConfig.purple4;
        this.knife = new Image();
        this.knife.src = weaponConfig.knife;

        this.allBlue = [weaponConfig.blue1, weaponConfig.blue2, weaponConfig.blue3, weaponConfig.blue4, weaponConfig.blue5];
        this.allPurple = [weaponConfig.purple1, weaponConfig.purple2, weaponConfig.purple3, weaponConfig.purple4];
        this.allPink = [weaponConfig.pink1, weaponConfig.pink2, weaponConfig.pink3];
        this.allRed = [weaponConfig.red1, weaponConfig.red2];
        this.allGold = [weaponConfig.knife];

        this.randWeapon = [weaponConfig.blue1, weaponConfig.blue2, weaponConfig.blue3, weaponConfig.blue4, weaponConfig.blue5,
        weaponConfig.purple1, weaponConfig.purple2, weaponConfig.purple3, weaponConfig.purple4,
        weaponConfig.pink1, weaponConfig.pink2, weaponConfig.pink3, weaponConfig.red2];
        this.shift = weaponConfig.shift;
    }

    // novi nacin crtanja
    drawCards(parent) {
        let cards = document.createElement("div");
        cards.classList.add("cards");
        let randoo = Math.floor(Math.random() * 13);

        cards.style.backgroundImage = "url(' " + this.randWeapon[randoo] + "')";

        if (this.randWeapon[randoo] == "/case/images/blue1.png" || this.randWeapon[randoo] == "/case/images/blue2.png" || this.randWeapon[randoo] == "/case/images/blue3.png" || this.randWeapon[randoo] == "/case/images/blue4.png" || this.randWeapon[randoo] == "/case/images/blue5.png")
            cards.style.borderBottom = "thick solid  #3498DB";

        else if (this.randWeapon[randoo] == "/case/images/purple1.png" || this.randWeapon[randoo] == "/case/images/purple2.png" || this.randWeapon[randoo] == "/case/images/purple3.png" || this.randWeapon[randoo] == "/case/images/purple4.png")
            cards.style.borderBottom = "thick solid  #8E44AD";

        else if (this.randWeapon[randoo] == "/case/images/red2.png")
            cards.style.borderBottom = "thick solid  #E74C3C";

        else if (this.randWeapon[randoo] == "/case/images/pink1.png" || this.randWeapon[randoo] == "/case/images/pink2.png" || this.randWeapon[randoo] == "/case/images/pink3.png")
            cards.style.borderBottom = "thick solid  #FA3FE6";

        parent.appendChild(cards);
    }

    drawWinCard(parent) {
        let cards = document.createElement("div");
        cards.classList.add("cards");

        //random cards
        if (this.rand == 1) {
            let rando = Math.floor(Math.random() * 5);
            cards.style.backgroundImage = "url(' " + this.allBlue[rando] + "')";
            cards.style.borderBottom = "thick solid  #3498DB";
        }

        else if (this.rand == 2) {
            let rando = Math.floor(Math.random() * 4);
            cards.style.backgroundImage = "url(' " + this.allPurple[rando] + "')";
            cards.style.borderBottom = "thick solid  #8E44AD";
        }

        else if (this.rand == 3) {
            let rando = Math.floor(Math.random() * 3);
            cards.style.backgroundImage = "url(' " + this.allPink[rando] + "')";
            cards.style.borderBottom = "thick solid #FA3FE6";
        }

        else if (this.rand == 4) {
            let rando = Math.floor(Math.random() * 2);
            cards.style.backgroundImage = "url(' " + this.allRed[rando] + "')";
            cards.style.borderBottom = "thick solid  #E74C3C";
        }

        else if (this.rand == 5) {
            cards.style.backgroundImage = "url(' " + this.allGold[0] + "')";
            cards.style.borderBottom = "thick solid #FFDF00";
        }

        parent.appendChild(cards);
    }

    moveCards(parent) {
        parent.style.transform = "translateX(-" + this.shift + "px)";
        this.shift += 50;
        if (this.shift >= 3700) {
            this.shift -= 40;
        }

        if (this.shift >= 4250) {
            parent.style.transform = "translateX(-" + 4250 + "px)";
        }
    }

    restartCards(parent) {
        parent.innerHTML = "";
        this.shift = 10;
    }

    drawFirstWinCard(parent) {
        let cards = document.createElement("div");
        cards.classList.add("cards");
        let randoo = Math.floor(Math.random() * 5);
        cards.style.backgroundImage = "url(' " + this.allBlue[randoo] + "')";
        cards.style.borderBottom = "thick solid  #3498DB";
        parent.appendChild(cards);
    }

}

function secondDraw(cardManager, parent, weaponConfig) {
    for (let i = 0; i < 15; i++) {
        cardManager.drawCards(parent, weaponConfig);
        console.log(weaponConfig.rand);
        if (i == 12)
            cardManager.drawWinCard(parent);
    }
}

window.onload = () => {
    let blueSkins = document.getElementById("blueCounter");
    let blueSkinsCounter = 0;
    let purpleSkins = document.getElementById("purpleCounter");
    let purpleSkinsCounter = 0;
    let pinkSkins = document.getElementById("pinkCounter");
    let pinkSkinsCounter = 0;
    let redSkins = document.getElementById("redCounter");
    let redSkinsCounter = 0;
    let specialSkins = document.getElementById("specialCounter");
    let knifeSkinsCounter = 0;
    let moneySpent = document.getElementById("moneySpentCounter");
    let moneySpentCounter = 0;

    let parent = document.getElementById("allCards");
    let weaponConfig = {
        x: 60,
        y: 5,
        width: 150,
        height: 150,
        red1: "/case/images/red1.png",
        red2: "/case/images/red2.png",
        purple1: "/case/images/purple1.png",
        purple2: "/case/images/purple2.png",
        purple3: "/case/images/purple3.png",
        purple4: "/case/images/purple4.png",
        pink1: "/case/images/pink1.png",
        pink2: "/case/images/pink2.png",
        pink3: "/case/images/pink3.png",
        blue1: "/case/images/blue1.png",
        blue2: "/case/images/blue2.png",
        blue3: "/case/images/blue3.png",
        blue4: "/case/images/blue4.png",
        blue5: "/case/images/blue5.png",
        knife: "/case/images/knife.png",
        rand: [],
        shift: 10
    };
    let cardManager = new CardManager(weaponConfig);
    let secondaryBtn = document.getElementById("secondaryBtn");

    let primaryBtn = document.getElementById("primaryBtn");
    let btnClicked = false;
    let signe = false;
    let count = 0;
    let totalCaseOpened = 0;
    primaryBtn.addEventListener("click", (e) => {
        btnClicked = true;
        count++;

        totalCaseOpened++;
        secondaryBtn.innerHTML = "Cases opened: " + totalCaseOpened;

        weaponConfig.rand.pop();

        var chance = Math.random() * 100;
        if (chance <= 79.92) {
            weaponConfig.rand.push(1);
        }
        else if (chance <= 95.9) {
            weaponConfig.rand.push(2);
        }
        else if (chance <= 99.1) {
            weaponConfig.rand.push(3);
        }

        else if (chance <= 99.0) {
            weaponConfig.rand.push(4);
        }

        else {
            weaponConfig.rand.push(5);
        }

        if (count >= 2) {
            signe = true;
        }

        //weaponCounter
        if (weaponConfig.rand == 1) {
            blueSkinsCounter++;
            setTimeout(function(){  blueSkins.innerHTML = "" + blueSkinsCounter;}, 3500);
           
        }

        else if (weaponConfig.rand == 2) {
            purpleSkinsCounter++;
            setTimeout(function(){  purpleSkins.innerHTML = "" + purpleSkinsCounter;}, 3500);
           
        }

        else if (weaponConfig.rand == 3) {
            pinkSkinsCounter++;
            setTimeout(function(){  pinkSkins.innerHTML = "" + pinkSkinsCounter;}, 3500);
        }

        else if (weaponConfig.rand == 4) {
            redSkinsCounter++;
            setTimeout(function(){  redSkins.innerHTML = "" + redSkinsCounter;}, 3500);
        }

        else if (weaponConfig.rand == 5) {
            knifeSkinsCounter++;
            setTimeout(function(){  specialSkins.innerHTML = "" + knifeSkinsCounter;}, 3500); 
        }
        moneySpentCounter += 2.2;
        moneySpent.innerHTML = "" + moneySpentCounter.toFixed(2) + "$";
    });

    //first draw
    for (let i = 0; i < 15; i++) {
        cardManager.drawCards(parent, weaponConfig);
        if (i == 12)
            cardManager.drawFirstWinCard(parent);
    }

    function loop() {
        if (btnClicked == true) {
            cardManager.moveCards(parent);

            if (signe == true) {
                cardManager.restartCards(parent);

                secondDraw(cardManager, parent, weaponConfig);
                signe = false;
            }
        }
        window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
}

