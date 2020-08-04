import create from 'zustand'

const maxScene = 5
const [useStore] = create(set => ({
    scene: 1,
    max: 5,
   
    nextScene: () => set(state => ({
        scene: state.scene < maxScene ? state.scene +1 : 1
    }))
}))