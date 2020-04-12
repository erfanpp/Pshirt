import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Editor from './Components/Editor';


class App extends Component {
  render() {
    document.tidioChatLang = document.querySelector("html").getAttribute("lang");
    document.tidioChatLang = "fa";
var googleAnScript = document.createElement("script");

googleAnScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-161603758-1";


var tidioScript = document.createElement("script");
tidioScript.src = "//code.tidio.co/mrzzxlgv7pzcfpo8gevsbpn3ssb3cgc1.js";

var gooleAnScript2 = document.createElement("script");
gooleAnScript2.innerText = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-161603758-1');
`;    
    
    
    document.body.appendChild(tidioScript);
    document.body.appendChild(googleAnScript);
    document.body.appendChild(gooleAnScript2);

    return (
      <div>

<Navbar />
      <Editor />

      </div>
      
      );
  }
}

export default App;
