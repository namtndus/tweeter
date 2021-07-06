const nickname = document.querySelector('#inputName');
const msg = document.querySelector('#inputMessege');
const btn = document.querySelector("#commendBtn")
const list = document.querySelector('#msgList');

btn.addEventListener('click', inputMsg);

console.log('잘 들어가');

function inputMsg() {
    const li = document.createElement('li');
    const username = document.createElement('div');
    const content = document.createElement('div');
    const date = document.createElement('div');

    li.classList.add('msg');
    username.classList.add('userName');
    content.classList.add('userCommend')
    date.classList.add('date');

    username.textContent = nickname.value;
    content.textContent = msg.value;
    date.textContent = '2000.01.21'

    li.append(username);
    li.append(content);
    li.append(date);

    list.prepend(li);
}