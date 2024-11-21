import { controlData } from "./data";

const CentralControlComponent = ( {params} ) => {
    const { initializeGame, startGame } = params;
    
    return (
        <>
            {controlData.map((item) => {
                const actionItem = item.value === 'START';
                const playClass = actionItem && startGame ? 'pointer-events-auto cursor-pointer active:opacity-40' : 'pointer-events-none';

                return (
                    <div
                        key={item.id}
                        className={`flex flex-1 text-3xl items-center justify-center transition-all ${item.style} ${playClass} max-sm:text-xl`}
                        onClick={() => initializeGame()}
                    >
                        <span className="tracking-widest">{item.value}</span>
                    </div>
                );
            })}
        </>
    );
};

export { CentralControlComponent };
