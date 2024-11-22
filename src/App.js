import logo from './logo.svg';
import './App.css';
import { MenuComponent } from './components/MenuComponent';
import { ListaBusesComponent } from './components/ListaBusesComponent';

function App() {
  return (
    <div className="App">
      <MenuComponent/>
      <ListaBusesComponent/>
    </div>
  );
}

export default App;
