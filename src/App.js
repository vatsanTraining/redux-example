import logo from './logo.svg';
import './App.css';
import MyContext from './context-api-example/MyContextProvider';
import { Provider } from 'react-redux';
 import store from './redux-comps/MyStore';
import ManageName from './redux-comps/ManageName';
function App() {
  return (
    <div className="App">
      <MyContext></MyContext>
      <Provider store={store}>
       <ManageName></ManageName>
      </Provider>
          </div>
  );
}

export default App;
