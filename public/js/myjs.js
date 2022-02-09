const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city-name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp-status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;
    if (cityval === "") {
        city_name.innerHTML = `Please write the name before search`
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=28fc050594456ce16003df2161042f4b`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            temp.innerHTML = arrData[0].main.temp;
            city_name.innerHTML = `${arrData[0].name}  ${arrData[0].sys.country}`
            let tempMode = arrData[0].weather[0].main;
            

            if(tempMode === 'Clear'){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: yellow;'></i>"
            }else if(tempMode === 'Clouds'){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: white'></i>"
            }else if(tempMode === 'Rain'){
                temp_status.innerHTML = "<i class='fas fa-rain' style='color:lightblue'></i>"
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: yellow;'></i>"
                datahide.classList.add('data_hide');
            }
            datahide.classList.remove('data_hide');
            }catch{
                city_name.innerHTML = `Please enter the city name properly`;
                datahide.classList.add('data_hide');
            }
        }


}

submitBtn.addEventListener('click', getInfo)