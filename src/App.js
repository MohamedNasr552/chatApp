
import { ChatEngine, ChatFeed } from 'react-chat-engine';
import './App.css';
import LoginForm from './Components/LoginForm';


const App = ()=>{
  if(! localStorage.getItem('username')) return <LoginForm />
  


    return(
      <ChatEngine 
            height="100vh"
            projectID="8d3ed815-3c16-42fc-b570-eec9676b06b4"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} /> }
      />


    );
}

export default App ;
