// import icon from '../../assets/icon.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Container } from 'react-bootstrap'
import Topnavbar from './components/TopNavbar'
import InputFolder from './components/InputFolder';
import ListFiles from './components/listFiles'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Topnavbar/>
      <Container>
        <InputFolder/>
        <ListFiles/>
        <Footer/>
      </Container>
    </div>
  );
}
