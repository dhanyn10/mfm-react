// import icon from '../../assets/icon.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Topnavbar from './components/TopNavbar'
import ListFiles from './components/listFiles'
import Footer from './components/Footer'

export default function App() {
    return (
        <div>
            <Topnavbar/>
            <ListFiles/>
            <Footer/>
        </div>
    );
}
