
import {Button} from '@mui/material'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
function App() {
  return (
    <div className="App">
        <Button variant="text" >Waring</Button>
        <Button startIcon={<SendRoundedIcon/>} color="success" variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
