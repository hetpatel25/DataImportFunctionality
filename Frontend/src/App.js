import './App.css';
import Home from './Components/Home';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const API_URL = 'http://localhost:9000/upload';


  const createNotification = (type, msg) => {
    switch (type) {
      case 'info':
        NotificationManager.info(msg, 'testing', 3000);
        break;
      case 'success':
        NotificationManager.success(msg, '', 3000);
        break;
      case 'warning':
        NotificationManager.warning(msg, '', 3000);
        break;
      case 'error':
        NotificationManager.error(msg, 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
      default:
        break;
    }
  };

  async function onFileUpload(companyDataArray) {
    try {
      console.log("Data being sent:", companyDataArray); 

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyDataArray),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      createNotification('success', 'Data uploaded successfully!');
      return result;
    } catch (error) {
      console.error('Error posting company data:', error);
      createNotification('warning', 'Error uploading company data');
    }
  }



  return (
    <div className="App">
      <Home onFileUpload={onFileUpload} />
      <NotificationContainer />
    </div>
  );
}

export default App;
