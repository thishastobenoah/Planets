class planet{
    name; 
    inner; 
    diameter; 
    color;   

    constructor(name, inner, diameter, color){
        this.name = name; 
        this.inner = inner; 
        this.diameter = diameter; 
        this.color = color; 
    }
}

let planet1 = new planet("Mercury", true, 3031.9, "#696969")
let planet2 = new planet("Venus", true, 7520.8, "#b89165")
let planet3 = new planet("Earth", true, 7917.5, "#5a5b86")
let planet4 = new planet("Mars", true, 4212.3, "#df8c4e")
let planet5 = new planet("Jupiter", false, 86881, "#f6a049")
let planet6 = new planet("Saturn", false, 72367, "#dcd3a1")
let planet7 = new planet("Uranus", false, 31518, "#b4d9df")
let planet8 = new planet("Neptune", false, 30599, "#456eff")

let planetsArray = [];

planetsArray.push(planet1);
planetsArray.push(planet2);
planetsArray.push(planet3);
planetsArray.push(planet4);
planetsArray.push(planet5);
planetsArray.push(planet6);
planetsArray.push(planet7);
planetsArray.push(planet8);

for (p of planetsArray){
    console.log(p.name);
}

function averageDiameter(planetsArray){
    let average = 0;
    for (p of planetsArray){
        average += p.diameter;
    }
    return "Average Diameter: " + average / 8;
}

console.log(averageDiameter(planetsArray));

let index = 0;

let indexElm = document.getElementById("Index");
indexElm.innerText = "Index: " + index;

prevButton = document.getElementById("prevButton");
nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", () => {
    
    index += 1;
    let indexElm = document.getElementById("Index");
    indexElm.innerText = "Index: " + index;
    updatePlanetDisplay();
})
prevButton.addEventListener("click", () => {
    index -= 1;
    let indexElm = document.getElementById("Index");
    indexElm.innerText = "Index: " + index;
    updatePlanetDisplay();
})

function updatePlanetDisplay(){
    let planetElm = document.getElementById("PlanetName");
    planetElm.innerText = planetsArray[index].name;

    let positionElm = document.getElementById("InnerOuter");
    if (planetsArray[index].inner){
        positionElm.innerText= "Inner Planet"
    }else{
        positionElm.innerText="Outer Planet"
    }
    switch(index){
        case 0:
            prevButton.disabled = true;
            document.getElementById("PlanetCircle").style.background = planet1.color;
            document.getElementById("PlanetCircle").style.width = planet1.diameter/100;
            document.getElementById("PlanetCircle").style.height = planet1.diameter/100;
            break;
        case 1:
            prevButton.disabled = false;
            document.getElementById("PlanetCircle").style.background = planet2.color;
            document.getElementById("PlanetCircle").style.width = planet2.diameter/100;
            document.getElementById("PlanetCircle").style.height = planet2.diameter/100;
            break;
        case 2:
            document.getElementById("PlanetCircle").style.background = planet3.color;
            document.getElementById("PlanetCircle").style.width = planet3.diameter/100;
            document.getElementById("PlanetCircle").style.height = planet3.diameter/100;
            break;
        case 3:
            document.getElementById("PlanetCircle").style.background = planet4.color;
            document.getElementById("PlanetCircle").style.width = planet4.diameter/100;
            document.getElementById("PlanetCircle").style.height = planet4.diameter/100;
            break;
        case 4:
            document.getElementById("PlanetCircle").style.background = planet5.color;
            document.getElementById("PlanetCircle").style.width = planet5.diameter/100;
            document.getElementById("PlanetCircle").style.height = planet5.diameter/100;
            break;
        case 5:
            document.getElementById("PlanetCircle").style.background = planet6.color;
            document.getElementById("PlanetCircle").style.width = planet6.diameter/100;
            document.getElementById("PlanetCircle").style.height = planet6.diameter/100;
            break;
        case 6:
            nextButton.disabled = false;
            document.getElementById("PlanetCircle").style.background = planet7.color;
            document.getElementById("PlanetCircle").style.width = planet7.diameter/100;
            document.getElementById("PlanetCircle").style.height = planet7.diameter/100;
            break;
        case 7:
            nextButton.disabled = true;
            document.getElementById("PlanetCircle").style.background = planet8.color;
            document.getElementById("PlanetCircle").style.width = planet8.diameter/100;
            document.getElementById("PlanetCircle").style.height = planet8.diameter/100;
            break;
    }
}

updatePlanetDisplay();
