import Header from './components/header';
import { useState } from 'react';

function App() {
  const students = ['Sandhika', 'Doddy', 'Erik'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header />
      <Header author="Pa Dhika" />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
    </>
  );
}

export default App;
