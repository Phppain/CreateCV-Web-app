import "./App.css";
import { Header } from "./components/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomeComponents/WelcomePage"; // Ваш компонент для первой страницы
import CreatePage from "./components/CreateComponents/CreatePage"; // Ваш компонент для второй страницы

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/create" element={<CreatePage />} />
            </Routes>
        </Router>
    );
}

export default App;
