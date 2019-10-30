// A partir de este objeto del sistema solar, crear una serie de divs con la imagen, el nombre como cabecera y el color como un <p>  
// Hacer una página con una cabecera (un logo a la izquierda y un menú  on 3 enlaces que no llevan a ninguna parte a la derecha). 
// Poner los divs que salgan de 3 en 3 en una parte de contenido.  
// Finalmente un footer con dos párrafos con letra pequeña, uno a la izquierda y otro a la derecha.

let solarSystem = {
    planets: [{
            name: 'Mercury',
            colour: 'grey',
            imgurl: './resources/images/mercury.jpg',
            explanation: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.'
        },
        {
            name: 'Venus',
            colour: 'white',
            imgurl: './resources/images/venus.jpg',
            explanation: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.'
        },
        {
            name: 'Earth',
            colour: 'blue',
            imgurl: './resources/images/earth.jpg',
            explanation: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.'
        },
        {
            name: 'Mars',
            colour: 'red',
            imgurl: './resources/images/mars.jpg',
            explanation: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the Red Planet.'
        },
        {
            name: 'Jupiter',
            colour: 'brown',
            imgurl: './resources/images/jupiter.jpg',
            explanation: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.'
        },
        {
            name: 'Saturn',
            colour: 'yellow',
            imgurl: './resources/images/saturn.jpg',
            explanation: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.'
        },
        {
            name: 'Uranus',
            colour: 'blue',
            imgurl: './resources/images/uranus.jpg',
            explanation: 'Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.'
        },
        {
            name: 'Neptune',
            colour: 'blue',
            imgurl: './resources/images/neptune.jpg',
            explanation: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.'
        }
    ]
};

// ******************************* USING jQuery to generate the page ********************************************************************************

//Creating the header--------------------------------------------------------------------------------------------------------------------------------
$('nav').append('<p>Holidays in Jupiter</p> <p>Visit the Sun</p> <p>Start a new life in Mars</p>');
$('nav').append('<img id="logo" src="./resources/images/logo.png"/>');

//Creating the body of planets-----------------------------------------------------------------------------------------------------------------------
let main = $('main');
let containerPlanets = $('<div></div>').addClass('planets');
main.append(containerPlanets);

$.each(solarSystem.planets, function(key, value) { // "for each" function to get the values from the array.
    let planetBox = $('<div></div>').addClass(value.name);
    let textPlanet = $('<div></div>').addClass('text');
    planetBox.append(textPlanet);
    let title = $('<h1>' + value.name + '</h1>');
    textPlanet.append(title);
    let explanation = $('<p>' + value.explanation + '</p>');
    textPlanet.append(explanation);
    let image = $('<img>').attr('src', value.imgurl);
    planetBox.append(image);
    containerPlanets.append(planetBox);
});

//Creating the footer--------------------------------------------------------------------------------------------------------------------------------
$('footer').append('<img id="logo" src="./resources/images/logo.png"/>');