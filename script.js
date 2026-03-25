// تفعيل تسجيل الدخول عند نجاح الدخول من login.html
if (window.location.pathname.endsWith('login.html')) {
	document.getElementById('loginForm')?.addEventListener('submit', function(e) {
		e.preventDefault();
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;
		if(username === 'admin' && password === '1234') {
			localStorage.setItem('loggedIn', '1');
			window.location.href = 'index.html';
		} else {
			document.getElementById('loginError').style.display = 'block';
		}
	});
}