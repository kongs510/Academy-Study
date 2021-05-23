import React, { createContext, useContext, useState } from 'react';

const ChangeColorContext = createContext()
const ChangeColorProvier = ({children}) => {
    const [ color , setColor ] = useState('green')

    const onColor = (text) => {
        setColor( text )
    }

    return (
        <ChangeColorContext.Provider value={{color, onColor }}>
            {children}
        </ChangeColorContext.Provider>
    );
};
export default ChangeColorProvier;

export const useChange = ()  => {
    const {color, onColor } = useContext(ChangeColorContext)
    return {color, onColor }
}