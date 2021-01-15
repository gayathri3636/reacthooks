import React from 'react'
import ComponentC from './ComponentC';

export const userContext = React.createContext();
export const channelContext= React.createContext();

export default function App() {
    return (
        <div>
            <userContext.Provider value={'Gayathri'}>
                <channelContext.Provider value={'Nannapaneni'}>
                    <ComponentC /> 
                </channelContext.Provider>
            </userContext.Provider>
        </div>
    )
}
