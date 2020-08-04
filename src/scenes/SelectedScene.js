import React, { createContext, useStore } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Scene1 from './Scene1'
import Scene2 from './Scene2'
import Scene3 from './Scene3'
import Scene4 from './Scene4'
import Scene5 from './Scene5'


const SelectedScene = () => {
    // const scene = useStore(state => state.scene)
    console.log(useStore)

let scene = 1

    return (
        <div className='container'>
            <Current component={`<Scene${scene} />`}/>
                
                {/* </Switch> */}
                {/* <Scene3 /> */}
                {/* <Scene4 /> */}
                {/* <Scene5 /> */}
            {/* </Router> */}
        </div>
    )
}

export default SelectedScene
