import "./ContexAPI.css"
import Dad from "./ContexAPI-Components/Dad";

const ContexAPI = () => {
    return (
        <section className="GrandFather">
            <h1 className="text-4xl text-center">GrandFather</h1>
            <div className="GrandFatherContexAPI">
                <Dad />
            </div>
        </section>
    );
};

export default ContexAPI;