import {useState} from "react";
import axios from 'axios';

const WorkoutForm = ({onSubmitAdder}) => {

    const [title,setTitle] = useState('');
    const [load,setLoad] = useState('');
    const [reps,setReps] = useState('');
    const [error,setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();  // to prevent refresh of page [ the default action ] on submit 
        const workout = {title,load,reps};
        try{
            const response = await axios.post('/api/workouts', workout);
            const json = await response.data;
            console.log('POST response');
            console.log(json);
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            onSubmitAdder();
            
        }catch (e){
            console.log('AXIOS Runtime error');
            console.log(e);
            setError(e.response.data.error);
        }
        
        
    }

    return (
        <form className="WorkoutForm" onSubmit = {handleSubmit}>
            <h3>Add a new workout</h3>

            <div>
                <label> Exercise title : </label>
                <input
                    type="text"
                    onChange = {(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>
            
            <div>
                <label> Exercise Load (in kgs) : </label>
                <input
                    type="number"
                    onChange = {(e) => setLoad(e.target.value)}
                    value={load}
                />
            </div>

            <div>
                <label> Exercise Reps : </label>
                <input
                    type="number"
                    onChange = {(e) => setReps(e.target.value)}
                    value={reps}
                />
            </div>

            <button>
                Add Workout
            </button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default WorkoutForm;