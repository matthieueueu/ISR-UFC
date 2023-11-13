let showData = false;

const alex = {
    name:"Alexander Kisiks",
    nameShort:"Kiskis",
    nationality : "Georgia and Russia",
    age: 17,
    record: "spent 7 consecutive years losing fights to Ratatouille and Stuart Little.",
    tall: 143,
    kg:34,
    weightClass:"midget",
    specialty:"Rat-jutsu",
    weight(){
        return`${this.kg}kg`
    },
    height: function(){
        return`${this.tall}cm`
    },
    fightingExperience(){
        return`${this.nameShort} spent 12 years fighting sewer rats (beefin).`
    },
}


function onClick(){
    if(showData == false){
        
        showData=true;  
        
        document.getElementById("buttonClicked").innerText = "Close to hide";
        
        document.getElementById("buttonClickedAgain").innerHTML += `<ul class="menu"><li>Name: ${alex.name}</li><li>Nationality: ${alex.nationality}</li><li>Age: ${alex.age}</li><li>Height: ${alex.height()}</li><li>Weight: ${alex.weight()}.</li><li>Weight class: ${alex.weightClass}</li><li>Fighting experience: ${alex.fightingExperience()}</li><li>Record: ${alex.record}</li><li>Specialty: ${alex.specialty}</li><li>Favourite artist: <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3k3RY7kR8f0vp8Cq27P141?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li><li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37494223.23909493!2d103!3d55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2slv!4v1697532277579!5m2!1sen!2slv" width="150" height="113" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022274.2061834377!2d40.71704310928732!3d42.29048336706537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x4f907964122d4ac2!2sGeorgia!5e0!3m2!1sen!2slv!4v1697532368841!5m2!1sen!2slv" width="150" height="113" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li></ul>`

    }else if (showData =true){
        showData = false;
        document.getElementById("buttonClickedAgain").innerHTML = "";
        document.getElementById("buttonClicked").innerText = "Click for more information";
    };
}

function onClickTwo(){

    if(showData == false){
        
        showData=true;  
        
        document.getElementById("buttonTwoClicked").innerText = "Close to hide";
        
        document.getElementById("buttonTwoClickedAgain").innerHTML += '<img class="twoPic" border=1 src="https://media.tenor.com/my9PVQKWU-4AAAAd/carl-carl-fight.gif"><img class="twoPic" border=1 src="https://gifdb.com/images/high/child-with-boxing-gloves-punching-iawbdj553ggdgs8p.gif">'

    }else if (showData =true){
        showData = false;
        document.getElementById("buttonTwoClicked").innerText = "Click for fighting style";        
        document.getElementById("buttonTwoClickedAgain").innerHTML = "";

    };
}