export default store => next => action => {
  if (!(action.payload instanceof Promise)) {
    return next(action);
  }

  action.payload
    .then(response => {
      const newAction = {
        ...action,
        payload: response
      };

      store.dispatch(newAction);
    });
};