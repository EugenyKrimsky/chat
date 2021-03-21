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
            text: 'question 1',
            date: `20:10 · 1.3`
          },
          {
            text: 'question 2',
            date: `20:10 · 1.3`
          },
        ],
        newTextMessage: '',
    },
    {
        link: 'messanger',
        tittle: 'Messanger',
        messages: [
          {
            text: 'message 1',
            date: `20:10 · 1.3`
          },
          {
            text: 'message 2',
            date: `20:10 · 1.3`
          },
        ],
        newTextMessage: ''
    },
    {
        link: 'communityqa',
        tittle: 'Community QA',
        messages: [
          {
            text: 'qa 1',
            date: `20:10 · 1.3`
          },
          {
            text: 'qa 2',
            date: `20:10 · 1.3`
          },
        ],
        newTextMessage: ''
    },
    {
        link: 'faq',
        tittle: 'FAQ',
        messages: [
          {
            text: 'answer 1',
            date: `20:10 · 1.3`
          },
          {
            text: 'answer 2',
            date: `20:10 · 1.3`
          },
        ],
        newTextMessage: ''
  },
  ]

  const storage = JSON.parse(localStorage.getItem('sections'));

  const [sections, setSection] = useState(storage || state);

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
      if (section.newTextMessage) {
        if (section.tittle === tittle) {
          section.messages.push({ 
            text: section.newTextMessage, 
            date: `${new Date().getHours()}:${new Date().getMinutes()} · ${new Date().getDate()}.${new Date().getMonth() + 1}` 
          });
          section.newTextMessage = '';
        }
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
    if (!sections.some(section => section.tittle === newSection.tittle)) {
      localStorage.clear();

      setSection([...sections, newSection]);
      setIsPresesBtn(false);
      
      localStorage.setItem('sections', JSON.stringify(sections));
    } else {
      alert('Section with this name already exsists!');
    }
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
        {sections.map((section, i) => 
          <Route key={i} path={`/${section.link}`} render={() => 
            <Section 
              tittle={section.tittle} 
              messages={section.messages}
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
