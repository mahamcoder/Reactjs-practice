import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// if i wanna  show the constant of the value in my program then  we use the React method
const ReactElement=React.createElement(
    'a',
    {
        href:"./google.com",
        target:"_blank",
    },
    "Visit me"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
{ReactElement}
<App/>
   </>

)
