function challengeBanner(n) {
    console.log(`######## Challenge ${n} ########`)
}
challengeBanner(0)

challengeBanner(1)
let string = "Regular expressions are for term 2."
function vowelsOnly(string){
    for (let i = 0; i < string.length; i++){
    if ('aeiou'.includes(string[i])){
    console.log(string[i])
    }
    }
}
vowelsOnly(string)

challengeBanner(2);
let vowelCount = 0  
function firstFiveVowels(string) {
    for (i = 0; i <= string.length; i++) {
    if ('aeiou'.includes(string[i]) && vowelCount <= 5) {
    console.log(string[i]);
    }
    vowelCount = vowelCount + 1;
    }
}   
firstFiveVowels("Regular expressions are for term 2.")
firstFiveVowels('Hello!')

challengeBanner(3);
function thirdCharacter(string) {
	for(i = 2; i < string.length; i= i + 3) {
	console.log(string[i]);
	}
}
thirdCharacter("I am the alfalfa and the omelette.");

challengeBanner(4)

let count = 0
function firstFour(string, start){
    for (let i = start; i < string.length && count < 4; i++){
    console.log(str[i]);
    count ++;
    }
}
firstFour("Oh hi, I didn't see you there. Welcome.", 4);
firstFour("Oh hi, I didn't see you there. Welcome.", 36);

challengeBanner(5);
function findU(string) {
    for (i = 0; i < string.length; i++) {
    if(string[i] === 'u') {
    console.log(i);
    }
    }
}
findU('You picked the wrong house, bub.')

addChallengeBanner(6);
function firstU(string) {
    for (i = 0; i <= string.length; i++) {
    if(string[i] === 'u') {
    console.log(i);
        return true;
    }
    } 
}
    firstU('You picked the wrong house, bub.') 
    
challengeBanner(7);
function minusOne(string) {
    for (i = 0; i <= string.length; i++) {
    if(string[i] === 'u') {
    console.log(i);
            return true; 
        }
    }
    console.log('-1')
}
minusOne('You picked the wrong house, bub.');
minusOne("I'm Canadian.")