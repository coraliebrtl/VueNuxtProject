export const state = () => ({
    data: [
      {
        id: 0,
        lat: '54',
        long: '89',
        name: 'Manhattan',
        description: 'big city',
      },
      {
        id: 1,
        lat: '56',
        long: '95',
        name: 'Los Angeles',
        description: 'another big city',
      },
    ],
  });
  
  export const getters = {
    getCities: (state) => {
      return state.data;
    },
  };