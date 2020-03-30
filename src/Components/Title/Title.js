import React from 'react'
import './Title.css'

class Title extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <button id='dog'>Click me before you can continue to the next page</button>
                <button className='dog'>Click me after you click the other button</button>
                <h1 className='fixed'>FIXED EXAMPLE</h1>
            </div>
        )
    }
}
export default Title