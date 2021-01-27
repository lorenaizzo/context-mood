import React, {useState} from 'react';
import './App.css';
import { MoodForm, MoodList } from './components/mood';
import { MoodContext } from './MoodContext';


function App() {
  const [moods, setMoods] = useState([]);

  return (

    <MoodContext.Provider 
    value={{
      moods: moods, 
      handleMoodsChange: (value) => setMoods(value)
    }}>
      <div>
        <div>
          <MoodForm></MoodForm>
        </div>
        <div>
          <MoodList></MoodList>
        </div>
      </div>
    </MoodContext.Provider>
    );
}

export default App;
