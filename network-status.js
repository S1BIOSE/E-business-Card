(function() {

  window.addEventListener('offline', () => {
    $('.toast').toast('show');
  });

  window.addEventListener('online', () => {
    $('.toast').toast('hide');
  });

});