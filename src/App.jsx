import React from "react";
import Header from "./components/Header";
import InputFile from "./components/InputFile"
import Footer from "./components/Footer";

const App = () => {
    return (
        <main>
            <Header/>
            <div className="p-4" >
                <InputFile/>
            </div>
            <Footer/>
        </main>
    );
};

export default App;