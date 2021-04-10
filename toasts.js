window.addEventListener('offline', () => {
  var toastElList = [].slice.call(document.querySelectorAll('#offlineToast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  });
  toastList.forEach(toast => toast.show());
});

window.addEventListener('online', () => {
  var toastElList = [].slice.call(document.querySelectorAll('#offlineToast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  });
  toastList.forEach(toast => toast.hide());
});
