// export const createRoutine = (name, desc) => {
//     return new Routine(name, desc)
// }

class Routine {
    constructor(name, description) {
        this.name = name
        this.description = description
        this.workouts = []
    }

    addWorkout(workout) {
        this.workouts.push(workout)
    }
}

export default Routine