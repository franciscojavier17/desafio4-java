const filterRooms = document.querySelector("#filterRooms");
const filterMetersMin = document.querySelector("#filterMetersMin");
const filterMetersMax = document.querySelector("#filterMetersMax");
const searchButton = document.querySelector("#searchButton");
const filteredProperties = document.querySelector("#filteredProperties");
const properties = document.querySelector(".propiedades");

const propiedadesJSON = [
{
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
},
{
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
},
{
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
},
{
    name: "Casa rodante",
    description: "Conviertete en un nómade del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
},
{
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
},
{
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
},
];

const getInterpolatedProperty = (element) => {
    const html = `
    <div class="propiedad">
        <div class="img" style="background-image: url(${element.src});"></div>
        <section>
            <h5>${element.name}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${element.rooms}</p>
                <p>Metros: ${element.m}</p>
            </div>
            <p class="my-3">${element.description}</p>
            <button class="btn btn-info">Ver más</button>
        </section>
    </div>
`;

return html;
};

const filterProperties = (valueRooms, valueMinMeters, valueMaxMeters) => {
    const filter = [];

for (let property of propiedadesJSON) {
    if (
        property.rooms >= valueRooms &&
        valueMinMeters <= property.m &&
        property.m <= valueMaxMeters
    ) {
        filter.push(property);
    }
}

return filter;
};

searchButton.addEventListener("click", () => {
    const valueRooms = filterRooms.value;
    const valueMinMeters = filterMetersMin.value;
    const valueMaxMeters = filterMetersMax.value;

if (!valueRooms.length || !valueMinMeters.length || !valueMaxMeters.length) {
    alert("Todos los campos de los filtros deben estar llenos");
    return;
}

if (+valueRooms < 0 || +valueMinMeters < 0 || +valueMaxMeters < 0) {
    alert(
        "Uno o mas campos tiene numeros negativos, por favor use solo positivos"
    );
    return;
}

const foundResults = filterProperties(
    +valueRooms,
    +valueMinMeters,
    +valueMaxMeters
);

properties.innerHTML = "";

for (let result of foundResults) {
    properties.innerHTML += getInterpolatedProperty(result);
}

filteredProperties.textContent = foundResults.length;
});

for (let property of propiedadesJSON) {
    properties.innerHTML += getInterpolatedProperty(property);
}

filteredProperties.textContent = propiedadesJSON.length;