import React from 'react';
import ReactDOM from 'react-dom/client';
// import './style.css'
// import Header from './Header.js'
// import MainContent from './Maincontent.js'
// import Footer from './footer.js'
// import Main from './Main';
// import Navbar from './Navbar';
import App from './app.js';
// import App from './learn'


// const navbar = (
//     <nav>
//         <h1>Jaswanth</h1>
//         <ul>
//             <li>Menu</li>
//             <li>about</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// const Navbar = document.getElementById('root');
// const root = ReactDOM.createRoot(Navbar);
// root.render(navbar);

// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>Its's Declarative</li>
//         </ol>
//     </div>
// )

// const Page = document.getElementById('root').append(JSON.stringify(page));
// const root = ReactDOM.createRoot(Page);
// root.render(page);

// const page1 = (
//     <div>
// <img src="./logo512.png" alt="logo" width="40px" /> 

//        <h1>Fun Facts about React</h1>
//        <ul>
//             <li>Was first released in 2013</li>
//           <li>was originally created by Jorden Walke</li>
//           <li>Hass well over 100k stars on GitHub</li>
//              <li>Powers thousands of enterprise apps, including mobile apps</li>
//        </ul>
//     </div>
// )

// const Page = document.getElementById('root');
// const root = ReactDOM.createRoot(Page);
// root.render(page1);


// function Page(){
//     return(
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
            
//         </div>
//     )
// }
// const page = document.getElementById('root');
// const root = ReactDOM.createRoot(page);
// root.render(<Page />);

// PRoject 1
// function Page(){
//     return(
//         <div>
//             <Navbar /> 
//             <Main />           
//         </div>
//     )
// }

// const page = document.getElementById('root');
// const root = ReactDOM.createRoot(page);
// root.render(<Page />);

// APP
// function Page(){
//         return(
//             <div>          
//                 <App />           
//             </div>
//         )
//     }
    
//     const page = document.getElementById('root');
//     const root = ReactDOM.createRoot(page);
//     root.render(<Page />);

function Page(){
    return(
        <div>          
            <App />           
        </div>
    )
}

const page = document.getElementById('root');
const root = ReactDOM.createRoot(page);
root.render(<Page />);

