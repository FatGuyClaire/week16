import React from 'react';

// I created the Results function display search results.
function Results (props) {
    return (
        <tr>
            <td>
{props.artist} - {props.title}
            </td>
        </tr>
    )
}



export default Results; 