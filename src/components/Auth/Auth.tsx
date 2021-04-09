import React from 'react';

import './auth.css';
import {Button} from "../Buttons";

type AuthProps = {
  onBack: () => void;
};

export const Auth: React.FC<AuthProps> = (props) => {
  const { onBack } = props;
  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-logo-wrapper">
          <img
            src={'/assets/images/trade.jpg'}
            alt="trade"
          />
        </div>
        <p className="auth-description conthrax">
          TRADE is a fast-paced multiplayer game, in which players can enter timed rounds and play with
          their peers to see whose trading prowess is best.
        </p>
        <p className="auth-signup-description">
          Sign up below to join our closed alpha and receive notifications when tournaments are live.
        </p>
        <div className="auth-cookie">
          <p className="auth-cookie-description">
            We use cookies that are necessary to operate our website.
            By continuing, you agree to be bound by our Privacy Policy.<br/>
            Please choose whether or not to give us your consent to carry out profiling and use your data for
            marketing purposes.
          </p>
          <div className="auth-cookie-btn-wrapper">
            <Button
              className="gradient"
              onClick={() => {}}
              style={{
                padding: '1.6em 1em',
                marginBottom: '2em',
                fontSize: '0.8em',
                borderRadius: '1.8em'
              }}
            >
              Accept and Create
            </Button>
            <Button
              onClick={() => {}}
              style={{
                padding: '1.6em 1em',
                marginBottom: '1.2em',
                fontSize: '0.8em',
                background: '#0A0A0A',
                border: '10px solid',
                borderImageSlice: 1,
                borderRadius: '1.8em',
                borderImageSource: 'linear-gradient(90deg, rgba(11,233,246,1) 0%, rgba(254,79,216,1) 100%)',
              }}
            >
              Accept and Create
            </Button>
          </div>

          <div className="auth-social">
            <p className="auth-social_title conthrax">
              Or continue with
            </p>
            <div className="auth-social-items">
              <button className="auth-social_btn-item google">Google</button>
              <button className="auth-social_btn-item telegram">Telegram</button>
              <button className="auth-social_btn-item discord">Discord</button>
              <button className="auth-social_btn-item facebook">Facebook</button>
              <button className="auth-social_btn-item instagram">Instagram</button>
              <button className="auth-social_btn-item twitter">Twitter</button>
            </div>
          </div>
        </div>
        <button className="auth-back gradient" onClick={onBack}>Back</button>
      </div>
    </div>
  )
}
