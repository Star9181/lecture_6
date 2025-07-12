//1. Import area
import './App.css';
//import { SomenamedImport } from somelocation/somelibrary;
import { MyComp2 } from './components/MyComp2';

//import somedefaultImport from somelocation/somelibrary;
import MyComp1 from './components/MyComp1';


// function area
function App() {
  return (
      <div className='App'>
        <MyComp1 name="Maulik" />
        <MyComp1 name="Samyak" />
        <MyComp2 surname="Sinha"/>
      </div>
  )
}

//export area
export default App;
