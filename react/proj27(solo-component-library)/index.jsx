import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from '/components/Badge/Badge'

function App() {
  return (
    <>
      <Badge color="red" type="pill">Hello</Badge>
      <Badge color="blue">World</Badge>
      <Badge color="green" type="pill">Hello</Badge>
      <Badge color="yellow" >Hello</Badge>
      <Badge color="pink" type="pill">Hello</Badge>
      <Badge color="asdasda" type="aaaaaa">Test Pill</Badge>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
