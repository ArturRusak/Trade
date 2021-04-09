import React, {useState} from 'react';
import './header.css';
import { Auth } from "../Auth";
import { Button } from "../Buttons";

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleClick = () => {
    console.log('click');
    setIsVisible(true);
  };

  const handleBack = () => setIsVisible(false);

  if (isVisible) {
    return <Auth onBack={handleBack} />
  }

  return (
    <header>
      <a className="logo conthrax" href='#'>
        <img src={'/assets/images/logo.jpg'} alt="Trade"/>
        trade
      </a>
      <Button
        className="gradient"
        onClick={handleClick}
      >
        Sign Up
      </Button>
    </header>
  );
}
