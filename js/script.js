
const requestURL = "https://testphpcoding.000webhostapp.com/other/phrase_save_and_learn_api.php";
const request = new XMLHttpRequest();

// search and get data
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const data = request.response;
    // console.log(data);
    const dataArray = Object.values(data);
    console.log(dataArray);

    // search german
    const search_german = document.querySelector(".search_german");
    const info = document.querySelector(".info");
    const children = document.querySelector(".info").children;
    search_german.addEventListener('keyup',function(){
        for(text of children){
                // console.log(text2)
                text.remove();
            }
        for(text of dataArray){
            if(text.ger.toLowerCase().includes(search_german.value.toLowerCase()) == true){
                const resGer = document.createElement('p');
                resGer.innerHTML = text.ger;
                resGer.classList.add('resGer');
              
                const resRus = document.createElement('p');
                resRus.innerHTML = text.rus;

                const resalts = document.createElement('div');
                resalts.classList.add('resalts');
                resalts.append(resGer);
                resalts.append(resRus);
                info.append(resalts);
            }
        }

    })

    // search russian
    const search_russian = document.querySelector(".search_russian");
    search_russian.addEventListener('keyup',function(){
        for(text of children){
                // console.log(text2)
                text.remove();
            }
        for(text of dataArray){
            if(text.rus.toLowerCase().includes(search_russian.value.toLowerCase()) == true){
                const resRus = document.createElement('p');
                resRus.innerHTML = text.rus;
                resRus.classList.add('resRus');
              
                const resGer = document.createElement('p');
                resGer.innerHTML = text.ger;

                const resalts = document.createElement('div');
                resalts.classList.add('resalts');
                resalts.append(resGer);
                resalts.append(resRus);
                info.append(resalts);
            }
        }

    })

}

// send data
const send_phrases = document.querySelector(".send_phrases");
send_phrases.addEventListener('click',function(){

    const ger = document.querySelector(".ger").value;
    const rus = document.querySelector(".rus").value;

    const newURL = requestURL + "?ger="+ ger + "&rus=" + rus;
    
    request.open("GET", newURL,true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send();

    console.log('click');
    
    request.onload = function () {
        console.log(request.status);
        if(request.status == 200){
            document.querySelector(".ger").value = "";
            document.querySelector(".rus").value = "";
            const mess = document.createElement("div");
            mess.classList.add("mess");
            mess.innerHTML = "Added";
            document.querySelector("body").prepend(mess)
            setTimeout(function(){
                mess.remove();
            },1000)
        }
    }
})
