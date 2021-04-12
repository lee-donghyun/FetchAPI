const API_KEY = 'mGp92Q3JTgPsfqQVt3GIOoQhvd7WPCg7bM0CJQubfU9iOPXapg7jU4+lNRERbM4/Xw70g4bTe6CDzZ/pjCGbOQ==';
let root = document.getElementById('root');


const getDAY = () => {
    const now = new Date();
    return now.getFullYear() + '0' + (now.getMonth() + 1) + now.getDate();//여기 고쳐야 함.. 월 두자리수 표기 문제
}

const getWeather = async (stnIds) => {

    let url = new URL('http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList');

    let names=['ServiceKey','dataType','dataCd','dateCd','startDt','endDt','stnIds'];
    let values=[API_KEY,'JSON','ASOS','DAY',getDAY() - 2,getDAY() -1,stnIds];

    names.forEach((name,i) => {
        url.searchParams.set(name,values[i]);
    });

    console.log(url.toString());


    let response = await fetch(url,{
        method:'GET',
        referrer:'http://127.0.0.1:5500',
        mode:'cors',
    });
    // let info = await response.json();
    console.log(response);

    console.log(response);


    
}


getWeather(108);
root.innerHTML = `${getDAY(108)}`;
