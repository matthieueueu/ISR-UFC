let showData = false;

alert('Hover on image.')

const dan = {
    name:"Daniels Gapliks (or Lauva idk he's weird ab it) ",
    nameShort:"Dan",
    nationality : "Latvia probably",
    age: 16,
    record: "0 for 2 (happened twice).",
    tall: 52,
    kg:5,
    weightClass:"skin-and-bones weight.",
    weight(){
        return`${this.kg} kilos`
    },
    height: function(){
        return`${this.tall}cm`
    },
    fightingExperience(){
        return`${this.nameShort} got trampled during a panic.`
    },
}

function onClick(){
    if(showData == false){
        
        showData=true;  
        
        document.getElementById("buttonClicked").innerText = "Close to hide";
        
        document.getElementById("buttonClickedAgain").innerHTML += `<ul class="menu"><li>Name: ${dan.name}</li><li>Nationality: ${dan.nationality}</li><li>Age: ${dan.age}</li><li>Height: ${dan.height()}</li><li>Weight: ${dan.weight()}</li><li>Weight class: ${dan.weightClass}</li><li>Fighting experience: ${dan.fightingExperience()}</li><li>Record: ${dan.record}</li><li>NOTE: susceptible to nosebleeds and sweaty palms.</li><li>Favourite song (don't believe him): <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/08mG3Y1vljYA6bvDt4Wqkj?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li><li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233985.6046564174!2d21.90518748343843!3d56.852349100400836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e930677b8a9afd%3A0xcfcd68f2fc10!2sLatvia!5e0!3m2!1sen!2slv!4v1697541698335!5m2!1sen!2slv" width="300" height="225" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li></ul>`

    }else if (showData =true){
        showData = false;
        document.getElementById("buttonClickedAgain").innerHTML = "";
        document.getElementById("buttonClicked").innerText = "Click for more information";
    };
}
showData = false;
function onClickTwo(){

    if(showData == false){
        
        showData=true;  
        
        document.getElementById("buttonTwoClicked").innerText = "Close to hide";
        
        document.getElementById("buttonTwoClickedAgain").innerHTML += '<img class="twoPic" src="https://media1.giphy.com/media/pX6I27kd9cJIlaCuN6/200w.gif?cid=6c09b952oxayuyayaczzzoahywx69dl61z8t0zqvsuygm6zk&ep=v1_gifs_search&rid=200w.gif&ct=g"><img class="twoPic" src="https://cdn.pixabay.com/photo/2022/07/08/17/04/naked-mole-rat-7309627_960_720.jpg">'

    }else if (showData =true){
        showData = false;
        document.getElementById("buttonTwoClicked").innerText = "Click for fighting style";        
        document.getElementById("buttonTwoClickedAgain").innerHTML = "";

    };
}

