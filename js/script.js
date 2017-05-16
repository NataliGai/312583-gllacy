  var link = document.querySelector(".btn-form");
  var popup = document.querySelector(".modal-connect-form");
  var overlay = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".modal-connect-close");
  var form = document.querySelector("form");
 var user = popup.querySelector("[name=user-name]");
 var mail = popup.querySelector("[name=user-mail]");
  link.addEventListener("click", function(event) {
     event.preventDefault();
     popup.classList.add("modal-connect-form-show");
     overlay.classList.add("modal-overlay-show");
     user.focus();
});
close.addEventListener("click", function(event) {
 event.preventDefault();
 popup.classList.remove("modal-connect-form-show");
 overlay.classList.remove("modal-overlay-show");
});
