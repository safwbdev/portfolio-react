import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import Navbar from './components/Navbar';
import './App.scss';

const API_KEY = process.env.REACT_APP_KEY;

class App extends React.Component {
  
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    temp_min: undefined,
    temp_max: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined,
    location: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault();
    const location = e.target.value;
    console.log(location);
    const units = "metric";
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${API_KEY}`);
    const data = await api_call.json();
    if (location) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      })
    }
    else {
      this.setState({
        temperature: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter values"
      })
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container section">
          <div className="row weather">
            <div className="col xl8 l8 m6 s12 output">
              <Weather
                temperature={this.state.temperature}
                temp_min={this.state.temp_min}
                temp_max={this.state.temp_max}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                icon={this.state.icon}
                error={this.state.error} />
            </div>
            <div className="col xl4 l4 m6 s12 form">
              <Form getWeather={this.getWeather} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;