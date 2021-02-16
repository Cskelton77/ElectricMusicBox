import React, { useEffect, useState} from 'react';
import { BlueKnob, RotaryControl } from './RotaryKnob.style'
import { scaleLog } from "d3-scale";

const RotaryKnob = ({control, title}) =>  {
    const [dialValue, setDialValue] = useState(1)
    const [dialAngle, setDialAngle] = useState(-160)

    useEffect(()=> {
        setDialAngle((dialValue * 315 / 800)-160);
    }, [dialValue]);

    const logScale = (x)=> {
        const logScaleA = scaleLog([1,100],[0.001, 0.01]).clamp(true);
        const logScaleB = scaleLog([101,200],[0.01, 0.02]).clamp(true);
        const logScaleC = scaleLog([200,300],[0.02, 0.03]).clamp(true);
        const logScaleD = scaleLog([300,400],[0.03, 0.10]).clamp(true);
        const logScaleE = scaleLog([400,500],[0.10, 0.30]).clamp(true);
        const logScaleF = scaleLog([500,600],[0.30, 1.0]).clamp(true);
        const logScaleG = scaleLog([600,700],[1.0, 3.0]).clamp(true);
        const logScaleH = scaleLog([700,800],[3.0, 10]).clamp(true);
        
        switch (true) {
            case (x <= 100): 
                return logScaleA(x);
            case (x <= 200): 
                return logScaleB(x);
            case (x <= 300): 
                return logScaleC(x);
            case (x <= 400): 
                return logScaleD(x);
            case (x <= 500): 
              return logScaleE(x);
            case (x <= 600): 
              return logScaleF(x);
            case (x <= 700): 
              return logScaleG(x);
            default:
                return logScaleH(x);
          }
        
    }

    const handleKnobChange = (e) => {
        const x = parseInt(e.target.value);
        setDialValue(x)
        control(logScale(x))
    };

    return (
        <RotaryControl>
            <div>{title}</div>
            <div className={'knob'}>
            <span>.001</span>
            <BlueKnob angle={dialAngle} />
            <span>10</span>
            </div>
            
            {/* <span>.1</span>
             */}
           
            <br />
            <input value={dialValue} type="range" min="0" max="800" onChange={handleKnobChange} />
        </RotaryControl>
  );
}

export default RotaryKnob;
