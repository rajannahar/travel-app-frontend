import React from 'react';
import {Input, Button} from 'react-materialize';

const FilterName = props => (

    <Input className="filterName" placeholder="Filter by name" s={12} onKeyUp={props.handleFilterName} />                

);

export default FilterName;
