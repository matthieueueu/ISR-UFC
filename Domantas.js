let showData = false;

const dom = {
    name:"Domantas Drule",
    nameShort:"Dom",
    nationality : "Lithuania",
    age: 17,
    record: "49 and 0 (one was a street fight(undocumented(no one was there(he probably lost)))).",
    tall: 273,
    kg:183,
    weightClass:"light-heavyweight i.e. lukewarm-ish, yk tepid. Perchance.",
    weight(){
        return`${this.kg} kilos (BMI's crazy)`
    },
    height: function(){
        return`${this.tall}cm (idek).`
    },
    fightingExperience(){
        return`${this.nameShort} is 50 and 0, bro's fluent.`
    },
}


function onClick(){
    if(showData == false){
        
        showData=true;  
        
        document.getElementById("buttonClicked").innerText = "Close to hide";
        
        document.getElementById("buttonClickedAgain").innerHTML += `<ul class='menu'><li>Name: ${dom.name}</li><li>Nationality: ${dom.nationality}</li><li>Age: ${dom.age}</li><li>Height: ${dom.height()}</li><li>Weight: ${dom.weight()}</li><li>Weight class: ${dom.weightClass}</li><li>Fighting experience: ${dom.fightingExperience()}</li><li>Record: ${dom.record}</li>NOTE: sleeps with mouth open. doesn't get free cough drops from meness aptieka. Special skill: snoozin<li>Favourite song (pretty sure chris martin is coldplay): <iframe  style='border-radius:12px' src='https://open.spotify.com/embed/track/4iz9lGMjU1lXS51oPmUmTe?utm_source=generator' width='100%' height='152' frameBorder='1' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe></li><li><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334908.909163511!2d21.24422878465236!3d55.14505036069782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94140f33be13%3A0xf30a54d3a55dbab9!2sLithuania!5e0!3m2!1sen!2slv!4v1697443613798!5m2!1sen!2slv' width='300' height='225' style='border:1;' style='border-radius:10%' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></li></ul>`

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
        
        document.getElementById("buttonTwoClickedAgain").innerHTML += '<img class="pic" src="https://qph.cf2.quoracdn.net/main-qimg-18ef929a850ca2bff2873b0043256fe6.webp" width="560" height="315" alt="">'

    }else if (showData =true){
        showData = false;
        document.getElementById("buttonTwoClicked").innerText = "Click for special ability";        document.getElementById("buttonTwoClickedAgain").innerHTML = "";

    };
}


