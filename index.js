const Discord = require('discord.js');
<<<<<<< HEAD
const Dinosaurs = require('./dinosaurs');
=======
>>>>>>> dc19962bbc1835b1a07ff3cc6b9465af62ad6b0b
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong!');
<<<<<<< HEAD

  }else if (msg.content === '!help') {
    msg.reply("\n!ping -> replies pong\n!mystats -> Prints out some statistics about you as a user.\n!8ball [question] -> Ask me something and I'll try to predict the answer!\n!dinosaur [name] -> Print some generic info about any dinosaur yet discovered. Leave name blank to find a random dinosaur from the database!\n!dinosaurfacts -> Learn a new fact about dinosaurs! (accuracy not guaranteed)");

  }else if (msg.content === "!mystats") {
    var user = msg.member;
    msg.reply(`\nID: ${user.id}\n Joined server: ${user.joinedAt}\nJoined Discord: ${user.user.createdAt}\nAvatar: ${user.user.avatarURL}`);

  }else if (msg.content === "!8ball") {
    msg.reply("I'm sorry, I can't give you an answer without a question.");

=======
  }else if (msg.content === '!help') {
    msg.reply("\n!ping -> replies pong\n!mystats -> Prints out some statistics about you as a user.\n!8ball [question] -> Ask me something and I'll try to predict the answer!");
  }else if (msg.content === "!mystats") {
    var user = msg.member;
    msg.reply(`\nID: ${user.id}\n Joined server: ${user.joinedAt}\nJoined Discord: ${user.user.createdAt}\nAvatar: ${user.user.avatarURL}`);
  }else if (msg.content === "!8ball") {
    msg.reply("I'm sorry, I can't give you an answer without a question.");
>>>>>>> dc19962bbc1835b1a07ff3cc6b9465af62ad6b0b
  }else if (msg.content.startsWith("!8ball")) {
    var num = Math.floor(Math.random() * 5 + 1);
    switch (num) {
      case 1:
        msg.channel.send("Definitely!");
        break;
      case 2:
        msg.channel.send("It seems likely!");
        break;
      case 3:
        msg.channel.send("It's possible?");
        break;
      case 4:
        msg.channel.send("I really don't think so at all.");
        break;
      case 5:
        msg.channel.send("Probably not. Sorry.");
        break;
      default:
        msg.channel.send("I'm sorry, I'm not sure!");
        break;
    }
<<<<<<< HEAD
  }else if (msg.content === "!dinosaur") {
		Dinosaurs.GetDinosaur("rand", function(data) {
			msg.channel.send(data);
		});

	}else if (msg.content.startsWith("!dinosaur ")){
		const dino = msg.content.slice(10, msg.content.length);
    		Dinosaurs.GetDinosaur(dino, function(data) {
				msg.channel.send(data);
		});

	}else if (msg.content === "!dinofacts" || msg.content === "!dinosaurfacts") {
		Dinosaurs.DinosaurFacts(function(fact) {
			msg.channel.send(fact);
		});
	}
=======
  }
>>>>>>> dc19962bbc1835b1a07ff3cc6b9465af62ad6b0b
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'discussion');
  if (!channel) return;
  channel.send(`Welcome to our server ${member}! Everyone say hello! Please have a look at #welcome-rules and then join in on the fun!\nIf you need anything from me, type !help in #party to see what I can do.`);
});

client.login('token');
