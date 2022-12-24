import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import { IconButtonBar } from '../icon-button-bar';
import { Image } from '../image';
import './index.scss';

export const IntroduceSection = ({ author, language = 'ko' }) => {
  if (!author) return null;
  const { bio, social, name } = author;

  return (
    <div className="introduce-section">
      {language === 'ko' ? (
        <div className="introduction korean">
          <p className="title">
            안녕하세요.
            <br />
            <ReactRotatingText items={bio.description} />
            <br />
            {bio.role} <strong>{name}</strong>입니다.
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      ) : (
        <div className="introduction english">
          <p className="title">
            Hello,
            <br />
            my name is
            <br />
            <strong>{name}</strong>
            .<br />
          </p>
          <p className="description">
            I'm a {bio.role} <ReactRotatingText items={bio.description} />
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      )}
      <div className="thumbnail-wrapper">
        <Image style={{ width: 280, height: 280 }} src={bio.thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
}
