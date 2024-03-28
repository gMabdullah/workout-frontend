/* eslint-disable @typescript-eslint/naming-convention */
export const deleteData = (data: any, obj: any) => {
  const _data = data.filter((item: any) => item.id !== obj.id);
  return _data;
};

export const mergeDataByDate = (data: any) => {
  const groupedData: any = {};

  data.forEach((entry: any) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const {
      date,
      user_id,
      name,
      time,
      reps,
      distance_in_km,
      minutes_spent,
      id,
      points,
      completed,
      exercise_id,
      is_updated,
    } = entry;
    const dateKey = `${date.slice(0, 10)}_${user_id}`; // Unique key for each combination of date and user ID

    if (!groupedData[dateKey]) {
      groupedData[dateKey] = {
        date,
        userId: user_id,
        exercises: [],
      };
    }

    // Add exercise to the exercises array
    const exercise: any = {};
    exercise.name = name;
    exercise[name] = name;
    exercise.time = time;
    exercise.points = points;
    exercise.complete = completed;
    exercise.id = id;
    exercise.exercise_id = exercise_id;
    exercise.is_updated = is_updated;
    if (reps !== null) {
      exercise.reps = reps;
    }
    if (distance_in_km !== null) {
      exercise.distance_in_km = distance_in_km;
    }
    if (minutes_spent !== null) {
      exercise.minutes_spent = minutes_spent;
    }

    groupedData[dateKey].exercises.push(exercise);
  });

  // Convert groupedData object into an array of objects
  const mergedDataArray = Object.values(groupedData);
  const arr: any = mergedDataArray.map((item: any) => {
    const uniqueData = item.exercises.reduce(
      (accumulator: any, current: any) => {
        const existingItem = accumulator.find(
          (item: any) => item.name === current.name
        );
        if (!existingItem) {
          accumulator.push(current);
        } else {
          // If the item already exists, aggregate the reps, minutes_spent, or distance_in_km
          existingItem.reps = (existingItem.reps || 0) + (current.reps || 0);
          existingItem.minutes_spent =
            (existingItem.minutes_spent || 0) + (current.minutes_spent || 0);
          existingItem.distance_in_km =
            (existingItem.distance_in_km || 0) + (current.distance_in_km || 0);
        }
        return accumulator;
      },
      []
    );

    return {
      ...item,
      exercises: uniqueData,
    };
  });

  return arr;
};
