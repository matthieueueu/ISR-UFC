let showData = false;

const kung = {
    name:"Jeremy",
    nameShort:"Mr Kung",
    nationality : "Canada",
    age: 33,
    record: "fighting off wild moose (or meese? idk the plural. Meeses) with jars of maple syrup.",
    tall: 3/4,
    kg:3,
    weightClass:"in between a big beaver and a small reindeer.",
    specialty:"ice picks",
    weight(){
        return`${this.kg} beavers`
    },
    height: function(){
        return`${this.tall} of a moose.`
    },
    fightingExperience(){
        return`${this.nameShort} wresled a bear while constructing a log cabin.`
    },
}

function onClick(){
    if(showData == false){
        
        showData=true;  
        
        document.getElementById("buttonClicked").innerText = "Close to hide";
        
        document.getElementById("buttonClickedAgain").innerHTML += `<ul class="menu"><li>Name: ${kung.name}</li><li>Nationality: ${kung.nationality}</li><li>Age: ${kung.age}</li><li>Height: ${kung.height()}</li><li>Weight: ${kung.weight()}</li><li>Weight class: ${kung.weightClass}</li><li>Fighting experience: ${kung.fightingExperience()}</li><li>Record: ${kung.record}</li><li>Note: worked as an english teacher in south korea, founder of Learn Together (social networking), marketing coordinator at the Simon Fraser University.</li><li>Favourite song: <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6eGMwVVABqVTe9bWRIm498?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li><li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36553983.44087083!2d-96!3d56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2slv!4v1699253269116!5m2!1sen!2slv" width="300" height="225" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li></ul>`

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
        
        document.getElementById("buttonTwoClickedAgain").innerHTML += '<img class="pic" src="https://media.tenor.com/6CzvaKHkU1YAAAAC/moose.gif">';
    }else if (showData =true){
        showData = false;
        document.getElementById("buttonTwoClicked").innerText = "Click for fighting style";        document.getElementById("buttonTwoClickedAgain").innerHTML = "";

    };
}