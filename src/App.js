import { Grid, Typography } from '@mui/material';

function App() {
  return (
    <Grid>
      <Grid item xs={12}>
        <Typography>
          |To-Do List
        </Typography>
      </Grid> 
      <Grid item xs={12}>
        <div>Todo List Container</div>
      </Grid>
    </Grid>
  );
}

export default App;
