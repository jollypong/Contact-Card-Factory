const inquirer = require('inquirer');
const fs = require('fs');

function makeCard(data){
    return 
    `
    for (let i = 0; i < ${data.teamSize}; i++){
        //create card for teammembers
        let forecastIcon = 'https://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png';
        // console.log(forecastIcon)
        let forecastDate = moment().add(i + 1, "days").format("MM/DD/YYYY");
        let forecastTemp = data.daily[i].temp.day;
        let forecastWind = data.daily[i].wind_speed;
        let forecastHumidity = data.daily[i].humidity;

        let cardContent = //design elements for bootstrap for div below
            '<div class = "card bg-primary text-light ml-10px mx-3 my-1" style="width: 15rem">' +
                '<h5 class = "card-header">' + forecastDate + '</h5>' +
                '<img clas = card-body src=' + forecastIcon + '></img>' + 
                '<p class = "card-body">Temperature:' + forecastTemp + '&deg;C</p>' +
                '<p class = "card-body">Wind Speed: ' + forecastWind + 'm/s</p>' +
                '<p class = "card-body">Humidity: ' + forecastHumidity + '%</p>' +
            '</div>'
        //add cardContent to weatherCards https://stackoverflow.com/questions/42517697/appending-html-using-native-javascript
        weatherCards.innerHTML = weatherCards.innerHTML + cardContent;
    `
};

module.export = writeHTML;
