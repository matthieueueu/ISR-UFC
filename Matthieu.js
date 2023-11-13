let showData = false;

const matt = {
    name:"Matthieu Michelet",
    nameShort:"Matt",
    nationality : "Switzerland and Colombia",
    age: 16,
    record: "1 and 0. Spider blocking the door.",
    tall: 0.37,
    kg:36,
    weightClass:"rat weight",
    specialty:"Rat-jutsu",
    weight(){
        return`${this.kg} grams`
    },
    height: function(){
        return`${this.tall}cm not even lying.`
    },
    fightingExperience(){
        return`${this.nameShort} once punted an obese child down the stairs (porky got what was coming for him).`
    },
}

function onClick(){
    if(showData == false){
        
        showData=true;  
        
        document.getElementById("buttonClicked").innerText = "Close to hide";
        
        document.getElementById("buttonClickedAgain").innerHTML += `<ul class="menu"><li>Name: ${matt.name}</li><li>Nationality: ${matt.nationality}</li><li>Known diseases: Alzeihmers</li><li>Age: ${matt.age}</li><li>Height: ${matt.height()}</li><li>Weight: ${matt.weight()}</li><li>Known diseases: Alzeihmers</li><li>Weight class: ${matt.weightClass}</li><li>Fighting experience: ${matt.fightingExperience()}</li><li>Known diseases: Alzeihmers. Known diseases: Alzeihmers</li><li>Record: ${matt.record}</li><li>Favourite song: <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1ibHApXtb0pgplmNDRLHrJ?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li><li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398238.167265904!2d6.904942231447954!3d46.80560755007441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2slv!4v1697484275130!5m2!1sen!2slv" width="150" height="113" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290455.130218167!2d-85.04020848475975!3d4.564901785836449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1sen!2slv!4v1697484420263!5m2!1sen!2slv" width="150" height="113" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li></ul>`

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
        
        document.getElementById("buttonTwoClickedAgain").innerHTML += '<img class="twoPic" src="https://staticg.sportskeeda.com/editor/2023/10/4c889-16962216212607-1920.jpg"><img class="twoPic" src="https://media.tenor.com/1o6Lw-yohEAAAAAC/dancing-with-alligator-alligator.gif">'

    }else if (showData =true){
        showData = false;
        document.getElementById("buttonTwoClicked").innerText = "Click for fighting style";        document.getElementById("buttonTwoClickedAgain").innerHTML = "";

    };
}
