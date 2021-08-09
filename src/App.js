import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Results from './components/Results';
import CompanyDetail from './components/CompanyDetail';

function App() {
  return (
    <Router>
      <Container>
        <Route path='/' exact component={Results}/>
        <Route path='/company-detail/:companyName' component={CompanyDetail} />
      </Container>
    </Router>
  );
}

export default App;
