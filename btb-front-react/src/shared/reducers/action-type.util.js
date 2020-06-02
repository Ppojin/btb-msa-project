export const REQUEST = (actionType) => {
    return `${actionType}_PENDING`;
};
export const SUCCESS = (actionType) => {
    return `${actionType}_FULFILLED`;
};
export const FAILURE = (actionType) => {
    return `${actionType}_REJECTED`;
};