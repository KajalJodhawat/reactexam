import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import DataList from './components/DataList';


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/Form" exact component={Form} />
            <Route path="/DataList" exact component={DataList}/>
            <Route path="/edit/:id" exact component={Form}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
