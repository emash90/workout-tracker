import Form from './components/Form'
import Display from './components/Display'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UpdateForm from './components/UpdateForm';




function App() {
const { control, register, handleSubmit, reset } = useForm();

  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [exercises, setExercises] = useState([]);
  const [listExercises, setListExercises] = useState([])

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const token = currentUser.token
  console.log(`token is: ${token}`);

  useEffect(() => {
    setLoading(true)
    const fetchExercises = async() => {
      const res = await axios.get('http://localhost:3001/api/exercise',
      {headers: {Authorization: `Bearer ${token}`}}
      )
      setExercises(res.data)
      setLoading(false)
    }
    fetchExercises()
  }, [listExercises])
  const onSubmit = async(data) => {
    try {
        setLoading(true)
        const res = await axios.post('http://localhost:3001/api/exercise', data,
        {headers: {Authorization: `Bearer ${token}`}}
        )
        setListExercises(prev => [...prev, res.data])
        setLoading(false)
    } catch (error) {
        console.log(error);
    }
}
const exerciseUpdate = async(id, setNewData) => {
  try {
    console.log(setNewData);
    setLoading(true)
    const res = await axios.patch(`http://localhost:3001/api/exercise/${id}`, setNewData,
    { headers: { 'Content-Type': 'application/json' }}
    )
    setListExercises(prev => [...prev, res.data])
        setLoading(false)
  } catch (error) {
    console.log(error);
  }
}
  const deleteExercise = async(id) => {
    try {
        const res = await axios.delete(`http://localhost:3001/api/exercise/${id}`)
        const newListExercises = listExercises.filter(exercise => exercise._id !== id)
        setListExercises(newListExercises)
    } catch (error) {
        console.log(error);
    }
}

if(loading) {
  return (
      <div>
          loading...
      </div>
  ) 
} 



  return (
      <>
      <Header />
    <div className='main-container'>
    <section className='container1'>  
      <Form onSubmit={onSubmit} />
    </section>
    <section className='container2'>
      <Display exercises={exercises} loading={loading} deleteExercise={deleteExercise} onSubmit={onSubmit} exerciseUpdate={exerciseUpdate}/>
    </section>
    </div>
    </>
  );
}

export default App;
