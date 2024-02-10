import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Loginpage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
