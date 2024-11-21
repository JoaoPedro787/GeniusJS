import { useEffect } from "react";
import { colorPromise } from "../../utils/handlePromise";

const useColorBlink = ({gameArray, setColor, setUser}) => {
    useEffect(() => {
        if (gameArray.length > 1) {
            // Acendendo as cores
            const colorBlink = async () => {
                for (const item of gameArray) {
                    await colorPromise(setColor, item);
                }
                setColor('');
                setUser(true);  // Jogador pode interagir novamente
            };
            colorBlink();
        }
    }, [gameArray]);
};

export {useColorBlink};