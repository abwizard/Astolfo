const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botAst = new Discord.Client(); //ประกาศ client ขึ้นมา
//event นี้ทำงานเมื่อ login สำเร็จ
botAst.on('ready', () => {
  console.log('Astolfo ready!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
botRem.on('message', message => { 
  if (message.content === 'แอสโทลโฟน่ารักจังเลยน้า') {
    message.reply('ขอบคุณนะ มาสเตอร์');
  }
});
botRem.login('YOUR BOT TOKEN HERE!!!');
