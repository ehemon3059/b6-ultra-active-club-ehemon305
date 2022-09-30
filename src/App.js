import logo from './logo.svg';
import './App.css';
import Active from './Components/Active/Active';
import Heading from './Components/Active/Heading/Heading';
import Ques from './Components/QuestionAnswer/Questionans';



function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Active></Active>
    <Ques></Ques>
    </div>
  );
}

export default App;
