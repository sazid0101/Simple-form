import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Cousin = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Cousin</h2>
            <p>i got: {gift}</p>
        </div>
    );
};

export default Cousin;