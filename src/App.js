import React from "react";
import {Routes, Route} from "react-router-dom";
import {AnimalType, BeginPage, DetailPage, GenderFilter, LoadPage, PetsPage} from "./pages";
import {ComponentWithHeader} from "./components";

function App() {
    return (
        <>
            <Routes>
                <Route path="/pets/" element={<ComponentWithHeader/>}>
                    <Route path="" element={<PetsPage/>}/>
                    <Route path=":id" element={<DetailPage/>}/>
                </Route>
                <Route path="/gender" element={<GenderFilter/>}/>
                <Route path="/type" element={<AnimalType/>}/>
                <Route path="/start" element={<BeginPage/>}/>
                <Route path="/loadpage" element={<LoadPage/>}/>
                {/*<Route path="/" element={<MainPage/>} />*/}
                {/*<Route path="*" element={<NotFoundPage/>} />*/}
            </Routes>
        </>
    );
}

export default App;
