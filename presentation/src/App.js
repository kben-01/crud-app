import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      movies: [],
      input: ''
    }
  }

  render() {

    return (
      <div className="App">
        {
         this.state.movies.map((movie) => {
          return <div>{movie.name}</div>
         })
        }
      </div>
    )
  }

  getMovies = () => {
    axios.get('http://localhost:3000').then((response) => {
      console.log(response)
      this.setState({
        movies: response.data
      })
    })
  }

  componentDidMount() {  
    this.getMovies()
  }
}

export default App;
