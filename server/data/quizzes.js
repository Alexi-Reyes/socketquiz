const quizzes = {
    "general": {
        name: "General Knowledge Quiz",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Rome"],
                answer: "Paris"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Venus", "Jupiter", "Mars"],
                answer: "Mars"
            },
            {
                question: "What is 7 * 8?",
                options: ["49", "64", "56", "72"],
                answer: "56"
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                answer: "Pacific"
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                answer: "Leonardo da Vinci"
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Au", "Ag", "Fe", "Pb"],
                answer: "Au"
            },
            {
                question: "Which country is famous for the Great Wall?",
                options: ["India", "China", "Japan", "Egypt"],
                answer: "China"
            },
            {
                question: "What is the highest mountain in the world?",
                options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
                answer: "Mount Everest"
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                answer: "7"
            },
            {
                question: "What is the currency of Japan?",
                options: ["Yuan", "Won", "Yen", "Rupee"],
                answer: "Yen"
            }
        ]
    },
    "science": {
        name: "Science Quiz",
        questions: [
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "O2", "N2"],
                answer: "H2O"
            },
            {
                question: "What is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                answer: "2"
            },
            {
                question: "What force keeps planets in orbit around the sun?",
                options: ["Magnetism", "Friction", "Gravity", "Electromagnetism"],
                answer: "Gravity"
            },
            {
                question: "What is the main gas that makes up the Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                answer: "Nitrogen"
            },
            {
                question: "What is the process by which plants convert light energy into chemical energy?",
                options: ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
                answer: "Photosynthesis"
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Quartz"],
                answer: "Diamond"
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                answer: "Carbon Dioxide"
            },
            {
                question: "What is the unit of electric current?",
                options: ["Volt", "Ohm", "Ampere", "Watt"],
                answer: "Ampere"
            },
            {
                question: "What is the boiling point of water in Celsius?",
                options: ["0°C", "50°C", "100°C", "212°C"],
                answer: "100°C"
            },
            {
                question: "What is the chemical symbol for oxygen?",
                options: ["O", "Ox", "O2", "Oz"],
                answer: "O"
            }
        ]
    },
    "history": {
        name: "History Quiz",
        questions: [
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
                answer: "George Washington"
            },
            {
                question: "In what year did World War II end?",
                options: ["1942", "1945", "1950", "1939"],
                answer: "1945"
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: ["Roman", "Greek", "Egyptian", "Mayan"],
                answer: "Egyptian"
            },
            {
                question: "Who discovered America in 1492?",
                options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Marco Polo"],
                answer: "Christopher Columbus"
            },
            {
                question: "What was the primary cause of the American Civil War?",
                options: ["Taxation", "Slavery", "Territorial Expansion", "Religious Differences"],
                answer: "Slavery"
            },
            {
                question: "Who was the leader of the Soviet Union during World War II?",
                options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leon Trotsky"],
                answer: "Joseph Stalin"
            },
            {
                question: "The Roman Empire was founded in what year?",
                options: ["753 BC", "44 BC", "27 BC", "330 AD"],
                answer: "27 BC"
            },
            {
                question: "Which queen ruled England for over 63 years?",
                options: ["Queen Elizabeth I", "Queen Victoria", "Queen Anne", "Queen Mary I"],
                answer: "Queen Victoria"
            },
            {
                question: "What event is considered the start of World War I?",
                options: ["Invasion of Poland", "Assassination of Archduke Franz Ferdinand", "Battle of Stalingrad", "Fall of Berlin Wall"],
                answer: "Assassination of Archduke Franz Ferdinand"
            },
            {
                question: "Who wrote the 'Declaration of Independence'?",
                options: ["Benjamin Franklin", "George Washington", "Thomas Jefferson", "John Adams"],
                answer: "Thomas Jefferson"
            }
        ]
    },
    "geography": {
        name: "Geography Quiz",
        questions: [
            {
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                answer: "Nile"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "South Korea", "Japan", "Thailand"],
                answer: "Japan"
            },
            {
                question: "What is the highest mountain in Africa?",
                options: ["Mount Everest", "Mount Kilimanjaro", "Mount Fuji", "Mount Blanc"],
                answer: "Mount Kilimanjaro"
            },
            {
                question: "What is the capital of Canada?",
                options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
                answer: "Ottawa"
            },
            {
                question: "Which desert is the largest hot desert in the world?",
                options: ["Gobi", "Kalahari", "Sahara", "Arabian"],
                answer: "Sahara"
            },
            {
                question: "What is the smallest continent by land area?",
                options: ["Europe", "Antarctica", "Australia", "South America"],
                answer: "Australia"
            },
            {
                question: "Which ocean is the warmest?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                answer: "Indian"
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                answer: "Canberra"
            },
            {
                question: "Which country has the most natural lakes?",
                options: ["USA", "Canada", "Russia", "China"],
                answer: "Canada"
            },
            {
                question: "What is the longest mountain range in South America?",
                options: ["Rocky Mountains", "Alps", "Andes", "Himalayas"],
                answer: "Andes"
            }
        ]
    },
    "literature": {
        name: "Literature Quiz",
        questions: [
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                answer: "William Shakespeare"
            },
            {
                question: "What is the title of the first Harry Potter book?",
                options: ["Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Sorcerer's Stone", "Harry Potter and the Goblet of Fire"],
                answer: "Harry Potter and the Sorcerer's Stone"
            },
            {
                question: "Who is the author of 'To Kill a Mockingbird'?",
                options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
                answer: "Harper Lee"
            },
            {
                question: "Which novel features the character 'Atticus Finch'?",
                options: ["1984", "The Great Gatsby", "To Kill a Mockingbird", "Pride and Prejudice"],
                answer: "To Kill a Mockingbird"
            },
            {
                question: "Who wrote '1984'?",
                options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "J.R.R. Tolkien"],
                answer: "George Orwell"
            },
            {
                question: "What is the name of Sherlock Holmes's loyal friend and biographer?",
                options: ["Mycroft Holmes", "Professor Moriarty", "Dr. Watson", "Irene Adler"],
                answer: "Dr. Watson"
            },
            {
                question: "Which epic poem tells the story of Odysseus's journey home?",
                options: ["The Iliad", "The Aeneid", "The Odyssey", "Beowulf"],
                answer: "The Odyssey"
            },
            {
                question: "Who is the author of 'The Lord of the Rings'?",
                options: ["C.S. Lewis", "J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien"],
                answer: "J.R.R. Tolkien"
            },
            {
                question: "In 'Alice's Adventures in Wonderland', who is always late?",
                options: ["The Mad Hatter", "The Queen of Hearts", "The White Rabbit", "The Cheshire Cat"],
                answer: "The White Rabbit"
            },
            {
                question: "Which literary device involves a contrast between what is said and what is actually meant?",
                options: ["Metaphor", "Simile", "Irony", "Alliteration"],
                answer: "Irony"
            }
        ]
    },
    "movies": {
        name: "Movies Quiz",
        questions: [
            {
                question: "Who directed the movie 'Titanic'?",
                options: ["Steven Spielberg", "James Cameron", "George Lucas", "Alfred Hitchcock"],
                answer: "James Cameron"
            },
            {
                question: "Which film won the first Academy Award for Best Picture?",
                options: ["Wings", "Sunrise: A Song of Two Humans", "The Jazz Singer", "Metropolis"],
                answer: "Wings"
            },
            {
                question: "What is the name of the fictional African country in 'Black Panther'?",
                options: ["Zambesi", "Wakanda", "Genosha", "Krypton"],
                answer: "Wakanda"
            },
            {
                question: "Who played the role of Neo in 'The Matrix'?",
                options: ["Brad Pitt", "Tom Cruise", "Keanu Reeves", "Leonardo DiCaprio"],
                answer: "Keanu Reeves"
            },
            {
                question: "Which movie features a character named 'Forrest Gump'?",
                options: ["Saving Private Ryan", "Cast Away", "Forrest Gump", "Apollo 13"],
                answer: "Forrest Gump"
            },
            {
                question: "What is the name of the spaceship in 'Alien'?",
                options: ["Millennium Falcon", "Nostromo", "Enterprise", "Serenity"],
                answer: "Nostromo"
            },
            {
                question: "Who composed the soundtrack for 'Star Wars'?",
                options: ["Hans Zimmer", "Ennio Morricone", "John Williams", "Danny Elfman"],
                answer: "John Williams"
            },
            {
                question: "Which animated film features a lion cub named Simba?",
                options: ["Finding Nemo", "The Lion King", "Toy Story", "Shrek"],
                answer: "The Lion King"
            },
            {
                question: "What is the famous line from 'The Sixth Sense'?",
                options: ["Here's Johnny!", "I see dead people.", "May the Force be with you.", "Houston, we have a problem."],
                answer: "I see dead people."
            },
            {
                question: "Which actor is known for his roles in 'Pulp Fiction' and 'Django Unchained'?",
                options: ["Denzel Washington", "Morgan Freeman", "Samuel L. Jackson", "Will Smith"],
                answer: "Samuel L. Jackson"
            }
        ]
    },
    "music": {
        name: "Music Quiz",
        questions: [
            {
                question: "Who is known as the 'King of Pop'?",
                options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
                answer: "Michael Jackson"
            },
            {
                question: "Which band released the album 'Abbey Road'?",
                options: ["The Rolling Stones", "Led Zeppelin", "The Beatles", "Queen"],
                answer: "The Beatles"
            },
            {
                question: "What instrument does Yo-Yo Ma play?",
                options: ["Violin", "Piano", "Cello", "Flute"],
                answer: "Cello"
            },
            {
                question: "Who wrote the song 'Bohemian Rhapsody'?",
                options: ["John Lennon", "Paul McCartney", "Freddie Mercury", "David Bowie"],
                answer: "Freddie Mercury"
            },
            {
                question: "Which singer is known for hits like 'Single Ladies' and 'Crazy in Love'?",
                options: ["Rihanna", "Adele", "Beyoncé", "Taylor Swift"],
                answer: "Beyoncé"
            },
            {
                question: "What is the highest vocal range for a male singer?",
                options: ["Tenor", "Baritone", "Bass", "Countertenor"],
                answer: "Countertenor"
            },
            {
                question: "Which classical composer was deaf?",
                options: ["Mozart", "Bach", "Beethoven", "Chopin"],
                answer: "Beethoven"
            },
            {
                question: "What genre of music originated in Jamaica in the late 1960s?",
                options: ["Ska", "Reggae", "Dancehall", "Calypso"],
                answer: "Reggae"
            },
            {
                question: "Which artist is famous for the song 'Like a Rolling Stone'?",
                options: ["Bob Dylan", "Bruce Springsteen", "Neil Young", "Joni Mitchell"],
                answer: "Bob Dylan"
            },
            {
                question: "What is the name of the annual music festival held in California?",
                options: ["Glastonbury", "Lollapalooza", "Coachella", "Tomorrowland"],
                answer: "Coachella"
            }
        ]
    },
    "sports": {
        name: "Sports Quiz",
        questions: [
            {
                question: "How many players are on a standard soccer team?",
                options: ["9", "10", "11", "12"],
                answer: "11"
            },
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Italy", "Brazil", "Argentina"],
                answer: "Brazil"
            },
            {
                question: "What is a 'birdie' in golf?",
                options: ["One stroke over par", "One stroke under par", "Two strokes under par", "Two strokes over par"],
                answer: "One stroke under par"
            },
            {
                question: "In basketball, how many points is a free throw worth?",
                options: ["1", "2", "3", "4"],
                answer: "1"
            },
            {
                question: "Which sport uses a shuttlecock?",
                options: ["Tennis", "Badminton", "Volleyball", "Squash"],
                answer: "Badminton"
            },
            {
                question: "What is the maximum number of clubs allowed in a golf bag?",
                options: ["10", "12", "14", "16"],
                answer: "14"
            },
            {
                question: "Which city hosted the 2016 Summer Olympics?",
                options: ["London", "Beijing", "Rio de Janeiro", "Tokyo"],
                answer: "Rio de Janeiro"
            },
            {
                question: "What is the term for a perfect game in bowling?",
                options: ["200", "250", "300", "350"],
                answer: "300"
            },
            {
                question: "Which famous boxer was known as 'The Greatest'?",
                options: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather Jr.", "Manny Pacquiao"],
                answer: "Muhammad Ali"
            },
            {
                question: "How many bases are there in baseball?",
                options: ["3", "4", "5", "6"],
                answer: "4"
            }
        ]
    },
    "animals": {
        name: "Animals Quiz",
        questions: [
            {
                question: "What is the fastest land animal?",
                options: ["Lion", "Cheetah", "Gazelle", "Horse"],
                answer: "Cheetah"
            },
            {
                question: "Which animal is known as the 'ship of the desert'?",
                options: ["Camel", "Elephant", "Horse", "Donkey"],
                answer: "Camel"
            },
            {
                question: "What do you call a group of lions?",
                options: ["Herd", "Pack", "Pride", "Flock"],
                answer: "Pride"
            },
            {
                question: "Which bird is known for its ability to mimic human speech?",
                options: ["Eagle", "Owl", "Parrot", "Pigeon"],
                answer: "Parrot"
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                answer: "Blue Whale"
            },
            {
                question: "Which insect is known for producing honey?",
                options: ["Ant", "Wasp", "Bee", "Fly"],
                answer: "Bee"
            },
            {
                question: "What is a baby kangaroo called?",
                options: ["Cub", "Joey", "Pup", "Kit"],
                answer: "Joey"
            },
            {
                question: "Which animal lays the largest eggs?",
                options: ["Chicken", "Ostrich", "Eagle", "Penguin"],
                answer: "Ostrich"
            },
            {
                question: "What is the only mammal capable of sustained flight?",
                options: ["Bird", "Bat", "Flying Squirrel", "Glider"],
                answer: "Bat"
            },
            {
                question: "Which aquatic animal has eight arms?",
                options: ["Jellyfish", "Starfish", "Octopus", "Squid"],
                answer: "Octopus"
            }
        ]
    },
    "food": {
        name: "Food Quiz",
        questions: [
            {
                question: "Which fruit is known as the 'king of fruits'?",
                options: ["Apple", "Banana", "Durian", "Mango"],
                answer: "Durian"
            },
            {
                question: "What is sushi traditionally wrapped in?",
                options: ["Rice paper", "Seaweed", "Lettuce", "Cabbage"],
                answer: "Seaweed"
            },
            {
                question: "Which country is the origin of pizza?",
                options: ["France", "Italy", "Greece", "Spain"],
                answer: "Italy"
            },
            {
                question: "What is the main ingredient in guacamole?",
                options: ["Tomato", "Onion", "Avocado", "Lime"],
                answer: "Avocado"
            },
            {
                question: "Which spice is known as 'red gold'?",
                options: ["Cinnamon", "Turmeric", "Saffron", "Paprika"],
                answer: "Saffron"
            },
            {
                question: "What is the primary ingredient in traditional hummus?",
                options: ["Lentils", "Chickpeas", "Black Beans", "Kidney Beans"],
                answer: "Chickpeas"
            },
            {
                question: "Which type of pasta is shaped like small grains of rice?",
                options: ["Spaghetti", "Penne", "Orzo", "Fettuccine"],
                answer: "Orzo"
            },
            {
                question: "What is the main ingredient in traditional French onion soup?",
                options: ["Beef broth", "Chicken broth", "Vegetable broth", "Onions"],
                answer: "Onions"
            },
            {
                question: "Which popular beverage is made from fermented tea?",
                options: ["Coffee", "Kombucha", "Beer", "Wine"],
                answer: "Kombucha"
            },
            {
                question: "What is the name of the Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese?",
                options: ["Panna Cotta", "Cannoli", "Tiramisu", "Gelato"],
                answer: "Tiramisu"
            }
        ]
    },
    "technology": {
        name: "Technology Quiz",
        questions: [
            {
                question: "What does 'CPU' stand for?",
                options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Core Processing Unit"],
                answer: "Central Processing Unit"
            },
            {
                question: "Who co-founded Microsoft with Bill Gates?",
                options: ["Steve Jobs", "Paul Allen", "Mark Zuckerberg", "Larry Page"],
                answer: "Paul Allen"
            },
            {
                question: "What is the most popular programming language for web development?",
                options: ["Python", "Java", "C++", "JavaScript"],
                answer: "JavaScript"
            },
            {
                question: "What does 'RAM' stand for?",
                options: ["Read Access Memory", "Random Access Memory", "Rapid Application Memory", "Remote Access Module"],
                answer: "Random Access Memory"
            },
            {
                question: "Which company developed the Android operating system?",
                options: ["Apple", "Google", "Microsoft", "Samsung"],
                answer: "Google"
            },
            {
                question: "What is the smallest unit of data in a computer?",
                options: ["Byte", "Kilobyte", "Bit", "Megabyte"],
                answer: "Bit"
            },
            {
                question: "What is the full form of 'WWW'?",
                options: ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"],
                answer: "World Wide Web"
            },
            {
                question: "Which of these is a search engine?",
                options: ["Facebook", "Twitter", "Google", "Instagram"],
                answer: "Google"
            },
            {
                question: "What is 'HTTP' primarily used for?",
                options: ["Sending emails", "Transferring files", "Browsing web pages", "Database management"],
                answer: "Browsing web pages"
            },
            {
                question: "What is the name of Apple's virtual assistant?",
                options: ["Alexa", "Cortana", "Siri", "Google Assistant"],
                answer: "Siri"
            }
        ]
    },
    "art": {
        name: "Art Quiz",
        questions: [
            {
                question: "Which artist is famous for cutting off his own ear?",
                options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
                answer: "Vincent van Gogh"
            },
            {
                question: "What is the name of the famous statue by Michelangelo depicting a man?",
                options: ["David", "Pieta", "Moses", "The Thinker"],
                answer: "David"
            },
            {
                question: "Which art movement is characterized by dreamlike and illogical scenes?",
                options: ["Impressionism", "Cubism", "Surrealism", "Realism"],
                answer: "Surrealism"
            },
            {
                question: "Who painted 'The Starry Night'?",
                options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
                answer: "Vincent van Gogh"
            },
            {
                question: "What is the technique of painting on wet plaster called?",
                options: ["Oil painting", "Watercolor", "Fresco", "Tempera"],
                answer: "Fresco"
            },
            {
                question: "Which artist is known for his 'Campbell's Soup Cans' series?",
                options: ["Jackson Pollock", "Andy Warhol", "Roy Lichtenstein", "Banksy"],
                answer: "Andy Warhol"
            },
            {
                question: "What is the name of the art museum in Paris that houses the Mona Lisa?",
                options: ["Musée d'Orsay", "Centre Pompidou", "Louvre Museum", "Musée Rodin"],
                answer: "Louvre Museum"
            },
            {
                question: "Which color is created by mixing red and blue?",
                options: ["Green", "Yellow", "Orange", "Purple"],
                answer: "Purple"
            },
            {
                question: "What is a 'still life' painting?",
                options: ["A portrait of a person", "A landscape painting", "A painting of inanimate objects", "A painting of animals"],
                answer: "A painting of inanimate objects"
            },
            {
                question: "Who sculpted 'The Thinker'?",
                options: ["Donatello", "Auguste Rodin", "Gian Lorenzo Bernini", "Michelangelo"],
                answer: "Auguste Rodin"
            }
        ]
    },
    "mythology": {
        name: "Mythology Quiz",
        questions: [
            {
                question: "Who is the king of the gods in Greek mythology?",
                options: ["Hades", "Poseidon", "Zeus", "Apollo"],
                answer: "Zeus"
            },
            {
                question: "What creature is half-man, half-bull?",
                options: ["Centaur", "Minotaur", "Griffin", "Sphinx"],
                answer: "Minotaur"
            },
            {
                question: "Which Norse god wields the hammer Mjolnir?",
                options: ["Odin", "Loki", "Thor", "Heimdall"],
                answer: "Thor"
            },
            {
                question: "Who is the Greek goddess of wisdom and warfare?",
                options: ["Hera", "Aphrodite", "Artemis", "Athena"],
                answer: "Athena"
            },
            {
                question: "What is the name of the three-headed dog guarding the underworld in Greek mythology?",
                options: ["Hydra", "Cerberus", "Chimera", "Gorgon"],
                answer: "Cerberus"
            },
            {
                question: "Which Roman god is the equivalent of the Greek god Zeus?",
                options: ["Mars", "Neptune", "Jupiter", "Pluto"],
                answer: "Jupiter"
            },
            {
                question: "What is the name of the mythical city said to be lost under the sea?",
                options: ["Troy", "Camelot", "Atlantis", "El Dorado"],
                answer: "Atlantis"
            },
            {
                question: "Who was the hero who slayed the Medusa?",
                options: ["Hercules", "Theseus", "Perseus", "Achilles"],
                answer: "Perseus"
            },
            {
                question: "In Egyptian mythology, who is the god of the sun?",
                options: ["Osiris", "Anubis", "Ra", "Horus"],
                answer: "Ra"
            },
            {
                question: "What is the name of the tree from which Norse mythology believes the first humans were created?",
                options: ["Yggdrasil", "Mímameiðr", "Læraðr", "Askr and Embla"],
                answer: "Askr and Embla"
            }
        ]
    },
    "space": {
        name: "Space Quiz",
        questions: [
            {
                question: "What is the name of our galaxy?",
                options: ["Andromeda", "Triangulum", "Whirlpool", "Milky Way"],
                answer: "Milky Way"
            },
            {
                question: "Which is the closest star to Earth?",
                options: ["Sirius", "Proxima Centauri", "Alpha Centauri", "Sun"],
                answer: "Sun"
            },
            {
                question: "What is a 'black hole'?",
                options: ["A type of star", "A region of spacetime where gravity is so strong that nothing can escape", "A dark planet", "A type of nebula"],
                answer: "A region of spacetime where gravity is so strong that nothing can escape"
            },
            {
                question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
                options: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Venus"
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Earth", "Saturn", "Jupiter", "Neptune"],
                answer: "Jupiter"
            },
            {
                question: "What is the name of the first artificial satellite launched into space?",
                options: ["Explorer 1", "Vanguard 1", "Sputnik 1", "Telstar 1"],
                answer: "Sputnik 1"
            },
            {
                question: "Which celestial body is famous for its rings?",
                options: ["Jupiter", "Uranus", "Neptune", "Saturn"],
                answer: "Saturn"
            },
            {
                question: "What is the phenomenon where light is bent as it passes through a gravitational field?",
                options: ["Redshift", "Blueshift", "Gravitational Lensing", "Cosmic Microwave Background"],
                answer: "Gravitational Lensing"
            },
            {
                question: "What is the name of the mission that first landed humans on the Moon?",
                options: ["Apollo 11", "Gemini 4", "Mercury-Redstone 3", "Soyuz 1"],
                answer: "Apollo 11"
            },
            {
                question: "Which dwarf planet was formerly considered the ninth planet?",
                options: ["Ceres", "Eris", "Pluto", "Haumea"],
                answer: "Pluto"
            }
        ]
    },
    "programming": {
        name: "Programming Quiz",
        questions: [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High-level Text Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
                answer: "Hyper Text Markup Language"
            },
            {
                question: "Which of these is a version control system?",
                options: ["Jira", "Slack", "Git", "Trello"],
                answer: "Git"
            },
            {
                question: "What is a 'variable' in programming?",
                options: ["A fixed value", "A named storage location for data", "A type of function", "A programming error"],
                answer: "A named storage location for data"
            },
            {
                question: "Which programming language is often used for artificial intelligence and machine learning?",
                options: ["Java", "C#", "Python", "Ruby"],
                answer: "Python"
            },
            {
                question: "What does 'CSS' stand for?",
                options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Solutions", "Cascading Simple Sheets"],
                answer: "Cascading Style Sheets"
            },
            {
                question: "What is a 'loop' in programming?",
                options: ["A type of data structure", "A sequence of instructions that is continually repeated", "A function call", "A conditional statement"],
                answer: "A sequence of instructions that is continually repeated"
            },
            {
                question: "Which company developed the JavaScript programming language?",
                options: ["Microsoft", "Google", "Netscape", "Apple"],
                answer: "Netscape"
            },
            {
                question: "What is the purpose of a 'compiler'?",
                options: ["To execute code", "To translate source code into machine code", "To debug code", "To manage memory"],
                answer: "To translate source code into machine code"
            },
            {
                question: "What does 'API' stand for?",
                options: ["Application Programming Interface", "Advanced Programming Instruction", "Automated Program Integration", "Application Process Integration"],
                answer: "Application Programming Interface"
            },
            {
                question: "Which data structure uses LIFO (Last In, First Out) principle?",
                options: ["Queue", "Array", "Stack", "Linked List"],
                answer: "Stack"
            }
        ]
    },
    "videogames": {
        name: "Video Games Quiz",
        questions: [
            {
                question: "What is the name of the protagonist in 'The Legend of Zelda' series?",
                options: ["Zelda", "Ganon", "Link", "Hyrule"],
                answer: "Link"
            },
            {
                question: "Which company developed 'Super Mario Bros.'?",
                options: ["Sega", "Sony", "Microsoft", "Nintendo"],
                answer: "Nintendo"
            },
            {
                question: "In 'Minecraft', what material is used to craft a pickaxe?",
                options: ["Wood", "Stone", "Iron", "All of the above"],
                answer: "All of the above"
            },
            {
                question: "What is the name of the main antagonist in the 'Sonic the Hedgehog' series?",
                options: ["Knuckles", "Tails", "Dr. Robotnik", "Shadow"],
                answer: "Dr. Robotnik"
            },
            {
                question: "Which game features characters like Master Chief and Cortana?",
                options: ["Call of Duty", "Halo", "Gears of War", "Destiny"],
                answer: "Halo"
            },
            {
                question: "What is the highest-selling video game of all time?",
                options: ["Tetris", "Grand Theft Auto V", "Minecraft", "Wii Sports"],
                answer: "Minecraft"
            },
            {
                question: "Which console was released by Sony in 1994?",
                options: ["Nintendo 64", "Sega Genesis", "PlayStation", "Xbox"],
                answer: "PlayStation"
            },
            {
                question: "What is the name of the virtual currency in 'Fortnite'?",
                options: ["V-Bucks", "Robux", "Minecoins", "Apex Coins"],
                answer: "V-Bucks"
            },
            {
                question: "Which game genre is 'World of Warcraft'?",
                options: ["FPS", "RPG", "RTS", "MMORPG"],
                answer: "MMORPG"
            },
            {
                question: "What is the name of the iconic yellow character in 'Pac-Man'?",
                options: ["Blinky", "Inky", "Clyde", "Pac-Man"],
                answer: "Pac-Man"
            }
        ]
    },
    "cars": {
        name: "Cars Quiz",
        questions: [
            {
                question: "Which car manufacturer produces the 911 model?",
                options: ["Ferrari", "Lamborghini", "Porsche", "BMW"],
                answer: "Porsche"
            },
            {
                question: "What does 'SUV' stand for?",
                options: ["Sport Utility Vehicle", "Super Urban Vehicle", "Standard Utility Van", "Special Utility Vehicle"],
                answer: "Sport Utility Vehicle"
            },
            {
                question: "Which country is home to the car brand Volvo?",
                options: ["Germany", "Japan", "Sweden", "USA"],
                answer: "Sweden"
            },
            {
                question: "What is the best-selling electric car in the world?",
                options: ["Nissan Leaf", "Chevrolet Bolt", "Tesla Model 3", "Hyundai Kona Electric"],
                answer: "Tesla Model 3"
            },
            {
                question: "Which car company has a logo featuring a prancing horse?",
                options: ["Lamborghini", "Ford", "Ferrari", "Mercedes-Benz"],
                answer: "Ferrari"
            },
            {
                question: "What does 'ABS' in a car stand for?",
                options: ["Automatic Braking System", "Anti-lock Braking System", "Advanced Braking System", "Axle Braking System"],
                answer: "Anti-lock Braking System"
            },
            {
                question: "Which car brand is known for its 'Beetle' model?",
                options: ["BMW", "Volkswagen", "Audi", "Mercedes-Benz"],
                answer: "Volkswagen"
            },
            {
                question: "What is the purpose of a catalytic converter in a car?",
                options: ["To improve fuel efficiency", "To reduce harmful emissions", "To increase engine power", "To cool the engine"],
                answer: "To reduce harmful emissions"
            },
            {
                question: "Which country is the largest producer of cars?",
                options: ["USA", "Germany", "Japan", "China"],
                answer: "China"
            },
            {
                question: "What is the name of the hybrid car produced by Toyota?",
                options: ["Camry", "Corolla", "Prius", "RAV4"],
                answer: "Prius"
            }
        ]
    },
    "fashion": {
        name: "Fashion Quiz",
        questions: [
            {
                question: "Who is the founder of the fashion brand Chanel?",
                options: ["Christian Dior", "Coco Chanel", "Yves Saint Laurent", "Giorgio Armani"],
                answer: "Coco Chanel"
            },
            {
                question: "What is a 'haute couture'?",
                options: ["Ready-to-wear clothing", "Mass-produced fashion", "Custom-fitted high fashion clothing", "Vintage clothing"],
                answer: "Custom-fitted high fashion clothing"
            },
            {
                question: "Which city is considered one of the 'Big Four' fashion capitals?",
                options: ["Tokyo", "London", "Dubai", "Sydney"],
                answer: "London"
            },
            {
                question: "What is the name of the iconic little black dress popularized by Audrey Hepburn?",
                options: ["Chanel No. 5", "Givenchy", "Tiffany & Co.", "Dior"],
                answer: "Givenchy"
            },
            {
                question: "Which fashion designer is known for his red-soled shoes?",
                options: ["Jimmy Choo", "Manolo Blahnik", "Christian Louboutin", "Michael Kors"],
                answer: "Christian Louboutin"
            },
            {
                question: "What is 'denim' primarily made from?",
                options: ["Wool", "Silk", "Cotton", "Linen"],
                answer: "Cotton"
            },
            {
                question: "Which fashion accessory is often worn around the neck?",
                options: ["Bracelet", "Ring", "Scarf", "Belt"],
                answer: "Scarf"
            },
            {
                question: "What is the term for a fashion show where models display new clothing collections?",
                options: ["Exhibition", "Gala", "Runway show", "Showcase"],
                answer: "Runway show"
            },
            {
                question: "Which Italian fashion house is famous for its Medusa head logo?",
                options: ["Gucci", "Prada", "Versace", "Armani"],
                answer: "Versace"
            },
            {
                question: "What is the name of the traditional Japanese garment?",
                options: ["Sari", "Kimono", "Cheongsam", "Hanbok"],
                answer: "Kimono"
            }
        ]
    },
    "architecture": {
        name: "Architecture Quiz",
        questions: [
            {
                question: "Which famous landmark is located in Paris, France?",
                options: ["Big Ben", "Colosseum", "Eiffel Tower", "Statue of Liberty"],
                answer: "Eiffel Tower"
            },
            {
                question: "Who designed the Sydney Opera House?",
                options: ["Frank Gehry", "Zaha Hadid", "Jørn Utzon", "Le Corbusier"],
                answer: "Jørn Utzon"
            },
            {
                question: "What is the architectural style of the Parthenon?",
                options: ["Gothic", "Baroque", "Classical Greek", "Romanesque"],
                answer: "Classical Greek"
            },
            {
                question: "Which ancient wonder of the world was a massive lighthouse?",
                options: ["Pyramids of Giza", "Hanging Gardens of Babylon", "Lighthouse of Alexandria", "Colossus of Rhodes"],
                answer: "Lighthouse of Alexandria"
            },
            {
                question: "What is the name of the famous leaning tower in Italy?",
                options: ["Tower of London", "Pisa Tower", "Big Ben", "Eiffel Tower"],
                answer: "Pisa Tower"
            },
            {
                question: "Which material is commonly used for building skyscrapers?",
                options: ["Wood", "Brick", "Steel", "Concrete"],
                answer: "Steel"
            },
            {
                question: "What is the term for a large, open space in a building, often with a glass roof?",
                options: ["Atrium", "Corridor", "Basement", "Mezzanine"],
                answer: "Atrium"
            },
            {
                question: "Who is considered the father of modern architecture?",
                options: ["Frank Lloyd Wright", "Le Corbusier", "Ludwig Mies van der Rohe", "Walter Gropius"],
                answer: "Le Corbusier"
            },
            {
                question: "Which city is famous for its Art Deco architecture?",
                options: ["New York City", "Chicago", "Miami", "Los Angeles"],
                answer: "Miami"
            },
            {
                question: "What is the name of the bridge connecting San Francisco to Marin County?",
                options: ["Brooklyn Bridge", "Golden Gate Bridge", "Tower Bridge", "Sydney Harbour Bridge"],
                answer: "Golden Gate Bridge"
            }
        ]
    },
    "medicine": {
        name: "Medicine Quiz",
        questions: [
            {
                question: "What is the largest organ in the human body?",
                options: ["Heart", "Brain", "Skin", "Liver"],
                answer: "Skin"
            },
            {
                question: "Which vitamin is produced when skin is exposed to sunlight?",
                options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                answer: "Vitamin D"
            },
            {
                question: "What is the common name for the 'patella'?",
                options: ["Kneecap", "Elbow", "Shoulder blade", "Ankle bone"],
                answer: "Kneecap"
            },
            {
                question: "What is the main function of red blood cells?",
                options: ["Fighting infection", "Clotting blood", "Carrying oxygen", "Producing antibodies"],
                answer: "Carrying oxygen"
            },
            {
                question: "Which of these is a common symptom of the flu?",
                options: ["Rash", "Fever", "Joint pain", "Hair loss"],
                answer: "Fever"
            },
            {
                question: "What is the name of the doctor who specializes in heart diseases?",
                options: ["Neurologist", "Dermatologist", "Cardiologist", "Oncologist"],
                answer: "Cardiologist"
            },
            {
                question: "Which disease is caused by a deficiency of Vitamin C?",
                options: ["Rickets", "Beriberi", "Scurvy", "Pellagra"],
                answer: "Scurvy"
            },
            {
                question: "What is the normal body temperature in Celsius?",
                options: ["35°C", "37°C", "39°C", "40°C"],
                answer: "37°C"
            },
            {
                question: "Which part of the eye is responsible for color vision?",
                options: ["Cornea", "Pupil", "Retina", "Lens"],
                answer: "Retina"
            },
            {
                question: "What is the name of the process by which the body maintains a stable internal environment?",
                options: ["Metabolism", "Respiration", "Homeostasis", "Digestion"],
                answer: "Homeostasis"
            }
        ]
    },
    "philosophy": {
        name: "Philosophy Quiz",
        questions: [
            {
                question: "Who said, 'I think, therefore I am'?",
                options: ["Plato", "Aristotle", "René Descartes", "Socrates"],
                answer: "René Descartes"
            },
            {
                question: "Which philosophical school emphasizes living in harmony with nature and reason?",
                options: ["Existentialism", "Stoicism", "Nihilism", "Utilitarianism"],
                answer: "Stoicism"
            },
            {
                question: "What is the 'Allegory of the Cave' from?",
                options: ["Aristotle's Ethics", "Plato's Republic", "Descartes' Meditations", "Kant's Critiques"],
                answer: "Plato's Republic"
            },
            {
                question: "Who is known for his theory of the 'categorical imperative'?",
                options: ["Friedrich Nietzsche", "Immanuel Kant", "John Locke", "David Hume"],
                answer: "Immanuel Kant"
            },
            {
                question: "Which philosopher is associated with the concept of 'tabula rasa' (blank slate)?",
                options: ["Jean-Jacques Rousseau", "John Locke", "Thomas Hobbes", "Voltaire"],
                answer: "John Locke"
            },
            {
                question: "What is the branch of philosophy that deals with knowledge?",
                options: ["Ethics", "Metaphysics", "Epistemology", "Aesthetics"],
                answer: "Epistemology"
            },
            {
                question: "Who wrote 'Thus Spoke Zarathustra'?",
                options: ["Søren Kierkegaard", "Arthur Schopenhauer", "Friedrich Nietzsche", "Albert Camus"],
                answer: "Friedrich Nietzsche"
            },
            {
                question: "Which ancient Greek philosopher was the teacher of Alexander the Great?",
                options: ["Plato", "Socrates", "Aristotle", "Pythagoras"],
                answer: "Aristotle"
            },
            {
                question: "What is the philosophical concept that reality is fundamentally mental or spiritual?",
                options: ["Materialism", "Dualism", "Idealism", "Realism"],
                answer: "Idealism"
            },
            {
                question: "Who is considered the father of modern political philosophy?",
                options: ["Niccolò Machiavelli", "John Locke", "Thomas Hobbes", "Jean-Jacques Rousseau"],
                answer: "Niccolò Machiavelli"
            }
        ]
    },
    "business": {
        name: "Business Quiz",
        questions: [
            {
                question: "What does 'CEO' stand for?",
                options: ["Chief Executive Officer", "Company Executive Officer", "Corporate Engagement Officer", "Client Experience Officer"],
                answer: "Chief Executive Officer"
            },
            {
                question: "What is 'ROI' an acronym for?",
                options: ["Return on Investment", "Revenue of Income", "Rate of Interest", "Risk of Investment"],
                answer: "Return on Investment"
            },
            {
                question: "Which of these is a common business strategy for growth?",
                options: ["Diversification", "Liquidation", "Downsizing", "Outsourcing"],
                answer: "Diversification"
            },
            {
                question: "What is a 'startup'?",
                options: ["A large, established company", "A newly formed company designed to grow rapidly", "A non-profit organization", "A government agency"],
                answer: "A newly formed company designed to grow rapidly"
            },
            {
                question: "What is the term for a company's unique selling proposition?",
                options: ["Brand identity", "Market share", "Competitive advantage", "Customer loyalty"],
                answer: "Competitive advantage"
            },
            {
                question: "What is 'SWOT' analysis used for?",
                options: ["Financial forecasting", "Strategic planning", "Employee performance review", "Product development"],
                answer: "Strategic planning"
            },
            {
                question: "Which financial statement shows a company's assets, liabilities, and equity?",
                options: ["Income Statement", "Cash Flow Statement", "Balance Sheet", "Statement of Retained Earnings"],
                answer: "Balance Sheet"
            },
            {
                question: "What is 'marketing' primarily concerned with?",
                options: ["Producing goods", "Selling products", "Managing finances", "Creating and delivering value to customers"],
                answer: "Creating and delivering value to customers"
            },
            {
                question: "What is the term for the process of setting prices for products or services?",
                options: ["Costing", "Budgeting", "Pricing", "Valuation"],
                answer: "Pricing"
            },
            {
                question: "Which type of business ownership has unlimited liability for its owner(s)?",
                options: ["Corporation", "Partnership", "Sole Proprietorship", "Limited Liability Company"],
                answer: "Sole Proprietorship"
            }
        ]
    },
    "environment": {
        name: "Environment Quiz",
        questions: [
            {
                question: "What is the process by which plants make their own food?",
                options: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
                answer: "Photosynthesis"
            },
            {
                question: "What is the primary cause of climate change?",
                options: ["Volcanic eruptions", "Deforestation", "Burning fossil fuels", "Solar flares"],
                answer: "Burning fossil fuels"
            },
            {
                question: "Which gas is most responsible for the Earth's greenhouse effect?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
                answer: "Carbon Dioxide"
            },
            {
                question: "What is the term for the variety of life on Earth?",
                options: ["Ecology", "Biodiversity", "Ecosystem", "Habitat"],
                answer: "Biodiversity"
            },
            {
                question: "Which layer of the Earth's atmosphere protects us from harmful UV radiation?",
                options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
                answer: "Stratosphere"
            },
            {
                question: "What is the process of converting waste materials into new materials and objects?",
                options: ["Incineration", "Landfilling", "Recycling", "Composting"],
                answer: "Recycling"
            },
            {
                question: "Which natural disaster is measured on the Richter scale?",
                options: ["Tornado", "Hurricane", "Earthquake", "Flood"],
                answer: "Earthquake"
            },
            {
                question: "What is the name of the largest rainforest in the world?",
                options: ["Congo Rainforest", "Daintree Rainforest", "Amazon Rainforest", "Valdivian Temperate Rainforest"],
                answer: "Amazon Rainforest"
            },
            {
                question: "What is the main component of natural gas?",
                options: ["Propane", "Butane", "Methane", "Ethane"],
                answer: "Methane"
            },
            {
                question: "Which renewable energy source uses the movement of water to generate electricity?",
                options: ["Solar power", "Wind power", "Geothermal energy", "Hydropower"],
                answer: "Hydropower"
            }
        ]
    },
    "psychology": {
        name: "Psychology Quiz",
        questions: [
            {
                question: "Who developed the hierarchy of needs?",
                options: ["Sigmund Freud", "Carl Jung", "Abraham Maslow", "B.F. Skinner"],
                answer: "Abraham Maslow"
            },
            {
                question: "What is the study of the mind and behavior?",
                options: ["Sociology", "Anthropology", "Psychology", "Neurology"],
                answer: "Psychology"
            },
            {
                question: "Which part of the brain is responsible for memory and emotion?",
                options: ["Cerebellum", "Brainstem", "Amygdala", "Frontal Lobe"],
                answer: "Amygdala"
            },
            {
                question: "What is the term for a sudden, intense fear or discomfort?",
                options: ["Depression", "Anxiety", "Panic Attack", "Phobia"],
                answer: "Panic Attack"
            },
            {
                question: "Who is known for his theory of classical conditioning?",
                options: ["B.F. Skinner", "Ivan Pavlov", "Carl Rogers", "Albert Bandura"],
                answer: "Ivan Pavlov"
            },
            {
                question: "What is the psychological phenomenon where people are less likely to help someone in need when others are present?",
                options: ["Groupthink", "Bystander Effect", "Conformity", "Obedience"],
                answer: "Bystander Effect"
            },
            {
                question: "Which defense mechanism involves pushing distressing thoughts into the unconscious?",
                options: ["Regression", "Projection", "Repression", "Sublimation"],
                answer: "Repression"
            },
            {
                question: "What is the term for a long-lasting pattern of thinking, feeling, and behaving?",
                options: ["Mood", "Emotion", "Personality", "Temperament"],
                answer: "Personality"
            },
            {
                question: "Who proposed the concept of the 'collective unconscious'?",
                options: ["Sigmund Freud", "Carl Jung", "Alfred Adler", "Erik Erikson"],
                answer: "Carl Jung"
            },
            {
                question: "What is the study of how people think, perceive, remember, and learn?",
                options: ["Developmental Psychology", "Social Psychology", "Cognitive Psychology", "Clinical Psychology"],
                answer: "Cognitive Psychology"
            }
        ]
    },
    "mathematics": {
        name: "Mathematics Quiz",
        questions: [
            {
                question: "What is the value of Pi (π) to two decimal places?",
                options: ["3.10", "3.14", "3.16", "3.18"],
                answer: "3.14"
            },
            {
                question: "How many sides does a hexagon have?",
                options: ["5", "6", "7", "8"],
                answer: "6"
            },
            {
                question: "What is the square root of 144?",
                options: ["10", "11", "12", "13"],
                answer: "12"
            },
            {
                question: "What is the sum of angles in a triangle?",
                options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
                answer: "180 degrees"
            },
            {
                question: "What is the next number in the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, ...?",
                options: ["10", "11", "12", "13"],
                answer: "13"
            },
            {
                question: "What is the term for a number that can only be divided by 1 and itself?",
                options: ["Even number", "Odd number", "Prime number", "Composite number"],
                answer: "Prime number"
            },
            {
                question: "What is the result of 5! (5 factorial)?",
                options: ["15", "25", "120", "720"],
                answer: "120"
            },
            {
                question: "What is the name of the longest side of a right-angled triangle?",
                options: ["Leg", "Altitude", "Hypotenuse", "Base"],
                answer: "Hypotenuse"
            },
            {
                question: "What is the value of 2 to the power of 5?",
                options: ["10", "16", "32", "64"],
                answer: "32"
            },
            {
                question: "What is the term for a mathematical statement that two expressions are equal?",
                options: ["Inequality", "Equation", "Formula", "Function"],
                answer: "Equation"
            }
        ]
    },
    "health": {
        name: "Health Quiz",
        questions: [
            {
                question: "How many bones are in the adult human body?",
                options: ["200", "206", "210", "212"],
                answer: "206"
            },
            {
                question: "What is the recommended daily water intake for adults?",
                options: ["1-2 liters", "2-3 liters", "3-4 liters", "4-5 liters"],
                answer: "2-3 liters"
            },
            {
                question: "Which nutrient is the body's primary source of energy?",
                options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
                answer: "Carbohydrates"
            },
            {
                question: "What is the main function of the heart?",
                options: ["Digesting food", "Pumping blood", "Filtering waste", "Producing hormones"],
                answer: "Pumping blood"
            },
            {
                question: "Which type of exercise strengthens your heart and lungs?",
                options: ["Strength training", "Flexibility exercises", "Aerobic exercise", "Balance training"],
                answer: "Aerobic exercise"
            },
            {
                question: "What is the name of the sugar found in milk?",
                options: ["Glucose", "Fructose", "Sucrose", "Lactose"],
                answer: "Lactose"
            },
            {
                question: "Which organ produces insulin?",
                options: ["Liver", "Kidney", "Pancreas", "Stomach"],
                answer: "Pancreas"
            },
            {
                question: "What is the recommended amount of sleep for adults per night?",
                options: ["5-6 hours", "6-7 hours", "7-9 hours", "9-10 hours"],
                answer: "7-9 hours"
            },
            {
                question: "Which of these is a good source of Vitamin C?",
                options: ["Milk", "Oranges", "Eggs", "Meat"],
                answer: "Oranges"
            },
            {
                question: "What is the term for the body's ability to resist disease?",
                options: ["Metabolism", "Immunity", "Digestion", "Respiration"],
                answer: "Immunity"
            }
        ]
    }
};

export default quizzes;
