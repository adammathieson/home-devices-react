import React, { createContext, } from 'react'
import create from 'zustand'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Scene1 from './Scene1'
import Scene2 from './Scene2'
import Scene3 from './Scene3'
import Scene4 from './Scene4'
import Scene5 from './Scene5'

const scenesArr = [Scene1, Scene2, Scene3, Scene4, Scene5]

const maxScene = 5
const [useStore] = create(set => ({
    scene: 1,
    max: 5,
   
    nextScene: () => set(state => ({ scene: state.scene + 1
        // scene: state.scene < maxScene ? state.scene +1 : 1
    }))
}))

const SceneSelector = arr => {
    const store = useStore()
    console.log(store)
}

const SceneContainer = () => {
    // const scene = useStore(state => state.scene)
    // console.log(useStore)

    return (
        <div className='container'>
                <SceneSelector />
                {/* </Switch> */}
                {/* <Scene3 /> */}
                {/* <Scene4 /> */}
                {/* <Scene5 /> */}
            {/* </Router> */}
        </div>
    )
}

export default SceneContainer
