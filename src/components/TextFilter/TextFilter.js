import React from 'react';
import { connect } from 'react-redux';
import { Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import './TextFilter.scss';

const TextFilter = (props) => {

    const textFilterChanged = new Subject();
    
    textFilterChanged.pipe(auditTime(100)).subscribe(value => {
        props.handleTextFilter(value);
    })
    

    return (
        <div className="TextFilter">
            <input className="TextFilter-text-input" onKeyUp={(event) => textFilterChanged.next(event.target.value)}/>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleTextFilter: (value) => dispatch({ type: 'UPDATE_FILTER_TEXT', data: value }),
    }
}

export default connect(null, mapDispatchToProps)(TextFilter);