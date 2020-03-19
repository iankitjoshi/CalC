import React from "react";
import Axios from "axios";
import "../../assets/weather.scss"
import 'weather-icons/css/weather-icons.css'
import TextField from '@material-ui/core/TextField';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weathers: {},
      city : '',
      countries : '',
      icon : ""
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      city : this.state.city,
      countries : this.state.countries
    }

    this.setState({formData})
    console.log(formData,'formData')

    this.setState({
      city : '',
      countries : ''
    })

    const city = this.state.city || 'Delhi'
    const countries = this.state.countries || 'IN'
    console.log(city,'city', '<>' , countries , 'country')

    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countries}&APPID=a6b36b21d6650fdc68aa5ccb0f53a14d`)
      .then(res => {
        const weathers = res.data
        console.log(res.data.weathers)
        this.setState({weathers })
        console.log("weather", weathers);
        this.get_WeatherIcon(this.weatherIcon, weathers.weather[0].id);
      })
      .catch(err => {
        console.log(err, "err");
      });

  }

  componentDidMount(){
    this.weatherIcons()
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Delhi,IN&APPID=a6b36b21d6650fdc68aa5ccb0f53a14d`)
      .then(res => {
        const weathers = res.data
        this.setState({weathers})
        console.log("weather", weathers.name);
        this.get_WeatherIcon(this.weatherIcon, weathers.weather[0].id);

      })
      .catch(err => {
        console.log(err, "err");
      });
        
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log('e.target.value',e.target.value)
  }

  weatherIcons = () => {
    let weatherIcon
    weatherIcon = this.state.weathers.name
    console.log(this.state.weathers,'878878')
    this.setState({weatherIcon})
    console.log(weatherIcon,'icon')
  }

  
  render() {
    let { weathers = {}} = this.state;
    let { sys = {} , main = {} , weather = []  } = weathers;
    let { country = " "} = sys
    let {temp, temp_min, temp_max = " "} = main;
    const string = `wi ${this.state.icon}`

    return (
      <div className="weather-page">
        <form onSubmit={this.handleSubmit} className="weather-form" >
            <TextField type="text" className="weather-form-city wColor "  value={this.state.city} onChange={this.handleChange} id={this.state.city} name="city" label=" City" />
            
            <TextField type="text" className="weather-form-country wColor "  value={this.state.countries} onChange={this.handleChange} id={this.state.countries} name="countries" label=" Country" />

            <input type="submit" className="weather-button  btn btn-warning"  value="Get Weather" />
        </form>

        <h5 className="weather-city"> {this.state.weathers.name} , { country } </h5>

        <h5 className="weather-Temp" >{(temp-273).toFixed(1)}° </h5>
        
        <i className={string}></i>
        
        <h5 className="weather-temp-min" >
          <span className="span-header">{(temp_min-273).toFixed(1)}° </span> 
          <span>{(temp_max-273).toFixed(1)}°</span> </h5>
          
        <h5 className="weather-description" > {
                weather.map((temp,i) => {
                  console.log(temp.id, '3433434343454111')
                return <div key={i}>{temp.description}</div>
                })
              } 
        </h5>

      </div> 
    );
  }
}

export default Weather;
