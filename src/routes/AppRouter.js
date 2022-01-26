import { BrowserRouter , Routes, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { PagesRoutes } from "../routes/PagesRoutes";


export const AppRouter = ()  => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/comics-app" element={<LoginScreen />} />
                <Route path="/*" element={<PagesRoutes />} />
            </Routes>
        </BrowserRouter>
    );
}