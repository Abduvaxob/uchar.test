import Master from "./Pages/Master.js"
import "./Pages/style.css"
import { useEffect, useState } from 'react';
import Language from "./Language.json"



function App() {
const [language,setLanguage] = useState("eng")
const [content,setContent] = useState({})


const handleChange = (event) => {
  setLanguage(event.target.value)
}

useEffect(() => {
  if(language === "eng") {
    setContent(Language.eng)
  }
  if(language === "de") {
    setContent(Language.de)
  }
  else if(language === "uz"){
    setContent(Language.uz)
  }
  else if(language === "tu"){
    setContent(Language.tu)
  }
},[language])

  return (
    <div className="App">
      <Master language={language} handleChange={handleChange} content={content} />
    </div>
  );
}

export default App;
