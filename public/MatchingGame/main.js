window.onload = () => {
    let randNumbers1 = [];
    let randNumbers2 = [];
    for (let i = 1; i < 7; i++) {
        randNumbers1.push(i);
        randNumbers2.push(i);
    }

    let parent = document.getElementById("parent");
    let cardManager = document.createElement("div");
    cardManager.classList.add("cardManager");
    cardManager.innerHTML = `
        <div class="card"> 
            <div class="invisibleCard">${randNumbers1[0]}</div>
        </div>
        <div class="card"> 
            <div class="invisibleCard">${randNumbers1[1]}</div>
        </div>
        <div class="card" style="margin-right: unset;">
            <div class="invisibleCard">${randNumbers1[2]}</div>
        </div>
        <div class="card">
            <div class="invisibleCard">${randNumbers1[3]}</div>
        </div>
        <div class="card">
            <div class="invisibleCard">${randNumbers1[4]}</div>
        </div>
        <div class="card" style="margin-right: unset;"> 
            <div class="invisibleCard">${randNumbers1[5]}</div>
        </div>
        <div class="card">
            <div class="invisibleCard">${randNumbers2[5]}</div>
        </div>
        <div class="card"> 
            <div class="invisibleCard">${randNumbers2[4]}</div>
        </div>
        <div class="card" style="margin-right: unset;">
            <div class="invisibleCard">${randNumbers2[3]}</div>
        </div>
        <div class="card" >
            <div class="invisibleCard">${randNumbers2[2]}</div>
        </div>
        <div class="card" >
         <div class="invisibleCard">${randNumbers2[1]}</div>
        </div>
        <div class="card" style="margin-right: unset;">
            <div class="invisibleCard">${randNumbers2[0]}</div>
        </div>
    `;
    parent.appendChild(cardManager);

    let btn = document.getElementById("btn");
    btn.addEventListener("click", (e) => {
        parent.innerHTML = "";
        let cardManager = document.createElement("div");
        cardManager.classList.add("cardManager");

        cardManager.innerHTML = `
        <div class="card"> 
            <div class="invisibleCard">${randNumbers1[0]}</div>
        </div>
        <div class="card"> 
            <div class="invisibleCard">${randNumbers1[1]}</div>
        </div>
        <div class="card" style="margin-right: unset;">
            <div class="invisibleCard">${randNumbers1[2]}</div>
        </div>
        <div class="card">
            <div class="invisibleCard">${randNumbers1[3]}</div>
        </div>
        <div class="card">
            <div class="invisibleCard">${randNumbers1[4]}</div>
        </div>
        <div class="card" style="margin-right: unset;"> 
            <div class="invisibleCard">${randNumbers1[5]}</div>
        </div>
        <div class="card">
            <div class="invisibleCard">${randNumbers2[5]}</div>
        </div>
        <div class="card"> 
            <div class="invisibleCard">${randNumbers2[4]}</div>
        </div>
        <div class="card" style="margin-right: unset;">
            <div class="invisibleCard">${randNumbers2[3]}</div>
        </div>
        <div class="card" >
            <div class="invisibleCard">${randNumbers2[2]}</div>
        </div>
        <div class="card" >
         <div class="invisibleCard">${randNumbers2[1]}</div>
        </div>
        <div class="card" style="margin-right: unset;">
            <div class="invisibleCard">${randNumbers2[0]}</div>
        </div>
    `;
        parent.appendChild(cardManager);
         
        for (let i = 0; i < cardManager.children.length; i++) {
            cardManager.children[i].addEventListener("click", (e) => {
                let clickedCard = e.target.children;
                parentCheck = e.target;
                previousParent.unshift(parentCheck);
                if (previousParent.length >= 3) {
                    previousParent.pop();
                }
    
                matchCheck = clickedCard[0].innerHTML;
                previousMatchCheck.unshift(matchCheck);
                if (previousMatchCheck.length >= 3) {
                    previousMatchCheck.pop();
                }
    
                if (matchCheck == previousMatchCheck[1]) {
                    setTimeout(function () {  
                    previousParent[0].children[0].removeEventListener("click", (e) => { });
                    previousParent[1].children[0].removeEventListener("click", (e) => { });
                    previousParent[0].style.backgroundImage = "none";
                    previousParent[1].style.backgroundImage = "none";
                    previousParent[0].children[0].classList.remove("invisibleCard");
                    previousParent[1].children[0].classList.remove("invisibleCard");
                    previousParent[0].children[0].style.color = "#F2F3F4";
                    previousParent[1].children[0].style.color = "#F2F3F4";
                    previousParent[0].children[0].innerHTML = matchCheck;
                    previousParent[1].children[0].innerHTML = previousMatchCheck[1];
                },500);
                    match = true;
                }
    
                if (previousMatchCheck.length >= 2 && matchCheck != previousMatchCheck[1]) {
                    if (match == true) {
                        previousParent[1].children[0].style.visibility = "visible";
                        match = false;
                    }
                    else
                        previousParent[1].children[0].style.visibility = "hidden";
                }
    
                clickedCard[0].style.visibility = "visible";
                
            });
        }
    });
    let matchCheck = 0;
    let previousMatchCheck = [];

    let parentCheck = 0;
    let previousParent = [];

    let match = false;
    for (let i = 0; i < cardManager.children.length; i++) {
        cardManager.children[i].addEventListener("click", (e) => {
            let clickedCard = e.target.children;
            parentCheck = e.target;
            previousParent.unshift(parentCheck);
            if (previousParent.length >= 3) {
                previousParent.pop();
            }

            matchCheck = clickedCard[0].innerHTML;
            previousMatchCheck.unshift(matchCheck);
            if (previousMatchCheck.length >= 3) {
                previousMatchCheck.pop();
            }

            if (matchCheck == previousMatchCheck[1]) {
                setTimeout(function () {  
                previousParent[0].children[0].removeEventListener("click", (e) => { });
                previousParent[1].children[0].removeEventListener("click", (e) => { });
                previousParent[0].style.backgroundImage = "none";
                previousParent[1].style.backgroundImage = "none";
                previousParent[0].children[0].classList.remove("invisibleCard");
                previousParent[1].children[0].classList.remove("invisibleCard");
                previousParent[0].children[0].style.color = "#F2F3F4";
                previousParent[1].children[0].style.color = "#F2F3F4";
                previousParent[0].children[0].innerHTML = matchCheck;
                previousParent[1].children[0].innerHTML = previousMatchCheck[1];
            },500);
                match = true;
            }

            if (previousMatchCheck.length >= 2 && matchCheck != previousMatchCheck[1]) {
                if (match == true) {
                    previousParent[1].children[0].style.visibility = "visible";
                    match = false;
                }
                else
                    previousParent[1].children[0].style.visibility = "hidden";
            }

            clickedCard[0].style.visibility = "visible";
            
        });
    }
}

