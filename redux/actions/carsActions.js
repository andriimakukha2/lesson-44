// redux/actions/carsActions.js
export const setCars = (cars) => ({
    type: 'SET_CARS',
    payload: cars,
});

export const selectCar = (car) => ({
    type: 'SELECT_CAR',
    payload: car,
});
