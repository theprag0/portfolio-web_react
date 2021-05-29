import {createContext} from 'react';
import {useVisibilityState} from '../hooks/useVisibilityState';

export const VisibilityContext = createContext();

export function VisibilityProvider(props) {
    const [homeIsVisible, setHomeVisibility] = useVisibilityState(false);
    const [aboutIsVisible, setAboutVisibility] = useVisibilityState(false);
    const [resumeIsVisible, setResumeVisibility] = useVisibilityState(false);
    const [contactIsVisible, setContactVisibility] = useVisibilityState(false);
    let value = {
        homeIsVisible, 
        setHomeVisibility, 
        aboutIsVisible, 
        setAboutVisibility, 
        resumeIsVisible, 
        setResumeVisibility,
        contactIsVisible,
        setContactVisibility
    };
    return (
        <VisibilityContext.Provider 
            value={value}
        >
            {props.children}
        </VisibilityContext.Provider>
    )
}