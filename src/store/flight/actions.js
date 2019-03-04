import { find, get } from 'lodash/fp'
import axios from 'axios'

const { API } = process.env

const getUrl = (searchTerm) =>
    `${API}/flights/search/by-flight-code?flightCode=${searchTerm}`

export const search = async({ commit }, data) => {

    const { searchTerm } = data
    const headers = { "Access-Control-Allow-Origin": "*" }
    const response = await axios.get(getUrl(searchTerm), { headers })

    const flights = get('data._embedded.flights', response)
    commit('flights', flights)
}

export const load = ({ state, commit }, id) => {
    const flight = find({ id: parseInt(id) }, state.flights)
    commit('flight', flight)
}