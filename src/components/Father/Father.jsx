import Myself from "../Myself/Myself";

const Father = ({asset}) => {
    return (
        <div>
            <h2>father</h2>
            <Myself asset={asset}></Myself>
        </div>
    );
};

export default Father;