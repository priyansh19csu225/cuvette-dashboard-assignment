import React from 'react';
import styled from 'styled-components';

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const DialogContent = styled.div`
position:relative;
  background: #fff;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width:50%;
`;


export const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <DialogOverlay>
      <DialogContent>
        {children}
      </DialogContent>
    </DialogOverlay>
  );
};

