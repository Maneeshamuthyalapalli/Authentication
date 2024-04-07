
let users = JSON.parse(localStorage.getItem('users')) || [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ]
  
  function updateUserLocalStorage () {
    localStorage.setItem('users', JSON.stringify(users))
  }
  
  
  function login () {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
  
   
    const user = users.find(
      user => user.username === username && user.password === password
    )
  
    if (user) {
     
      window.location.href = 'home.html'
    } else {
      window.location.href = 'register.html'
    }
  }
  
  
  function register () {
    const newUsername = document.getElementById('newUsername').value
    const newPassword = document.getElementById('newPassword').value
  
    
    const userExists = users.find(user => user.username === newUsername)
  
    if (userExists) {
      document.getElementById('message').innerText = 'Username already exists'
    } else {
      
      users.push({ username: newUsername, password: newPassword })
      updateUserLocalStorage() 
      window.location.href = 'index.html'
    }
  }
