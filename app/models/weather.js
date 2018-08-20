export default class Weather{
    constructor(data){
        this.country = data.sys.country
        this.state = data.name
        this.temp = data.main.temp
        this.icon = data.weather.icon
    }
}