import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from '/components/Badge/Badge'
import Banner from '/components/Banner/Banner'

function App() {
  return (
    <>
      <Badge color="red" type="pill">Hello</Badge>
      <Badge color="blue">World</Badge>
      <Badge color="green" type="pill">Hello</Badge>
      <Badge color="yellow" >Hello</Badge>
      <Badge color="pink" type="pill">Hello</Badge>
      <Badge color="asdasda" type="aaaaaa">Test Pill</Badge>
      
      <Banner type="success" message="Hi" description="Soo nice to be here" />
      <Banner type="error" message="Hi2" />
      <Banner type="warning" message="Hi3" description="Soo nice to be here" />
      <Banner type="info" message="Hi4" description="Soo nice to be here" />
      <Banner type="info" message="hi" />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
