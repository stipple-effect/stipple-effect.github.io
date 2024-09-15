---
title: Stipple Effect - scriptable pixel art editor
---
<div class="banner">
    <img src="https://raw.githubusercontent.com/jbunke/se-docs/master/assets/graphics/logo-anim.gif">
</div>

<div class="media-container">
    <iframe class="media" width="800" height="450" src="https://www.youtube.com/embed/Bj1foXYcHl4?si=QIQK4hOoGd34lcb3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="feature-section">
    <div class="feature-category">Scripting</div>
    <div class="features">
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Automate</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption"><a href="{{ site.baseurl }}/docs/automation-scripts">Automate</a> program actions for instant execution of batch operations</div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Easy to read and write</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Short and simple scripts with no boilerplate code</div>
            </div>
        </div>
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Custom previews</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Write scripts to transform the contents the project canvas to generate <a href="{{ site.baseurl }}/docs/preview-scripts">custom previews</a></div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Simulate post-processing effects</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Simulate lighting, texture UV mapping, or any other post-processing your asset may undergo in a game engine with Stipple Effect's <a href="{{ site.baseurl }}/api/">API</a></div>
            </div>
        </div>
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Updated dynamically in real time</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Scripted previews are recomputed instantly whenever the project is edited</div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Turn previews into projects</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Reimport the output of a scripted preview as into Stipple Effect as its own project - optionally with individual layers preserved</div>
            </div>
        </div>
        <!-- TODO -->
    </div>
    <div class="feature-category">Animation</div>
    <div class="features">
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Onion skins</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">
                    <div>Animation aids that visualize preceding and following frames</div>
                    <br>
                    <div>Configure the onion skin settings for preceding and following skins independently</div>
                </div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Split & stitch</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">
                    <div>Use the <a href="{{ site.baseurl }}/docs/sizing.html#split-sprite-sheet-into-frames">split frames</a> feature to instantly slice a sprite sheet into an animation</div>
                    <br>
                    <div><a href="{{ site.baseurl }}/docs/sizing.html#stitch-frames-into-sprite-sheet">"Stitch"</a> frames together to turn an animation into a sprite sheet</div>
                </div>
            </div>
        </div>
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Edit during playback</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">All tools can be used while the project animation is being played</div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Linked-cel layers</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Use linked-cel layers for static content that does not vary from frame to frame</div>
            </div>
        </div>
    </div>
    <div class="feature-category">Colors & Painting</div>
    <div class="features">
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Two-color system</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">
                    <div>Tools are designed to easily leverage the primary and secondary color</div>
                    <br>
                    <div>Combine the two colors with dither, blend and noise brush modes</div>
                </div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Shade brush</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">The shade brush replaces the color it brushes over with the color next to it in the active <a href="{{ site.baseurl }}/docs/palette">palette</a></div>
            </div>
        </div>
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Palettization</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Map the pixels in a given <a href="{{ site.baseurl }}/docs/scope">scope</a> to their nearest neighboring color in the active palette</div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Extract canvas colors</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Extract the <a href="{{ site.baseurl }}/docs/color">unique colors</a> from a given scope to the active palette</div>
            </div>
        </div>
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Dynamic gradient brush</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">The <a href="{{ site.baseurl }}/docs/gradient-tool">gradient tool</a> has a brush mode: gradient updates itself as the brush stroke gets longer</div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Script brush</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">The <a href="{{ site.baseurl }}/docs/script-brush">script brush</a> uses a script defining a color to color mapping to determine its behaviour</div>
            </div>
        </div>
    </div>
    <div class="feature-category">Selection</div>
    <div class="features">
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Pixel-perfect selections</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Four complementary <a href="{{ site.baseurl }}/docs/sel-area-tools">selection tools</a> designed to quickly capture the exact set of pixels you want</div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Intuitive outlining</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">
                    <div>Instantly propagate a selection to its <a href="{{ site.baseurl }}/docs/outline">outline</a></div>
                    <br>
                    <div>Configure custom outlines based on adjacent pixels</div>
                </div>
            </div>
        </div>
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Flexible grid</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Easily change the width and height of the pixel grid and checkerboard and snap selections to the grid</div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Limit actions to selection</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption"><a href="{{ site.baseurl }}/docs/color-actions">Actions</a> applied to the whole <a href="{{ site.baseurl }}/docs/project">project</a>, a <a href="{{ site.baseurl }}/docs/layer">layer</a>, a <a href="{{ site.baseurl }}/docs/frame">frame</a>, or a <a href="{{ site.baseurl }}/docs/cel">cel</a> can be limited to selected pixels</div>
            </div>
        </div>
    </div>
    <div class="feature-category">And much more...</div>
    <div class="features">
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Time lapses</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Generate a time lapse of the project's changes during the session</div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Custom fonts</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Design your own fonts and use them with the <a href="{{ site.baseurl }}/docs/text-tool">text tool</a></div>
            </div>
        </div>
        <div class="pair-box">
            <div class="pair-box-left">
                <div class="feature-tagline">Granular undo/redo</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">Undo/redo individual pixel placements within a recent brush stroke operation</div>
            </div>
            <div class="pair-box-right">
                <div class="feature-tagline">Themes</div>
                <img src="/" class="feature-gif">
                <div class="feature-caption">A handful of alternate themes to transform the <a href="{{ site.baseurl }}/docs/interface">program interface</a></div>
            </div>
        </div>
    </div>
</div>
