import {create} from 'zustand';

const useCounter = create ((set)=>({
    counter : 24,
    up: () => set((state)=>({counter:state.counter +1})),
    down: () => set((state)=>({counter:state.counter -1}))
}));

export default useCounter;