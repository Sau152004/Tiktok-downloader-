<<<<<<< HEAD
# Tiktok-downloader-
=======
# Tiktok-downloader-
# 🎵 TikTok Downloader

A modern, fast, and user-friendly web application for downloading TikTok videos without watermarks. Built with Node.js, Express, Nunjucks, and styled with Tailwind CSS.

![TikTok Downloader Preview](https://via.placeholder.com/800x400/1e293b/ffffff?text=TikTok+Downloader+Preview)

## ✨ Features

- **🚀 Fast Downloads** - Lightning-fast video processing and delivery
- **🎨 Modern UI** - Beautiful glassmorphism design with smooth animations
- **📱 Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **🎯 No Watermark** - Clean video downloads without TikTok watermarks
- **🔒 Privacy First** - No data storage, temporary processing only
- **💯 Free Forever** - Completely free with no hidden costs
- **🌐 Cross-Platform** - Works on all modern browsers
- **⚡ HD Quality** - Maintains original video quality

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: Nunjucks
- **Styling**: Tailwind CSS
- **Frontend**: Vanilla JavaScript with modern ES6+
- **Icons**: Heroicons (via Tailwind)
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git** (for cloning the repository)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/tiktok-downloader.git
cd tiktok-downloader
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# TikTok API Configuration (if using external service)
TIKTOK_API_KEY=your_api_key_here
TIKTOK_API_URL=https://api.tiktokservice.com

# Security
SESSION_SECRET=your_super_secret_session_key

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# File Storage (temporary)
TEMP_STORAGE_PATH=./temp
MAX_FILE_SIZE=50MB
FILE_CLEANUP_INTERVAL=3600000
```

### 4. Start Development Server

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`

## 📁 Project Structure

```
tiktok-downloader/
├── 📁 public/                 # Static assets
│   ├── 📁 css/               # Custom CSS files
│   ├── 📁 js/                # Client-side JavaScript
│   └── 📁 images/            # Images and icons
├── 📁 views/                 # Nunjucks templates
│   ├── 📁 layouts/           # Layout templates
│   │   └── base.njk          # Main layout
│   ├── index.njk             # Homepage
│   ├── preview.njk           # Video preview page
│   ├── about.njk             # About us page
│   ├── contact.njk           # Contact page
│   ├── privacy-policy.njk    # Privacy policy
│   └── terms.njk             # Terms of service
├── 📁 routes/                # Express route handlers
│   ├── index.js              # Main routes
│   ├── download.js           # Download functionality
│   └── pages.js              # Static pages
├── 📁 middleware/            # Custom middleware
│   ├── rateLimiter.js        # Rate limiting
│   ├── validator.js          # Input validation
│   └── errorHandler.js       # Error handling
├── 📁 services/              # Business logic
│   ├── tiktokService.js      # TikTok API integration
│   ├── videoProcessor.js     # Video processing
│   └── fileManager.js        # File management
├── 📁 utils/                 # Utility functions
│   ├── logger.js             # Logging utility
│   ├── helpers.js            # Helper functions
│   └── constants.js          # Application constants
├── 📁 temp/                  # Temporary file storage
├── app.js                    # Express application setup
├── server.js                 # Server entry point
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── .env.example              # Environment variables example
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

## 🔧 Configuration

### Tailwind CSS Configuration

The project uses a custom Tailwind configuration with extended colors and animations:

```javascript
// tailwind.config.js
module.exports = {
  content: ['./views/**/*.njk', './public/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: { /* Custom primary colors */ },
        dark: { /* Custom dark theme colors */ }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite'
      }
    }
  }
}
```

### Nunjucks Configuration

Nunjucks is configured with custom filters and global variables:

```javascript
// app.js
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: process.env.NODE_ENV === 'development'
});
```

## 🎯 Available Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "npm run build:css",
    "build:css": "tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint . --ext .js,.njk",
    "lint:fix": "eslint . --ext .js,.njk --fix",
    "format": "prettier --write .",
    "clean": "rimraf temp/* logs/*"
  }
}
```

## 🔌 API Endpoints

### Core Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Homepage with download form |
| `POST` | `/download` | Process TikTok URL and return video |
| `GET` | `/preview/:id` | Video preview page |
| `GET` | `/about` | About us page |
| `GET` | `/contact` | Contact page |
| `POST` | `/contact` | Handle contact form submission |
| `GET` | `/privacy-policy` | Privacy policy page |
| `GET` | `/terms` | Terms of service page |

### API Response Format

```json
{
  "success": true,
  "data": {
    "videoId": "unique_video_id",
    "title": "Video Title",
    "duration": 30,
    "quality": "HD",
    "downloadUrls": {
      "noWatermark": "https://cdn.example.com/video_clean.mp4",
      "withWatermark": "https://cdn.example.com/video_original.mp4"
    },
    "thumbnail": "https://cdn.example.com/thumbnail.jpg",
    "author": {
      "username": "@username",
      "displayName": "Display Name"
    }
  },
  "message": "Video processed successfully"
}
```

## 🛡️ Security Features

- **Rate Limiting** - Prevents abuse with configurable limits
- **Input Validation** - Sanitizes and validates all user inputs
- **CORS Protection** - Configured for secure cross-origin requests
- **Helmet.js** - Security headers for protection
- **XSS Protection** - Content Security Policy implementation
- **File Upload Limits** - Prevents large file attacks
- **Temporary Storage** - Automatic cleanup of processed files

## 🚀 Deployment

### Using PM2 (Recommended)

```bash
# Install PM2 globally
npm install -g pm2

# Start application with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 startup script
pm2 startup
```

### Using Docker

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build and run Docker container
docker build -t tiktok-downloader .
docker run -p 3000:3000 -d tiktok-downloader
```

### Environment Variables for Production

```env
NODE_ENV=production
PORT=3000
SESSION_SECRET=your_super_secure_secret_key
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=50
LOG_LEVEL=info
```

## 🔍 Monitoring and Logging

The application includes comprehensive logging:

```javascript
// Example log output
[2025-01-01 12:00:00] INFO: Server started on port 3000
[2025-01-01 12:00:15] INFO: Video download requested - URL: https://tiktok.com/video/123
[2025-01-01 12:00:16] SUCCESS: Video processed successfully - Duration: 1.2s
[2025-01-01 12:00:20] ERROR: Invalid TikTok URL provided
```

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Use conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

- **📧 Email**: support@tiktokdownloader.com
- **🐛 Bug Reports**: [GitHub Issues](https://github.com/yourusername/tiktok-downloader/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/yourusername/tiktok-downloader/discussions)
- **📖 Documentation**: [Wiki](https://github.com/yourusername/tiktok-downloader/wiki)

## ⚠️ Legal Notice

This tool is for educational and personal use only. Users are responsible for complying with TikTok's Terms of Service and applicable copyright laws. Please respect content creators' rights and always give proper attribution when sharing downloaded content.

## 🙏 Acknowledgments

- **TikTok** - For providing the platform and content
- **Tailwind CSS** - For the amazing utility-first CSS framework
- **Nunjucks** - For the powerful templating engine
- **Express.js** - For the robust web application framework
- **Contributors** - Thank you to all who have contributed to this project

## 📊 Project Status

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)
![Node Version](https://img.shields.io/badge/node-%3E%3D16.0.0-green)

---

<div align="center">
  <p>Made with ❤️ by Saurabh Yadav</p>
  <p>
    <a href="#tiktok-downloader">Back to Top</a> •
    <a href="/about">About</a> •
    <a href="/contact">Contact</a> •
    <a href="/privacy-policy">Privacy</a> •
    <a href="/terms">Terms</a>
  </p>
</div>
>>>>>>> 76d53551c2ffaaca82f2a6b7e48c65be3afd3a10
