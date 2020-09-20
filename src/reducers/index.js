const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
      break;
    case 'DELETE_ENTRY':
      return {
        ...state,
        entries: state.entries.filter((items) => items.id !== action.payload),
      };
      break;
    case 'EDIT_ENTRY':
      let modifiedEntries = state.entries.map((item) => {
        if (item.id === action.payload.id) {
          item.type = action.payload.type || item.type;
          item.year = action.payload.year || item.year;
          item.description = action.payload.description || item.description;
          console.log(item.description);
          return item;
        } else {
          return item;
        }
      });
      console.log(modifiedEntries);
      return {
        ...state,
        entries: modifiedEntries,
      };
      break;
    default:
      return state;
      break;
  }
};

export default reducer;
