import { Typography } from '@mui/material';
import './App.css';
import eye from './Assets/eye.svg';
import Cog from './Components/Cog';
import PageProgress from './Components/PageProgress';

function App() {
  return (
    <div className="App">
      

      <header className="App-header">
        <PageProgress />
        <Cog />
        <img src={eye} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <Typography variant='h3'>volutpat commodo</Typography>
        <Typography style={{ paddingLeft:40, paddingRight:40 ,fontFamily: 'Helvetica, Arial, sans-serif'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet. In arcu cursus euismod quis. Eget mauris pharetra et ultrices neque ornare aenean. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Neque laoreet suspendisse interdum consectetur libero id. Pellentesque elit ullamcorper dignissim cras. Est ante in nibh mauris. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Laoreet sit amet cursus sit amet dictum sit amet. Suscipit adipiscing bibendum est ultricies integer quis auctor. In cursus turpis massa tincidunt dui ut ornare. Ornare aenean euismod elementum nisi quis eleifend quam. Tellus cras adipiscing enim eu turpis egestas pretium. Duis tristique sollicitudin nibh sit. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Ultrices in iaculis nunc sed augue. In mollis nunc sed id semper risus in. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Ac odio tempor orci dapibus ultrices.</Typography>
      
      </div>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
