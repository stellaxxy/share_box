import React from 'react';

function List(props){
    console.log('List Props:', props);

    return (
        <ul>
            {props.children}
        </ul>
    );
}

export default List;