import axios from 'axios';
// This is required
import regeneratorRuntime from "regenerator-runtime";
import { getSt } from './authService'

/**
 * 
 * @param {string} apikey apiKey from UMLS
 * @param {string} url url in the form /search/current
 * @param {object} params in the form {string: 'psoriasis vulgaris'}
 */
export const getService = async (apikey, url, params={}) => {
  const ticket = await getSt(apikey)
  const fullUrl = "https://uts-ws.nlm.nih.gov/rest" + url
  params.ticket = ticket
  const config = {
    method: 'get',
    url: fullUrl,
    params: params
  }
  /*
  Only the first option works with UMLS. (Why?)
  As a result, the mockaxios in the mock tests is different.
  @See example in mock.generalService.spec.js
  */
  const response = await axios(config)
  // const response = await axios.get(fullUrl, params, config)
  return(response.data)
}
