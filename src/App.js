import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onToggle = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {
        showClock: !showClock,
      }
    })
  }

  render() {
    const {showClock} = this.state
    console.log(``)
    return (
      <div className="app-container">
        <button type="button" className="toggle-button" onClick={this.onToggle}>
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock date="12-05-2023" />}
      </div>
    )
  }
}

export default App
