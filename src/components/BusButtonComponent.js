import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import { BusContext } from "../context/BusState";

import './Button.css';

const BusButtonComponent = props => {
    const { editStop } = useContext(BusContext);
    // const { station } = useContext(GlobalContext);  Y
    return (

        <Button
            variant="primary"
            className="button"
            onClick={() => editStop(props.stop)}
        >
            {props.stop}
        </Button>

    );
}

export default BusButtonComponent;