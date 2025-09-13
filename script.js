function toggleMenu() {
  document.getElementById('menuNav').classList.toggle('show');
}

// Comments
function addComment(c) {
  let comments = JSON.parse(localStorage.getItem('comments') || '[]');
  comments.push(c);
  localStorage.setItem('comments', JSON.stringify(comments));
}
function renderComments() {
  let comments = JSON.parse(localStorage.getItem('comments') || '[]');
  let out = '';
  comments.forEach(c => {
    out += `<p><b>${c.name}</b>: ${c.text}</p>`;
  });
  if (document.getElementById('comments')) {
    document.getElementById('comments').innerHTML = out;
  }
}

// Users
function registerUser(e) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let password = document.getElementById('password').value;

  users.push({ username, email, phone, password, coins: 10 });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registered successfully! You got 10 free coins.');
  window.location.href = 'login.html';
}

function loginUser(e) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  let username = document.getElementById('loginUsername').value;
  let password = document.getElementById('loginPassword').value;
  let user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert('Login successful!');
    window.location.href = 'index.html';
  } else {
    alert('Invalid login!');
  }
}

// Admin
function loginAdmin(e) {
  e.preventDefault();
  let u = document.getElementById('adminUsername').value;
  let p = document.getElementById('adminPassword').value;
  if (u === 'admin' && p === 'Anuga123') {
    localStorage.setItem('admin', true);
    window.location.href = 'admin-dashboard.html';
  } else {
    alert('Invalid admin credentials');
  }
}
