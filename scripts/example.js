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
  robot.hear(/Hello/, function(res) {
    let responses = ["Hello!", "Hi!","Wetin dey hapun", "Alsalam alikem", "你好" ]
    let rand = Math.floor(Math.random() * responses.length)
    return res.send(`${responses[rand]}`);
  });
  robot.hear(/badger/i, (res) => {
    res.send('Badgers? BADGERS? WE DON`T NEED NO STINKIN BADGERS')
  })
  //
  robot.respond(/open the (.*) doors (.*)/i, (res) => {
    const doorType = res.match[1]
    const doorType2 = res.match[2]
  
    // if (doorType === 'pod bay') {
    //   res.reply('I'm afraid I can't let you do that.')
    //   return
    // }
    // if(doorType2 === "hmm"){
    //   res.reply('hmmm... what?')
    //   return
    // }
  
    res.reply(`Opening ${doorType} doors ${doorType2}`)
  })
  
  robot.hear(/I like pie/i, (res) => {
    res.emote('makes a freshly baked pie')
  })
  
  const lulz = ['lol', 'rofl', 'lmao']
  
  robot.respond(`/${lulz.join('|')}/i`, (res) => {
    res.send(res.random(lulz))
  })
}
