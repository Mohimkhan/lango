import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import './index.css';

const Home = lazy(() => import('./components/Home'));
const Learn = lazy(() => import('./components/Learning'));
const Quiz = lazy(() => import('./components/Quiz'));
const Result = lazy(() => import('./components/Result'));
const Login = lazy(() => import('./components/Login'));

const App = () => {
   return (
      <>
         <Router>
            <Header></Header>
            <Suspense fallback={<Loader />}>
               <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/learn" element={<Learn />}></Route>
                  <Route path="/quiz" element={<Quiz />}></Route>
                  <Route path="/result" element={<Result />}></Route>
                  <Route path="/login" element={<Login />}></Route>
               </Routes>
            </Suspense>
         </Router>
      </>
   );
};

export default App;
