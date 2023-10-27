import { Card, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { EntryList, NewEntry } from '@/components/ui';

export default function Home(): NextPage {
  return (
    <Layout title='Home - Jira'>
      <Grid container spacing={2} sx={{ my: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pending' />
            <NewEntry />
            <EntryList status='pending' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='In progress' />
            <EntryList status='in-progress' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Done' />
            <EntryList status='finished' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
