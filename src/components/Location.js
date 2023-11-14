import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
      <select className="dropdown" name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="£">(£ Pound)</option>
        <option value="₹">(₹ Ruppee)</option>
        <option value="€">(€ Euro)</option>
        <option value="CAD">($ Dollar)</option>
      </select>	
    );
};

export default Location;