

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TNDB_KEY
  }
};

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY

export const HUGGING_API_KEY = process.env.REACT_APP_HUGGING_API_KEY