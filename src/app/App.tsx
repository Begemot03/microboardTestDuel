import { Game } from "../pages/game";
import { Player } from "../pages/game/ui/viewPlayer";
import { MainProvider } from "./providers";

const App = () => {
    return (
        <MainProvider>
            <Game />
        </MainProvider>
    )
}

export { App };