import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import { TrainContext } from "../context/TrainState";

import './Button.css';

const ButtonComponent = props => {
    const { editStation } = useContext(TrainContext);
    // const { station } = useContext(GlobalContext);  Y
    return (

        <Button
            variant="primary"
            className="button"
            onClick={() => editStation(props.station)}
        >
            {props.station}
        </Button>

    );
}

export default ButtonComponent;