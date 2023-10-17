export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFetchContactsFulfilled = (state, { payload }) => {
  state.items = payload;
};

export const handleAddContactsFulfilled = (state, { payload }) => {
  state.items.unshift(payload);
};

export const handleDeleteContactFulfilled = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};
