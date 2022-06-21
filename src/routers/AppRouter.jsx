import {
    BrowserRouter,
    Routes,
    Route,
    } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { PokemonApp } from "../components/PokemonApp/PokemonApp";
import { PokemonScreen } from "../components/PokemonInfo/PokemonScreen";

import { Search } from "../components/Search/Search";

export const AppRouter = () => {
    return (
        <BrowserRouter>

        <NavBar/>
        <div className="container">
            <Routes>
                <Route path="/*" element={<PokemonApp/>}/>
                <Route path="/search" element={<Search/>}/>

                <Route path="/pokeinfo/:pokeid" element={<PokemonScreen/>}/>
            </Routes>
        </div>

        </BrowserRouter>
    )
}
