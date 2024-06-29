import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Home/Main/Main';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Jobs from './Pages/Jobs/Jobs';
import JobDetails from './Pages/Jobs/JobDetails';
import News from './Pages/News/News';
import NewsDetails from './Pages/News/NewsDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Candidate/Profile/Profile';
import Dashboard from './Pages/Employee/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main />}>
        </Route>
        <Route path='/home' element={<Main />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/contact' element={<ContactUs />}>
        </Route>
        <Route path='/jobs' element={<Jobs />}>
        </Route>
        <Route path='/news' element={<News />}>
        </Route>
        <Route path='/job-details/:id' element={<JobDetails />}>
        </Route>
        <Route path='/news/news-details' element={<NewsDetails />}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/register' element={<Register />}>
        </Route>
        <Route path='/profile' element={<Profile />}>
        </Route>
        <Route path='/company-dashboard/*' element={<Dashboard />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
