import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';
class FilterName extends Component {

    render(props) {

        let {handleFilterName, resetData} = this.props;

        return (
            <Row> 
                <Input className="filterName" placeholder="Filter by name" s={6} onKeyUp={handleFilterName} />                
                <Button waves='light' type="submit" s={3} onClick={resetData}>Reset</Button>
            </Row>
        );
    }
}

export default FilterName;
