const express = require('express');
const nunjucks = require('nunjucks');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Home Page
app.get('/', (req, res) => {
  res.render('pages/index.njk');
});

// About Page
app.get('/about', (req, res) => {
  res.render('pages/about.njk');
});

// Privacy Policy Page
app.get('/privacy', (req, res) => {
  res.render('pages/privacy.njk');
});
// Terms of Service Page
app.get('/terms', (req, res) => {
  res.render('pages/terms.njk');
});
// Contact Page
app.get('/contact', (req, res) => {
  res.render('pages/contact.njk');
}); 

<<<<<<< HEAD
// about developer Page
app.get('/aboutdeveloper', (req, res) => {
  res.render('pages/aboutdeveloper.njk');
});

=======
>>>>>>> 7ce157e5de7cac53160a1639a955156d1c1bc39e
// Download Handler
app.post('/download', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.render('pages/index.njk', { error: 'Please enter a valid TikTok URL.' });
  }

  try {
    const response = await axios.get(`https://tikwm.com/api/`, {
      params: { url }
    });

    if (response.data.code !== 0) {
      throw new Error(response.data.msg || 'Failed to fetch video');
    }

    const video = response.data.data;
    res.render('pages/result.njk', { video });
  } catch (err) {
    res.render('pages/index.njk', { error: 'Error fetching video. Please try again.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
