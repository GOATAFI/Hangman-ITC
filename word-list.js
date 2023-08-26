const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
    {
        word: "equivocal",
        hint: "Open to more than one interpretation; ambiguous."
    },
    {
        word: "paragon",
        hint: "A person or thing regarded as a perfect example of a particular quality."
    },
    {
        word: "cactus",
        hint: "A succulent plant with thick, fleshy stems and spines."
    },
    {
        word: "enigmatic",
        hint: "Difficult to interpret or understand; mysterious."
    },
    {
        word: "ephemeral",
        hint: "Lasting for a very short time; fleeting."
    },
    {
        word: "perplexed",
        hint: "Completely baffled or puzzled."
    },
    {
        word: "profundity",
        hint: "Deep insight or great depth of knowledge or thought."
    },
    {
        word: "resonate",
        hint: "Evoke or suggest emotions, memories, or ideas; produce a positive feeling."
    },
    {
        word: "tenacious",
        hint: "Tending to keep a firm hold of something; persistent."
    },
    {
        word: "eloquence",
        hint: "Fluent or persuasive speaking or writing."
    },
    {
        word: "ephemeral",
        hint: "Lasting for a very short time; fleeting."
    },
    {
        word: "ambiguous",
        hint: "Open to more than one interpretation; having a double meaning."
    },
    {
        word: "Obfuscate",
        hint: "Render obscure, unclear, or unintelligible."
    },
    {
        word: "Sycophant",
        hint: "A person who acts obsequiously toward someone important in order to gain advantage."
    },
    {
        word: "Voracious",
        hint: "Having a very eager approach to a particular activity; having a huge appetite."
    },
    {
        word: "Quintessential",
        hint: "Representing the most perfect or typical example of a quality or class."
    },
    {
        word: "Nefarious",
        hint: "Wicked, villainous, or criminal in nature."
    },
    {
        word: "Ebullient",
        hint: "Overflowing with enthusiasm, excitement, or energy."
    },
    {
        word: "Esoteric",
        hint: "Intended for or likely to be understood by only a small number of people with a specialized knowledge or interest."
    },
    {
        word: "Cacophony",
        hint: "A harsh, discordant mixture of sounds."
    },
    {
        word: "Ubiquitous",
        hint: "Present, appearing, or found everywhere."
    },
    {
        word: "Reticent",
        hint: "Not revealing one's thoughts or feelings readily."
    },
    {
        word: "Ineffable",
        hint: "Too great or extreme to be expressed or described in words."
    },
    {
        word: "Surreptitious",
        hint: "Kept secret, especially because it would not be approved of."
    },
    {
        word: "Disparate",
        hint: "Essentially different in kind; not allowing comparison."
    },
    {
        word: "Copious",
        hint: "Abundant in supply or quantity."
    },
    {
        word: "Mellifluous",
        hint: "Sweet or musical; pleasant to hear."
    },
    {
        word: "Ebullient",
        hint: "Eager, enthusiastic, and lively."
    },
    {
        word: "Munificent",
        hint: "More generous than is usual or necessary."
    },
    {
        word: "Sagacious",
        hint: "Having or showing keen mental discernment and good judgment."
    },
    {
        word: "Vociferous",
        hint: "Crying out noisily; clamorous."
    },
    {
        word: "Pernicious",
        hint: "Having a harmful effect, especially in a gradual or subtle way."
    }
];