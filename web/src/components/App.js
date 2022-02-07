import '../styles/App.scss';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import callToApi from '../services/api';

function App() {
  const [data, setData] = useState({
    name: '',
    job: '',
    email: '',
    photo:'',
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
  };

  /* FETCH */
  const [dataAPI, setDataAPI] = useState('');
 
  
  
  const handleClickBtn=(event)=>{
    event.preventDefault();
      callToApi(data).then((response) => {
      setDataAPI(response);
      
    });
    console.log(dataAPI)
  }
  

  const handleInput = (inputName, inputValue) => {
    const inputChanged = inputName;

    setData({
      ...data,
      [inputChanged]: inputValue,
    });
  };

  return (
    <div>
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
    </div>
  );
}

export default App;
