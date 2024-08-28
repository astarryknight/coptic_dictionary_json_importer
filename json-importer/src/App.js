import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Textarea from '@mui/joy/Textarea';
import Button from "@mui/joy/Button";

var greekAlpha = "ςερτυθιοπασδφγηξκλζχψωβνμ"
var copticAlpha = "ⲥⲉⲣⲧⲩⲑⲓⲟⲡⲁϭⲇⲫⲩⲏⲝⲕⲗⲍⲭⲯⲱⲃⲛⲙ"

//Helpter functions
function greekToCoptic(string) {
  var returnString = ""
  for (var i = 0; i < string.length; i++) {
    if (greekAlpha.indexOf(string[i]) != -1) {
      returnString += copticAlpha[greekAlpha.indexOf(string[i])];
    } else {
      returnString += string[i]
    }
  }
  return returnString;
}

//todo - implement live transliteration
function getPronunciation(string) {

}

function buildJSON({ word, def, pron }) {
  var returnString = "{\n\t\"word\": \"" + word + "\",\n\t\"definition\": \"" + def + "\",\n\t\"pronunciation\": \"" + pron + "\"\n}"
  return returnString
}



function App() {

  const [word, changeWord] = React.useState("");
  const [def, changeDef] = React.useState("");
  const [pron, changePron] = React.useState("");

  //for inputs
  const onWordChange = event => {
    changeWord(greekToCoptic(event.target.value));
    document.getElementById("copy").innerHTML = "Copy";
  };

  const onDefChange = event => {
    changeDef(event.target.value);
    document.getElementById("copy").innerHTML = "Copy";
  };

  const onPronChange = event => {
    changePron(event.target.value);
    document.getElementById("copy").innerHTML = "Copy";
  };

  return (
    <Sheet sx={{ display: "flex", width: "100%", height: "100dvh", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Sheet sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", width: "80%" }}>
        <Typography level="h4">Word:</Typography>
        <Textarea onChange={(e) => onWordChange(e)} sx={{ width: "30%", height: "10%" }}></Textarea>
        <Typography level="h4">Definition:</Typography>
        <Textarea onChange={(e) => onDefChange(e)} sx={{ width: "50%", height: "20%" }}></Textarea>
        <Typography level="h4">Pronunciation:</Typography>
        <Textarea onChange={(e) => onPronChange(e)} sx={{ width: "50%", height: "20%" }}></Textarea>
        <Sheet sx={{ width: "100%", marginTop: "1rem" }}>
          <Typography level="h4">Output:</Typography>
          <Textarea value={
            buildJSON({ word, def, pron })
          } sx={{ width: "100%" }}
            readOnly={true}></Textarea>
          <Button id="copy" onClick={(e) => { navigator.clipboard.writeText(buildJSON({ word, def, pron })); e.target.innerHTML = "Copied!" }}>Copy</Button>
        </Sheet>
      </Sheet>
    </Sheet >
  );
}

export default App;
