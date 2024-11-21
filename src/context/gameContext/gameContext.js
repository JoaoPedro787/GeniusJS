import React, { createContext } from "react";
import { GameHook } from "./hooks/gameHook";
const GameContext = createContext();

const GameProvider = ({ children }) => {
    const { gameComponents, conditionalStates } = GameHook();

    return (
        <GameContext.Provider value={{ gameComponents, conditionalStates }}>
            {children}
        </GameContext.Provider>
    );
}

export default GameProvider;
export { GameContext };
