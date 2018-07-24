import React from 'react';
import {Button} from 'react-materialize';

const ResetButton = props => (
    /* Todo: need to reset/clear ALL the filters 
    so that the application loads fresh from initialState */

    <Button waves='light' type="submit" s={3} onClick={props.resetData}>Reset</Button>
    
);

export default ResetButton;
