function togglePassword() {
var password = document.getElementById('password');
if (password.type === 'password') {
password.type = 'text';
} else {
password.type = 'password';
}
}
document.getElementById('registrationForm').onsubmit = function(event) {
event.preventDefault();
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirmPassword').value;
var terms = document.getElementById('terms').checked;
if (!username || !password || !confirmPassword || !terms) {
alert('Пожалуйста, заполните все поля.');
return;
}
if (password !== confirmPassword) {
alert('Пароли не совпадают.');
return;
}
// Здесь код для отправки данных на сервер
// Отображение данных и сообщение об успешной отправке
document.getElementById('result').textContent ='Отправленные данные  ' + 'Имя пользователя: ' + username + ', Пол: ' + document.getElementById('gender').value;
alert('Форма успешно отправлена!');
setTimeout(function() {
alert('Сообщение исчезнет через 3 секунды');
}, 3000);
  };