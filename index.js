// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return messages;
  }

function countDown(){
    countDown = 10;
    while(countDown >= 0){
        console.log(countDown--);
    }
}