import Form from './components/Form'
import Display from './components/Display'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./components/Header";



function App() {
  const [loading, setLoading] = useState(false)
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    setLoading(true)
    const fetchExercises = async() => {
      const res = await axios.get('http://localhost:3001/api/exercise')
      setExercises(res.data)
      setLoading(false)
    }
    fetchExercises()
  }, [])

  return (
      <>
      <Header />
    <div className='main-container'>
    <section className='container1'>
      <Form  />
    </section>
    <section className='container2'>
      <Display exercises={exercises} loading={loading}/>
    </section>
    </div>
    </>
  );
}

export default App;
