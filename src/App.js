import React, { useState }  from 'react'
import './App.scss';
import Aside from './components/aside/Aside';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Section from './components/sections/Section';

const App = () => {
  const [sections, setSection] = useState([
      {
          link: 'myquestions',
          tittle: 'My Qestions',
          messages: [
            {
              text: 'question 1'
            },
            {
              text: 'question 2'
            },
          ],
          newTextMessage: '',
      },
      {
          link: 'messanger',
          tittle: 'Messanger',
          messages: [
            {
              text: 'message 1'
            },
            {
              text: 'message 2'
            },
          ],
          newTextMessage: ''
      },
      {
          link: 'communityqa',
          tittle: 'Community QA',
          messages: [
            {
              text: 'qa 1'
            },
            {
              text: 'qa 2'
            },
          ],
          newTextMessage: ''
      },
      {
          link: 'faq',
          tittle: 'FAQ',
          messages: [
            {
              text: 'answer 1'
            },
            {
              text: 'answer 2'
            },
          ],
          newTextMessage: ''
      },
  ])

  window.sections = sections;

  function upgradeNewTextMessage(tittle, value) {
    setSection(sections.map(section => {
      if (section.tittle === tittle) {
        section.newTextMessage = value;
      }
      return section
    }))
  }

  function addNewMessage(tittle) {
    setSection(sections.map(section => {
      if (section.tittle === tittle) {
        section.messages.push({ text: section.newTextMessage });
        section.newTextMessage = '';
      }
      return section
    }))
  }
  
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
      <div className="app">
        <Aside 
          links={sections} 
          addSection={addSection} 
          isPressedBtn={isPressesBtn} 
          setSection={setSection} 
          updateSections={updateSections}
        /> 
          {sections.map(section => 
            <Route path={`/${section.link}`} render={() => 
              <Section 
                tittle={section.tittle} 
                messages={section.messages.map(message => message.text)}
                newTextMessage={section.newTextMessage}
                upgradeNewTextMessage={upgradeNewTextMessage}
                addNewMessage={addNewMessage}
              />} 
            />)}         
        </div>
    </BrowserRouter>
  );
}

export default App;
