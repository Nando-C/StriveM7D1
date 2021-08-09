import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Results from './components/Results';

function App() {
  return (
    <Router>
      <Container>
        <Route path='/' exact component={Results}/>
      </Container>
    </Router>
  );
}

export default App;
