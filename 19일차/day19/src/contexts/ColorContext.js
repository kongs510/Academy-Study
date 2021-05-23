import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext()

const ColorProvier = ({children}) => {
    const [color , setColor] = useState('lime')

    const onPink = () => {
        setColor('pink')
    }
    const onYellow = () => {
        setColor('yellow')
    }
    const onTomato = () => {
        setColor('tomato')
    }
    const onSkyblue = () => {
        setColor('skyblue')
    }

    return (
        <ColorContext.Provider value={{color, onPink, onTomato, onSkyblue, onYellow}}>
            {children}
        </ColorContext.Provider>
    );
};

export default ColorProvier;

export const useColor = ()  => {
    const {color, onPink, onSkyblue, onTomato, onYellow} = useContext(ColorContext)
    return {color, onPink, onSkyblue, onTomato, onYellow} 
}