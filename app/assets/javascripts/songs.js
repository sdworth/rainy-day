$(document).ready(function () {
  function postSong() {
    var title = $('#song_title').val();
    var link = $('#song_link').val();

    data = {
      title: title,
      link: link
    };

    $.post('/songs', data)

      .success(function (song) {
        appendSong(song)
      })

      .fail(function () {
        showValidationError()
      });
  }

  function appendSong(song) {

    createSongElement(song);

    fadeInLastChildOfList();

    addToFlash('Thanks for contributing a song!')
  }


  function showValidationError() {
    var message = 'Oops! Either something is blank or your link isn\'t a youtube link!';
    addToFlash(message);
  }

  function createSongElement(song) {
    var songList = $('ol');

    songList.append(
        '<li style="display: none">' +
        '<div class="likes"><button id="' +
        song.id +
        '">❤︎</button>' +
        '<span id="likes">0</span></div>' +
        '<a href="' +
        song.link +
        '">' +
        song.title +
        '</a>'
    );
  }

  function fadeInLastChildOfList() {
    $('li:last-child').fadeIn(500);
  }

  function addToFlash(message) {

    console.log('ran');

    flash = $('.flash');
    flash.empty()
      .append(message);
    flash
      .fadeIn(500)
      .fadeOut(6000)
  }

  $('.submit-button').on('click', function (e) {
    e.preventDefault();
    postSong();
  })
});