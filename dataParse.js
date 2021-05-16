const hololiveData = require("./json/hololive.json");
const axios = require("axios").default;
const dataView = hololiveData.hololive; // สร้างตัวแปรที่มีข้อมูลเป็น json
const data = dataView.map((value) => value.channelId); // สร้าง อาเรย์ เป็นชุดไอดี ของช่อง
const fs = require("fs");

const setVideolive = () => {
  const file = "./json/liveChannel.json";
  let arts = [];
  data.map((value) => {
    const channel = dataView.find((res) => res.channelId === value);
    axios
      .get(`http://localhost:3004/hololive/${value}`)
      .then((res) => res.data)
      .then((resData) => {
        const dataformath = setlist(resData.items[0], channel);
        arts.push(dataformath);
        return arts;
      })
      .then((art) => {
        let datas = JSON.stringify(art, null, 2);
        fs.writeFile(file, datas, () => {
          console.log("write");
        });
      })
      .catch((e) => console.error(e));
  });
};

const setlist = (value, channale) => {
  const livevideo = value;
  const id = livevideo.id.videoId;
  const thumbnails = livevideo.snippet.thumbnails.high.url;
  const title = livevideo.snippet.title;
  channale.liveBroadcastContent = !channale.liveBroadcastContent;
  channale.video = {
    id: id,
    thumbnails: thumbnails,
    title: title,
  };
  return channale;
};

module.exports = setVideolive
