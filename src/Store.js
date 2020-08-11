import create from 'zustand'

const maxScene = 4
export const [useStore] = create(set => ({
    scene: 0,
    nextScene: () => set(state => ({ 
        scene: state.scene < maxScene ? state.scene +1 : 0
    }))
}))