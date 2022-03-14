// Program to display random message output
// random array index generator 
//create and array of random facts

const randomMessage = (name) => {
    getRandomArr = Math.floor(Math.random() * randomArray.length)
    randomIndex = Math.floor(Math.random() * randomArray[getRandomArr].length);
    if (typeof name === 'string') {
        console.log(`Hi ${name}! did you know that ${randomArray[getRandomArr][randomIndex]}?`)
    } else {
        console.log('Please enter a valid name and topic')
    };
    
}
const planets = ['Mars is red', 'Saturn has rings', 'Pluto is a planet, or maybe its not...', 'Mercury is hot', 'Earth is bae', 'Uranus is not a part of your body'];
const animals = ['Cats are wild', 'Dogs make great pets', 'Elephants are big.', 'Tigers are big.', 'Cows say "moo"', 'You can ride horses'];
const people = ['George Washington was the first president', 'Mike Tyson was a boxer', 'Paul Casey is going to win the Players', 'Jimmy Buffet is drinking a margarita'];
const bitcoin = ['Satoshi Nakamoto is the creator of Bitcoin', 'The total supply can not exceed 21M', 'The Bitcoin network is avalible anywhere in the world', 'anyone can send and recieve bitcoin transactions', 'bitcoin transactions do not rely on third parties'];
const randomArray = [planets, animals, people, bitcoin]
randomMessage('User')
