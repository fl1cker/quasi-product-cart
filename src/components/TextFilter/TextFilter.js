import React from 'react';
import { connect } from 'react-redux';
import { Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import './TextFilter.scss';
import { FaSearch } from 'react-icons/fa'

const TextFilter = (props) => {

    const textFilterChanged = new Subject();
    
    textFilterChanged.pipe(auditTime(100)).subscribe(value => {
        props.handleTextFilter(value);
    })
    

    return (
        <div className="TextFilter">
            <select className="TextFilter-category">
                <option>All</option>
            </select>
            <input className="TextFilter-text-input" onKeyUp={(event) => textFilterChanged.next(event.target.value)}/>
            <div className="TextFilter-search-icon-container">
                <div className="TextFilter-search-icon"><FaSearch /></div>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleTextFilter: (value) => dispatch({ type: 'UPDATE_FILTER_TEXT', data: value }),
    }
}

export default connect(null, mapDispatchToProps)(TextFilter);