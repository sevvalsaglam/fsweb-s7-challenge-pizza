import { useState } from "react";

function SiparisSayaci(props) {
    const {} = props;

    const [state, setState] = useState(0);
    const artirici = () => {
      setState(state + 1);
    };
    const azaltici = () => {
      setState(state - 1);
      if (state<=0){
        setState(0);
      }
    };
 
    return (
      <>
        <div>
            <button class="quantity-minus" >
                <i class="fa fa-minus"
                onClick={azaltici}>-</i>
            </button>
            <input class="quantity-input" type="text" value={state} />
            <button class="quantity-plus" >
                <i class="fa fa-plus"
                onClick={artirici}>+</i>
            </button>
        </div>
      </>
    );
  }
  
  export default SiparisSayaci;