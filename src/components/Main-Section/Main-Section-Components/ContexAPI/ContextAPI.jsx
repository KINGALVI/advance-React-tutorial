import { createContext, useState } from "react";
import "./ContextAPI.css"
import Dad from "./ContextAPI-Components/Dad";

///// This is the way to use context api to avoid using prop driling . /////
export const AssetContext = createContext('Iphone 11 pro max')
export const MoneyContext = createContext(0)

const ContextAPI = () => {

    const [Money, setMoney] = useState(0)

    const handelSetMoney = () => {
        setMoney(Money + 1000)
    }

    return (
        <>
            <section className="GrandFather">
                <h1 className="text-4xl text-center">GrandFather : {Money}$ </h1>
                <div className="GrandFatherContextAPI">

                    {/***** This is the way to set context api and contex's api children *****/}
                    <MoneyContext.Provider value={[Money]}>
                    <AssetContext.Provider value="Iphone 11 pro max">
                        <Dad />
                    </AssetContext.Provider>
                    </MoneyContext.Provider>
                </div>
            </section>
            <center><button className="btn btn-primary join-item" onClick={handelSetMoney}>Add Money</button></center>
            <br />
        </>
    );

};

export default ContextAPI;