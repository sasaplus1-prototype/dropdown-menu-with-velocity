(function(){

  'use strict';

  var menu = document.querySelector('.js-menu'),
      dropdown = document.querySelector('.js-dropdown'),
      dropdownHeight = dropdown.scrollHeight,
      queue = 'dropdown',
      hover = false;

  function show() {
    // clear queue
    Velocity(dropdown, 'stop', queue);

    // add queue
    Velocity(dropdown, {
      height: dropdownHeight
    }, {
      queue: queue,
      display: 'block',
      visibility: 'visible'
    });

    Velocity.Utilities.dequeue(dropdown, queue);
  }

  function hide() {
    // clear queue
    Velocity(dropdown, 'stop', queue);

    // add queue
    Velocity(dropdown, {
      height: 0
    }, {
      queue: queue,
      display: 'none',
      visibility: 'visible'
    });

    Velocity.Utilities.dequeue(dropdown, queue);
  }

  function enter() {
    hover = true;

    setTimeout(function() {
      if (hover) {
        show();
      }
    }, 0);
  }

  function leave() {
    hover = false;

    setTimeout(function() {
      if (!hover) {
        hide();
      }
    }, 0);
  }

  dropdown.style.height = 0;

  menu.addEventListener('mouseenter', enter, false);
  menu.addEventListener('mouseleave', leave, false);

  dropdown.addEventListener('mouseenter', enter, false);
  dropdown.addEventListener('mouseleave', leave, false);

}());
