import { List, Paper } from '@mui/material';
import { DragEvent, FC, useContext, useMemo } from 'react';

import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';
import { EntryStatus } from '@/interfaces';
import { EntryCard } from './';

import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const filteredEntries = useMemo(
    () => entries.filter(entry => entry.status === status),
    [entries, status]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');

    const entry = entries.find(entry => entry._id === id);

    if (!entry) return;

    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div
      className={isDragging ? styles.dragging : ''}
      onDragOver={allowDrop}
      onDrop={onDropEntry}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 180px)',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: '3px 5px',
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.2 : 1,
            transition: 'all .3s',
          }}
        >
          {filteredEntries.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
