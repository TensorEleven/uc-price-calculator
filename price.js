let gbp = document.querySelector("#basePriceGbp").value;

let benefitRatio = 0.20;
let gbpAriary = 5258.16;

function getBasePriceAriary(basePriceGbp){
    return basePriceGbp*gbpAriary;
}

function setBasePriceAriary(basePrice){
    document.querySelector("#basePriceAriary").value = basePrice;
}

function getPriceAriary(basePrice){
    return basePrice + basePrice*0.20;
}

function setPriceAriary(basePrice){
    document.querySelector("#priceAriary").value = basePrice;
}

//function getPriceAriary()

document.querySelector('#calculateSubmit').addEventListener('click',(e)=>{
    e.preventDefault;

    let basePriceGbp = document.querySelector("#basePriceGbp").value;
    let basePriceAriary = getBasePriceAriary(basePriceGbp);
    let priceAriary = getPriceAriary(basePriceAriary);

    setBasePriceAriary(basePriceAriary);
    setPriceAriary(priceAriary);
});