import React from 'react';
import {Input} from 'react-materialize';

const FilterUserRatings = props => (
    
    <Input className="filterUserRatings" s={12} m={4} type='select' defaultValue='' onChange={props.handleFilterRatings} >
        <option key="" value="">Filter User Ratings:</option>
        <option key="0" value="0">0 Star</option>
        <option key="1" value="1">1 Star</option>
        <option key="2" value="2">2 Stars</option>
        <option key="3" value="3">3 Stars</option>
        <option key="4" value="4">4 Stars</option>
        <option key="5" value="5">5 Stars</option>
    </Input>

);

export default FilterUserRatings;
