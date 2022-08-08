let handler = async (m, { conn }) => {
  let txt = `
Ini portofolio owner 

Portofolio => github
https://github.com/nabils24/

Portofolio => vercel
https://nabils24-portofolio.vercel.app/

Portofolio => netlify
https://nabils24.netlify.app/

Thanks for all`;
  conn.reply(m.chat, txt, m);
};
handler.help = ["portofolio"];
handler.tags = ["info"];
handler.command = /^(sc(ript(bot)?)?|portofolio)$/i;

module.exports = handler;
