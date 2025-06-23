import { useContext } from "react";
import { AssetContext, MoneyContext } from "../ContextAPI";

const Daughter = () => {

    ///// this is the way to call contex api in any Children conponent of contex api /////
    const Money = useContext(MoneyContext)
    const Gift = useContext(AssetContext)

    return (
        <dvi className="ContextAPI-Components">

            {/* set contex api data inside the html or react jsx */}
            <h1 className="text-3xl">Daughter : {Money}$ </h1>
            <br />
            <p> Her Gift is : <b><i>{Gift}</i></b> </p>

        </dvi>
    );
};

export default Daughter;