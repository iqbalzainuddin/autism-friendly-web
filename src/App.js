/* 
  The import statements import all required library in order for
  the website to work properly
*/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';

import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
import Start from './components/start/Start';
import About from './components/about/About';
import Term from './components/term/Term';
import Participate from './components/participate/Participate';
import Submit from './components/submit/Submit';
import Evaluation from './components/evaluation/Evaluation';
import Prize from './components/prize/Prize';
import Contact from './components/contact/Contact';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  faChevronCircleRight, 
  faChevronCircleLeft,
  faChild, 
  faTimes, 
  faUsers, 
  faExclamationTriangle, 
  faStamp, 
  faClipboard,
  faArrowRight,
  faEnvelopeOpenText,
  faCloudUploadAlt,
  faVideo,
  faStopwatch,
  faFilm,
  faHeadphones,
  faBullseye,
  faClipboardList,
  faRoad,
  faLaptopCode,
  faBrain,
  faPuzzlePiece,
  faNetworkWired,
  faUserCog,
  faUserGraduate,
  faCertificate,
  faTrophy,
  faMedal,
  faAward
} from '@fortawesome/free-solid-svg-icons';

import { Provider } from './context';

// The library add function used to add imported icon into the FontAwesome
// component so that it could be used with FontAwesome component wherever it
// is imported in our app
library.add(
  fab, 
  faChevronCircleRight, 
  faChevronCircleLeft, 
  faChild, 
  faTimes,
  faUsers,
  faExclamationTriangle,
  faStamp,
  faClipboard,
  faArrowRight,
  faEnvelopeOpenText,
  faCloudUploadAlt,
  faVideo,
  faStopwatch,
  faFilm,
  faHeadphones,
  faBullseye,
  faClipboardList,
  faRoad,
  faLaptopCode,
  faBrain,
  faPuzzlePiece,
  faNetworkWired,
  faUserCog,
  faUserGraduate,
  faCertificate,
  faTrophy,
  faMedal,
  faAward
);

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <div className="wall">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Start} />
                <Route exact path='/competition/about' component={About} />
                <Route exact path='/terms/conditions' component={Term} />
                <Route exact path='/participate/how' component={Participate} />
                <Route exact path='/submit/how' component={Submit} />
                <Route exact path='/evaluation/method' component={Evaluation} />
                <Route exact path='/prize' component={Prize} />
                <Route exact path='/contact' component={Contact} />
              </Switch>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
