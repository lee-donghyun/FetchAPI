
const ask = async () => {

    let response = await fetch(`http://aiopen.etri.re.kr:8000/LegalQA`, {
        method: 'POST',
        body: {
            "request_id": "reserved field",
            "access_key": 'cb30c8a4-3759-4dd4-8484-6cdba94b7160',
            "argument": {
                "question": '대법원장의 임기는 몇년인가요?'
            }
        }
    });

    let info = await response.json();

    console.log(info);


}





const root = document.getElementById('root');
root.innerHTML = `${ask()}`;