import { useState } from "react";

const GameHook = () => {
    const [gameArray, setGame] = useState([]);
    const [userTurn, setUser] = useState(false);
    const [startGame, setStart] = useState(true);
    const [activeColor, setColor] = useState(null);
    const [userArray, setUserArray] = useState([]);

    // Função para armazenar as jogadas do usuário
    const userPlay = (item) => {
        if (userArray.length < gameArray.length) {
            setUserArray(prev => [...prev, item]);
        }
    };

    // Começar 
    const initializeGame = () => {
        setStart(false);
        if (gameArray.length === 0) {
            let tmpArray = [];
            for (let i = 0; i < 4; i++) {
                const randomNumber = Math.floor(Math.random() * 4);
                tmpArray.push(randomNumber);
            }
            setGame(tmpArray);
        };
    };

    const gameComponents = { activeColor, userPlay, userTurn, initializeGame, startGame };

    const conditionalStates = { gameArray, setColor, setUser, userArray, setGame, setStart, setUserArray, setUser };

    return ({ gameComponents, conditionalStates });
};

export { GameHook };