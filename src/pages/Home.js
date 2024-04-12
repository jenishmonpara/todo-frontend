import { useEffect, useState } from "react";
import axios from 'axios'
import WorkoutDetails from "../components/WorkoutDetails";
const Home = () => {

    const [workouts,setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await axios('http://localhost:4000/api/workouts/');
            console.log('DEBUG');            
            console.log(response);
            const json = response.data;
            
            setWorkouts(json);
            console.log('Loggin workouts')
            console.log(workouts);
        }

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

        </div>
    );
}

export default Home;