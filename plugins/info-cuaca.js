const axios = require("axios");
const translate = require("translate-google-api");
const defaultLang = "id";
const tld = "cn";
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `š²šØ berikan nama tempat atau lokasi\nš¬š§ please provide place or location name\nContoh :\n${
      usedPrefix + command
    } Jakarta`;

  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    );
    const res = await response;

    /*const name = res.data.name
        const Country = res.data.sys.country
        const Weather= res.data.weather[0].description
        const Temperature = res.data.main.temp + 'Ā°C'
        const Minimum_Temperature= res.data.main.temp_min + 'Ā°C'
        const Maximum_Temperature= res.data.main.temp_max + 'Ā°C'
        const Humidity= res.data.main.humidity + '%'
        const Wind= res.data.wind.speed + 'km/h'
        let translateid = await translate(synopsis, {
    tld,
    to: 'id',
})
        translateid[0] */
    let translateid = await translate(res.data.weather[0].description, {
      tld,
      to: "id",
    });
    conn.reply(
      m.chat,
      `*[INDONESIAN VERSION š²šØ]*
šø Tempat : ${res.data.name}
š Negara : ${res.data.sys.country}
š Cuaca : ${translateid[0]}
š Temperatur : ${res.data.main.temp + "Ā°C"}
š Temperatur Minimum : ${res.data.main.temp_min + "Ā°C"}
š Temperatur Maximum : ${res.data.main.temp_max + "Ā°C"}
ā Kelembapan : ${res.data.main.humidity + "%"}
š¬ļø Angin : ${res.data.wind.speed + "km/h"}
`.trim(),
      m
    );
  } catch (e) {
    throw "š²šØ lokasi tidak ditemukan\nš¬š§ location not found";
    //console.log(e)
  }
};

handler.help = ["infocuaca <kota>"];
handler.tags = ["info"];
handler.command = /^(infocuaca|cuaca|weather)$/i;

module.exports = handler;

//from https://github.com/Aiinne/Aine-MD/blob/main/plugins/cuaca.js
