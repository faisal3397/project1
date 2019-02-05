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

  robot.respond(/cats/, function(res) {
    let cats = [  "https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg",
                  "https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg",
                  "https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg",
                  "https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg"
                    ]

    let rand = Math.floor(Math.random() * cats.length)
    return res.reply(`Here's a picture of a cat that could make your day :), ${cats[rand]}`);
  });

  robot.hear(/GA/i, (res) => {
    res.send('GA Rocks!!')
    
  })

  robot.respond(/Hello bot my name is (.*)/i, (res) => {
    const name = res.match[1];

    if(name == 'Faisal'){
      res.reply(`hello master`);
      return
    }

    res.reply(`Hello ${name}, It is nice to meet you`);
  })

  const lulz = ['lol', 'rofl', 'lmao', 'hahahahahahaha']
  
  robot.respond(`/lol/i`, (res) => {
    res.send(res.random(lulz))
  })

}
