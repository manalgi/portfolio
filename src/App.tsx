import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { LeftSection } from './sections/LeftSection';
import { RightSection } from './sections/RightSection';

function App() {
  return (
    <Box>
      <Grid container>
        <Grid size={7}>
          <LeftSection />
        </Grid>

        <Grid size={3}>
          <RightSection />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
