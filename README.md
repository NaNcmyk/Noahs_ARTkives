# 🖼️ Noah's ARTkives
### **Demos**: 
1. Video demo [here](https://youtu.be/EAjCOWcYDeg).
2. Live demo [here](https://noahs-artkives.vercel.app/).

### **Description**: 
Noah's ARTkives is an interactive art gallery website that showcases paintings by the animal queendom's foremost visionaries--yes, modern-day Pigcassos and Vincent van Goats!--whose repertoire bears 🐻🐻‍❄️🐼 uncanny resemblance to the abstract expressionist paintings of [Jackson Pollock](https://en.wikipedia.org/wiki/Jackson_Pollock), [Willem de Kooning](https://en.wikipedia.org/wiki/Willem_de_Kooning), and [Franz Kline](https://en.wikipedia.org/wiki/Franz_Kline). (Artifice? or arti- _fact_? Hmmm... 🤔 You decide.) 

To help get you in 🖌️🐯creative beast mode 🦁🖌️, Noah's ARTkives has curated a special video playlist featuring some of the artists in action for you to enjoy Netflix-style 📺🍿. 

The gallery tour culminates in an opportunity--using cutting-edge HTML5 canvas technology! 🎨--to paint your very own digital magnum opus 🖼️, which you can download to your own personal ARTkive. Everybody--artistically inclined or not--hairy 🦧, fluffy 🐑, scaly 🐠, or otherwise 👩‍🦰🦄--who partakes in this immersive experience will emerge a Leonardo 🐶Vinci 🐾.

What ultimately matters is not so much where you end up relative to thy neighbor's pets (😼 meow) but where you end up relative to yourself when you began. ([Sound familiar?](https://youtu.be/YoXxevp1WRQ?t=233)) Now, who says you can't teach an old dog (err..._human_ 🤷) new tricks?! 🐴Neighhh-sayers, be gone! 

Bonus feature: Take your painting adventures to a whole new level with--*drum roll, please* 🥁--the ARTkives's very own browser art-X-tension! Now you can go hog wild and scribble to your heart's content as you browse all your favorite web pages. The entire World Wide Webiverse is your oyster. Oink 🐽.

**Tech stack 🧑‍💻💻**: **HTML**, **CSS**, **Bootstrap 5**, **JavaScript**

---
### **PROJECT FILE STRUCTURE**

The **_project_** (root) directory contains the following:

+ **_.html_** files (4 total)
    1. 🐷 **_index.html_**
    1. 👁️‍🗨️ **_see.html_**
    1. 📺 **_learn.html_**
    1. 🎨 **_make.html_**
+ subdirectories (3 total):
    1. **_assets_** (4 subfolders)
        + **_all_** - 2 files
        + **_index_** - 4 files
        + **_see_** - 36 files
        + **_make_** - 3 files
    1. **_scripts_** - 5 files
    1. **_stylesheets_** - 5 files
+ a README.md (a.k.a. this file you are reading right now)

👇👇 Read on for a detailed explanation of each. 👇👇

---
#### **ROOT DIRECTORY (HTML files)**

In case the user gets lost on the website... And for extra UX brownie points. For all pages, except the homepage, the link button that corresponds to the page that the user is currently viewing is styled slightly differently in the navigation menu. Notice, this button also has a "📍 you are here" Bootstrap-styled tooltip to let users know where they currently are on the website as they look to navigate elsewhere. 

1. 🐷 **_index.html_**

    This is the homepage. 

    + Clicking the "scribble" logo (shakes on hover! 😉) located on the top-left corner of every page will bring the user back to this main page.
        
    + If the user is already on the homepage, however, clicking on the logo won't do anything. Instead! An Easter egg is planted behind the logo. Hover over it to see what happens... 👾

1. 👁️‍🗨️ **_see.html_**

    This is the _Image ARTkives_ page, which can be accessed via the "see" button on the navigation menu of each page or the "enter gallery" button of the homepage.

    + The image gallery was created using Bootstrap 5's grid layout. 
    
    + Hover over each painting to reveal its title and year. A Bootstrap 5-styled tooltip will prompt the user to click on the title for information about the artist. 
    
    + Clicking the title will open up a JavaScript-generated lightbox that displays a photo of the artist--surprise! An animal made this!--as well as display the artist's name and any available links to its website, Wikipedia page, and social media. These external links have all been configured to open in a separate tab.

1. 📺 **_learn.html_**
    
    This is the _Video ARTkives_ page, which can be accessed via the "learn" button on the navigation menu of each page.

    + Embedded `<iframe></iframe>` make up the bulk of this page. Users can watch YouTube clips of the artists in action via a curated playlist. Scroll through the playlist (look right) to select a different clip to display on the main player (to the left).

    + The main video will not autoplay on page load, but will autoplay when the user switches to a different video from the playlist. Using YouTube's native controls, users can toggle between play/pause as they wish.

    + Notice the video title (under the main display) will update to reflect the current selection.

1. 🎨 **_make.html_**
    
    This page--the grand finale!--accessible via the "make" button on the navigation menu of each page, is best viewed on a larger screen (though it is mobile responsive). Here, users can have their own [_Harold and the Purple Crayon_](https://en.wikipedia.org/wiki/Harold_and_the_Purple_Crayon) moment and paint a masterpiece of their own making!

    + To access the canvas, the user must click the _stART_ button on the landing page. Doing so will blur the landing page's background image (an empty white room) to _even whiter_ whiteness, ultimately unveiling the tabula rasa, upon which the user will be tasked with coloring. This (seemingly interloping) landing page simply serves as a way to build up excitement and add an element of suspense to the website's climax.
 
    + A note on cursors: 

        + When the landing page's background image completely disappears and the toolbar fades in to view, the crosshair cursor will ✨ _magically_ ✨ appear to indicate that the canvas is ready .

        + Notice when color is applied to the canvas (with a mouse), the cursor will change to a paintbrush.

    + The logo and menu toggle at the top of the page are both invisible to make full use of screen real estate. They are acccessible on hover as needed when not in stamping or painting mode. You'll see a frosty gray band when you hover over the top edge of the page.

    + As for the artist toolkit... On big and medium screens, the tool bar is located on the left-hand side of the screen, and on mobile screens, it's fixed to the bottom. It contains four clickable Font Awesome icon buttons. Bootstrap-styled tooltips explain the function of each.

        + **Brush/stroke sizes and color palette** - These are all predetermined (i.e., dynamically calculated in _paint.js_), so cannot be changed by the user. The painted line changes color and width as the user moves from one point of the canvas to another. This, in effect, results in fluid, ebbing and flowing rainbow-colored gradient lines, since the lines do not have static width or color values. This particular idea was inspired by [day 8 of Wes Bos's #JavaScript30](https://youtu.be/8ZGAzJ0drl0).

        + **Make your (paw) mark stamp** (animal paw print icon) - This button allow users to stamp a paw print to the canvas. The color of the stamp is generated randomly by behind-the-scenes JavaScript wizardry in _paint.js_--users have no control over the color. 

            + Notice what happens when you are stamping. (No, you're not experiencing double vision!) You will see a (also randomly colored) brief flash of a fading paw when the paw is stamped to the canvas (i.e., in JavaScript terms: when a pointerdown event is detected on the canvas).

            + Note, when the stamp is activated, the icon button is green. (When it's inactive, it's set to its default color: black.)

            + Pro tip: Toggle the stamp on/off by clicking the mortar and pestle icon. Turn off the stamp if you want to switch to a different blend mode while painting. Otherwise, the color of the brush will default to the stamp's "source-over" blend mode--i.e., the `globalCompositeOperation` property of the Canvas 2D API that enables the stamp color to be superimposed over the canvas's existing content, as opposed to underneath or blended in with it. (Basically, you know the stamp is off if the button is black.)

        + **Blend Mode button** (mortar and pestle icon) - This is Noah's ARTkives's (more creative!) alternative to the standard color picker. Regardless of which blend mode the user selects, the brush color will always be rainbow-colored. The blend mode alters the appearance (hue, saturation, lightness/darkness) of those colors when they overlap. Read more about blend modes [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) on MDN. 

            + ⚠️ _As mentioned above, while in painting mode, make sure the stamp is turned off when switching the brush blend mode. Otherwise, the selected blend mode will revert to the stamp's default "source-over" blend mode._

            + Notice the custom radio "check" mark: It's a pig snout emoji! (🐽 Oink.)

        + **Erase button** (eraser icon) - Dear perfectionists, [since we don't make mistakes, we have happy accidents](https://youtu.be/wCsO56kWwTc), erasing select areas of the canvas that have already been painted on is not an option. But you do have the option to clear the entire canvas and start afresh. You can't remove paint already applied to a real (not-digital) canvas, _right?_ Same rationale applies here.
    
        + **Download button** (download icon) - This button allows users to download their masterpieces. Downloads will save as "your_masterpiece.png" on the user's local machine. Once users navigate away from the canvas page, any unsaved work from the session will be permanently lost. The browser will display a warning message to confirm if the user, in fact, wants to abandon their unsaved work--just in case. (Navigating away from the landing page or a canvas that has not received any interaction will not trigger the alert.)

        + **Browser extension button** (puzzle icon) - Clicking the icon will direct users to the [artXtension GitHub repo](https://github.com/NaNcmyk/artXtension), which contains all the necessary files required to manually install the browser extension--instead of directly to the Chrome Web Store page (since this extension is still in beta).
---
#### **ASSETS**
This subdirectory includes all _.mp4_, _.jpg_, _.png_, _.svg_ media files used by the website.

1. **assets shared by all pages**

    + [logo.png](/assets/all/logo.png) - This icon by [Freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com/free-icon/paint-brush-stroke_73788?term=scribble&page=1&position=19&page=1&position=19&related_id=73788&origin=search) serves as the favicon on the title tabs, as well as the logo image, on all four pages.

    + [wave.svg](/assets/all/wave.svg) - This wavy blob svg, used in _styles.css_, was generated with [getwaves.io](https://getwaves.io/). It makes up the lower portion of the top drawer "paint drip" navigation. 

1. 🐷 **_index.html_ assets**

    + [dali_and_ocelot.jpg](/assets/index/dali_and_ocelot.jpg) - This image is used inside the custom tooltip that pops up when the user hovers over the "enter gallery" button. (Image credit and link to original _.jpg_ file available [here](https://drive.google.com/file/d/1Vzn80yFXgXGlF053_31Luw2c5GXW1BIH/view?usp=sharing).)

    + [spaceship.png](/assets/index/spaceship.png) - This icon by [SmashIcons](https://www.flaticon.com/authors/smashicons) from [Flaticon](https://www.flaticon.com/free-icon/ufo_2834594?term=ship%20animal&related_id=2834594) is used in the Easter egg animation. In its hovered state, it comes into view from behind the logo and roves around the heading.

    + [paint.mp4](/assets/index/paint.mp4) - This video by [ArtHouse Studio](https://www.pexels.com/@arthousestudio) from [Pexels](https://www.pexels.com/video/a-person-painting-8170107/) is used as the page's video background. 
    
        + A randomly and dynamically generated photo from [Unsplash](https://source.unsplash.com/random/?animals) is used as an overlay in _index.css_, over the video background, to achieve the page's final visual effect. Notice this image changes whenever the page reloads.
        
            Requests are sent to Unsplash's random route to get the images:
        
                https://source.unsplash.com/random/
        
            with a query parameter for "animals" appended to the end of the final URL:

                https://source.unsplash.com/random/?animals

    + [tiger.js](/assets/index/tiger.jpg) - If, for whatever reason, Unsplash's API is down, this photo by [Pixel-mixer](https://pixabay.com/users/pixel-mixer-1197643/) from [Pixabay](https://pixabay.com/photos/tiger-siberian-tiger-snow-predator-1975790/) is available as backup, as a static background image. (In _index.css_, simply un-comment out the line that references this image as the `background-image`.)

1.  👁️‍🗨️ **_see.html_ assets**
    
    _see.html_ is a very image-heavy page. (This is, after all, an art gallery website.)

    + 36 _.jpg_ files total make up the page:

        + 18 painting images & 18 artist photos

        + A complete list of image credits, as well as links to all original _.jpg_ files, available [here](https://drive.google.com/file/d/1Vzn80yFXgXGlF053_31Luw2c5GXW1BIH/view?usp=sharing). (I do not own the rights to these images.)

    +  painting file names - These are preceded by the artist's name, followed by title and year (if available).

    + artist photo file names - These correspond to artist's name.

        + Note, three of the artists have two different photos: Cholla Chambers, Pigcasso, and Congo (because each of them have two different paintings on display in the image gallery). Per the _lightbox.js_ script, a random one of the two will be displayed to the user.

1. 📺 **_learn.html_ assets**
    
    No additional assets (besides the ones for the navigation menu). YouTube videos are all embedded via `<iframe></iframe>`.

1. 🎨 **_make.html_ assets**

    _make.html_ is essentially a blank page. It relies on the user for content creation. Hence the blank canvas.

    + [white-room.jpg](/assets/white-room.jpg) - This image of a bare white room by [R_R](https://unsplash.com/@richy_roll) from [Unsplash](https://unsplash.com/photos/2_BZuGgkP4k) is the landing page's background image, superimposed over the canvas.

    + [paint-brush.png](/assets/paint-brush.png) - This icon by [Freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com/premium-icon/artist_2948861?term=paint%20brush&page=1&position=10&page=1&position=10&related_id=2948861&origin=search) is implemented as a custom cursor. It replaces the crosshair cursor when the user is applying color on to the canvas (as opposed to just hovering over the canvas). 

    + [paw.png](/assets/paw.png) - This icon by [Freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com/free-icon/paw_672675?term=paw&page=1&position=8&page=1&position=8&related_id=672675&origin=search# ) is used to transfer the paw "prototype" image on to the canvas when the user is stamping.

---
#### **STYLESHEETS**

All pages have been checked for responsiveness. Media queries adjust page layouts to suit smaller tablet and phone screen sizes. 

In `<link>` tag order, in the `<head>` section of the _.html_ pages:

+ **Bootstrap** - linked to all pages except _index.html_. Used for the following:

    + _see.html_, _learn.html_, _make.html_ tooltips

    + _see.html_ grid layout

    + _make.html_ browser extension "beta" badge

+ **Google Fonts** - The following four fonts are used on the website:

    1. [Syne Mono](https://fonts.google.com/specimen/Syne+Mono) - primary monospace font used for the main content on all four pages

    1. [Black And White Picture](https://fonts.google.com/specimen/Black+And+White+Picture) - primary sans-serif heading font for _index.html_, _see.html_, _learn.html_

    1. [Fredoka One](https://fonts.google.com/specimen/Fredoka+One) - cursive font used for the footer of _see.html_ and _learn.html_, and for the navigation menu of all pages

    1. [Vibur](https://fonts.google.com/specimen/Vibur) - cursive font used for the "Jackson Pollock" in _see.html_ and "Henry David Thoreau" in _make.html_ following their respective quotes 

+ **Font Awesome** - Font Awesome's CDN is linked to in all _.html_ pages, and used for the following:

    + menu toggle, both the hamburger menu and the "x" close icon, on each page

    + _see.html_'s social media link icons 

    + _make.html_'s toolbar buttons and paw animation

+ 🐷👁️‍🗨️📺🎨 **_/stylesheets/styles.css_** - All _.html_ pages for the website are linked to this stylesheet. 

    + This contains the styling for the (hidden) top drawer "dripping paint" navigation used on all four pages. 

    + The website's main yellow, pink, green, white, and black are saved as color variables that the page-specific stylesheets reference.

+ **Page-specific stylesheets (_/stylesheets/index.css_ || _see.css_ || _learn.css_ || _make.css_)** - These all have file names that correspond to the _.html_ page that uses it. E.g., _index.css_ is the primary stylesheet used for the _index.html_ page and _see.css_, likewise, is the one used for _see.html_. There is a one for each corresponding _.html_ page.

---
#### **SCRIPTS**

1. **Bootstrap** 

    + Bootstrap's JavaScript plug-ins and dependencies need to be included before the closing `</body>` tag of the _.html_ pages that require it. The Popper script is required to use Bootstrap's tooltips, and must precede the one for Bootstrap's JavaScript plug-ins per [Bootstrap's documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/).

    +  👁️‍🗨️📺🎨 **_enable_bootstrap_tooltips.js_** - Bootstrap's tooltip feature also requires explicit opt-in. This script confirms opt-in and enables Bootstrap tooltips to run everywhere.  _see.html_, _learn.html_, and _make.html_ link to this script. (_index.html_'s one and only Salvador Dali tooltip is a custom tooltip, so it does not require this script.)


1. 🐷👁️‍🗨️📺🎨 **_nav.js_**
    
    This script runs when the user clicks the hamburger menu icon located on the top-right corner of every page. The click event triggers the top drawer navigation to drop down over the page. The user is then able to navigate to other pages on the site via the list of links or to simply close the menu via the _x_ close button to return to the current page. This action can be toggled on and off.

1. 👁️‍🗨️ **_lightbox.js_**

    This script is used by _see.html_ to enable the image gallery's lightbox feature when the user hovers over a painting and clicks its title (revealed on hover). All of the lightbox elements (photo of the artist, artist name, and all social media icons and their related links)--including the lightbox itself--are dynamically generated by JavaScript. Rather than create superfluous (hidden) elements in _see.html_ that the page may or may not need--depending on what the user clicks--I opted to generate them with JavaScript since the lightbox features can only be seen when a click event is fired--i.e., when JavaScript kicks in.

    Note, at the very top of the script, you will find an `artists` array. This is an array of objects that stores data about each artist (name, photo link, links to social media). 

1. 📺 **_videoplaylist.js_**

    This script handles the click events fired on the thumbnail containers of the video playlist in _learn.html_ and updates the title of the main video display to reflect the user's selection.

   The "maverick" behavior of `<iframe></iframe>` was taken into account when writing this script. Iframes, which are essentially nested html documents within the main html document, have their own internal DOM strucure that can conflict with the external DOM of its parent page. In order for the browser's back button to behave as expected--that is, display a separate page that the user previously viewed on the website--an "intervention", so to speak, had to be put in place to prevent the browser from (unintentionally) backtracking through the user's playlist history within the current page (inside the YouTube player) when the main page's back button is clicked.

1. 🎨 **_paint.js_**
    
    This script powers the mighty painting app of _make.html_. This program was written to respond to both mouse and touch events by listening to pointer events--which now have [full cross-browser support](https://caniuse.com/?search=pointermove) (including IE 11 🎉). The various features of this program have been separated into 10 different functions based on their specific functionality:

    + `blurBackground()` - This function kicks in when the user clicks the landing page's "stART" button. The background image of the landing page slowly fades and all of its contents (including the quote and the button) are hidden as the canvas underneath it is revealed. The cursor is updated. A `class` of `active` is added to the toolbox element to allow the tool bar to fade in to view as the landing page vanishes away.

    + `changeCursor()` - This function is called within other functions in the script. It changes the cursor style based on the user's current interaction with the canvas--determined by the boolean values for the `isDrawing`, `isStamping`, and `isBlending` global flags. The cursor is initially set to crosshair ("+"), but switches to the paintbrush cursor when the user is either in stamping mode (triggering a pointerdown event) or in painting mode (triggering a pointermove event)--unless the blend mode modal is open, in which case, the cursor remains as is (crosshair) while in blending mode. (Note, the pointer cursor style for the individual radio inputs is set within _make.css_, not in _paint.js_. The crosshair cursor style for the modal itself--excluding the radio inputs nested within it--however, is set with JavaScript.) When the paintbrush cursor is active, the header element's `display` property is set to `none` so that the header doesn't obstruct the canvas's top edge while the user is painting and/or stamping over the topmost part of the canvas.

    + `draw(e)` - When a `pointermove` event is detected on the canvas, this function determines the line width, the color, as well as the `x` and `y` positions of the painted lines based on the event object passed in to it. As the x and y coordinates change with the user's pointer (mousemove/touchmove) movements, both the line width and hsl hue values are simultaneously incremented. Any integer from 1 to 70 is a valid line width value, and any integer from 0 to 360 is a valid hue value. When the upper limit on increments is reached for each variable, the cycle starts over: The hue value resets to 0, and the line width value resets to 1; their computed values are then incremented from their respective starting points. All this, in effect, translates into brush strokes with varying thicknesses and capricious hue.

    + `stampPaw()` - When the paw print icon is clicked, it transfers the _.png_ image of the paw to canvas. The Bootstrap tooltip text is updated from "make your mark" (when inactive) to "pause paws" (when active) and the paw button's `active` `class` is added to change the icon color from black to green--all serving as UI indicators of the button's active state. 

    + `changeStampColor()` - This function is called within the `stampPaw()` function. It dynamically changes the paw stamp color from black to a random rgb color by manipulating the pixel values of the original (black) image, as well as updates the current `globalCompositeOperation` property to "source-over" to allow the paw's new color to be layered on top of the canvas's existing content. Since the stamp's "source-over" blend mode overrides the one the user previously selected, the value of the `selectedBlendMode` global variable is updated so that "source-over" becomes the checked radio input when the user opens the blend mode modal again.

    + `pawsify(x, y, color)` - This function is also called within the `stampPaw()` function, after the `changeStampColor()` function is called. It accepts three arguments: the `x` and `y` axes of the click coordinates (recorded in the `stampPaw()` function), and a rgb color value returned by the `changeStampColor()` function--all of which determine the precise color and placement of the stamp's pulsing animation. When the paw is stamped to the canvas, this function dynamically generates a new Font Awesome paw element. An `id` of `pawsify` is added to the element, which is used as a selector in _make.css_ to generate the pulse animation.

    + `toggleBlendModeModal()` - When the mortar and pestle icon is clicked, this function generates all elements of the blend mode modal, including the modal `<div>` itself, and all 16 blend mode `<li>`, radio `<input>`, and `<label>` elements, as well as the invisible backdrop `<div>` (i.e., the parent element of the modal element and all of its descendant elements). In _make.css_, the blend mode backdrop's `display` property is set to `none`. It is not until the `class` of `active` is added in this function that, all of the backdrop's children elements (i.e., the modal and the list of radio inputs) are revealed. This, in turn, also changes the icon color from black to green to indicate the blend mode modal's active state. The invisible backdrop prevents the user from painting or stamping while the modal is open because, in _make.css_, it is given a height and width of 100%, and a `z-index` that is much higher than the canvas, effectively covering and disabling the canvas (though visible behind the open modal). Clicking the invisible backdrop closes the modal (i.e., removes its `active` `class`) and returns users to where they left off on the canvas and changes the icon color back to black to indicate its inactive state.

    + `changeBlendMode()` - This function is called within the `toggleBlendModeModal()` function, after all the blend mode modal elements are created. It listens to `change` events within the modal to determine which blend mode the user selected, and updates the `globalCompositeOperation` of the brush accordingly. It also makes sure after the modal is closed and opened again that, the user's latest selection remains checked--based on the value of the `selectedBlendMode` global variable.

    + `clearCanvas()` - When the eraser button is clicked, this function clears the canvas.

    + `exportImg()` - When the download button is clicked, this function enables the user to download their painted masterpiece.

    Note, at the very end of the script, an event listener for a `beforeunload` event is added to the window to let users know that they are about to navigate away from the page, and in doing so, they will lose any unsaved work. This gives users the opportunity, in case of user error, to download their work before abandoning the page. Wrapping the window's `beforeunload` event listener within the canvas's `pointerdown` event listener ensures that the warning only displays if the user has interacted with the page somehow--in other words, the display message will not be triggered if users simply hit the back button on the canvas page without actually drawing something on it (in which case there would be nothing to save anyway), nor will leaving the landing page without clicking the "stART" button trigger the alert.

1. 📅 **_copyright.js_**

    This script simply provides the footer of both _see.html_ and _learn.html_ with their display text, which includes a dynamically generated copyright year.

---
## **Noah's art-X-tension 🧪**

The [artXtension](https://github.com/NaNcmyk/artXtension) now has its own repo. See *Installation* section of artXtension's README.md for instructions on how to manually install the extension in developer mode.

The code for this extension is also accessible via the puzzle (browser extension) icon link on _make.html_'s toolbar--this is the (temporary) point of access to the browser extension for users navigating the site. (IRL, for easy download, this link would take the user directly to the extension's page on either [*Chrome Web Store*](https://chrome.google.com/webstore/category/extensions?hl=en) or [*Firefox Browser Add-Ons*](https://addons.mozilla.org/en-US/firefox/extensions/), depending on the user's browser.)