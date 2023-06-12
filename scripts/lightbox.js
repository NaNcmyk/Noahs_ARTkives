const artists = [
    {
        artist: "Bao Bao",
        photo: "assets/see/bao_bao.jpg",
        links: {
            website: "https://nationalzoo.si.edu/animals/brief-history-giant-pandas-zoo",
            wikipedia: "https://en.wikipedia.org/wiki/Bao_Bao",
            facebook: null,
            instagram: null,
            twitter: null,
            youtube: "https://www.youtube.com/watch?v=wTvM-dfm4Ks",
            tiktok: null
        }
    }, 
    {
        artist: "Bini",
        photo: "assets/see/bini.jpg",
        links: {
            website: "https://binithebunny.com/",
            wikipedia: "https://en.wikipedia.org/wiki/Bini_the_Bunny",
            facebook: "https://www.facebook.com/binithebunny/",
            instagram: "https://www.instagram.com/binithebunny/",
            twitter: "https://twitter.com/binithebunny",
            youtube: "https://www.youtube.com/channel/UC7yg8aQ67T95DULqHm5cGqw",
            tiktok: null
        }
    },
    {
        artist: "Bodie",
        photo: "assets/see/bodie.jpg",
        links: {
            website: "https://bradleymountainfarm.com/van-goat-painting",
            wikipedia: null,
            facebook: null,
            instagram: null,
            twitter: null,
            youtube: "https://youtu.be/iOSbmCSq68k",
            tiktok: null
        }
    },
    {
        artist: "Boon Mee",
        photo: "assets/see/boon_mee.jpg",
        links: {
            website: "https://elephantartgallery.com/",
            wikipedia: null,
            facebook: null,
            instagram: null,
            twitter: "https://twitter.com/boonmee_elep",
            youtube: "https://www.youtube.com/watch?v=JqAViHQT83s",
            tiktok: null
        }
    },
    {
        artist: "Cholla Chambers",
        photo: ["assets/see/cholla_chambers1.jpg", "assets/see/cholla_chambers2.jpg"],
        links: {
            website: "https://www.artistisahorse.com/",
            wikipedia: "https://en.wikipedia.org/wiki/Cholla_(horse)",
            facebook: null,
            instagram: null,
            twitter: null,
            youtube: "https://www.youtube.com/channel/UCq1nGhh5gIck5WmxWoA8ALQ",
            tiktok: null
        }
    },
    {
        artist: "Congo",
        photo: ["assets/see/congo1.jpg", "assets/see/congo2.jpg"],
        links: {
            website: "https://www.galleriesnow.net/shows/congo-the-chimpanzee-the-birth-of-art/",
            wikipedia: "https://en.wikipedia.org/wiki/Congo_(chimpanzee)",
            facebook: null,
            instagram: null,
            twitter: null,
            youtube: "https://www.youtube.com/watch?v=uvzGV3LnWIE&t=4s",
            tiktok: null
        }
    },
    {
        artist: "DogVinci",
        photo: "assets/see/dogvinci.jpg",
        links: {
            website: "https://www.dogvinci.com/",
            wikipedia: null,
            facebook: "https://www.facebook.com/DaggerCanineArtist/",
            instagram: "https://www.instagram.com/dog_vinci/?hl=en",
            twitter: "https://twitter.com/dogvincidagger",
            youtube: "https://www.youtube.com/channel/UC_l5XYcnFSH94GocDLxnkuQ/videos",
            tiktok: null
        }
    },
    {
        artist: "Joachim-Raphaël Boronali",
        photo: "assets/see/joachim-raphaël_boronali.jpg",
        links: {
            website: null,
            wikipedia: "https://en.wikipedia.org/wiki/Joachim-Rapha%C3%ABl_Boronali",
            facebook: null,
            instagram: null,
            twitter: null,
            youtube: "https://www.youtube.com/watch?v=bNa8tuYy4fA",
            tiktok: null
        }
    },
    {
        artist: "Koopa",
        photo: "assets/see/koopa.jpg",
        links: {
            website: "https://www.turtlekiss.com/koopa-the-turtle",
            wikipedia: null,
            facebook: null,
            instagram: null,
            twitter: null,
            youtube: null,
            tiktok: null
        }
    },
    {
        artist: "Pierre Brassau",
        photo: "assets/see/pierre_brassau.jpg",
        links: {
            website: "http://hoaxes.org/archive/permalink/pierre_brassau_monkey_artist",
            wikipedia: "https://en.wikipedia.org/wiki/Pierre_Brassau",
            facebook: null,
            instagram: null,
            twitter: null,
            youtube: "https://www.youtube.com/watch?v=af2yvR4hVd8",
            tiktok: null
        }
    },
    {
        artist: "Pigcasso",
        photo: ["assets/see/pigcasso1.jpg", "assets/see/pigcasso2.jpg"],
        links: {
            website: "https://pigcasso.org/",
            wikipedia: "https://en.wikipedia.org/wiki/Pigcasso",
            facebook: "https://www.facebook.com/pigcasso",
            instagram: "https://www.instagram.com/pigcassohoghero/",
            twitter: "https://twitter.com/pigcassohoghero",
            youtube: "https://www.youtube.com/channel/UC7EAIlhif8RU43BFhON1qUA",
            tiktok: null
        }
    },
    {
        artist: "Pockets Warhol",
        photo: "assets/see/pockets_warhol.jpg",
        links: {
            website: "https://www.storybookmonkeys.org/our_residents/new-world-monkeys.htm",
            wikipedia: "https://en.wikipedia.org/wiki/Pockets_Warhol_(capuchin_monkey)",
            facebook: "https://www.facebook.com/pocketswarhol/",
            instagram: "https://www.instagram.com/pocketswarhol/",
            twitter: "https://twitter.com/pocketswarhol",
            youtube: "https://www.youtube.com/watch?v=Xw3fnbcsPZM",
            tiktok: "https://www.tiktok.com/@pocketswarhol?"
        }
    },
    {
        artist: "Suda",
        photo: "assets/see/suda.jpg",
        links: {
            website: "https://elephantartonline.com/",
            wikipedia: null,
            facebook: "https://www.facebook.com/ElephantArtOnline/",
            instagram: "https://www.instagram.com/elephantartonline/",
            twitter: "https://twitter.com/elephantartcm",
            youtube: "https://www.youtube.com/channel/UCUt_sIMjW7ma_T9jIJ6cmPQ",
            tiktok: null 
        }
    },
    {
        artist: "Tillamook Cheddar",
        photo: "assets/see/tillamook_cheddar.jpg",
        links: {
            website: "http://www.tillamookcheddar.com/",
            wikipedia: "https://en.wikipedia.org/wiki/Tillamook_Cheddar_(dog)",
            facebook: "https://www.facebook.com/Tillamook-Cheddar-Artist-216547516773/?__tn__=-UC*",
            instagram: null,
            twitter: "https://twitter.com/tilliecheddar",
            youtube: "https://www.youtube.com/channel/UCrdNvA0UDenrVodVqE3rMMg",
            tiktok: null
        }
    },
    {
        artist: "Yang Yang",
        photo: "assets/see/yang_yang.jpg",
        links: {
            website: "https://www.startnext.com/en/pandas",
            wikipedia: null,
            facebook: null,
            instagram: null,
            twitter: null,
            youtube: "https://www.youtube.com/watch?v=f3v1afX1gV0&t=1s",
            tiktok: null
        }
    }
];

const lightbox = document.createElement("div");
const imageContainers = document.querySelectorAll(".image-container");

// create lightbox 
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

imageContainers.forEach((container) => {
    container.addEventListener("click", e => {
        lightbox.classList.add("active");

        // create image
        const lightboxImg = document.createElement("img");
        // create paragraph element to display artist name
        const artistName = document.createElement("p");
        // create div for social media links
        const socialMediaDiv = document.createElement("div");
        socialMediaDiv.classList.add('socialMediaDiv');

        // event trigger is either .overlay div or <p> text within div
        let painter = e.target.dataset.artist || (e.target.parentElement).dataset.artist;

        // iterate over artists array to display corresponding artist info based on clicked painting
        artists.forEach(artist => {
            if (artist["artist"] === painter) {
                // display image
                if (Array.isArray(artist["photo"])) {
                    lightboxImg.src = artist["photo"][Math.floor(Math.random() * 2)];
                } else {
                    lightboxImg.src = artist["photo"];
                }
                // display artist name
                artistName.textContent = `Artist: ${artist["artist"]}`;

                // social media names
                const mediaChannels = ["website", "wikipedia", "facebook", "instagram", "twitter", "youtube", "tiktok"];
                // font awesome classes
                const fontAwesomeClasses = {
                    website: ["fas", "fa-link"],
                    wikipedia: ["fab", "fa-wikipedia-w"],
                    facebook: ["fab", "fa-facebook"],
                    instagram: ["fab", "fa-instagram"],
                    twitter: ["fab", "fa-twitter"],
                    youtube: ["fab", "fa-youtube"],
                    tiktok: ["fab", "fa-tiktok"]
                };
                // filtered array of only the properties that contain a URL
                const filteredChannelsArr = mediaChannels.filter(channelName => artist["links"][channelName] !== null);
                
                // dynamically generate variables w/map to create font awesome icons and anchor tags
                let iconVars = new Map();
                let anchorVars = new Map();

                filteredChannelsArr.forEach(channel => {
                    // create anchor tags
                    let anchorVarName = `${channel + "link"}`;
                    let anchorVar = anchorVarName;
                    let anchorValue = new Map();
                    anchorValue.set("a", document.createElement("a"));
                    anchorVars.set(anchorVar, anchorValue);

                    // create font awesome icons
                    let iconVar = channel;
                    let iconValue = new Map();
                    iconValue.set("i", document.createElement("i"));
                    iconVars.set(iconVar, iconValue);
                    
                    // store DOM elements & font awesome classes in own variable for readability
                    let iconEl = iconVars.get(channel).get("i");
                    let anchorEl = anchorVars.get(anchorVarName).get("a");
                    let faFirstClass = fontAwesomeClasses[channel][0];
                    let faSecondClass = fontAwesomeClasses[channel][1];

                    // add font awesome classes
                    iconEl.classList.add(faFirstClass, faSecondClass); 
                    // set href attribute
                    anchorEl.setAttribute("href", artist["links"][channel]);
                    // set target attribute
                    anchorEl.setAttribute("target", "_blank");

                    // add <i> tag to <a> tag
                    anchorEl.append(iconEl);
                    // add <a> tag to social media <div> tag
                    socialMediaDiv.append(anchorEl);
                });
            }
        });
        // remove previous display
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        // add image + artist name + social media div to lightbox
        lightbox.append(lightboxImg, artistName, socialMediaDiv);
    }); 
});

// exit lightbox
lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
});