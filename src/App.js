import logo from './logo.svg';
import './style/App.css';
import { Button,message } from 'antd';
import { Router, Route, Link }from "react-router"
import {routes} from "./configs/routers";
import AppDirect from "./components/AppDirect";

function App() {
  return (
    <div className="App">
      <AppDirect></AppDirect>

    </div>
  );
}

export default App;
