import React from 'react';// this importing is for JSX, if not using JSX, then you don't have to import React

function List(props){
    console.log('List Props:', props);
    const list = props.list;

    const listElements = [];
    for (let i = 0; i < list.length; i++){
        const li = <li key={i}>{list[i]}</li>;

        listElements.push(li);
    }

    return (
        <ul>
            {listElements}
        </ul>
    )
}

export default List;