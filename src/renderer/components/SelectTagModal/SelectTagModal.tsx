import { useEffect, useState } from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from 'renderer/redux/hooks/reduxHooks';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemText';
import { useGetSlippiProfileQuery } from 'renderer/redux/slices/slippiSlice';

interface SelectTagModalProps {
  open: boolean;
  handleClose: () => void;
}

const SelectTagModal = ({ open, handleClose }: SelectTagModalProps) => {
  const [selectedTag, setSelectedTag] = useState('');
  const [tagList, setTagList] = useState([]);
  const dispatch = useAppDispatch();

  const slippiTag: any = useAppSelector((state) => state.slippiTagReducer.tag);
  const { refetch } = useGetSlippiProfileQuery(selectedTag, {
    skip: selectedTag === '',
  });

  useEffect(() => {
    const rawList = localStorage.getItem('tagList');
    if (rawList) {
      setTagList(JSON.parse(rawList));
    }
  }, [open]);

  const handleListItemClick = (e: any, index: number) => {
    if (tagList[index] !== slippiTag) {
      setSelectedTag(tagList[index]);
      if (selectedTag) {
        refetch();
      }
      dispatch({ type: 'slippiTag/changeTag', payload: tagList[index] });
      localStorage.setItem('previousUsedTag', tagList[index]);
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
                  textAlign: 'center',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                }}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <Typography sx={{ color: 'black' }}>{tag}</Typography>
              </ListItemButton>
            ))}
          </List>
        )}
      </Box>
    </Modal>
  );
};

export default SelectTagModal;
