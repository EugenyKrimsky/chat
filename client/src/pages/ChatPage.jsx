import React, { useState }  from 'react'
import './ChatPage.scss';
import Aside from './components/aside/Aside';
import { Route } from 'react-router-dom'
import Section from './components/sections/Section';
import state from '../state';

const ChatPage = () => {
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
      <div className="ChatPage">
        <Aside 
          links={sections} 
          addSection={addSection} 
          isPressedBtn={isPressesBtn} 
          setSection={setSection} 
          updateSections={updateSections}
        /> 
        {sections.map((section, i) => 
          <Route key={i} path={`/ChatPage/${section.link}`} render={() => 
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
  );
}

export default ChatPage;
