# Elite Coder Quiz Platform

A quiz platform with **3 dark modes themed after hacker movies** because apparently, one dark mode wasn't edgy enough.

Built with vanilla JavaScript because I refuse to install 500 npm packages just to display some questions. 🎮

**Live Demo:** https://abhiraj7575.github.io/Quiz-Platform/

*Warning: Quiz only works in dark mode. Yes, it's intentional. No, I won't explain why.* 😎

---

## What Is This?

A coding quiz platform where you can test your knowledge while pretending you're hacking into the mainframe. Features include:

- **10 questions per difficulty** - Easy, Medium, Hard (or as I call them: "Doable", "Googling Required", and "Pure Suffering")
- **4 different themes** - One light mode nobody uses, and three dark modes everyone fights over
- **Keyboard shortcuts** - Because clicking is for peasants
- **Mobile swipe gestures** - Swipe through questions like you swipe through job rejections
- **Performance analytics** - Finally, metrics that don't judge you (much)

---

## The Themes (AKA The Real Features)

### Light Mode - "The One Nobody Uses"
Gradient backgrounds, soft shadows, professional design. Basically exists so I can say "yes, it has light mode" in interviews. 

*Last used: Never*

### Dark Mode - Easy (Matrix Terminal) 🟢
Matrix green on black. Scanline effects. Terminal vibes. You'll feel like Neo even though you're just answering "What is a variable?"

*Best for: Feeling cool while getting easy questions wrong*

### Dark Mode - Medium (Cyberpunk Hacker) 🔴
Hot pink + cyan + yellow because subtlety is overrated. Animated grid background. Rainbow gradient text. Your eyes will hurt, but you'll look like a pro.

*Best for: Pretending you know what you're doing*

### Dark Mode - Hard (Elite Terminal) 💎
Cyan, magenta, yellow, green - all the colors. Scrolling grid. Rainbow progress bar with particles. Maximum hacker aesthetic achieved.

*Best for: Compensating for actually struggling with hard questions*

---

## Features That Actually Matter

✓ **Timer** - Tracks how long you procrastinate before guessing  
✓ **Progress bar** - Visual reminder of your doom  
✓ **Keyboard navigation** - Arrow keys to move, 1-4 to answer, Enter to submit  
✓ **Mobile gestures** - Swipe left/right like you're on a dating app  
✓ **Performance badges** - Get called "Beginner" by your own quiz app  
✓ **Zero dependencies** - Just HTML, CSS, JS. No `node_modules` the size of Mars  

---

## Quick Start

```bash
# Clone it
git clone https://github.com/yourusername/elite-coder-quiz.git

# Open it
open index.html

# That's literally it
```

No `npm install`. No `yarn`. No webpack. No trauma. Just double-click the HTML file like it's 2005. 🎉

---

## How To Use

1. Pick a theme (we both know you're choosing dark mode)
2. Select difficulty (start with Easy, lie about choosing Hard)
3. Answer questions (or frantically Google them)
4. Navigate with arrow keys or swipe (feel productive)
5. Submit and pretend the results don't hurt your feelings
6. Retry with a different difficulty (lower, obviously)

---

## Keyboard Shortcuts (For The Cool Kids)

- `←` `→` - Move between questions
- `1` `2` `3` `4` - Select answers (faster than clicking)
- `Enter` - Submit your shame
- `ESC` - Doesn't work, you're stuck here now

---

## Customization

### Add Your Own Questions

Edit `script.js` and find the `quizData` object:

```javascript
const quizData = {
    easy: [
        {
            question: "Your question?",
            options: ["A", "B", "C", "D"],
            correct: 0  // Index (0-3)
        }
    ]
};
```

Make them as easy or soul-crushing as you want. I won't judge. The analytics will though.

### Change Colors

All theme colors are CSS variables in `style.css`. Go wild. Make it uglier. I dare you.

---

## Browser Support

Works on:
- Chrome ✓
- Firefox ✓  
- Safari ✓
- Edge ✓
- Your phone ✓
- Internet Explorer ✗ (let it go)

If it doesn't work on your browser, your browser is the problem, not my code. 😤

---

## Performance

- **60fps animations** - Smoother than my career trajectory
- **Optimized particles** - Because I actually care about performance
- **Hardware-accelerated CSS** - Let your GPU do the work
- **No frameworks** - Fast load times, zero bloat

The animations are smooth. The questions are hard. Perfectly balanced, as all things should be.

---

## Known Issues

- Light mode exists but nobody asked for it
- Some animations might stutter on ancient devices (upgrade your phone)
- Hard mode is actually hard (not a bug, a feature)
- You can't skip questions (yes, I could add this. No, I won't.)
- Success makes you overconfident, failure makes you question everything

---

## Future Plans (Maybe)

Things I might add if I ever stop watching Netflix:

- [ ] More question categories
- [ ] User authentication (so you can save your shame)
- [ ] Leaderboard (public shame)
- [ ] Social sharing (spread the suffering)
- [ ] Sound effects (annoying beeps for every wrong answer)
- [ ] A "Give Up" button (for honesty)

Keyword: **MIGHT**

---

## Contributing

Found a bug? Have a suggestion? Feel free to open an issue.

Want to add features? Cool. Just don't add React, Vue, or any framework. This is a framework-free zone. We're keeping it pure. We're keeping it simple. We're keeping it vanilla.

---

## License

MIT - Do whatever you want. Copy it. Sell it. Use it to impress recruiters. Just maybe credit me when it gets you hired.

---

## Acknowledgments

**Inspiration:** Every hacker movie ever made  
**Built with:** Caffeine, stubbornness, and CSS animations  
**Tested on:** People who think they're better at coding than they are  
**Designed for:** Anyone who's tired of boring quiz apps  

Special thanks to:
- The Matrix for the aesthetic
- Cyberpunk 2077 for the color scheme (the game might be buggy but the vibes are immaculate)
- My impostor syndrome for keeping me humble

---

## Final Note

This quiz won't make you a better coder. It won't get you a job. It won't solve your problems.

But it looks cool. And sometimes, that's enough.

Now go take the quiz and prove you're as good as you claim to be on LinkedIn. 💀

---

**Made with sarcasm and HTML** by Abhiraj Dixit  
**Last Updated:** December 2025  
**Bugs:** Probably  
**Regrets:** None
