import React from 'react';
import Intro from './components/Intro';
// import Navbar from './components/Navbar';
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
        {/* <Navbar /> */}
            <Intro
            fullName="Stefaan Fangman"
            designation="Web Developer"
            phone="0123456789"
            email="stefaan@email.com"
            address="Evergreen terrace"
            github="github link"
            linkedin="linkedin link"
            image="https://previews.123rf.com/images/eugenesergeev/eugenesergeev1605/eugenesergeev160500180/56871195-bearded-man-smoking-cigar-outdoor-square-portrait-with-selective-focus.jpg"
            desc="Prolific, full stack web developer with a passion for metrics and beating former 'best-yets.' Prototyped 25 new product features per year for Flexor, Inc. Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects, including a 55% increase for Flexor, Inc. Passionate about building world class web applications. One of my sites received a 2015 Webby for Best Navigation and Structure. "
            />
      </div>
    );
  }
};

export default App;