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
    emptyInputs();
    attachLikeFunction($('li:first-child').find('button'));
    fadeInFirstChildOfList();
    addToFlash('Thanks for contributing a song!')
  }

  function showValidationError() {
    var message = 'Oops! Either something is blank or your link isn\'t a youtube link!';
    addToFlash(message);
  }

  function emptyInputs() {
    $('#song_title').val('');
    $('#song_link').val('');
  }

  function createSongElement(song) {
    var songList = $('ol');

    songList.prepend(
        '<li style="display: none">' +
        '<div class="likes"><button class="like-button" id="' +
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

  function fadeInFirstChildOfList() {
    $('li:first-child').fadeIn(500);
  }

  function addToFlash(message) {
    flash = $('.flash');
    flash.empty()
      .append(message);
    flash
      .fadeIn(500)
      .fadeOut(6000)
  }


  var self;

  function likeSong() {
    $.ajax({
      url: ('/songs/' + $(self).attr('id')),
      method: 'PATCH',
      success: (function () {
        addToFlash('Thanks for liking!');
        incrementLike()
      }),
      fail: (function () {
        addToFlash('Oh dear! Something went wrong, please like again another day.')
      })
    })
  }

  function incrementLike() {
    var like = getLikeSpan();
    var int = like.text();
    console.log(int);
    int++;
    console.log(int);
    like.empty();
    like.append(int);
  }

  function getLikeSpan() {
    return $(self).parents('.likes').find('span')
  }

  function attachLikeFunction(elements) {
    elements.one('click', function () {
      self = this;
      likeSong();
    });
  }

  $('.submit-button').on('click', function (e) {
    e.preventDefault();
    postSong();
  });

  attachLikeFunction($('.like-button'));
});