import styled from "@emotion/styled";

export const PopupInformationWrapper = styled.div`
  visibility: ${props => props.isShow ? 'visible;' : 'hidden;'};
  opacity: ${props => props.isShow ? '1;' : '0;'};
  overflow-wrap: break-word;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  transition: all 0.5s ease;
`;

export const PopupInformationInner = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  padding: 64px 0px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupInformationCenter = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const PopupInformationContent = styled.div`
  text-align: center;
  border-radius: 12px;
  background-color: #fff;
  position: relative;
  max-width: 648px;
  height: 250px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  box-shadow: 0 2px 6px 0 rgba(#000, 0.05);
  padding: 56px;
  opacity: ${props => props.isShow ? '1;' : '0;'};
  transform: ${props => props.isShow ? 'transform: scale(1);' : 'scale(0.85);'};
  transition: all 0.3s ease 0.2s;
`;