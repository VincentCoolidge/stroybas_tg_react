import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => tg.onClose();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      bode
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
