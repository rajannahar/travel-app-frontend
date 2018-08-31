import React from 'react';
import {Input} from 'react-materialize';

const FilterUserRatings = props => (
    
    <Input className="filterUserRatings" s={12} m={4} type='select' defaultValue='' onChange={props.handleFilterRatings} >
        <option key="" value="">Filter User Ratings:</option>
        <option key="0" value="0">0</option>
        <option key="1" value="1">1</option>
        <option key="2" value="2">2</option>
        <option key="3" value="3">3</option>
        <option key="4" value="4">4</option>
        <option key="5" value="5">5</option>
        <option key="6" value="6">6</option>
        <option key="7" value="7">7</option>
        <option key="8" value="8">8</option>
        <option key="9" value="9">9</option>
        <option key="10" value="10">10</option>
    </Input>

);

export default FilterUserRatings;
