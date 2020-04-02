import React from 'react'
import './Title.css'

class Title extends React.Component{
    constructor(){
        super()
        this.state = {
            buttonClicked:false,
        }
    }
    render(){
        return(
            <div>
                <button id='dog' onClick={() => this.setState({buttonClicked:!this.state.buttonClicked})}>Click me before you can continue to the next page</button>
                <button className='dog'>Click me after you click the other button</button>
                {this.state.buttonClicked === true ? (
                    <div>Button Clicked</div>
                ):(
                    <div>Button Not Clicked</div>
                )}
                <h1 className='fixed'>FIXED EXAMPLE</h1>
            </div>
        )
    }
}
export default Title