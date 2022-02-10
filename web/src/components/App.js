import '../styles/App.scss';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import callToApi from '../services/api';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

function App() {
  const [data, setData] = useState({
    name: '',
    job: '',
    email: '',
    photo: '',
    phone: '',
    github: '',
    linkedin: '',
    palette: '1',
  });

  //INPUT FILE
  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setData({
      ...data,
      ['photo']: avatar,
    });
  };

  //BUTON RESET
  const resetBtn = () => {
    setData({
      name: '',
      job: '',
      email: '',
      photo: '',
      phone: '',
      github: '',
      linkedin: '',
      palette: '1',
    });
    setAvatar('')
  };

  /* FETCH */
  const [dataAPI, setDataAPI] = useState('');

  const handleClickBtn = (event) => {
    event.preventDefault();
    callToApi(data).then((response) => {
      setDataAPI(response);
    });
    console.log(dataAPI);
  };

  const handleInput = (inputName, inputValue) => {
    const inputChanged = inputName;

    setData({
      ...data,
      [inputChanged]: inputValue,
    });
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact>
         <Home />
        </Route>
        <Route path="/card">
          <Header />
          <main className="preview-main">
            <Preview data={data} resetBtn={resetBtn} avatar={avatar} />
            <Form
              data={data}
              handleInput={handleInput}
              avatar={avatar}
              updateAvatar={updateAvatar}
              dataAPI={dataAPI}
              handleClickBtn={handleClickBtn}
            />
          </main>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
