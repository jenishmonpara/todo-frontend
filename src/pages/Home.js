import { useEffect, useState } from "react";
import axios from 'axios'
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
const Home = () => {

    const [workouts,setWorkouts] = useState(null);

    const fetchWorkouts = async () => {
        const response = await axios('http://localhost:4000/api/workouts/');
        const json = response.data;
        
        setWorkouts(json);
        console.log('Logging workouts')
        console.log(workouts);
    }

    useEffect(() => {

        fetchWorkouts();
    }, []);

    
    return (
        <div className="home">            
            <div className="workouts">
                {
                    workouts && workouts.map(
                        (workout) => {
                            return <WorkoutDetails key={workout._id} workout={workout}/>
                        }
                    )
                }
            </div>

            <WorkoutForm onSubmitAdder={fetchWorkouts}/>

        </div>
    );
}

export default Home;