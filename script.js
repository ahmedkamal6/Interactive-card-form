let cardName =document.getElementById('cardName');
let cardNameFront = document.getElementById('cardNameFront');
let cardNumber = document.getElementById('cardNumber');
let card_number = document.getElementById('cardNumberFront');
let warning = document.getElementById('warnCardNum');
let warnCardNumberEmpty = document.getElementById('warnCardNumEmpty') ;
let cardExpireM = document.getElementById('cardExpireM');
let cardExpireFrontM = document.getElementById('cardExpireFrontM');
let cardExpireY = document.getElementById('cardExpireY');
let cardExpireFrontY = document.getElementById('cardExpireFrontY')
let cardWarnNumM = document.getElementById('warnCardExpireMNum');
let cardWarnM = document.getElementById('warnCardExpireM');
let cardWarnEmptyM = document.getElementById('warnCardExpireMEmpty');
let cardWarnNumY = document.getElementById('warnCardExpireYNum');
let cardWarnY = document.getElementById('warnCardExpireY');
let cardWarnEmptyY = document.getElementById('warnCardExpireYEmpty');
let cvc = document.getElementById('code');
let cvcFront = document.getElementById('codeFront');
let cardWarnCvc = document.getElementById('warnCardCVC');
let cardWarnCvcEmpty = document.getElementById('warnCardCVCEmpty');
let submit = document.getElementById('submit');
let form = document.getElementById('form');
let continueBtn = document.getElementById('continue');
let success = document.getElementById('success');
cardName.onkeyup = ()=>{
    cardNameFront.textContent = cardName.value;
}

cardNumber.onkeyup = ()=>{
    if(cardNumber.value.length == 4 || cardNumber.value.length == 9 || cardNumber.value.length == 14)
        cardNumber.value +=' ';
    if(/[a-zA-Z]/.test(cardNumber.value))
    {
        warning.style.display='block';
        cardNumber.classList.add('warn');
        cardNumber.classList.add('warn:focus');
    }
    else{
        warning.style.display='none';
        cardNumber.classList.remove('warn');
        cardNumber.classList.remove('warn:focus');
    }
    if(cardNumber.value.length == 0){
        warnCardNumberEmpty.style.display = 'block'
        cardNumber.classList.add('warn');
        cardNumber.classList.add('warn:focus');
    }
    else{
        warnCardNumberEmpty .style.display='none';
        cardNumber.classList.remove('warn');
        cardNumber.classList.remove('warn:focus');
    }
    card_number.textContent = cardNumber.value;
}

cardExpireM.onkeyup = ()=>{
    if(parseInt(cardExpireM.value)>12){
        cardWarnNumM.style.display='block';
        cardExpireM.classList.add('warn','warn:focus');
    }
    else{
        cardWarnNumM.style.display='none';
        cardExpireM.classList.remove('warn','warn:focus');
    }
    if(/[a-zA-Z]/.test(cardExpireM.value)){
        cardWarnM.style.display='block';
        cardExpireM.classList.add('warn','warn:focus');
    }
    else{
        cardWarnM.style.display='none';
        cardExpireM.classList.remove('warn','warn:focus');
    }
    if(cardExpireM.value.length == 0){
        cardWarnEmptyM.style.display='block';
        cardExpireM.classList.add('warn','warn:focus');
    }
    else{
        cardWarnEmptyM.style.display='none';
        cardExpireM.classList.remove('warn','warn:focus');
    }        
    cardExpireFrontM.textContent = cardExpireM.value;
}

cardExpireY.onkeyup = ()=>{
    if(parseInt(cardExpireY.value) < 22){
        cardWarnNumY.style.display='block';
        cardExpireY.classList.add('warn','warn:focus');
    }
    else{
        cardWarnNumY.style.display='none';   
        cardExpireY.classList.remove('warn','warn:focus');             
    }
    if(/[a-zA-Z]/.test(cardExpireY.value)){
        cardWarnY.style.display='block';
        cardExpireY.classList.add('warn','warn:focus');
    }
    else{
        cardWarnY.style.display='none';
        cardExpireY.classList.remove('warn','warn:focus');
    }
    if(cardExpireY.value.length == 0){
        cardWarnEmptyY.style.display='block';
        cardExpireY.classList.add('warn','warn:focus');
    }
    else{
        cardWarnEmptyY.style.display='none';
        cardExpireY.classList.remove('warn','warn:focus');
    }
    cardExpireFrontY.textContent = cardExpireY.value;
 }

cvc.onkeyup = ()=>{
    if(/[a-zA-Z]/.test(cvc.value)){
        cardWarnCvc.style.display='block';
        cvc.classList.add('warn','warn:focus');
    }
    else{
        cardWarnCvc.style.display='none';
        cvc.classList.remove('warn','warn:focus');
    }
    if(cvc.value.length == 0){
        cardWarnCvcEmpty.style.display='block';
        cvc.classList.add('warn','warn:focus');
    }
    else{
        cardWarnCvcEmpty.style.display='none';
        cvc.classList.remove('warn','warn:focus');
    }
    cvcFront.textContent = cvc.value;
}

submit.onclick = (e)=>{
    e.preventDefault()
    form.style.display = 'none';
    success.style.display = 'block';
}
continueBtn.onclick = ()=>{
    location.reload();
}