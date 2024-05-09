import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from '@/components/Form'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
    // handleOpen:()=>void
}

const BasicModal:React.FC<ModalProps>=() =>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
      className="px-4 py-2 bg-white text-custom-bg rounded hover:bg-gray-100 transition duration-150 border border-custom-bg font-bold"
      onClick={handleOpen}>Transfer</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" className='flex justify-end' >
            <button onClick={handleClose}> X </button> 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Form/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal
