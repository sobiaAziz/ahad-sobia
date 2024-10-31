let city = document.getElementById('city')
let type = document.getElementById('type')
let temp = document.getElementById('temp')
let input = document.getElementById('inp')
let image = document.getElementById('img')
let API_Key = "cf814ad40737efdff21aa20277cce5ed";

const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_Key}&units=matric`)
    console.log(getData);

    let jsonData =await getData.json();
    console.log(jsonData);
    
    console.log(jsonData.name);


    city.innerHTML=jsonData.name;
    temp.innerHTML= jsonData.weather[0].main;
    type.innerHTML=Math.floor(jsonData.main.temp - 273.15)+"°C"
    


}
function myFun(){
    search=input.value;
    data(search)
}
