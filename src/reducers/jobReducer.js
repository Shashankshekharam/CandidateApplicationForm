const initialState = {
    jobs: [], // Initialize jobs array as an empty array
    loading: false,
    error: null,
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_JOBS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_JOBS_SUCCESS':
        return {
          ...state,
          jobs: action.payload, // Update jobs state with fetched data
          loading: false,
        };
      case 'FETCH_JOBS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  