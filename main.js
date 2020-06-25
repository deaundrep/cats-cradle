function challengeBanner(n) {
    console.log(`######## Challenge ${n} ########`)
}
challengeBanner(0)

challengeBanner(1)
function vowelsOnly(string){
let i = 0
const vowels = 'aeiou'
    while(i < string.length){
        if (vowels.includes[string[i]] && count < 5){
            console.log(string[i])
        }
        i = i + 1
    }
}


challengeBanner(2);
let vowelCount = 0  
function firstFiveVowels(str) {
    
}   
firstFiveVowels("Regular expressions are for term 2.")
firstFiveVowels('Hello!')

challengeBanner(3);
function thirdCharacter(str) {
let i = 2
while (i < str.length){
    console.log(str[i])
    i = i + 3
}	
}
thirdCharacter("I am the alfalfa and the omelette.");

challengeBanner(4)
firstFour("Oh hi, I didn't see you there. Welcome.", 4);
firstFour("Oh hi, I didn't see you there. Welcome.", 36);

function firstFour(str, start){
    let count = 0
    let i = start
    while (i < str.length){
        if (count < 4){
            console.log(str[i])
            count = count + 1
        }
        i = i + 1
    }
}

challengeBanner(5);
function findU(str) {
    let = 0
    while (i < str.length){
        if(str[i]=== 'u'){
            console.log(i)
        }
        i = i + 1
    }

}
findU('You picked the wrong house, bub.')

challengeBanner(6);
function firstU(str) {
    let found = false
    let = 0
    while (i < str.length){
        if(str[i]=== 'u' && found === false){
            console.log(i)
            found = true;
        }
        i = i + 1
    }
}
    firstU('You picked the wrong house, bub.') 
    
challengeBanner(7);
function minusOne(str) {
    let found = false
    let = 0
    while (i < str.length){
        if(str[i]=== 'u' && found === false){
            console.log(i)
            found = true;
        }
        i = i + 1
    }
if (found === false){
    console.log(-1)
}
}
minusOne('You picked the wrong house, bub.');
minusOne("I'm Canadian.")