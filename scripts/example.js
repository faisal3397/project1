'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

  var animals = { // object of animal pictures
    cat: "https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg",
    zebra: "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Fjvchamary%2Ffiles%2F2016%2F01%2Fzebra-1200x800.jpg",
    dog: "https://nhl.bamcontent.com/images/photos/301406224/1024x576/cut.jpg",
    squirrel: "https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg",
    turtle: "https://cdn.images.express.co.uk/img/dynamic/galleries/x701/370884.jpg",
    monkey: "https://ichef.bbci.co.uk/news/660/cpsprodpb/E9DF/production/_96317895_gettyimages-164067218.jpg",

  }

  var date = new Date(); //date object to get the day or hour 


  robot.hear(/GA/i, (res) => {
    if(date.getDay() == 0 || date.getDay() == 2){ //0 means Monday, 2 means Wednesday 
      if(date.getHours() == 20){ // 20 means that it is 8PM
      res.send(`Don't forget to fill the Exit Ticket,  https://docs.google.com/forms/d/e/1FAIpQLSeesS4JlEucM097ZlYR1CJTPE21TihB66hLjoEFeVABk0F_gQ/viewform`);
      return
      }
    }
    
    res.send(`There is no class today, Have Fun :)`);
  })

  robot.respond(/Hello bot, send me a picture of a (.*)/i, (res) => { 
    const name = res.match[1];
    for(var key in animals){
      if(animals.hasOwnProperty(name)){
      res.reply(`Here's a picture of a ${name} that could make your day :), ${animals[name]}`);// Anytime a user asks for an animal it responds with a picture of the animal
      return
      }
    }
    res.reply(`Sorry I don't have a picture for a/an ${name} yet`);//If the animal picture does not exist
  })

  const quotes = ['Begin now to be what you will be hereafter. Saint Jerome',
                  'We have to do the best we are capable of. This is our sacred human responsibility. Albert Einstein',
                  'You have as much laughter as you have faith. Martin Luther', 
                  'The brain is wider than the sky. Emily Dickinson',
                  'Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference. Robert Frost',
                  'If you are free, you need to free somebody else. If you have some power, then your job is to empower somebody else. Toni Morrison',
                  'Magic is believing in yourself, if you can do that, you can make anything happen. Johann Wolfgang von Goethe',
                  'If you are not willing to risk the unusual, you will have to settle for the ordinary. Jim Rohn',
                  'Great things never came from comfort zones. Neil Strauss',
                  'There is no great genius without a mixture of madness. Aristotle']
  
  robot.respond(`/quote/i`, (res) => {
    res.reply(res.random(quotes))
  })

}
