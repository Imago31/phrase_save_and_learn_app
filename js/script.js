
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

    const info = document.querySelector(".info");
    const children = document.querySelector(".info").children;

    // search russian
    const search_russian = document.querySelector(".search_russian");
    search_russian.addEventListener('keyup',function(){
        for(text of children){
                text.remove();
            }
        const newDataArraya = dataArray.map(function(text){
            if(text.rus.toLowerCase().includes(search_russian.value.toLowerCase()) == true){
                return `
                    <div class="resalts">
                    <p class="resRus">${text.rus}</p>
                    <p class="resNext">${text.ger}</p>
                    </div>
              `;
            }
        })
        info.innerHTML = newDataArraya.join("");
    })

    // search german
    const search_german = document.querySelector(".search_german");
    search_german.addEventListener('keyup',function(){
        for(text of children){
                text.remove();
            }
        const newDataArraya = dataArray.map(function(text){
            if(text.ger.toLowerCase().includes(search_german.value.toLowerCase()) == true){
                return `
                    <div class="resalts">
                    <p class="resGer">${text.ger}</p>
                    <p class="resNext">${text.rus}</p>
                    </div>
                `;
            }
        })
        info.innerHTML = newDataArraya.join("");
    });

}

// send data
// const send_phrases = document.querySelector(".send_phrases");
// send_phrases.addEventListener('click',function(){

//     const ger = document.querySelector(".ger").value;
//     const rus = document.querySelector(".rus").value;

//     const newURL = requestURL + "?ger="+ ger + "&rus=" + rus;
    
//     request.open("GET", newURL,true);
//     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     request.send();

//     console.log('click');
    
//     request.onload = function () {
//         console.log(request.status);
//         if(request.status == 200){
//             document.querySelector(".ger").value = "";
//             document.querySelector(".rus").value = "";
//             const mess = document.createElement("div");
//             mess.classList.add("mess");
//             mess.innerHTML = "Added";
//             document.querySelector("body").prepend(mess)
//             setTimeout(function(){
//                 mess.remove();
//             },1000)
//         }
//     }
// })
