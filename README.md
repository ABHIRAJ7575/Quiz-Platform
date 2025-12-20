# 🎮 Elite Coder Quiz Platform

A stunning, fully-featured quiz platform with **3 unique coder-themed dark modes**, mobile swipe gestures, keyboard navigation, and smooth animations. Built with pure vanilla JavaScript, HTML, and CSS - no frameworks required!

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

##  Demo

**Live Preview:** [View Demo](#) _(https://abhiraj7575.github.io/Quiz-Platform/)_

## ✨ Features

### 🎨 4 Stunning Themes

#### 🌟 Light Mode - Modern & Elegant
- Animated gradient background with pulsing glow
- Soft shadows and professional design
- Gradient buttons with inner glow effects
- Perfect for daytime coding sessions

#### 🟢 Dark Mode - Easy (Matrix Terminal)
- Pure Matrix green (#00ff41) on black
- Scanline animation effects
- Terminal grid background
- `> ` prefix on hover
- **Feel like you're in The Matrix!**

#### 🔴 Dark Mode - Medium (Cyberpunk Hacker)
- Hot pink + cyan + yellow color scheme
- Animated grid background
- `//` comment prefix on hover
- Rainbow gradient text animation
- **Pure hacker aesthetic!**

#### 💎 Dark Mode - Hard (Elite Terminal)
- Cyan + Magenta + Yellow + Green
- Scrolling grid background
- `$ ` terminal prefix on hover
- Rainbow progress bar with multi-color particles
- **Elite hacker vibes!**

### 🎯 Core Features

- ✅ **10 Questions per Difficulty** - Easy, Medium, and Hard levels
- ⏱️ **Live Timer** - Track your quiz completion time
- 📊 **Performance Analytics** - Detailed stats with accuracy percentage
- 🏆 **Performance Badges** - Beginner, Intermediate, or Advanced
- 📈 **Progress Bar** - Visual feedback with animated effects
- 🎨 **Smooth Animations** - 60fps performance across all themes
- 💾 **Pure Vanilla JS** - No dependencies, no frameworks
- 📱 **Fully Responsive** - Works perfectly on mobile and desktop

### ⌨️ Keyboard Navigation (Desktop)

- `←` `→` - Navigate between questions
- `1` `2` `3` `4` - Select answer options
- `Enter` - Submit quiz or go to next question
- Visual keyboard hints appear automatically

### 📱 Mobile Gestures

- **Swipe Left** - Next question
- **Swipe Right** - Previous question
- **Tap** - Select options
- Touch feedback animations
- Swipe indicators for guidance

### 🎭 Special Effects

- **Glowing Buttons** - Radial gradient glow inside buttons on hover
- **Animated Backgrounds** - Each theme has unique moving/pulsing backgrounds
- **Particle System** - Floating particles in Hard mode
- **Scanline Effects** - Matrix-style animations in Easy mode
- **Grid Animations** - Moving grids in Medium and Hard modes
- **Rainbow Text** - Gradient text animations in all dark modes

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/elite-coder-quiz.git
   cd elite-coder-quiz
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

That's it! No build process, no dependencies to install.

## 📁 Project Structure

```
elite-coder-quiz/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Quiz logic and interactions
└── README.md           # This file
```

## 🎮 How to Use

1. **Select Theme** - Toggle between Light and Dark mode
2. **Choose Difficulty** - Easy, Medium, or Hard
3. **Answer Questions** - Use mouse, keyboard, or swipe gestures
4. **Navigate** - Move between questions freely
5. **Submit** - Complete the quiz and view your results
6. **Analyze** - Check your performance analytics
7. **Retry** - Take another quiz with different difficulty

## 🎨 Customization

### Adding Your Own Questions

Edit the `quizData` object in `script.js`:

```javascript
const quizData = {
    easy: [
        {
            question: "Your question here?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correct: 0  // Index of correct answer (0-3)
        },
        // Add more questions...
    ],
    medium: [ /* ... */ ],
    hard: [ /* ... */ ]
};
```

### Customizing Colors

Modify CSS variables in `style.css`:

```css
/* For Easy Mode */
body.dark-mode.easy-mode {
    --matrix-green: #00ff41;  /* Change this */
}

/* For Medium Mode */
body.dark-mode.medium-mode {
    --cyber-pink: #ff2a6d;    /* Change this */
    --cyber-cyan: #05d9e8;    /* Change this */
}

/* For Hard Mode */
body.dark-mode.hard-mode {
    --cyber-cyan: #00ffff;    /* Change this */
    --cyber-magenta: #ff00ff; /* Change this */
}
```

## 🌟 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly button sizes
- Swipe gesture support
- Orientation change handling
- Optimized animations for mobile performance

## ♿ Accessibility

- Keyboard navigation support
- Focus indicators on interactive elements
- High contrast color schemes
- Semantic HTML structure
- ARIA-friendly design

## 🎯 Performance

- **60fps animations** - Smooth transitions and effects
- **Optimized particles** - Efficient canvas rendering
- **CSS animations** - Hardware-accelerated transforms
- **No dependencies** - Fast load times
- **Minimal JavaScript** - Clean, efficient code

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Advanced animations and effects
- **Vanilla JavaScript** - No frameworks or libraries
- **Canvas API** - Particle system rendering
- **Touch Events API** - Mobile gesture support
- **Keyboard Events API** - Desktop navigation

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Abhiraj Dixit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Future Enhancements

- [ ] Add more question categories
- [ ] Implement user authentication
- [ ] Save quiz history
- [ ] Leaderboard system
- [ ] Social sharing features
- [ ] Custom quiz creation
- [ ] Multiplayer mode
- [ ] Sound effects and music

## 🙏 Acknowledgments

- Inspired by Matrix, cyberpunk aesthetics, and terminal interfaces
- Built with passion for clean code and great UX
- Thanks to the open-source community


<div align="center">

### ⭐ Star this repo if you like it!

Made with ❤️ and lots of ☕ by Abhiraj Dixit

</div>
