const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botAst = new Discord.Client(); //ประกาศ client ขึ้นมา
//event นี้ทำงานเมื่อ login สำเร็จ
botAst.on('ready', () => {
  console.log('Astolfo ready!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
botAst.on('message', message => { 
  if (message.content === 'Astolfo is so cute') {
    message.reply('Thank you master!');
  }
});
botAst.login('MzEzMzAwOTU5MDQ2NDAyMDQ5.C_nrBQ.bavgh8WvqV6H9qMuWURPZjV7_PQ');
