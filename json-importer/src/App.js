import logo from './logo.svg';
import './App.css';
import Sheet from '@mui/joy/Sheet';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Textarea from '@mui/joy/Textarea';



function App() {

  const [word, changeWord] = React.useState("");
  const [def, changeDef] = React.useState("");

  return (
    <Sheet sx={{ display: "flex", width: "100%", height: "100dvh", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Sheet sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", width: "80%" }}>
        <Typography level="h4">Word:</Typography>
        <Textarea sx={{ width: "30%", height: "10%" }}></Textarea>
        <Typography level="h4">Definition:</Typography>
        <Textarea sx={{ width: "50%", height: "20%" }}></Textarea>
        <Sheet>
          <Typography level="h4">Output:</Typography>
          <Textarea value={
            { word }
          }></Textarea>
        </Sheet>
      </Sheet>
    </Sheet>
  );
}

export default App;
