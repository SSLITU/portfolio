import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/projects';
import SingleProject from './components/single-project';
import About from './components/about';
import Post from './components/post';
// import NavBar from './components/nav-bar';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={Projects} path='/projects'/>
        <Route component={SingleProject} path='/post/:slug'/>
        <Route component={Post} path='/post'/>
        <Route component={About} path='/about'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
