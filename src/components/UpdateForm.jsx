import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const UpdateForm = ({ loading, exerciseUpdate }) => {
const { control, register, handleSubmit, reset } = useForm();
const [newData, setNewData] = useState("");
if(loading) {
    return (
        <div>
        loading...
        </div>
    )
}
return (
    <div className='update-form'>
      <form onSubmit={(e) => handleSubmit(exerciseUpdate(setNewData))}>
      <input {...register("description")} onChange={handleSubmit} placeholder="new exercise description" name="description" />
      <select {...register("duration")} onChange={handleSubmit} name='duration'>
        <option value="">duration...</option>
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
          placeholderText='Select new date'
          onChange={(date) => field.onChange(new Date(date))}
          selected={field.value}
        />
     )}
    />
      <p>{setNewData}</p>
      <input type="submit" />
    </form> 
    </div>
  )
}

export default UpdateForm
