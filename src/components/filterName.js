import React from 'react';
import {Row, Input, Button} from 'react-materialize';

const FilterName = props => (

    <Row> 
        <Input className="filterName" placeholder="Filter by name" s={6} onKeyUp={props.handleFilterName} />                
        <Button waves='light' type="submit" s={3} onClick={props.resetData}>Reset</Button>
    </Row>

);

export default FilterName;
