document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    var registerForm = document.getElementById('register-form');
    var formTitle = document.getElementById('form-title');
    var loginLink = document.getElementById('login-link');

    var isRegistered = false; // Simulating registration status

    function openPopup(title) {
      overlay.style.display = "block";
      popup.style.display = "block";
      formTitle.textContent = title;
    }

    function closePopup() {
      overlay.style.display = "none";
      popup.style.display = "none";
    }

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closePopup();
      }
    });

    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      isRegistered = true; // Set registration status to true
      closePopup();
    });

    loginLink.addEventListener('click', function(e) {
      e.preventDefault();
      if (isRegistered) {
        openPopup('Login');
      } else {
        alert('You need to register first!');
      }
    });

    openPopup('Register'); // Call this function to open the popup initially
  });
