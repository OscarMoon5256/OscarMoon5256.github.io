import React, { useState } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import './index.scss';

export function SnowEffect() {
    const snowflakeCount = 50;
    const snowflake = new Array(snowflakeCount).fill(0)

    return (
        <div>
            {snowflake.map((_, i) => {
                return <div key={i} className="snowflake"></div>
            })}
        </div>
    )
}