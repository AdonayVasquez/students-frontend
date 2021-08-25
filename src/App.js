import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddStudent from './pages/AddStudent';
import NotFound from './pages/NotFound';
import StudentList from './pages/StudentsList';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      
      <Switch>
        <Route path='/' component={AddStudent} exact />
        <Route path='/student-list' component={StudentList} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
