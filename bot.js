const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require("./işaret.json");
const { Client, MessageEmbed } = require('discord.js')


var prefix = işaret.prefix

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('bak şuan attım')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'mod-logs')
           log.send(`${user.tag} kişisi atılmıştır`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("bu isimde bir kişi sunucuda bulunmuyo");
      }
    } else {
      message.reply("Kimi atıcağımı yazmadın");
    }
  }
});

client.on('message', message => {
  if (message.content.startsWith('oylama')){
    const args = message .content.split(' ').slice(1)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('bak şuan yaptım');
    if (!botmesajı) return message.reply('ne oylaması yapacağımı yazmadın');
    message.delete(message.author)
    const embed = new MessageEmbed()
      .setTitle('oylama')
      .setDescription(botmesajı)
      .setFooter('BACKside');
      message.channel.send({ embed: embed }).then( embedmessage => {
        embedmessage.react("✔️")
        embedmessage.react("❌");
      })
    }
  })

client.on("message", message => {
  if (message.content.startsWith('rolver')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('bak şuan verdim')
    let role = message.mentions.roles.first();
    let member = message.mentions.members.first();
    member.roles.add(role)
  }
});


client.on('message', message => {
  if (!message.guild) return;
if (message.content.startsWith('!ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('bak şuan attım')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'mod-logs')
           log.send(`${user.tag} kişisi banlanmıştır.`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("bu isimde biri sunucuda bulunmuyor");
      }
    } else {
      message.reply("kimi banlıyıcağımı yazmadın.");
    }
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('create by ! legit_us !', { type: 'PLAYING' })
 .then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
 .catch(console.error);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('as aslan parçası');
  }
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === '31') {
    msg.channel.send('sjsjsj');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.channel.send('günaydın bitanem');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '/kurallar') {
    const kanal = new MessageEmbed()

    .setTitle('kurallar')
    .setDescription('ÖNEMLİ!!')
    .setAuthor('BACKside')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/icons/829644488854732840/79ba4a1a0b2f5ddfef7247f24581d0df.png?size=128')
    .addField('1', 'ailevi küfür ve spam yasak')
    .addField('2','Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve benzeri şekilde reklamlar yapmak yasaktır')
    .addField('3','Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır')
    .addField('4','Kavga etmek, kavgaya dahil olmak ve tartışmak yasaktır.');
    msg.channel.send(kanal);
  }
});

client.login('ODMwMzczNDY4Njc5MTc2MTkz.YHFvjg.O8LI44TpaVVlLc0zbtK4z6eBYXg');

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'napim') {
    msg.channel.send('domal');
  }
});
