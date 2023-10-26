import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { EntryList, NewEntry } from '@/components/ui';

export default function Home(): NextPage {
  return (
    <Layout title='Home - Jira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pending' />
            <CardContent>
              <NewEntry />
              <EntryList status='pending' />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='In progress' />
            <CardContent>
              <EntryList status='in-progress' />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Done' />
            <CardContent>
              <EntryList status='finished' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
