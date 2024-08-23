import './App.css';
import Home from './Components/Home';

function App() {
  const API_URL = 'http://localhost:9000/upload'

  async function onFileUpload(companyDataArray) {
    console.log(companyDataArray);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: companyDataArray,
      });

      // if (!response.ok) {
      //     throw new Error('Network response was not ok');
      // }
      
    } catch (error) {
      console.error('Error posting company data:', error);
      throw error; // You can also handle this in your component or UI
    }
  }
  return (
    <div className="App">
      <Home onFileUpload={onFileUpload} />
    </div>
  );
}

export default App;
