---
title: Stipple Effect - FAQ
---

# Frequently Asked Questions

## Why *Stipple Effect*?

### **Q: Why would I use _Stipple Effect_ over more established and mature software like _Aseprite_ or a great free and open-source alternative like _Pixelorama_?**

A: There is no shortage of good programs available for making pixel art, and there is no wrong choice! However, here are is an argument for why *Stipple Effect* may be the best choice for your needs.

*Stipple Effect* is perhaps most distinguished from other pixel editors by the range of **applications of its scripting system**. If you are a game developer making a 2D pixel art game with a lot of animated assets of the same form (physical shape, dimensions, pose, etc.), *Stipple Effect* could make your life a lot easier.

Imagine you are making a game with tons of NPCs, each of which has to have idle animations, walking animations, and a certain number of action animations. Or a game with significant character customization in the form of clothing and vanity items. At present, you would probably have to individually animate every NPC and every clothing item for each unique animation frame. Using *Stipple Effect*, however, you can spend a bit of time configuring a lookup relationship between a single texture and an animated UV lookup asset, and map the texture to the animation via a preview script. In the long run, this will save **hundreds of hours** of tedious work, as you will only have to draw a single texture for each item/NPC you are adding to your game.

<div class="media-container">
    <img class="media" src="{{ site.baseurl }}/docs/assets/graphics/complex-preview.gif" alt="Preview script" loading="lazy">
    <div class="caption">
        An example of a script that defines a UV mapping. <a target="_blank" href="https://www.youtube.com/watch?v=Bj1foXYcHl4">This video</a> provides a more detailed oversight.
    </div>
</div>

Additionally, *Stipple Effect* is still a very young program. Programs like *Aseprite* and *Pixelorama* have been in development for years, and will probably receive major updates at a slower rate than *Stipple Effect* in the foreseeable future.

### **Q: Why does _Stipple Effect_ use its own scripting language? I don't want to learn a whole programming language for a single program.**

A: These were the priorities for scripts when it came time to implement scripting in *Stipple Effect*:

* quick, succinct and easy to write
* expressive and easy to read
* familiar [C-style syntax![](./assets/img/external.png)](https://en.wikipedia.org/wiki/List_of_C-family_programming_languages)
* no [boilerplate![](./assets/img/external.png)](https://en.wikipedia.org/wiki/Boilerplate_code) or front matter

[*DeltaScript*![](./assets/img/external.png)](https://github.com/jbunke/deltascript) was designed with these goals in mind. It will quickly feel familiar to anyone with programming experience, especially in languages like C, C++, C#, Java and JavaScript.

```js
// This is a valid Stipple Effect script that pads the canvases of all 
//  of the opened projects in the program by 10 pixels at each border:
() {
    for (p in $SE.get_projects())
        p.pad(10, 10, 10, 10);
}
```

```js
// This preview script tiles the input contents in a 3x3 configuration
(image input -> image) {
    ~ int w = input.w;
    ~ int h = input.h;
    ~ int DIM = 3;

    image tiled = new_image_of(w * DIM, h * DIM);

    for (int x = 0; x < DIM; x++)
        for (int y = 0; y < DIM; y++)
            tiled.draw(input, x * w, y * h);
    
    return tiled;
} 
```

*Developer's note:*

The downside of implementing a domain-specific language is a lack of tool support. As of now, I have released [a VS Code extension![](./assets/img/external.png)](https://marketplace.visualstudio.com/items?itemName=jordanbunke.deltascript-for-stipple-effect) that provides code highlighting for the *Stipple Effect* extension dialect of DeltaScript. I plan to include command-line tools for running and debugging DeltaScript code in future *Stipple Effect* updates.

### **Q: I just want to make pixel art. I don't really care about scripting / don't have any programming experience. Is this program for me?**

A: Yes! *Stipple Effect* is designed to support you however you want to work. You can get plenty of use out of the program without ever touching the scripting system. *Stipple Effect* has tons of non-technical, pure pixel art and animation features for you to experiment with.

---

## Updates and Issues

### **Q: How do I get updates?**

A: *Stipple Effect* is not updated automatically, so you will have to look out for updates and download them when they are released. The best way to do this is to follow the project or the developer somewhere:

* [Watch or give *Stipple Effect* a star on GitHub![](./assets/img/external.png)](https://github.com/stipple-effect/stipple-effect)
* [Itch.io - Add *Stipple Effect* to a collection or follow the developer![](./assets/img/external.png)](https://flinkerflitzer.itch.io/stipple-effect)
* [Follow the developer on X![](./assets/img/external.png)](https://x.com/flinkerflitzer)

It is important to remember whether you bought *Stipple Effect* via Itch.io or Humble Bundle. When an update is released, **you will have to download the latest version on the same marketplace that you initially purchased the program**. If you cannot remember where you bought *Stipple Effect*, please contact the developer.

### **Q: What can I expect from future updates?**

A: A roadmap of tentative features for future updates is maintained [here![](./assets/img/external.png)](https://github.com/stipple-effect/stipple-effect/blob/master/roadmap.md).

### **Q: How can I report a bug?**

A: You can report bugs [here![](./assets/img/external.png)](https://github.com/stipple-effect/stipple-effect/issues/new/choose). Before filing a bug report, please read through [the existing reports![](./assets/img/external.png)](https://github.com/stipple-effect/stipple-effect/issues?q=is%3Aissue+label%3Abug+is%3Aopen) to see whether the bug has already been reported by someone else.

### **Q: How can I request a feature?**

A: You can request a feature [here![](./assets/img/external.png)](https://github.com/stipple-effect/stipple-effect/issues/new/choose).

### **Q: Why is the file size for the Windows Installer so much bigger than the Cross-Platform Build?**

A: The Windows Installer packages not only the program, but also the Java Development Kit, and installs both to the same location on your machine. This way, no separate Java installation is required.
