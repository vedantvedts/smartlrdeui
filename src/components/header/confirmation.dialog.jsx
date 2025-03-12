import React from 'react';
import './confirmationDialog.css';

const ConfirmationDialog = ({ open, title, message, onClose, onConfirm }) => {
  if (!open) return null;

  return (
    <div className="modal fade show custom-backdrop" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              No
            </button>
            <button type="button" className="btn btn-primary" onClick={onConfirm}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;

// import { Dialog,Typography, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
// const ConfirmationDialog = ({ open, title, message, onClose, onConfirm }) => {
//   const handleClose = () => {
//     if (onClose) onClose();
//   };

//   const handleConfirm = () => {
//     if (onConfirm) onConfirm();
//   };
//   return (
//     <Dialog
//     open={open}
//     onClose={handleClose}
//     aria-labelledby="confirmation-dialog-title"
//     PaperProps={{
//       sx: {
//         paddingTop: '16px',    
//         paddingBottom: '16px',  
//         paddingRight: '24px',  
//         paddingLeft: '24px',    
//       },
//     }}
//   >
//       <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
//       <DialogContent> <Typography
//           variant="body1"
//           sx={{ fontSize: '16px', fontWeight: 600, whiteSpace: 'pre-line' }} // Styling for the message
//         >
//           {message}
//         </Typography></DialogContent>
//         <DialogActions
//         sx={{ justifyContent: 'center' }} // Center buttons horizontally
//       >
//         <Button onClick={handleClose} style={{backgroundColor :'darkred',color:'#fff'}} sx={{ marginX: 1 }}>
//           No
//         </Button>
//         <Button onClick={handleConfirm} style={{backgroundColor :'#198754',color:'#fff'}} sx={{ marginX: 1 }}>
//           Yes
//         </Button>
//         </DialogActions>
//     </Dialog>
//   );
// };

// export default ConfirmationDialog;
