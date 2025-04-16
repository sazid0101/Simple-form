import { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css';
export const AssetContext = createContext();
const GrandPa = () => {
    const asset = 'gold ring'
    return (
        
            <div className=' grandpa'>
                <h2>Grand maa</h2>

                 <AssetContext.Provider value={'diamond'}>

                 <div className='flex'>
                   <Father asset={asset}></Father>
                   <Uncle></Uncle>
                   </div>

                 </AssetContext.Provider>
                
            </div>
        
    );
};

export default GrandPa;