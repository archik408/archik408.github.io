'use strict';

function addComment(event) {
  event.preventDefault();

  var comments = document.querySelector('.comments');
  var comment = comments.insertBefore(document.createElement('article'), comments.firstChild);

  var header = document.createElement('header');
  var section = document.createElement('section');

  var email = document.querySelector('#email').value;
  var username = document.querySelector('#username').value;
  var content = document.querySelector('#comment').value;

  var anchor = document.createElement('a');
  anchor.textContent = username;
  anchor.setAttribute('href', 'mailto:' + email);
  header.appendChild(document.createElement('strong')).appendChild(anchor);

  var removeButton = document.createElement('button');
  removeButton.textContent = 'Удалить';
  removeButton.onclick = removeComment;

  var editButton = document.createElement('button');
  editButton.textContent = 'Редактировать';
  editButton.setAttribute('disabled', true);

  var constrolsSection = header.appendChild(document.createElement('div'));
  constrolsSection.appendChild(removeButton);
  constrolsSection.appendChild(editButton);

  comment.appendChild(header);
  comment.appendChild(document.createElement('p')).textContent = content;
}

function removeComment(event) {
  if (confirm('Вы действительно хотите удалить комментарий?')) {
    var controls = event.target.parentNode;
    var header = controls.parentNode;
    var comment = header.parentNode;
    comment.parentNode.removeChild(comment);
  }
}

window.onload = function () {
  var formSubmit = document.querySelector('.comments form button');
  formSubmit.onclick = addComment;
}
