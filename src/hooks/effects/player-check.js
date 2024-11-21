import { useEffect } from "react";

const useUserPlayCheck = ({ gameArray, userArray, setGame, setStart, setUserArray, setUser }) => {
    useEffect(() => {
        if (userArray.length > 0) {
            const isCorrect = userArray.every((el, i) => el === gameArray[i]);

            if (isCorrect && userArray.length === gameArray.length) {
                const randomNumber = Math.floor(Math.random() * 4);
                setGame((prev) => ([...prev, randomNumber]));
            }
            else if (isCorrect) {
                return;
            }
            else {
                alert('VOCÊ PERDEU!')
                setStart(true);
                setGame([]);
            };

            setUser(false);
            setUserArray([]);
        }
    }, [userArray]);
};

export { useUserPlayCheck };