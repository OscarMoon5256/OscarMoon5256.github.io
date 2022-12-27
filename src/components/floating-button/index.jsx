import React from 'react';
import { EffectSwitch } from '../switchs/effect-switch';
import { ThemeSwitch } from '../switchs/theme-switch';
import { GoToTopButton } from '../go-to-top-button'
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import './index.scss';

export function FloatingButton() {
    return (
        <div className="fab-wrapper">
            <div className="wave" />
            <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
            <label className="fab" htmlFor="fabCheckbox">
                <LocationOnSharpIcon />
            </label>
            <div className="fab-wheel">
                <a className="fab-action fab-action-1">
                    <EffectSwitch />
                </a>
                <a className="fab-action fab-action-2">
                    <ThemeSwitch />
                </a>
                <a className="fab-action fab-action-3">
                    <GoToTopButton />
                </a>
            </div>
        </div>
    )
}