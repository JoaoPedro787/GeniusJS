import { useEffect } from "react";

const useUserPlayCheck = ({ gameArray, userArray, setGame, setStart, setUserArray, setUser }) => {
    useEffect(() => {
        if (userArray.length === gameArray.length && gameArray.length > 0) {
            const isCorrect = userArray.every((el, i) => el === gameArray[i]);

            if (isCorrect) {
                const randomNumber = Math.floor(Math.random() * 4);
                setGame((prev) => ([...prev, randomNumber]))
            }
            else {
                alert('VOCÊ PERDEU!')
                setStart(true);
                setUser(false);
                setGame([]);
            };
            setUser(false);
            setUserArray([]);
        }
    }, [userArray]);
};

export { useUserPlayCheck };