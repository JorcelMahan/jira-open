import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, useContext, useState } from 'react';

import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';
import { Add, SaveOutlined } from '@mui/icons-material';

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setTouched(false);
    setInputValue('');
  };

  return (
    <Box
      sx={{
        marginBottom: 2,
        px: 2,
      }}
    >
      {isAddingEntry ? (
        <>
          <TextField
            sx={{
              marginTop: 2,
              marginBottom: 1,
            }}
            autoFocus
            multiline
            label='New entry'
            value={inputValue}
            onChange={onTextFieldChanged}
            onBlur={() => setTouched(true)}
            error={touched && inputValue.length === 0}
            helperText={
              touched && inputValue.length === 0 ? 'Please enter a value' : ''
            }
          />
          <Box display='flex' justifyContent='space-between'>
            <Button
              variant='text'
              onClick={() => {
                setIsAddingEntry(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              color='secondary'
              endIcon={<SaveOutlined />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          variant='contained'
          fullWidth
          startIcon={<Add />}
          onClick={() => setIsAddingEntry(true)}
        >
          Add an entry
        </Button>
      )}
    </Box>
  );
};
