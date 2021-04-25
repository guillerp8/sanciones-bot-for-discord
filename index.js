const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const prefix = "!";


client.on('ready', () => {
    console.log('guillerp Bot funcionando');
});



client.on('message', message => {
    if (message.content === 'bot on') {
        const embed = new MessageEmbed()
            .setTitle('Bot de guillerp')
            .setColor(0xff0000)
            .setDescription('Bot de guillerp iniciado corectamente');
        message.channel.send(embed);
    }
});

client.on('message', message => {

    if (message.content.startsWith(prefix)) {

        const commandBody = message.content.slice(prefix.length);

        const args = commandBody.split(' ');

        const command = args.shift();


        if (command === "latencia") {
            const timeTaken = Date.now()
            const embed = new MessageEmbed()
                .setTitle('Bot de guillerp')
                .setColor(0xff0000)
                
                .setDescription(`La latencia del bot es de ${timeTaken} milisengundos`)
                .setFooter('Desarrollado por guillerp');
            message.channel.send(embed);
            message.channel.send('Estado del bot')
        }
        else if (command === "warn") {
            const member = message.mentions.members.first();
            const args = message.content.slice(29).trim().split(',');
            var server = message.guild;
            let guild = message.guild;
            if (message.member.roles.cache.find(r => r.name === "TU ROL (NOMBRE)")) {
                if (member) {
                    const embed = new MessageEmbed()
                        .setTitle('Sistema de sanciones de guillerp')
                        .setColor(0xFFFF00)
                        .setThumbnail('TULOGO')
                        .setDescription(`El jugador ${member.user} ha recibido un WARN por ${args}. Si quieres apelar el warn dirigete a <#739613403609301060>` );
                    message.channel.send(embed);
					message.delete();
                    let guild = client.guilds.cache.get('TU GUILD ID')
                    console.log(guild);
                    let name = message.mentions.members.first().user.username;
                    let fin = name.replace(/[`~!@#$%^&*()_|+\-=?;:' ",.<>\{\}\[\]\\\/]/gi, "")
                    console.log(fin.toLowerCase());
                    console.log(fin.toLowerCase());
                    if (guild.channels.cache.find(channel => channel.name === fin.toLowerCase())) {
                        sleep(2000).then(() => {
                            let logchannel = guild.channels.cache.find(channel => channel.name === fin.toLowerCase()); 
                            logchannel.send(`El jugador **${fin}** ha recibido un warn por **${args}**`)
                        });
                    }
                    else {
                        guild.channels.create(fin.toLowerCase(), { reason: 'Sanción' })
                        .then(console.log)
                        .catch(console.error);
                        sleep(2000).then(() => {
                            let logchannel = guild.channels.cache.find(channel => channel.name === fin.toLowerCase()); 
                            logchannel.send(`El jugador **${fin}** ha recibido un warn por **${args}**`)
                        });
                    }
                    
                }

            }
            else {
                message.reply('No tienes permisos para usar el bot')
            }

        }

        else if (command === "strike") {
            const member = message.mentions.members.first();
            const args = message.content.slice(30).trim().split(',');
            var server = message.guild;
            let guild = message.guild;
            if (message.member.roles.cache.find(r => r.name === "TU ROL (NOMBRE)")) {
                if (member) {
                    const embed = new MessageEmbed()
                        .setTitle('Sistema de sanciones de guillerp')
                        .setColor(0xff0000)
                        .setThumbnail('TULOGO')
                        .setDescription(`El jugador ${member.user} ha recibido un STRIKE por ${args}. Si quieres apelar el strike dirigete a <#739613403609301060>` );
                    message.channel.send(embed);
					message.delete();
                    let guild = client.guilds.cache.get('TU GUILD ID')
                    console.log(guild);
                    let name = message.mentions.members.first().user.username;
                    let fin = name.replace(/[`~!@#$%^&*()_|+\-=?;:' ",.<>\{\}\[\]\\\/]/gi, "")
                    console.log(fin.toLowerCase());
                    console.log(fin.toLowerCase());
                    if (guild.channels.cache.find(channel => channel.name === fin.toLowerCase())) {
                        sleep(2000).then(() => {
                            let logchannel = guild.channels.cache.find(channel => channel.name === fin.toLowerCase()); 
                            logchannel.send(`El jugador **${fin}** ha recibido un strike por **${args}**`)
                        });
                    }
                    else {
                        guild.channels.create(fin.toLowerCase(), { reason: 'Sanción' })
                        .then(console.log)
                        .catch(console.error);
                        sleep(2000).then(() => {
                            let logchannel = guild.channels.cache.find(channel => channel.name === fin.toLowerCase()); 
                            logchannel.send(`El jugador **${fin}** ha recibido un strike por **${args}**`)
                        });
                    }
                }

            }
            else {
                message.reply('No tienes permisos para usar el bot') 
            }

        }

        else if (command === "ban") {
            const member = message.mentions.members.first();
            const args = message.content.slice(28).trim().split(',');
            var server = message.guild;
            let guild = message.guild;
            if (message.member.roles.cache.find(r => r.name === "TU ROL (NOMBRE)")) {
                if (member) {
                    const embed = new MessageEmbed()
                        .setTitle('Sistema de sanciones de guillerp')
                        .setColor(0x000000)
                        .setThumbnail('TULOGO')
                        .setDescription(`El jugador ${member.user} ha recibido un BANEO por ${args}. Si quieres apelar el ban dirigete a <#739613403609301060>` );
                    message.channel.send(embed);
					message.delete();
                    let guild = client.guilds.cache.get('TU GUILD ID')
                    console.log(guild);
                    let name = message.mentions.members.first().user.username;
                    let fin = name.replace(/[`~!@#$%^&*()_|+\-=?;:' ",.<>\{\}\[\]\\\/]/gi, "")
                    console.log(fin.toLowerCase());
                    console.log(fin.toLowerCase());
                    if (guild.channels.cache.find(channel => channel.name === fin.toLowerCase())) {
                        sleep(2000).then(() => {
                            let logchannel = guild.channels.cache.find(channel => channel.name === fin.toLowerCase()); 
                            logchannel.send(`El jugador **${fin}** ha recibido un ban por **${args}**`)
                        });
                    }
                    else {
                        guild.channels.create(fin.toLowerCase(), { reason: 'Sanción' })
                        .then(console.log)
                        .catch(console.error);
                        sleep(2000).then(() => {
                            let logchannel = guild.channels.cache.find(channel => channel.name === fin.toLowerCase()); 
                            logchannel.send(`El jugador **${fin}** ha recibido un ban por **${args}**`)
                        });
                    }
                }

            }
            else {
                message.reply('No tienes permisos para usar el bot')
            }

        }
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

client.login('TU TOKEN');

