import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App data={[
        {
          age: 10,
          lastname: 'Test'
        },
        {
          age: 11,
          lastname: 'Test1'
        },
        {
          age: 12,
          lastname: 'Test2'
        },
        {
          age: 13,
          lastname: 'Test3'
        }
      ]}/>
);

