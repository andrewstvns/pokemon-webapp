import React from 'react';
import { PopupInformationWrapper, PopupInformationInner, PopupInformationCenter, PopupInformationContent } from './popupInformation.element';
import { Button } from 'components';

const PopupInformation = ({ 
  buttonText,
  messagePopupInformation,
  isShow, 
  onClick 
}) => {
  return (
    <PopupInformationWrapper isShow={isShow}>
      <PopupInformationInner>
        <PopupInformationCenter>
          <PopupInformationContent isShow={isShow}>
            <h2>{messagePopupInformation}</h2>
            <Button popup onClick={onClick}>{buttonText}</Button>
          </PopupInformationContent>
        </PopupInformationCenter>
      </PopupInformationInner>
    </PopupInformationWrapper>
  )
};

export default PopupInformation;