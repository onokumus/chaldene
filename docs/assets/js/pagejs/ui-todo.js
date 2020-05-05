$(document).ready(function () {



  $(".todo-list").find('.todo-link').on('click', function(event){
    event.preventDefault();
    $(this).find('.fa').toggleClass('fa-square-o fa-check-square');
    $(this).closest('.todo-item').toggleClass('is-done');
  });



  var _container = $('.dragula');
  if (window.dragula !== undefined) {
    var _containers = [];
    for (var i = 0; i < _container.length; i++) {
      _containers.push(_container[i]);
    }
    dragula(_containers, {
      moves: function(el, container, handle) {
        return handle.classList.contains('draggable');
      }
    });
  } else {
    console.log('First install dragula plugin! https://bevacqua.github.io/dragula/');
  }



});
