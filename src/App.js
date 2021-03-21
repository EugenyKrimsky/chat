import React, { useState }  from 'react'
import './App.scss';
import Aside from './components/aside/Aside';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Section from './components/sections/Section';

const App = () => {
  const state = [
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
  ]

  let storage = JSON.parse(localStorage.getItem('sections'));

  let [sections, setSection] = useState(storage || state);

  function upgradeNewTextMessage(tittle, value) {
    localStorage.clear();

    setSection(sections.map(section => {
      if (section.tittle === tittle) {
        section.newTextMessage = value;
      }
      return section
    }))

    localStorage.setItem('sections', JSON.stringify(sections));
  }

  function addNewMessage(tittle) {
    localStorage.clear();

    setSection(sections.map(section => {
      if (section.tittle === tittle) {
        section.messages.push({ text: section.newTextMessage });
        section.newTextMessage = '';
      }
      return section
    }))

    localStorage.setItem('sections', JSON.stringify(sections));
  }
  
  const [isPressesBtn, setIsPresesBtn] = useState(false);

  function addSection() {
    setIsPresesBtn(true);
  }

  function updateSections(newSection) {
    localStorage.clear();
    setSection([...sections, newSection]);
    setIsPresesBtn(false);
    
    localStorage.setItem('sections', JSON.stringify(sections));
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
            />
          )}         
        </div>
    </BrowserRouter>
  );
}

export default App;
