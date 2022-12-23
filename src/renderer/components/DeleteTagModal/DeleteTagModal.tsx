import { useEffect, useState } from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from 'renderer/redux/hooks/reduxHooks';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemText';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Typography from '@mui/material/Typography';

interface SelectTagModalProps {
  open: boolean;
  handleClose: () => void;
}

const DeleteTagModal = ({ open, handleClose }: SelectTagModalProps) => {
  const [tagList, setTagList] = useState([]);
  const dispatch = useAppDispatch();

  const slippiTag: any = useAppSelector((state) => state.slippiTagReducer.tag);

  useEffect(() => {
    const rawList = localStorage.getItem('tagList');
    if (rawList) {
      setTagList(JSON.parse(rawList));
    }
  }, [open]);

  const handleListItemClick = (e: any, index: number) => {
    const deletedTag = tagList[index];
    const newList = Object.assign([], tagList);
    newList.splice(index, 1);

    setTagList(newList);
    localStorage.setItem('tagList', JSON.stringify(newList));

    if (slippiTag === deletedTag) {
      localStorage.removeItem('previousUsedTag');
      dispatch({ type: 'slippiTag/changeTag', payload: null });
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          width: '50%',
          height: '50%',
          borderRadius: '5px',
          overflow: 'auto',
        }}
      >
        {tagList.length === 0 ? (
          <Typography sx={{ color: 'black' }}>No Tags Found</Typography>
        ) : (
          <List sx={{ width: '100%' }} disablePadding dense>
            {tagList.map((tag, index) => (
              <ListItemButton
                key={tag}
                sx={{
                  ':hover': { bgcolor: '#f5f5f5', cursor: 'pointer' },
                  width: '100%',
                  height: '100%',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                }}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirecton: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: '60px',
                    paddingRight: '60px',
                  }}
                >
                  <Typography sx={{ color: 'black' }}>{tag}</Typography>
                  <DeleteOutlineIcon />
                </Box>
              </ListItemButton>
            ))}
          </List>
        )}
      </Box>
    </Modal>
  );
};

export default DeleteTagModal;
