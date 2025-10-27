// Quiz questions database
const questionSets = {
    science: {
        easy: [
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is H2O commonly known as?",
                options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"],
                correct: 2
            },
            {
                question: "How many bones are in the adult human body?",
                options: ["106", "206", "306", "406"],
                correct: 1
            },
            {
                question: "What is the closest star to Earth?",
                options: ["Proxima Centauri", "Sirius", "The Sun", "Alpha Centauri"],
                correct: 2
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "Which organ pumps blood throughout the body?",
                options: ["Lungs", "Liver", "Heart", "Brain"],
                correct: 2
            },
            {
                question: "What is the main gas found in Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correct: 2
            },
            {
                question: "Which animal is known as the 'King of the Jungle'?",
                options: ["Elephant", "Tiger", "Lion", "Giraffe"],
                correct: 2
            },
            {
                question: "How many planets are in our solar system?",
                options: ["7", "8", "9", "10"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "Which part of the plant conducts photosynthesis?",
                options: ["Root", "Stem", "Leaf", "Flower"],
                correct: 2
            },
            {
                question: "What is the speed of light in a vacuum?",
                options: ["299,792,458 m/s", "150,000,000 m/s", "1,080,000,000 km/h", "671,000,000 mph"],
                correct: 0
            },
            {
                question: "Which element has the atomic number 1?",
                options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
                correct: 2
            },
            {
                question: "What is the pH value of pure water?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "Which blood type is known as the universal donor?",
                options: ["A", "B", "AB", "O"],
                correct: 3
            },
            {
                question: "What is the study of fossils called?",
                options: ["Paleontology", "Archaeology", "Geology", "Anthropology"],
                correct: 0
            },
            {
                question: "Which planet has the most moons?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: 1
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Liver", "Brain", "Skin", "Heart"],
                correct: 2
            },
            {
                question: "Which vitamin is produced when human skin is exposed to sunlight?",
                options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                correct: 3
            }
        ],
        hard: [
            {
                question: "What is the Heisenberg Uncertainty Principle?",
                options: [
                    "It's impossible to know both position and momentum of a particle exactly",
                    "Energy cannot be created or destroyed",
                    "Every action has an equal and opposite reaction",
                    "The entropy of an isolated system always increases"
                ],
                correct: 0
            },
            {
                question: "Which subatomic particle has a positive charge?",
                options: ["Electron", "Neutron", "Proton", "Photon"],
                correct: 2
            },
            {
                question: "What does DNA stand for?",
                options: [
                    "Deoxyribonucleic Acid",
                    "Dinucleic Acid",
                    "Deoxyribose Acid",
                    "Double Nucleic Acid"
                ],
                correct: 0
            },
            {
                question: "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
                options: ["Charles's Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"],
                correct: 1
            },
            {
                question: "What is the primary function of mitochondria?",
                options: [
                    "Protein synthesis",
                    "Cellular respiration and ATP production",
                    "Lipid synthesis",
                    "Waste disposal"
                ],
                correct: 1
            },
            {
                question: "Which scientist proposed the theory of relativity?",
                options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
                correct: 2
            },
            {
                question: "What is the chemical process by which plants make food?",
                options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
                correct: 1
            },
            {
                question: "Which element is essential for the formation of hemoglobin?",
                options: ["Calcium", "Iron", "Potassium", "Sodium"],
                correct: 1
            },
            {
                question: "What is the unit of electrical resistance?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 2
            },
            {
                question: "Which type of bond involves the sharing of electron pairs between atoms?",
                options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
                correct: 1
            }
        ]
    },
    literature: {
        easy: [
            {
                question: "What is the opposite of 'happy'?",
                options: ["Sad", "Angry", "Excited", "Tired"],
                correct: 0
            },
            {
                question: "Which of these is a noun?",
                options: ["Run", "Beautiful", "Quickly", "Dog"],
                correct: 3
            },
            {
                question: "What do we call a word that describes a verb?",
                options: ["Noun", "Adjective", "Adverb", "Pronoun"],
                correct: 2
            },
            {
                question: "Which punctuation mark is used at the end of a question?",
                options: [".", "!", "?", ","],
                correct: 2
            },
            {
                question: "What is the plural of 'child'?",
                options: ["Childs", "Children", "Childes", "Childies"],
                correct: 1
            },
            {
                question: "Which word means 'to make something bigger'?",
                options: ["Shrink", "Reduce", "Enlarge", "Shorten"],
                correct: 2
            },
            {
                question: "What do we call a story that is not true?",
                options: ["Fact", "Fiction", "Biography", "History"],
                correct: 1
            },
            {
                question: "Which of these is a proper noun?",
                options: ["city", "mountain", "London", "river"],
                correct: 2
            },
            {
                question: "What is the past tense of 'go'?",
                options: ["Goed", "Went", "Gone", "Going"],
                correct: 1
            },
            {
                question: "Which word is a synonym for 'big'?",
                options: ["Small", "Tiny", "Large", "Little"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "What is a metaphor?",
                options: [
                    "A comparison using 'like' or 'as'",
                    "Giving human qualities to non-human things",
                    "A direct comparison without using 'like' or 'as'",
                    "An exaggerated statement"
                ],
                correct: 2
            },
            {
                question: "Which literary device is used in 'The wind whispered through the trees'?",
                options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
                correct: 2
            },
            {
                question: "What is the main character in a story called?",
                options: ["Antagonist", "Protagonist", "Narrator", "Supporting character"],
                correct: 1
            },
            {
                question: "Which of these is an example of alliteration?",
                options: [
                    "The cat sat on the mat",
                    "Peter Piper picked a peck of pickled peppers",
                    "She sells seashells by the seashore",
                    "Both 2 and 3"
                ],
                correct: 3
            },
            {
                question: "What is the theme of a story?",
                options: [
                    "The time and place where the story happens",
                    "The main message or idea",
                    "The sequence of events",
                    "The problem the characters face"
                ],
                correct: 1
            },
            {
                question: "Which genre features magical elements and imaginary worlds?",
                options: ["Mystery", "Fantasy", "Historical fiction", "Biography"],
                correct: 1
            },
            {
                question: "What is the definition of 'protagonist'?",
                options: [
                    "The villain of the story",
                    "The main character who drives the story forward",
                    "The narrator of the story",
                    "A minor character"
                ],
                correct: 1
            },
            {
                question: "Which of these is a classic novel by Jane Austen?",
                options: ["Wuthering Heights", "Pride and Prejudice", "Great Expectations", "Moby Dick"],
                correct: 1
            },
            {
                question: "What is the term for the emotional atmosphere of a literary work?",
                options: ["Tone", "Mood", "Theme", "Setting"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "Who wrote '1984', a dystopian novel about totalitarianism?",
                options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
                correct: 1
            },
            {
                question: "What literary movement emphasized emotion and individualism in the late 18th century?",
                options: ["Realism", "Romanticism", "Modernism", "Postmodernism"],
                correct: 1
            },
            {
                question: "In Shakespeare's 'Hamlet', what is the famous soliloquy that begins 'To be, or not to be' about?",
                options: [
                    "Love for Ophelia",
                    "Revenge for his father's murder",
                    "Contemplation of suicide and existence",
                    "The corruption of the court"
                ],
                correct: 2
            },
            {
                question: "What is the term for a play on words that have similar sounds but different meanings?",
                options: ["Oxymoron", "Pun", "Alliteration", "Euphemism"],
                correct: 1
            },
            {
                question: "Which American author wrote 'The Great Gatsby'?",
                options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
                correct: 1
            },
            {
                question: "What is stream of consciousness in literature?",
                options: [
                    "A narrative technique that presents thoughts and feelings as they occur",
                    "A type of poetry with no fixed structure",
                    "A character's dialogue with themselves",
                    "A story told from multiple perspectives"
                ],
                correct: 0
            },
            {
                question: "Which Greek philosopher wrote 'Poetics', analyzing tragedy and epic poetry?",
                options: ["Plato", "Socrates", "Aristotle", "Euripides"],
                correct: 2
            },
            {
                question: "What is the definition of 'bildungsroman'?",
                options: [
                    "A novel dealing with one's formative years",
                    "A novel set during a war",
                    "A novel with an unreliable narrator",
                    "A novel that critiques society"
                ],
                correct: 0
            },
            {
                question: "Who wrote 'One Hundred Years of Solitude', a landmark of magical realism?",
                options: ["Jorge Luis Borges", "Gabriel García Márquez", "Isabel Allende", "Pablo Neruda"],
                correct: 1
            },
            {
                question: "In literary theory, what does 'deconstruction' refer to?",
                options: [
                    "Analyzing how binary oppositions in text undermine its meaning",
                    "Breaking down a text into its grammatical components",
                    "The process of editing and revising a manuscript",
                    "Translating literature from one language to another"
                ],
                correct: 0
            }
        ]
    },
    geography: {
        easy: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which continent is the largest?",
                options: ["Africa", "Asia", "North America", "Europe"],
                correct: 1
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1
            },
            {
                question: "Which ocean is between America and Europe?",
                options: ["Pacific", "Indian", "Atlantic", "Arctic"],
                correct: 2
            },
            {
                question: "What is the hottest continent?",
                options: ["Africa", "Asia", "Australia", "South America"],
                correct: 0
            },
            {
                question: "Which country is both a continent and a country?",
                options: ["New Zealand", "Australia", "Greenland", "Madagascar"],
                correct: 1
            },
            {
                question: "What is the imaginary line that divides the Earth into Northern and Southern Hemispheres?",
                options: ["Equator", "Prime Meridian", "Tropic of Cancer", "Tropic of Capricorn"],
                correct: 0
            },
            {
                question: "Which of these is a landlocked country?",
                options: ["Italy", "Spain", "Switzerland", "France"],
                correct: 2
            },
            {
                question: "What is the world's largest desert?",
                options: ["Sahara", "Gobi", "Arabian", "Antarctic"],
                correct: 3
            },
            {
                question: "Which mountain range separates Europe from Asia?",
                options: ["Alps", "Andes", "Urals", "Rockies"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2
            },
            {
                question: "Which country has the largest population in the world?",
                options: ["India", "United States", "China", "Indonesia"],
                correct: 2
            },
            {
                question: "What is the term for the study of Earth's physical features and human societies?",
                options: ["Geology", "Geography", "Anthropology", "Sociology"],
                correct: 1
            },
            {
                question: "Which river runs through Cairo, Egypt?",
                options: ["Tigris", "Euphrates", "Nile", "Jordan"],
                correct: 2
            },
            {
                question: "What is the world's smallest country by area?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correct: 1
            },
            {
                question: "Which African country was formerly known as Abyssinia?",
                options: ["Ethiopia", "Sudan", "Kenya", "Tanzania"],
                correct: 0
            },
            {
                question: "What is the term for a narrow strip of land connecting two larger land areas?",
                options: ["Peninsula", "Isthmus", "Archipelago", "Strait"],
                correct: 1
            },
            {
                question: "Which European country is shaped like a boot?",
                options: ["Greece", "Spain", "Italy", "Portugal"],
                correct: 2
            },
            {
                question: "What is the capital of Brazil?",
                options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                correct: 2
            },
            {
                question: "Which sea is located between Europe and Africa?",
                options: ["Mediterranean Sea", "Red Sea", "Black Sea", "Baltic Sea"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is the term for the gradual warming of Earth's climate due to human activities?",
                options: ["Ozone depletion", "Global warming", "Acid rain", "Desertification"],
                correct: 1
            },
            {
                question: "Which theory explains the movement of Earth's lithospheric plates?",
                options: ["Continental drift", "Plate tectonics", "Seafloor spreading", "Mantle convection"],
                correct: 1
            },
            {
                question: "What is the name for a triangular-shaped deposit of sediment at a river's mouth?",
                options: ["Estuary", "Delta", "Floodplain", "Alluvial fan"],
                correct: 1
            },
            {
                question: "Which country has the longest coastline in the world?",
                options: ["Russia", "Canada", "Indonesia", "Australia"],
                correct: 1
            },
            {
                question: "What is the term for the process by which fertile land becomes desert?",
                options: ["Erosion", "Deforestation", "Desertification", "Salinization"],
                correct: 2
            },
            {
                question: "Which city is located on two continents?",
                options: ["Moscow", "Istanbul", "Cairo", "Athens"],
                correct: 1
            },
            {
                question: "What is the name of the warm ocean current that affects Western Europe's climate?",
                options: ["Gulf Stream", "Kuroshio Current", "California Current", "Benguela Current"],
                correct: 0
            },
            {
                question: "Which country is the world's largest archipelagic state?",
                options: ["Philippines", "Japan", "Indonesia", "Malaysia"],
                correct: 2
            },
            {
                question: "What is the term for a map that shows elevation using contour lines?",
                options: ["Topographic map", "Thematic map", "Physical map", "Political map"],
                correct: 0
            },
            {
                question: "Which mountain is the highest in the world?",
                options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
                correct: 1
            }
        ]
    },
    math: {
        easy: [
            {
                question: "What is 7 × 8?",
                options: ["54", "56", "58", "60"],
                correct: 1
            },
            {
                question: "If you have 3 apples and you get 2 more, how many apples do you have?",
                options: ["3", "4", "5", "6"],
                correct: 2
            },
            {
                question: "What is 15 ÷ 3?",
                options: ["3", "4", "5", "6"],
                correct: 2
            },
            {
                question: "Which number comes next: 2, 4, 6, 8, ...?",
                options: ["9", "10", "11", "12"],
                correct: 1
            },
            {
                question: "What is 25 + 17?",
                options: ["32", "42", "52", "62"],
                correct: 1
            },
            {
                question: "How many sides does a triangle have?",
                options: ["2", "3", "4", "5"],
                correct: 1
            },
            {
                question: "What is 100 - 45?",
                options: ["45", "55", "65", "75"],
                correct: 1
            },
            {
                question: "Which shape has 4 equal sides?",
                options: ["Rectangle", "Square", "Triangle", "Circle"],
                correct: 1
            },
            {
                question: "What is 9 × 6?",
                options: ["45", "54", "63", "72"],
                correct: 1
            },
            {
                question: "If a pizza is cut into 8 slices and you eat 3, how many slices are left?",
                options: ["3", "4", "5", "6"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What is the value of x in the equation 2x + 5 = 15?",
                options: ["5", "10", "15", "20"],
                correct: 0
            },
            {
                question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
                options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
                correct: 2
            },
            {
                question: "What is 3/4 as a decimal?",
                options: ["0.25", "0.5", "0.75", "1.25"],
                correct: 2
            },
            {
                question: "What is the square root of 144?",
                options: ["11", "12", "13", "14"],
                correct: 1
            },
            {
                question: "If a triangle has angles of 45° and 55°, what is the measure of the third angle?",
                options: ["60°", "70°", "80°", "90°"],
                correct: 2
            },
            {
                question: "What is 15% of 200?",
                options: ["15", "20", "30", "45"],
                correct: 2
            },
            {
                question: "What is the perimeter of a square with side length 7 cm?",
                options: ["14 cm", "21 cm", "28 cm", "49 cm"],
                correct: 2
            },
            {
                question: "Solve for y: 3y - 7 = 14",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is the value of 4³?",
                options: ["12", "16", "64", "81"],
                correct: 2
            },
            {
                question: "What is the mean of these numbers: 5, 7, 9, 11, 13?",
                options: ["7", "8", "9", "10"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What is the derivative of x³?",
                options: ["x²", "2x²", "3x²", "4x²"],
                correct: 2
            },
            {
                question: "What is the value of ∫(2x)dx from 0 to 3?",
                options: ["6", "9", "12", "18"],
                correct: 1
            },
            {
                question: "What is the solution to the equation e^x = 10?",
                options: ["x = ln(10)", "x = log(10)", "x = 10/e", "x = e/10"],
                correct: 0
            },
            {
                question: "What is the probability of getting a head when flipping a fair coin?",
                options: ["0", "0.25", "0.5", "1"],
                correct: 2
            },
            {
                question: "What is the value of i², where i is the imaginary unit?",
                options: ["-1", "0", "1", "i"],
                correct: 0
            },
            {
                question: "What is the determinant of a 2x2 matrix [[a,b],[c,d]]?",
                options: ["ab - cd", "ad - bc", "ac - bd", "a + d - b - c"],
                correct: 1
            },
            {
                question: "What is the limit of (sin x)/x as x approaches 0?",
                options: ["0", "1", "∞", "Undefined"],
                correct: 1
            },
            {
                question: "What is the formula for the circumference of a circle?",
                options: ["πr", "2πr", "πr²", "4πr²"],
                correct: 1
            },
            {
                question: "What is the solution to the differential equation dy/dx = y?",
                options: ["y = e^x", "y = x", "y = ln(x)", "y = x²"],
                correct: 0
            },
            {
                question: "What is the value of cos(π)?",
                options: ["0", "1", "-1", "π"],
                correct: 2
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who was the first Prime Minister of Malaysia?",
                options: ["Tun Abdul Razak", "Tunku Abdul Rahman", "Tun Hussein Onn", "Tun Dr. Mahathir Mohamad"],
                correct: 1
            },
            {
                question: "In which year did Malaysia gain independence?",
                options: ["1945", "1957", "1963", "1965"],
                correct: 1
            },
            {
                question: "Who discovered America in 1492?",
                options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "James Cook"],
                correct: 1
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: ["Greeks", "Romans", "Egyptians", "Mayans"],
                correct: 2
            },
            {
                question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
                options: ["Santa Maria", "Mayflower", "Nina", "Pinta"],
                correct: 1
            },
            {
                question: "Which war was fought between the North and South in the United States?",
                options: ["World War I", "World War II", "Civil War", "Revolutionary War"],
                correct: 2
            },
            {
                question: "Who was the first president of the United States?",
                options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
                correct: 2
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek Empire", "Roman Empire", "Egyptian Empire", "Persian Empire"],
                correct: 1
            },
            {
                question: "What was the name of the document that declared American independence?",
                options: ["Constitution", "Bill of Rights", "Declaration of Independence", "Magna Carta"],
                correct: 2
            },
            {
                question: "Which country was Nelson Mandela from?",
                options: ["Egypt", "South Africa", "Nigeria", "Kenya"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What was the name of the agreement that formed Malaysia in 1963?",
                options: ["Kuala Lumpur Agreement", "Malaysia Agreement", "Singapore Agreement", "Malaya Agreement"],
                correct: 1
            },
            {
                question: "Which sultanate was the first established in the Malay Peninsula?",
                options: ["Malacca Sultanate", "Johor Sultanate", "Kedah Sultanate", "Perak Sultanate"],
                correct: 0
            },
            {
                question: "What was the main cause of World War I?",
                options: [
                    "Economic depression",
                    "Assassination of Archduke Franz Ferdinand",
                    "German invasion of Poland",
                    "Japanese attack on Pearl Harbor"
                ],
                correct: 1
            },
            {
                question: "Which civilization invented democracy?",
                options: ["Romans", "Egyptians", "Greeks", "Persians"],
                correct: 2
            },
            {
                question: "Who was the British Prime Minister during World War II?",
                options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
                correct: 1
            },
            {
                question: "What was the Renaissance?",
                options: [
                    "A period of cultural and artistic rebirth in Europe",
                    "The French Revolution",
                    "The Industrial Revolution",
                    "The Age of Exploration"
                ],
                correct: 0
            },
            {
                question: "Which empire was known for building the Great Wall?",
                options: ["Mongol Empire", "Chinese Empire", "Roman Empire", "Ottoman Empire"],
                correct: 1
            },
            {
                question: "What was the name of the ship that Charles Darwin sailed on?",
                options: ["Beagle", "Endeavour", "Victory", "Discovery"],
                correct: 0
            },
            {
                question: "Which event marked the beginning of the French Revolution?",
                options: [
                    "Storming of the Bastille",
                    "Execution of Louis XVI",
                    "Reign of Terror",
                    "Napoleon's coup"
                ],
                correct: 0
            },
            {
                question: "Who was the first female Prime Minister of the United Kingdom?",
                options: ["Queen Victoria", "Margaret Thatcher", "Theresa May", "Indira Gandhi"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What was the significance of the 1948 Federation of Malaya Agreement?",
                options: [
                    "It established the Malayan Union",
                    "It created the Federation of Malaya as a protectorate",
                    "It granted independence to Malaysia",
                    "It formed Malaysia with Singapore, Sabah, and Sarawak"
                ],
                correct: 1
            },
            {
                question: "Who was the last Sultan of Malacca before it fell to the Portuguese in 1511?",
                options: ["Sultan Mansur Shah", "Sultan Alauddin Riayat Shah", "Sultan Mahmud Shah", "Sultan Ahmad Shah"],
                correct: 2
            },
            {
                question: "What was the Cold War?",
                options: [
                    "A war fought in cold climates",
                    "A period of geopolitical tension between the US and USSR",
                    "A war over natural resources",
                    "A conflict between China and Japan"
                ],
                correct: 1
            },
            {
                question: "Which philosopher wrote 'The Communist Manifesto'?",
                options: ["Adam Smith", "Karl Marx", "John Locke", "Friedrich Nietzsche"],
                correct: 1
            },
            {
                question: "What was the main cause of the Industrial Revolution?",
                options: [
                    "Invention of the steam engine",
                    "Discovery of electricity",
                    "French Revolution",
                    "American Civil War"
                ],
                correct: 0
            },
            {
                question: "Which civilization developed the concept of zero?",
                options: ["Egyptians", "Greeks", "Mayans", "Indians"],
                correct: 3
            },
            {
                question: "What was the significance of the Treaty of Versailles?",
                options: [
                    "It ended World War I",
                    "It started World War II",
                    "It established the United Nations",
                    "It created the European Union"
                ],
                correct: 0
            },
            {
                question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
                options: ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Leonid Brezhnev"],
                correct: 2
            },
            {
                question: "What was the Silk Road?",
                options: [
                    "A trade route connecting China to the Mediterranean",
                    "A road made of silk",
                    "A military route used by the Romans",
                    "A pilgrimage route to Mecca"
                ],
                correct: 0
            },
            {
                question: "Which event is considered the start of the Protestant Reformation?",
                options: [
                    "Martin Luther posting his 95 Theses",
                    "The Council of Trent",
                    "The English Reformation",
                    "The French Wars of Religion"
                ],
                correct: 0
            }
        ]
    }
};

// Quiz state
let currentQuiz = {
    topic: null,
    difficulty: null,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    timer: null,
    timeLeft: 60
};

// DOM elements
const startQuizPopup = document.getElementById('start-quiz-popup');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizTitle = document.getElementById('quiz-title');
const quizDifficulty = document.getElementById('quiz-difficulty');
const progressFill = document.getElementById('progress-fill');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const timerText = document.getElementById('timer-text');
const timerProgress = document.getElementById('timer-progress');
const finalScore = document.getElementById('final-score');
const maxScore = document.getElementById('max-score');
const resultsMessage = document.getElementById('results-message');
const answersReview = document.getElementById('answers-review');
const retryBtn = document.getElementById('retry-btn');
const newQuizBtn = document.getElementById('new-quiz-btn');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Set up quiz control buttons
    startQuizBtn.addEventListener('click', startRandomQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    retryBtn.addEventListener('click', retryQuiz);
    newQuizBtn.addEventListener('click', newQuiz);
    
    // Set up difficulty buttons on topics page
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.dataset.topic;
            const difficulty = this.dataset.difficulty;
            startSpecificQuiz(topic, difficulty);
        });
    });
    
    // Check if URL has parameters for specific quiz
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    const difficulty = urlParams.get('difficulty');
    
    if (topic && difficulty) {
        startSpecificQuiz(topic, difficulty);
    }
});

// Start a specific quiz
function startSpecificQuiz(topic, difficulty) {
    currentQuiz = {
        topic: topic,
        difficulty: difficulty,
        questions: [...questionSets[topic][difficulty]], // Create a copy
        currentQuestionIndex: 0,
        score: 0,
        userAnswers: [],
        timer: null,
        timeLeft: 60
    };
    
    // Update UI
    quizTitle.textContent = `${capitalizeFirstLetter(topic)} Quiz`;
    quizDifficulty.textContent = `${capitalizeFirstLetter(difficulty)} Level`;
    totalQuestionsElement.textContent = currentQuiz.questions.length;
    
    // Hide popup and show quiz screen
    startQuizPopup.classList.remove('active');
    quizScreen.classList.add('active');
    
    // Display first question
    displayQuestion();
}

// Start a random quiz
function startRandomQuiz() {
    // Select a random topic
    const topics = Object.keys(questionSets);
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    
    // Always use easy difficulty for random quiz
    const difficulty = 'easy';
    
    startSpecificQuiz(randomTopic, difficulty);
}

// Display current question
function displayQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuiz.currentQuestionIndex) / currentQuiz.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentQuestionElement.textContent = currentQuiz.currentQuestionIndex + 1;
    
    // Display question
    questionText.textContent = question.question;
    
    // Display options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionElement);
    });
    
    // Hide next button (auto-transition now)
    nextBtn.style.display = 'none';
    
    // Start timer
    startTimer();
}

// Start timer for current question
function startTimer() {
    // Reset timer
    currentQuiz.timeLeft = 60;
    timerText.textContent = currentQuiz.timeLeft;
    timerText.classList.remove('timer-warning');
    
    // Update timer circle
    const circumference = 2 * Math.PI * 45;
    timerProgress.style.strokeDasharray = circumference;
    timerProgress.style.strokeDashoffset = circumference;
    
    // Clear any existing timer
    if (currentQuiz.timer) {
        clearInterval(currentQuiz.timer);
    }
    
    // Start new timer
    currentQuiz.timer = setInterval(() => {
        currentQuiz.timeLeft--;
        timerText.textContent = currentQuiz.timeLeft;
        
        // Update timer circle
        const offset = circumference - (currentQuiz.timeLeft / 30) * circumference;
        timerProgress.style.strokeDashoffset = offset;
        
        // Warning when time is running out
        if (currentQuiz.timeLeft <= 10) {
            timerText.classList.add('timer-warning');
        }
        
        // Time's up
        if (currentQuiz.timeLeft <= 0) {
            clearInterval(currentQuiz.timer);
            timeUp();
        }
    }, 1000);
}

// Handle time up
function timeUp() {
    // Mark question as unanswered
    currentQuiz.userAnswers[currentQuiz.currentQuestionIndex] = -1;
    
    // Show correct answer
    const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    options[question.correct].classList.add('correct');
    
    // Auto transition to next question after delay
    setTimeout(nextQuestion, 2000);
}

// Handle option selection
function selectOption() {
    // Clear timer
    clearInterval(currentQuiz.timer);
    
    // Remove any existing selections
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected');
    });
    
    // Mark this option as selected
    this.classList.add('selected');
    
    // Store user's answer
    const selectedIndex = parseInt(this.dataset.index);
    currentQuiz.userAnswers[currentQuiz.currentQuestionIndex] = selectedIndex;
    
    // Check if answer is correct
    const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Show feedback
    if (isCorrect) {
        this.classList.add('correct');
        currentQuiz.score++;
    } else {
        this.classList.add('incorrect');
        // Show correct answer
        options[question.correct].classList.add('correct');
    }
    
    // Auto transition to next question after delay
    setTimeout(nextQuestion, 1500);
}

// Move to next question or show results
function nextQuestion() {
    // Move to next question or show results
    currentQuiz.currentQuestionIndex++;
    
    if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Show quiz results
function showResults() {
    // Update results
    finalScore.textContent = currentQuiz.score;
    maxScore.textContent = currentQuiz.questions.length;
    
    // Set results message
    const percentage = (currentQuiz.score / currentQuiz.questions.length) * 100;
    if (percentage >= 90) {
        resultsMessage.textContent = "Excellent! You're a quiz master!";
    } else if (percentage >= 70) {
        resultsMessage.textContent = "Great job! You know your stuff!";
    } else if (percentage >= 50) {
        resultsMessage.textContent = "Good effort! Keep learning!";
    } else {
        resultsMessage.textContent = "Keep practicing to improve!";
    }
    
    // Show answer review
    answersReview.innerHTML = '';
    currentQuiz.questions.forEach((question, index) => {
        const userAnswerIndex = currentQuiz.userAnswers[index];
        const isCorrect = userAnswerIndex === question.correct;
        const isUnanswered = userAnswerIndex === -1;
        
        const reviewElement = document.createElement('div');
        reviewElement.className = `answer-review ${isCorrect ? 'correct' : 'incorrect'}`;
        
        let userAnswerText = 'Not answered';
        if (!isUnanswered) {
            userAnswerText = question.options[userAnswerIndex];
        }
        
        reviewElement.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <p>Your answer: ${userAnswerText}</p>
            ${!isCorrect ? `<p class="correct-answer">Correct answer: ${question.options[question.correct]}</p>` : ''}
        `;
        
        answersReview.appendChild(reviewElement);
    });
    
    // Switch screens
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
}

// Retry the same quiz
function retryQuiz() {
    startSpecificQuiz(currentQuiz.topic, currentQuiz.difficulty);
}

// Start a new quiz (back to popup)
function newQuiz() {
    resultsScreen.classList.remove('active');
    startQuizPopup.classList.add('active');
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Check for URL parameters and start specific quiz if present
document.addEventListener('DOMContentLoaded', function() {
    // Check if URL has parameters for specific quiz
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    const difficulty = urlParams.get('difficulty');
    
    // If we're on the quiz page and have parameters, start the specific quiz
    if (window.location.pathname.includes('quiz.html') && topic && difficulty) {
        // Hide the popup and start the specific quiz
        startQuizPopup.classList.remove('active');
        startSpecificQuiz(topic, difficulty);
    }
});

// Start a specific quiz from URL parameters or direct link
function startSpecificQuiz(topic, difficulty) {
    // Validate topic and difficulty
    if (!questionSets[topic] || !questionSets[topic][difficulty]) {
        alert('Invalid quiz selection. Please try again.');
        return;
    }
    
    currentQuiz = {
        topic: topic,
        difficulty: difficulty,
        questions: [...questionSets[topic][difficulty]], // Create a copy
        currentQuestionIndex: 0,
        score: 0,
        userAnswers: [],
        timer: null,
        timeLeft: 60
    };
    
    // Update UI
    quizTitle.textContent = `${capitalizeFirstLetter(topic)} Quiz`;
    quizDifficulty.textContent = `${capitalizeFirstLetter(difficulty)} Level`;
    totalQuestionsElement.textContent = currentQuiz.questions.length;
    
    // Set background based on topic
    document.body.className = `${topic}-bg`;
    
    // Switch screens
    startQuizPopup.classList.remove('active');
    quizScreen.classList.add('active');
    
    // Display first question
    displayQuestion();
}

// Update showResults function to include dynamic graphics
function showResults() {
    // Update results
    finalScore.textContent = currentQuiz.score;
    maxScore.textContent = currentQuiz.questions.length;
    
    // Set results message and graphic based on score
    const percentage = (currentQuiz.score / currentQuiz.questions.length) * 100;
    const resultsGraphic = document.getElementById('results-graphic');
    
    if (percentage >= 90) {
        resultsMessage.textContent = "Excellent! You're a quiz master!";
        resultsGraphic.innerHTML = '<div class="trophy-icon">🏆</div>';
    } else if (percentage >= 70) {
        resultsMessage.textContent = "Great job! You know your stuff!";
        resultsGraphic.innerHTML = '<div class="clap-icon">👏</div>';
    } else if (percentage >= 50) {
        resultsMessage.textContent = "Good effort! Keep learning!";
        resultsGraphic.innerHTML = '<div class="lightbulb-icon">💡</div>';
    } else {
        resultsMessage.textContent = "Keep practicing to improve!";
        resultsGraphic.innerHTML = '<div class="growth-icon">🌱</div>';
    }
    
    // Rest of the showResults function remains the same...
    // Show answer review
    answersReview.innerHTML = '';
    currentQuiz.questions.forEach((question, index) => {
        const userAnswerIndex = currentQuiz.userAnswers[index];
        const isCorrect = userAnswerIndex === question.correct;
        const isUnanswered = userAnswerIndex === -1;
        
        const reviewElement = document.createElement('div');
        reviewElement.className = `answer-review ${isCorrect ? 'correct' : 'incorrect'}`;
        
        let userAnswerText = 'Not answered';
        if (!isUnanswered) {
            userAnswerText = question.options[userAnswerIndex];
        }
        
        reviewElement.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <p>Your answer: ${userAnswerText}</p>
            ${!isCorrect ? `<p class="correct-answer">Correct answer: ${question.options[question.correct]}</p>` : ''}
        `;
        
        answersReview.appendChild(reviewElement);
    });
    
    // Switch screens
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
}
