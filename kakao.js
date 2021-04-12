let root = document.getElementById('root');
import 'https://developers.kakao.com/sdk/js/kakao.js';

Kakao.init('df03ab79eefead95a87e571c7eb171d8');
console.log(Kakao.isInitialized());





const hello = () => {
    alert('hello')
}



root.innerHTML = '<button onclick="hello()">카카오톡으로 로그인하기!</button>';