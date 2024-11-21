import React, { useContext } from "react";
// Componentes
import { ColorElementsComponent } from "./components/color-elements/component";
import { CentralControlComponent } from "./components/central-control/component";

//Context
import { GameContext } from "./context/gameContext/gameContext";

// Effects
import { useColorBlink } from "./hooks/effects/color-blink";
import { useUserPlayCheck } from "./hooks/effects/player-check";

const App = () => {
  const { gameComponents, conditionalStates } = useContext(GameContext);

  //  Usando effects
  useColorBlink(conditionalStates);
  useUserPlayCheck(conditionalStates);

  return (
    <main className="flex w-[100vw] h-[100vh] items-center justify-evenly bg-gray-900 p-4">
      <section className="grid w-full aspect-square max-w-[800px] max-h-[800px] grid-cols-2 grid-rows-2 rounded-full overflow-hidden gap-6 relative flex-none">

        {/* Renderização das cores */}
        <ColorElementsComponent
          params={gameComponents}
        />

        <div className="flex flex-col absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-1/2 w-1/2 rounded-full bg-slate-900 items-center justify-center p-10">
          <div className="flex flex-1 w-full rounded-full flex-col justify-center overflow-hidden">

            {/* Controle do jogo */}
            <CentralControlComponent
              params={gameComponents}
            />

          </div>
        </div>

      </section>

    </main>
  );
};

export default App;
