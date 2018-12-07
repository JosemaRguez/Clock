import React, { Component } from 'react'

const styles = {
    buttonStart: {
        align: 'right',
        backgroundColor: 'green'
    },
    buttonStop: {
        align: 'left',
        backgroundColor: 'red'
    },
    textAlign: 'center'
}


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentHour: new Date().toLocaleTimeString(),
            clockRunning: true
        };
    }


    handleChange = (e) => {
        this.setState({
            currentHour: new Date().toLocaleTimeString()
        })  
    }

    consoleLoggear(){
        setInterval(
            console.log('holita')
        )
    }

    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        if(this.state.clockRunning){
            this.setState({
                currentHour: new Date().toLocaleTimeString()
              });
        }
    }
    
    stopWatch = () => {
        this.setState({
            clockRunning: false
        })
    }

    startWatch = () => {
        this.setState({
            clockRunning: true
        })
    }

    render() {
        return (
            <div style={styles} className="dashboard container">
                <div className="Clock"></div>
                <p>{this.state.currentHour}</p>
                <button onClick={this.startWatch} style={styles.buttonStart}>START</button>
                <button onClick={this.stopWatch} style={styles.buttonStop}>STOP</button>
            </div>
        )
    }
}

export default Dashboard;