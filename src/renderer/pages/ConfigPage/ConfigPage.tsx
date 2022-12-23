import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks/reduxHooks';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';

import AddTagModal from 'renderer/components/AddTagModal';
import SelectTagModal from 'renderer/components/SelectTagModal';
import DeleteTagModal from 'renderer/components/DeleteTagModal';

import './ConfigPage.css';

// const buttons = ['default', 'simple default', 'minimal'];

// const style = {
//   color: '#ffffff',
//   backgroundColor: '#171a1f',
//   borderColor: '#8491ac',
//   textTransform: 'none',
// };

const ConfigPage = () => {
  // const [layout, setLayout] = useState(buttons[0]);
  const [addTagModalVisible, setAddTagModalVisible] = useState(false);
  const [selectTagModalVisible, setSelectTagModalVisible] = useState(false);
  const [deleteTagModalVisible, setDeleteTagModalVisible] = useState(false);

  const slippiTag: any =
    useAppSelector((state) => state.slippiTagReducer.tag) || 'No Tag Selected';

  // const handleChange = (event: MouseEvent<HTMLElement>, newLayout: string) => {
  //   setLayout(newLayout);
  // };

  return (
    <Box className="config-container">
      {/* <ToggleButtonGroup
        orientation="vertical"
        value={layout}
        exclusive
        onChange={handleChange}
      >
        {buttons.map((value: string) => (
          <ToggleButton
            key={value}
            value={value}
            aria-label={value}
            sx={style}
            disableRipple
          >
            {value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup> */}
      <Box className="config-menu-container">
        <Typography class="tag-selected">{`Tag: ${slippiTag}`}</Typography>
        <Button
          variant="contained"
          className="tagConfigButton"
          onClick={() => setAddTagModalVisible(true)}
          sx={{
            bgcolor: 'green',
            ':hover': { bgcolor: 'green' },
            width: '100%',
          }}
        >
          Add Tag
        </Button>
        <Button
          variant="contained"
          className="tagConfigButton"
          onClick={() => setSelectTagModalVisible(true)}
          sx={{ bgcolor: '#1565c0', ':hover': { bgcolor: '#1565c0' } }}
        >
          Select Tag
        </Button>
        <Button
          variant="contained"
          className="tagConfigButton"
          onClick={() => setDeleteTagModalVisible(true)}
          sx={{ bgcolor: 'red', ':hover': { bgcolor: 'red' } }}
        >
          Delete Tag
        </Button>
      </Box>
      <AddTagModal
        open={addTagModalVisible}
        handleClose={() => setAddTagModalVisible(false)}
      />
      <SelectTagModal
        open={selectTagModalVisible}
        handleClose={() => setSelectTagModalVisible(false)}
      />
      <DeleteTagModal
        open={deleteTagModalVisible}
        handleClose={() => setDeleteTagModalVisible(false)}
      />
    </Box>
  );
};

export default ConfigPage;
