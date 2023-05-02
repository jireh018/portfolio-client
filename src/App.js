import { Routes, Route } from 'react-router-dom'
import {
  Project,
  AboutMe,
  Contact,
  Landing,
  SharedLayout,
  Error,
} from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Landing />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
