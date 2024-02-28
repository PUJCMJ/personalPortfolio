import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../../components/navbar';
import About from '../../components/about';
import Certificates from '../../components/certificates';
import Projects from '../../components/projects';
import Resume from '../../components/resume';
import Contact from '../../components/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/certificates" component={Certificates} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;