xhr = new XMLHttpRequest()
let text = 'Death note'
Request(text);
document.getElementById('search-btn').addEventListener('click', () => {
    text = document.getElementById('search-text').value
    console.log(text)
    Request(text);
})
 
function Request(text) {
    xhr.open('GET', `https://api.rawg.io/api/games?search="${text}"&key=1bce2fc627e74027bc3143fbe3e0b435`)
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)
            var generateHTML_for_GamesScreenshots = '';
            console.log(response.results.length)
            for (let i = 0; i < response.results.length; i++) {
                console.log(response.results[i].name)
                // for (let j = 0; j < 5; j++) {

                generateHTML_for_GamesScreenshots += `
                    <div id="img-content" style="margin-right:50px">
                    <img id="img-hv" src="${response.results[i].short_screenshots[0].image}" width ="400px" height="300px" style="border-radius:4%">
                    <div id="info-div">
                    <P class="col"><b class ="h1-color" style="font-size:xx-medium;"> Name:</b> ${response.results[i].name}</P>
                    <p class="col"><b class ="h1-color" style="font-size:xx-medium;"> Platform:</b> ${response.results[i].platforms[0].platform.name}</p>
                    <p class="col"><b class ="h1-color" style="font-size:xx-medium;"> <i class="fa-regular fa-star"></i> Rating:</b> ${response.results[i].rating}</p>
                    <p class="col"><b class ="h1-color" style="font-size:xx-medium;"> <i class="fa-regular fa-calendar-days"></i>Release Date:</b> ${response.results[i].released}</p>
                    <p class="col"><b class ="h1-color" style="font-size:xx-medium;">Genres:</b> ${response.results[i].id}</p>
                    </div>
                <hr/>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    
                    </div>
                    `


                //    }
            }
            document.getElementById('my-div').innerHTML = generateHTML_for_GamesScreenshots;
            // console.log(response.results[0].short_screenshots[0].image)

            // let generateHTML_for_GamesScreenshots = '';
            // generateHTML_for_GamesScreenshots = `
            // <img src="${response.results[0].short_screenshots[0].image}" width ="400px">
            // `
            // document.getElementById('my-div').innerHTML = generateHTML_for_GamesScreenshots; 
        }
    }
    xhr.send()

}