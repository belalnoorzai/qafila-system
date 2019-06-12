const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
console.log('Logging into discord..');
console.log(`
Login successful.







 client.on('message', message => {

 

    if (message.content === "قفل الشات") {

                        if(!message.channel.guild) return message.reply(' This command only for servers');

 

if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(' ليس لديك صلاحيات');

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: false

 

           }).then(() => {

               message.reply("تم تقفيل الشات :white_check_mark: ")

           });

             }

 

if (message.content === "فتح الشات") {

    if(!message.channel.guild) return message.reply(' This command only for servers');

 

if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('ليس لديك صلاحيات');

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: true

 

           }).then(() => {

               message.reply("تم فتح الشات:white_check_mark:")

           });

             }

 

 

 
});












// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);