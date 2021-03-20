import React from 'react'
import c from './App.module.scss';
import Aside from './components/aside/Aside';
import { BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router-dom'
import CommunityqQA from './components/sections/community-qa/CommunityqQA';
import MyQuestions from './components/sections/my-questions/MyQuestions';
import Messanger from './components/sections/messanger/Messanger';
import Faq from './components/sections/faq/Faq';

function App(props) {
  return (
    <BrowserRouter>
      <div className={c.app}>
        <Aside links={props.state.links}/> 
        <div>
            <Route path='/my-question' render={ () => <MyQuestions />}/>
            <Route path='/messanger' render={ () => <Messanger />} />
            <Route path='/community-qa' render={ () => <CommunityqQA />} />
            <Route path='/faq' render={ () => <Faq />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
