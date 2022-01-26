import { Routes, Route } from "react-router-dom";

import { NavBar } from "../components/navbar/NavBar";
import { HomeScreen } from "../components/home/HomeScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { ComicsScreen } from "../components/comics/ComicsScreen";
import { SeriesScreen } from "../components/series/SeriesScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { MarvelComicsDetail } from "../components/comics/MarvelComicsDetail";
import { MarvelSeriesDetail } from "../components/series/MarvelSeriesDetail";

export const PagesRoutes = () => {
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="/MarvelComicsDetail/:container/:id/:category" element={<MarvelComicsDetail />} />
                <Route path="comics" element={<ComicsScreen />} />
                <Route path="/MarvelSeriesDetail/:container/:id/:category" element={<MarvelSeriesDetail />} />
                <Route path="series" element={<SeriesScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="home" element={<HomeScreen />} />
            </Routes>
        </>
    );
}