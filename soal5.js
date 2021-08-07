let login = (email, password) => {
    let emailku = 'wkwk@gmail.com'
    let passwordku = 123

    function goHome() {
        return 'halaman home'
    }
    function backLogin() {
        return 'gagal login'
    }
    if(emailku == email && passwordku == password) {
        document.write(goHome())
    } else {
        document.write(backLogin())
    }
}

let id = prompt('email?')
let pass = prompt('pw nya?')
login(id, pass)