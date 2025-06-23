import "./ContexAPI-Components.css"
import Son from "./Son";
import Daughter from "./Daughter"
import { useContext } from "react";
import { MoneyContext } from "../ContextAPI";

const Dad = () => {

    ///// this is the way to call contex api in any Children conponent of contex api /////
    const Money = useContext(MoneyContext)

    return (
        <>

            {/* set contex api data inside the html or react jsx */}
            <h1 className="text-4xl text-center">Father : {Money}$ </h1>

            <div className="DadContextAPI">
                <Son />
                <Daughter />
            </div>
        </>

    );
};

export default Dad;