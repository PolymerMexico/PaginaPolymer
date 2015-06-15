(function (document) {
  var myFirebaseRef = new Firebase("https://scorching-inferno-8867.firebaseio.com/");
  'use strict';
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  app.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
  });

  window.addEventListener('WebComponentsReady', function() {
    document.querySelector('body').removeAttribute('unresolved');

    var drawerPanel = document.querySelector('#paperDrawerPanel');
    drawerPanel.forceNarrow = true;
  });

    document.addEventListener('click', function(e) {
      var pages = document.querySelector('iron-pages');
    });
})(document);

// TODO:
