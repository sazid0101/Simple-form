import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css';
const GrandPa = () => {
    const asset = 'gold ring'
    return (
        
            <div className=' grandpa'>
                <h2>Grand maa</h2>
                <div className='flex'>
                   <Father asset={asset}></Father>
                   <Uncle></Uncle>
                </div>
            </div>
        
    );
};

export default GrandPa;