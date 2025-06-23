import "./ContexAPI-Components.css"
import Son from "./Son";
import Daughter from "./Daughter"

const Dad = () => {
    return (
        <>
            <h1 className="text-4xl text-center">Father</h1>
            <div className="DadContextAPI">
                <Son />
                <Daughter />
            </div>
        </>
    );
};

export default Dad;