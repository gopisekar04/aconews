const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

require('dotenv').config()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send("home")
    
})

app.get('/api/top-headlines', async (req, res) => {
    const { category = 'general', lang = 'en', country = 'us', max = 10,page = 1 } = req.query;
  
    try {
      const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
        params: {
          category,
          lang,
          country,
          max,
          page,
          apikey: process.env.GNEWS_API_KEY,
        },
      });
  
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching top headlines:', error);
      res.status(500).json({ message: 'Error fetching top headlines' });
    }
  });

  app.get('/api/search', async (req, res) => {
    const { q, lang = 'en', country = 'us', max = 10, page = 1 } = req.query;
  
    if (!q) {
      return res.status(400).json({ message: 'Search query is required.' });
    }
  
    try {
      const response = await axios.get('https://gnews.io/api/v4/search', {
        params: {
          q, 
          lang,
          country,
          max,
          page,
          apikey: process.env.GNEWS_API_KEY,
        },
      });
  
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      res.status(500).json({ message: 'Error fetching search results' });
    }
  });
  

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000/");
    
})
