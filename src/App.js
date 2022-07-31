
import './App.css';
import Adresse from './component/Adresse';

import Fullname from './component/Fullname';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
    <Profile/>
    <Fullname></Fullname>
    <Adresse/>
    </div>
  );
}

export default App;
