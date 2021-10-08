let nowIndex = 0;
let isLoading = false;
let LANG = 'en';

if (!window.I18N) window.I18N = {};
window.I18N['zh-tw'] = {
  TITLE: '用中文直播的頻道'
}

if (!window.I18N) window.I18N = {};
window.I18N['en'] = {
  TITLE: 'The Streams in English'
}


function changeLang(lang) {
  $('.menu h1').text(window.I18N[lang].TITLE);
  LANG = lang;
  $('.row').empty();
  appendData(lang);
}


function getData (lang, cb) {
  const clientId = 'e2jcbc2m3r2svybnklmgwisip5611g';
  const limit = 5;
  isLoading = true;

  $.ajax({
    url: 'https://api.twitch.tv/kraken/streams?client_id=' + clientId + '&game=League%20of%20Legends&limit=' + limit + '&offset=' + nowIndex + '&language=' + lang,
    success: (response) => {
      console.log(response);
      cb(null, response);
    }
  })
}

function appendData(lang) {
  getData(lang, (err, data) => {
    const {streams} = data;
    const $row = $('.row');
    for(let stream of streams) {
      $row.append(getColumn(stream));
    }
    nowIndex += 10;
    isLoading = false;
  });
}

// return 每一個 .col 的 html
function getColumn(data) {
  return `
    <div class="col">
      <div class="preview">
        <img src="${data.preview.medium}"/>
      </div>
      <div class="bottom">
        <div class="avatar">
          <img src="${data.channel.logo}"/>
        </div>
        <div class="intro">
          <div class="channel_name">
            ${data.channel.status}
          </div>
          <div class="author_name">
            ${data.channel.display_name}
          </div>
        </div>
      </div>
    </div>`;
}


$(document).ready(function() {
  appendData(LANG);
  $(window).scroll(function(){
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200){
      // load new channel
      if(!isLoading){
        appendData(LANG);
      }
    }
  })
})
