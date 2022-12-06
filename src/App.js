import { useState } from 'react';
import Header from './layouts/header';

function App() {
  const [selectedRowData, setSelectedRowData] = useState(null);
  return (
    <div>
      <Header setSelectedRowData={setSelectedRowData} />

      <code
        style={{
          whiteSpace: 'pre',
          maxWidth: '100vw',
          overflow: 'auto',
          display: 'inline-block',
          marginTop: 32,
        }}
      >
      </code>
    </div>
  )
}

export default App;
