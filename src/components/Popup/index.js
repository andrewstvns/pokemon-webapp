import React from 'react';
import { PopupWrapper, PopupInner, PopupCenter, PopupContent } from './popup.element';
import { Button, Input } from 'components';

const Popup = ({ 
  type,
  name,
  value,
  buttonText,
  messagePopup,
  onChange,
  isShow, 
  isCatched, 
  handleSubmit 
}) => {
  return (
    <PopupWrapper isShow={isShow}>
      <PopupInner>
        <PopupCenter>
          <PopupContent isShow={isShow}>
            {isCatched ? (
              <>
                <Input 
                  placeholder='Input Pokemon Nickname'
                  type={type}
                  name={name}
                  value={value}
                  onChange={onChange}
                />
              </>
            ) : (
              <h2>{messagePopup}</h2>
            )}
            <Button onClick={handleSubmit} popup>{buttonText}</Button>
          </PopupContent>
        </PopupCenter>
      </PopupInner>
    </PopupWrapper>
  )
};

export default Popup;