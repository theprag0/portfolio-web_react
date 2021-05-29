import {useState} from 'react';

export function useVisibilityState(initialVisibility = false) {
    const [state, setState] = useState(initialVisibility);
    const setVisibility = (isVisible) => {
        setState(isVisible);
    }
    
    return [state, setVisibility];
}