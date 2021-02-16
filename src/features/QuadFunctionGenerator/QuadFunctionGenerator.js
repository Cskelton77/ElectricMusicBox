import React from 'react';
import RotaryKnob from '../../components/rotaryKnob/RotaryKnob'
import Jack from '../../components/jack/Jack'
import ModeSelector from '../../components/modeSelector/ModeSelector'
import { Inputs, Module, ModuleSection, Screw } from './QuadFunctionGenerator.style'


const QuadFunctionGenerator = ({atA, decA}) =>  {
    
    const functionGenerator = ()=> {
        return (<ModuleSection>
            <Inputs>
                <div style={{display: 'flex'}}>
                    <Jack color={'red'} />
                    <ModeSelector />
                </div>
                <div>
                    <Jack color={'black'} />
                    <Jack color={'black'} />
                </div>  
                <div>{'attack decay'}</div>
            </Inputs>
            <div>
                <RotaryKnob title="attack" control={atA} />
                <RotaryKnob title="decay" control={decA} />
            </div>
            <Inputs>
                <Jack color={'darkred'} />
                <Jack color={'blue'} />
            </Inputs>
        
        </ModuleSection>)
    }
       
    

    return (
        <Module>
            <Screw float={'left'} />
            {"Quad Function Generator Module 281e"}
            <Screw float={'right'}/>
            <hr />
            {functionGenerator()}
            <hr />
            {functionGenerator()}
            <hr />
            {functionGenerator()}
            <hr />
            {functionGenerator()}
            <hr />
            <Screw float={'left'} />
            <Screw float={'right'}/>
          </Module>
  );
}

export default QuadFunctionGenerator;
