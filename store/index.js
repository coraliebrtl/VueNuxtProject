/* // store/index.js
export const state = () => ({
  addresses: [],
});

export const mutations = {
  setAddresses(state, addresses) {
    state.addresses = addresses;
  },
};

export const actions = {
  async fetchAddresses({ commit }) {
    try {
      const response = await axios.get(
        'https://api-adresse.data.gouv.fr/search/?q=20%20avenue%20de%20S%C3%A9gur%2C%20Paris&type=housenumber&autocomplete=1'
      );

      commit('setAddresses', response.data.features);
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  },
}; */

export const state = () => ({
  storedData: null
});

export const mutations = {
  setStoredData(state, data) {
    state.storedData = data;
  }
};
