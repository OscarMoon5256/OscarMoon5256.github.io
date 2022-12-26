import React from 'react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

import './index.scss'

export function GoToTopButton() {
    function goToTop() {
        window.scroll({ top: 0, behavior: "smooth" })
    }

    return (
        <button
            onClick={goToTop}
        >
            <ArrowUpwardRoundedIcon />
        </button>
    )
}