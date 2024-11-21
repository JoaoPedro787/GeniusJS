import React from "react";
import { colorElementsData } from './data';

const ColorElementsComponent = ({ params }) => {
    const { activeColor, userPlay, userTurn } = params;

    return (
        colorElementsData.map((item) => (
            <figure
                key={item.id}
                className={`${item.color} transition-all 
                    ${activeColor === item.id ? 'opacity-100' : 'opacity-30'} 
                    ${userTurn ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'}
                    active:opacity-100`}
                style={{ gridRowStart: item.row, gridColumnStart: item.col }}
                onClick={() => userPlay(item.id)}
            />
        ))
    );
};

export { ColorElementsComponent };