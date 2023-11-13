let showData = false;

const george = {
    name:"Georgs Grants",
    nameShort:"George",
    nationality : "Latvia",
    age: 17,
    record: "20 centuries of gyming.",
    tall: 30,
    kg:6,
    weightClass:"bro idk",
    specialty:"Medieval warfare",
    weight(){
        return`${this.kg}. Just 6`
    },
    height: function(){
        return`${this.tall} omelettes long.`
    },
    fightingExperience(){
        return`${this.nameShort} was directly involved in the crusades.`
    },
}

function onClick(){
    if(showData == false){
        
        showData=true;  
        
        document.getElementById("buttonClicked").innerText = "Close to hide";
        
        document.getElementById("buttonClickedAgain").innerHTML += `<ul class="menu"><li>Name: ${george.name}</li><li>Nationality: ${george.nationality}</li><li>Age: ${george.age}</li><li>Height: ${george.height()}</li><li>Weight: ${george.weight()}</li><li>Weight class: ${george.weightClass}</li><li>Fighting experience: ${george.fightingExperience()}</li></li><li>Record: ${george.record}</li><li>Favourite song: <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2ylpbsHqGUAv3za4JkyMgz?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li><li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233985.6046564165!2d21.90518748343842!3d56.85234910040085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e930677b8a9afd%3A0xcfcd68f2fc10!2sLatvia!5e0!3m2!1sen!2slv!4v1699128470146!5m2!1sen!2slv" width="300" height="225" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li></ul>`

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
        
        document.getElementById("buttonTwoClickedAgain").innerHTML += '<img class="pic" width="560" height="315" src="https://media.tenor.com/xr0XQK6Z_fAAAAAC/gorilla-phil-collins.gif">'

    }else if (showData =true){
        showData = false;
        document.getElementById("buttonTwoClicked").innerText = "Click for fighting style";        document.getElementById("buttonTwoClickedAgain").innerHTML = "";

    };
}
