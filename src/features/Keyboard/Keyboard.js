import React from 'react';
import BlackKey from '../../components/keys/BlackKey'
import WhiteKey from '../../components/keys/WhiteKey'
import { KeyboardPlate } from './Keyboard.style'
const Keyboard = ({oscillator, ampEnv}) =>  {

    const octave = (oct)=> {
        return (
            <>
            <WhiteKey pos={'left'} osc={oscillator} env={ampEnv} note={'C'+oct} />
            <BlackKey pos={'left'} osc={oscillator} env={ampEnv} note={'C#'+oct} />
            <WhiteKey pos={'center'}osc={oscillator} env={ampEnv} note={'D'+oct} />
            <BlackKey pos={'right'} osc={oscillator} env={ampEnv} note={'D#'+oct} />
            <WhiteKey pos={'right'} osc={oscillator} env={ampEnv} note={'E'+oct} />

            <WhiteKey pos={'left'} osc={oscillator} env={ampEnv} note={'F'+oct} />
            <BlackKey pos={'left'} osc={oscillator} env={ampEnv} note={'F#'+oct} />
            <WhiteKey pos={'center'} osc={oscillator} env={ampEnv} note={'G'+oct} />
            <BlackKey pos={'center'} osc={oscillator} env={ampEnv} note={'G#'+oct} />
            <WhiteKey pos={'center'}osc={oscillator} env={ampEnv} note={'A'+oct} />
            <BlackKey pos={'right'} osc={oscillator} env={ampEnv} note={'A#'+oct} />
            <WhiteKey pos={'right'} osc={oscillator} env={ampEnv} note={'B'+oct} />
            </>
        )
    }
   return (
        <KeyboardPlate>
           
            {octave(4)}
            {octave(5)}
    
      </KeyboardPlate>
  );
}

export default Keyboard;
