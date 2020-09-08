import React from 'react'
import { useStore } from '../Store'

import Scene1 from './Scene1'
import Scene2 from './Scene2'
import Scene3 from './Scene3'
import Scene4 from './Scene4'
import Scene5 from './Scene5'

// Render the current scene by state -> updates via onComplete of each scene animation
const sceneArr = [<Scene1/>, <Scene2/>, <Scene3/>, <Scene4/>, <Scene5/>]

const SceneContainer = () => {
    const scene = useStore(state => state.scene)

    return (
        <div className='container'>
                {/* {sceneArr[scene]} */}
                <Scene3/>
        </div>
    )
}

export default SceneContainer
