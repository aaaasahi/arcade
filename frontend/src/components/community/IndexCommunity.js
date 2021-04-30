import { useState } from 'react';
import { CreateCommunityDialog } from './CreateCommunityDialog';

export const IndexCommunity = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
    <h1>コミュニティ一覧</h1>
    <CreateCommunityDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
    </>
    
  )
}