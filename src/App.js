import logo from './logo.svg';
import './App.css';
import Propsdemo from './compnents/functionalcomp/Propsdemo';

function App() {
  return (
    <div className='container'>
      <h1 className='text-danger'>Hello World!</h1>
       <Propsdemo username="Monil"
                  password="Guru_123"
                  contact={9998662555}
                  address="Ahmedabad"
                  isMarried ={null}
                  hobbies={["Travelling","Music",]}
                  isActive ={true}
    
       ></Propsdemo>
    </div>
  );
}

export default App;
