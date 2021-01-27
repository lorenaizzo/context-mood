import React, { useState } from 'react';
import { MoodContext } from '../../MoodContext';

export default function MoodForm() {

    const [mood, setMood] = useState('Contento');
    const [message, setMessage] = useState('');

    const moodContext = React.useContext(MoodContext);

    const handleChangeInput = (event) => {
        setMessage(event.target.value);
    }

    const handleChangeSelect = (event) => {
        setMood(event.target.value);
    }

    const handleClick = () => {
        const moodAux = {
            mood: mood, 
            message: message
        };
        moodContext.handleMoodsChange(moodAux);
    }

    return (
      <div>
          <label>Estado de animo</label>
          <select value = {mood} name='mood'onChange={handleChangeSelect}>
            <option value='Contento'>Contento</option>
            <option value='Triste'>Triste</option>
            <option value='Ilusionado'>Ilusionado</option>
            <option value='Enojado'>Enojado</option>
          </select>

          <label>Mensaje</label>
          <input value={message} onChange={handleChangeInput} name="message"></input>
      
          <button onClick={handleClick}>Guardar</button>
      </div>
    );
}
