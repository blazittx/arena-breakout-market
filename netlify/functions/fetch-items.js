// netlify/functions/fetch-items.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const API_URL = process.env.ORACLE_API_URL;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch items' }),
    };
  }
};
