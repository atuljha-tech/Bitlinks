# 🔗 BitLinks - Smart URL Shortener

![BitLinks Screenshot](/assets/ss1.png)

A modern, fast, and secure URL shortener built with **Next.js 14**, featuring a beautiful gradient design and **zero tracking** policy.

## ✨ Features

- 🚀 **Lightning Fast** - Instant URL shortening and redirects
- 🔒 **Privacy First** - No tracking, no data collection
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📱 **Responsive** - Works perfectly on all devices
- ⚡ **No Login Required** - Start shortening URLs immediately
- 🛡️ **Secure** - Built with latest web standards
- 📊 **Analytics Ready** - Easy to extend with analytics

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Ready)
- **Font**: Poppins
- **Icons**: Heroicons

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (Local or Atlas)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/bitlinks.git
cd bitlinks
Install dependencies

bash
npm install
Set up environment variables

bash
cp .env.example .env.local
Edit .env.local:

env
MONGODB_URI=mongodb://localhost:27017
NEXT_PUBLIC_HOST=http://localhost:3000
Run the development server

bash
npm run dev
Open your browser
Navigate to http://localhost:3000
