import React, {useState} from 'react';
import './App.css';
import * as Tone from 'tone';
import Keyboard from './features/Keyboard/Keyboard'
import QuadFunctionGenerator from './features/QuadFunctionGenerator/QuadFunctionGenerator'
import { scaleLinear } from 'd3';

function App() {

  const [attackA, setAttackA] = useState(0.15)
  const [sustainA, setSustainA] = useState(1)
  const [decayA, setDecayA] = useState(0.8)
  
  
  const attackScale = scaleLinear([1,10],[0,2]).clamp(true);
  const decayScale = scaleLinear([1,10],[0,2]).clamp(true);
  const releaseScale = scaleLinear([1,10],[0,5]).clamp(true);

  const ampEnv = new Tone.AmplitudeEnvelope({
    attack: attackScale(attackA),
    decay: decayScale(decayA),
    sustain: 1.0,
    release: releaseScale(decayA)
  }).toDestination();

  const oscillator = new Tone.Oscillator().connect(ampEnv).start();

  return (
    <div className="App">
      <QuadFunctionGenerator atA={setAttackA} decA={setDecayA} susA={setSustainA} />

      <Keyboard oscillator={oscillator} ampEnv={ampEnv} />
    
    </div>
  );
}

export default App;
