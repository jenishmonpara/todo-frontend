
const WorkoutDetails = ({workout}) => {
    
    return (
        <header>
            <div className="workout-details">
                <h4>
                    {workout.title}
                </h4>
                <p>Load (in Kgs) : <strong>{workout.load}</strong></p>
                <p>Reps : <strong>{workout.reps}</strong></p>
            </div>
        </header>
        
    )
}

export default WorkoutDetails