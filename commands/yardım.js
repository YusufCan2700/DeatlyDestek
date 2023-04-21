const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
let prefix = config.prefix
exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("DeatlyWing - Destek Sistemi")
    .setDescription(`${prefix}ticket-yetkilisi\n${prefix}ticket-oluştur Buton Üzerinde Yazıcak Yazı + Embed Mesaj Yazısı\n${prefix}ticket-log`)
    .setColor("#007fff")
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ticket-sistem"
};
