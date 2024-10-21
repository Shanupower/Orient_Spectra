import { Dialog} from "@mui/material";

const ThankYouDialog = ({ open, handleClose }) => {
    return (
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="popup-dialog-title"
        maxWidth="lg"
        PaperProps={{
            sx: {
            width: { xs: '90%', sm: '75%', md: '80%', lg: '35%' },
            maxWidth: 'none',
            position: 'relative',
            overflow: "visible",
            },
        }}
        className='DailogBox'
      >
        <div className="Success-container">
            <div className="success-message">
              <img src="https://strapi.orientspectra.com/uploads/luxa_org_no_background_green_double_circle_check_mark_78370_1749_c6ee2071c0.webp" alt="Success" />
              <h2>Thank you for your response!</h2>
              <p onClick={handleClose}>Back to Home</p>
            </div>
          </div>
      </Dialog>
    );
  };
  
  export default ThankYouDialog;