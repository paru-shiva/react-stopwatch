// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0}

  componentWillUnmount = () =>{
    clearInterval(this.timerId)
  }

  onStart = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({time: prevState.time + 1}))
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset =() => {
    clearInterval(this.timerId)
    this.setState({time: 0})
  }

  render() {
    const {time} = this.state

    const timeInMinutes = Math.floor(time/60)
    const timeInSeconds = time%60

    const formatedMinutes = timeInMinutes < 10 ? `0${timeInMinutes}` : timeInMinutes
    const formatedSeconds = timeInSeconds < 10 ? `0${timeInSeconds}` : timeInSeconds

    return (
      <div className="stopwatchComponent">
        <div className="clock-div">
          <h1>Stopwatch</h1>
          <div className="clock">
            <div className="clockTitle">
              <img
                className="clockImage"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p>Timer</p>
            </div>
            <div>
              <h1>{formatedMinutes}:{formatedSeconds}</h1>
            </div>
            <div>
              <button
                type="button"
                onClick={this.onStart}
                className="button start-btn"
              >
                Start
              </button>
              <button onClick={this.onStop} type="button" className="button stop-btn">
                Stop
              </button>
              <button onClick={this.onReset} type="button" className="button reset-btn">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
