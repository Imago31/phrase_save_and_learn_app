const data =[
    {ger:"Ich gehe nach Hause",rus:"Я иду домой"},
    {ger:"Ich war im Laden",rus:"Я был в магазине"},
    {ger:"Ich werde im hause",rus:"Я буду дома"},
]

const input = document.querySelector(".input");
const info = document.querySelector(".info");
const children = document.querySelector(".info").children;
input.addEventListener('keyup',function(){
    for(text2 of children){
        console.log(text2)
        text2.remove()
        }
    for(text of data){
    if(text.ger.includes(input.value.toLowerCase()) == true){
        const resGer = document.createElement('p');
        resGer.innerHTML = text.ger;
      
        const resRus = document.createElement('p');
        resRus.classList.add('resRus');
        resRus.innerHTML = text.rus;

        const resalts = document.createElement('div');
        resalts.classList.add('resalts');
        resalts.append(resGer);
        resalts.append(resRus);
        info.append(resalts);
    }

}
})


// const requestURL = `https://developers.lingvolive.com/api/v1.1/authenticate`;
// const request = new XMLHttpRequest();

// request.open("POST", requestURL, true);
// request.responseType = 'json';
// request.setRequestHeader("Access-Control-Allow-Headers: Origin", "Authorization: Basic MDZmNTE3YWMtZGFhYS00NmJhLTkwN2UtMGJmOTI2ZTU4YjVlOmI2OWFhOWU2YWQ2MjRjNTM5MWZhMjk0N2Y3YWZmYzY1");
// request.send();

// request.onload = function() {
//     const data = request.response;
//     console.log(data);
// }

// MDZmNTE3YWMtZGFhYS00NmJhLTkwN2UtMGJmOTI2ZTU4YjVlOmI2OWFhOWU2YWQ2MjRjNTM5MWZhMjk0N2Y3YWZmYzY1