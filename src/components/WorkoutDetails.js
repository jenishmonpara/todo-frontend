import axios from 'axios';

const WorkoutDetails = ({workout, fetchWorkouts}) => {
    
    const handleDeleteClick = async () => {
        try{
            const response = await axios.delete('/api/workouts/' + workout._id);
            const json = await response.data;
            console.log('DELETED :')
            console.log(json);
            fetchWorkouts();
            
        }catch(e){
            console.log('AXIOS Runtime error during delete');
            console.log(e);
        }
        

    }
    return (
        <header>
            <div className="workout-details">
                <h4>{workout.title}</h4>
                <p>Load (in Kgs) : <strong>{workout.load}</strong></p>
                <p>Reps : <strong>{workout.reps}</strong></p>
                <span
                onClick={handleDeleteClick}
                className='material-symbols-outlined'
                >
                    Delete
                </span>
                
            </div>
        </header>
        
    )
}

export default WorkoutDetails