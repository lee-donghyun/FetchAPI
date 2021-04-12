let root = document.getElementById('root');

Kakao.init('df03ab79eefead95a87e571c7eb171d8');
console.log(Kakao.isInitialized());



const loginWithKakao = () => {
    Kakao.Auth.login({
        success: function (authObj) {
            alert(JSON.stringify(authObj))
        },
        fail: function (err) {
            alert(JSON.stringify(err))
        },
    })
}

const hello = () => {
    loginWithKakao();
}



root.innerHTML = '<button onclick="hello()">카카오톡으로 로그인하기!</button>';