import React, { useState }  from 'react'
import c from './App.module.scss';
import Aside from './components/aside/Aside';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Section from './components/sections/Section';

const App = () => {
  const [sections, setSection] = useState([
      {
          link: 'myquestion',
          tittle: 'My Qestion',
      },
      {
          link: 'messanger',
          tittle: 'Messanger',
      },
      {
          link: 'communityqa',
          tittle: 'Community QA',
      },
      {
          link: 'faq',
          tittle: 'FAQ',
      },
  ])

  const [isPressesBtn, setIsPresesBtn] = useState(false);

  function addSection() {
    setIsPresesBtn(true);
  }

  function updateSections(newSection) {
    setSection([...sections, newSection]);
    setIsPresesBtn(false);
  }

  return (
    <BrowserRouter>
      <div className={c.app}>
        <Aside 
          links={sections} 
          addSection={addSection} 
          isPressedBtn={isPressesBtn} 
          setSection={setSection} 
          updateSections={updateSections}
        /> 
        <div>
          {sections.map(section => 
            <Route path={`/${section.link}`} render={ () => 
              <Section tittle={section.tittle} />} 
            />)}         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
