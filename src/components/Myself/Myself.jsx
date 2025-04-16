import MyQueen from "../MyQueen/MyQueen";

const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <MyQueen asset={asset}></MyQueen>
        </div>
    );
};

export default Myself;