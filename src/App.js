import { Grid, Typography, Box } from '@mui/material';
import { TodoListContainer } from './Components/TodoListContainer';

function App() {
  return (
    <Grid container={true}>
      <Grid item xs={12}>
        <Box sx={{padding: '16px'}}>
        <Typography variant='h4' align='center'>
          To-Do List
        </Typography>
        </Box>
      </Grid> 
      <Grid item xs={1} md={2} lg={3}></Grid>
      <Grid item xs={10} md={8} lg={6}>
        <TodoListContainer></TodoListContainer>
      </Grid>
      <Grid item xs={1} md={2} lg={3}></Grid>
    </Grid>
  );
}

export default App;
