import React from 'react'
import { useStore } from '../Store'
import Scene1 from './Scene1'
import Scene2 from './Scene2'
import Scene3 from './Scene3'
import Scene4 from './Scene4'
import Scene5 from './Scene5'

const sceneArr = [<Scene1/>, <Scene2/>, <Scene3/>, <Scene4/>, <Scene5/>]

const SceneSelector = () => {
    const scene = useStore(state => state.scene)
    
    return sceneArr[scene]

}

const SceneContainer = () => {


    return (
        <div className='container'>
                <SceneSelector />
        </div>
    )
}

export default SceneContainer
