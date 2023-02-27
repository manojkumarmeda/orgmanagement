import './App.css';
import AddEmployee from './components/addemployee/addEmployee';
import Header from './components/common/Header'
import SideNav from './components/common/SideNav'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header header='Employee Management' />
        <br />
        <SideNav brand='Employee Management' />
        <AddEmployee />
      </div>
    </div>
  );
}

export default App;
