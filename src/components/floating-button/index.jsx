import React from 'react';
import { EffectSwitch } from '../switchs/effect-switch';
import { ThemeSwitch } from '../switchs/theme-switch';
import { GoToTopButton } from '../go-to-top-button'
import './index.scss';

export function FloatingButton() {
    return (
        <div className="fab-wrapper">
            <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
            <label className="fab" for="fabCheckbox">
                <span className="fab-dots fab-dots-1"></span>
                <span className="fab-dots fab-dots-2"></span>
                <span className="fab-dots fab-dots-3"></span>
            </label>
            <div className="fab-wheel">
                <a className="fab-action fab-action-1">
                    <ThemeSwitch />
                </a>
                <a className="fab-action fab-action-2">
                    <EffectSwitch />
                </a>
                <a className="fab-action fab-action-3">
                    <GoToTopButton />
                </a>
            </div>
        </div>
    )
}