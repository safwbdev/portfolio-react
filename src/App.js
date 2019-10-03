import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import Intro from './components/Intro';
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
            <Intro
            fullName="Stefaan Fangman"
            designation="Web Developer"
            phone="0123456789"
            email="stefaan@email.com"
            address="Evergreen terrace"
            github="github link"
            linkedin="linkedin link"
            image="https://previews.123rf.com/images/eugenesergeev/eugenesergeev1605/eugenesergeev160500180/56871195-bearded-man-smoking-cigar-outdoor-square-portrait-with-selective-focus.jpg"
            />
      </div>
    );
  }
};

export default App;