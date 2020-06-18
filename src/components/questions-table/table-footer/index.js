import React from 'react';
import { useDispatch } from 'react-redux';

import { canDrag } from '../../../redux/actions';

function TableFooter() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(canDrag());
    }

    return (
        <div className="table-footer">
            <button onClick={handleClick}>
                Switch Drag Mode
            </button>
        </div>
    )
}

export default TableFooter;