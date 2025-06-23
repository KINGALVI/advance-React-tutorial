import { createContext } from "react";
import "./ContextAPI.css"
import Dad from "./ContextAPI-Components/Dad";

const AssetContext = createContext('KING ALVI')

const ContextAPI = () => {
    return (
        <section className="GrandFather">
            <h1 className="text-4xl text-center">GrandFather</h1>
            <div className="GrandFatherContextAPI">
                <AssetContext.Provider value="KING ALVI">
                    <Dad />
                </AssetContext.Provider>
            </div>
        </section>
    );
};

export default ContextAPI;