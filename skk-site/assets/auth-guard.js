/* SKK auth guard — include as the FIRST thing in <head> on any page that
   must require login. Redirects to login.html if no valid session exists.
   Session lives in sessionStorage, so it clears when the browser tab closes. */
(function () {
  function isAuthed() {
    try {
      return sessionStorage.getItem('skk_auth') === 'granted';
    } catch (e) {
      return false;
    }
  }
  if (!isAuthed()) {
    var here = location.pathname.split('/').pop() + location.search;
    location.replace('login.html?redirect=' + encodeURIComponent(here));
  }
})();
