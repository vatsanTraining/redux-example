import logo from './logo.svg';
import './App.css';
// import MyContext from './context-api-example/MyContextProvider';
import { Provider } from 'react-redux';
//  import store from './redux-comps/MyStore';
import store from './redux-middleware/MiddlewareStore'
import ManageName from './redux-comps/ManageName';
import ShowCustomer from './redux-middleware/ShowCustomer'
import AddCustomer from './redux-middleware/AddCustomer';
import UsingReactTable from './redux-middleware/UsingReactTable';
import Main from './redux-middleware/Main'
function App() {
  return (
    <div className="App">
      {/* <MyContext></MyContext>
       {/* <ManageName></ManageName> */}
             <Provider store={store}> 
           {/* <AddCustomer></AddCustomer> */}
      </Provider>
      <Main></Main>
          </div>
  );
}

export default App;
