import React from 'react';
import './index.scss';

export const SectionHeader = ({ title }) => {
  return (
    <div className="section-header-wrapper">
      <div className="section-header">
        {title}
      </div>
    </div>
  );
}
