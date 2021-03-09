import logo from './logo.svg';
import './App.css';
import {Form} from './components/form'
import {AlertProvaider} from './context/alert/alertState'



function App() {
  return (
    <AlertProvaider>
      <Form></Form>
      </AlertProvaider>
  );
}

export default App;
