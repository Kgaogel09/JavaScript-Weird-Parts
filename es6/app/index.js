import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const api_key = '34c174aec6e6e6494be40d687809f1f7';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'London',
      description: '',
    };
  }

  componentDidMount() {
    this.getWeather(this.state.city);
  }

  getWeather(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${api_key}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ description: json.weather[0].description });
      });
  }

  render() {
    return (
      <div>
        <h2>Weather Report for {this.state.city}</h2>
        <h4>{this.state.description}</h4>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(<App />);
