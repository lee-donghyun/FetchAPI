let root = document.getElementById('root');

Kakao.init('df03ab79eefead95a87e571c7eb171d8');
console.log(Kakao.isInitialized());



const loginWithKakao = () => {
    Kakao.Auth.login({
        // scope:'profile',
        success: function (authObj) {
            console.log(authObj);
            console.log(authObj.access_token);
            Kakao.Auth.setAccessToken(authObj.access_token);
        },
        fail: function (err) {
            alert(JSON.stringify(err))
        },
    });
    // Kakao.Auth.authorize({
    //     redirectUri: 'http://127.0.0.1:5500',
    //     success: function (authObj) {
    //         console.log(authObj);
    //         console.log(authObj.access_token);
    //         Kakao.Auth.setAccessToken(authObj.access_token);
    //     },
    //     fail: function (err) {
    //         alert(JSON.stringify(err))
    //     },
    // });
}

const hello = () => {
    loginWithKakao();
}

const logoutKakao = () => {
    Kakao.Auth.logout(() => {
        console.log('logged out!');
    })
}

const bye = () => {
    logoutKakao();
}

const infoKakao = () => {
    Kakao.API.request({
        url: '/v2/user/me',
        success: (response) => {
            console.log(response);
        },
        fail: (error) => {
            console.log(error);
        }
    });
}

const and = () => {
    infoKakao();
}

const saveInfo = () => {
    Kakao.API.request({
        url: '/v1/user/update_profile',
        data: {
            properties: {
                typed:'300',
                nickname:'이동현',
                accurancy:'87',
            },
        },
    });
}


root.innerHTML = `
<button onclick="hello()">카카오톡으로 로그인하기!</button>
<button onclick="and()">카카오톡정보 가져오기!</button>
<button onclick="bye()">카카오톡으로 로그아웃하기!</button>
<button onclick="saveInfo()">카카오톡에 정보 저장하기!!</button>

`;