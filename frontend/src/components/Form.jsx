import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Form = ({ onSubmit }) => {
//const [listExercises, setListExercises] = useState([])
const [loading, setLoading] = useState(false)
const [startDate, setStartDate] = useState(new Date());
const { control, register, handleSubmit, reset } = useForm();
const [data, setData] = useState("");


if(loading) {
    return (
        <div>
            loading...
        </div>
    )
}
const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("description")} onChange={handleSubmit} placeholder="enter exercise description" name="description" />
      <input {...register("username")} onChange={handleSubmit} name="username" value={currentUser.username} disabled />
      <select {...register("duration")} onChange={handleSubmit} name='duration'>
        <option value="">Duration...</option>
        <option value="0-10mins">0 - 10 mins: Good Start</option>
        <option value="10-20mins">10 - 20 mins: Way to go</option>
        <option value="20-30mins">20 - 30 mins: Keep pushing</option>
        <option value="30-40mins">30 - 40 mins: Push on</option>
        <option value="40-50mins">40 - 50 mins: almost an athlete</option>
        <option value="50-60mins">50 - 60 mins: Okay athlete</option>
        <option value="more than 60 mins"> ^ 60 mins: show off</option>
      </select>
      <Controller 
      control={control} 
      name={'date'} 
      render={({ field }) => (
        <DatePicker
          placeholderText='Select date'
          onChange={(date) => field.onChange(new Date(date))}
          selected={field.value}
        />
     )}
    />
      <p>{data}</p>
      <input type="submit" />
    </form>
  )
}

export default Form
