
var $deck = $('.deck');

window.setTimeout(function () {
  $deck.addClass('is-scattered');
}, 1);

var removeTopCard = function () {
  var $child = $deck.children(':last-child');
  $child.addClass('is-offscreen--l');
  window.setTimeout(function () {
    $child.remove();
  }, 500);
}

var addNewCard = function () {
  var $card = $('<div>', {
    html: '<div class="card is-offscreen--r">'
     + '<header class="card-header">'
     + ' <h3>Card Title</h3>'
     + '</header>'
     + '<div class="card-body">'
     + '  Body Content'
     + '</div>' 
     + '<footer class="card-footer">'
     + '  footer text'
     + '</footer>'
  }).children(1);
  console.log('card', $card);
  $deck.append($card);
  window.setTimeout(function () {
    $card.removeClass('is-offscreen--r');
  }, 1);
};
 
$('body').on('click', function () {
  console.log('click');
  addNewCard();
});
 
$('.deck').on('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('click');
  removeTopCard();
});