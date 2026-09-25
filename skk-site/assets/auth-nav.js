/* SKK nav auth widget — populates #skkNavAuth in the shared nav bar with
   either a "Staff Login" link or a "Logged in as ... / Logout" control. */
(function () {
  function isAuthed() {
    try {
      return sessionStorage.getItem('skk_auth') === 'granted';
    } catch (e) {
      return false;
    }
  }
  function render() {
    var mount = document.getElementById('skkNavAuth');
    if (!mount) return;
    if (isAuthed()) {
      var user = sessionStorage.getItem('skk_user') || 'Staff';
      mount.innerHTML =
        '<span class="skk-nav-user">' + user + '</span>' +
        '<button type="button" id="skkLogoutBtn" class="skk-nav-logout">Logout</button>';
      document.getElementById('skkLogoutBtn').addEventListener('click', function () {
        try {
          sessionStorage.removeItem('skk_auth');
          sessionStorage.removeItem('skk_user');
        } catch (e) {}
        location.href = 'login.html';
      });
    } else {
      mount.innerHTML = '<a href="login.html" class="skk-nav-login">Staff Login</a>';
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
