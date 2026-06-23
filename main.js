import Routine from "./scripts/Routine.js"
import Workout from "./scripts/Workout.js"

const workouts = [
    {
        name: 'Inclined Dumbell Press',
        stats: ['reps', 'weight']
    },
    {
        name: 'Lat Pulldown',
        stats: ['reps', 'weight']
    },
    {
        name: 'Inclined Dumbell Press',
        stats: ['reps', 'weight']
    },
]

const userData = {
    name: 'John Darel',
    age: '24',
}

const init = () => {
    const newRoutine = confirm('Create New Routine?')

    if(newRoutine) {
        console.log('yes')
    } else {
        console.log('no')
    }
}

init()