import { useState, ChangeEvent } from 'react';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface AddTagModalProps {
  open: boolean;
  handleClose: () => void;
}

interface AddButtonProps {
  tag: string;
  disabled: boolean;
  handleTextClear: () => void;
  handleClose: () => void;
}

const AddButton = ({
  tag,
  disabled,
  handleTextClear,
  handleClose,
}: AddButtonProps) => {
  const handleClick = () => {
    const tagList = localStorage.getItem('tagList');

    if (!tagList) {
      const newTagList = [tag.toUpperCase()];
      localStorage.setItem('tagList', JSON.stringify(newTagList));
    } else {
      const parseTagList = JSON.parse(tagList);
      parseTagList.push(tag.toUpperCase());
      localStorage.setItem('tagList', JSON.stringify(parseTagList));
    }

    handleTextClear();
    handleClose();
  };

  return (
    <Button disabled={disabled} onClick={handleClick}>
      Add
    </Button>
  );
};

const validDefault = { isValid: false, helpText: '' };
const invalidTag = { isValid: true, helpText: 'Invalid Slippi Tag' };
const invalidUsed = { isValid: true, helpText: 'Tag already added' };

const AddTagModal = ({ open, handleClose }: AddTagModalProps) => {
  const [tag, setTag] = useState('');
  const [valid, setValid] = useState(validDefault);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tagRegex = /^\w+#\d+$/;
    const { value } = e.target;
    const valueCaps = value.toUpperCase();
    const tagList = localStorage.getItem('tagList');
    if (tagList && JSON.parse(tagList).includes(valueCaps)) {
      setValid(invalidUsed);
    } else if (!tagRegex.test(valueCaps)) {
      setValid(invalidTag);
    } else {
      setValid(validDefault);
    }
    setTag(valueCaps);
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setValid(validDefault);
        setTag('');
        handleClose();
      }}
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
        }}
      >
        <TextField
          autoFocus
          value={tag}
          type="text"
          label="Slippi Connect Code"
          variant="standard"
          error={valid.isValid}
          helperText={valid.helpText}
          onChange={handleChange}
          sx={{ width: '80%' }}
          inputProps={{
            spellCheck: 'false',
            maxLength: 8,
            style: { textTransform: 'uppercase' },
          }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          InputProps={{
            endAdornment: (
              <AddButton
                handleClose={handleClose}
                tag={tag}
                handleTextClear={() => setTag('')}
                disabled={valid.isValid || tag.length === 0}
              />
            ),
          }}
        />
      </Box>
    </Modal>
  );
};

export default AddTagModal;
