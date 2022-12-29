import React from 'react';
import { collectionOfSayings } from "./collection-of-sayings";

import './index.scss';

export function PostSummary({ summary }) {
    const randomNumber = Math.floor(Math.random() * (collectionOfSayings.length - 1) + 1)
    const [selectedSaying] = collectionOfSayings.filter((saying) => saying.id === randomNumber)
    const summayOrMessage = summary ? summary : selectedSaying.message;
    const author = selectedSaying.author;

    return (
        <div className="paper">
            <div className="pin">
                <div className="shadow"></div>
                <div className="metal"></div>
                <div className="bottom-circle"></div>
            </div>
            <pre>{summayOrMessage}</pre>
            {summary ? null : <div className="who-said">{`- ${author}`}</div>}
        </div>
    )
}