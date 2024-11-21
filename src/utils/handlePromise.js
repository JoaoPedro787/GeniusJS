// Função para prometer um delay ao mostrar a cor
const colorPromise = (setState, color) => (
    new Promise((resolve) => {
        // Deixa a cor vazia ao entrar na promise
        setState('');

        // Delay de 200ms para evitar conflitos de cor
        setTimeout(() => {
            setState(color);
        }, 200);

        // Resolve a promise após 1800ms
        setTimeout(() => {
            resolve();
        }, 1800);
    })
);

export { colorPromise };