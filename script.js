//project 1 called mixed messages, i want to create a fortune teller.
//starting with an array of the fortunes. 
const fortunes = ['Today is going to be a great day', 'Big money is coming your way',
 'Make a big investment and you will receive a big return', 'Take time to learn something new and you will be rewarded',
 'Being kind to others will make you happy', 'Do not forget to rest, you can\'t pour from an empty cup'],
tellFortune = () => {
 //need to generate a random fortune
function getRandomNum(array){
    return Math.floor(Math.random() * array.length)};
//user needs to be able to find out their fortune
let fortune = fortunes[getRandomNum(fortunes)];
let fullString = `Your fortune today is ${fortune}`;
 return console.log(fullString);
};

tellFortune();
 
