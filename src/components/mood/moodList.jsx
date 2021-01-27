import React, { useState, useEffect } from 'react';
import { MoodContext } from '../../MoodContext';

export default function MoodList(props) {
    const [moodsHtml, setMoodsHtml] = useState([]);


    const moodContext = React.useContext(MoodContext);

    useEffect(()=> {
        const moodsHtmlAux = moodContext.moods.map((aMood, index) => (
            <tr key={index}>
                <td>{aMood.mood}</td>
                <td>{aMood.message}</td>
            </tr>
        ));
        setMoodsHtml(moodsHtmlAux);
    }, [moodContext.moods]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Estado de animo</th>
                    <th>Mensaje</th>
                </tr>
            </thead>
            <tbody>
                {moodsHtml}
            </tbody>
        </table>
    );
}
