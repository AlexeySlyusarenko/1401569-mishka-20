ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map('map', {
        center: [59.938795, 30.322918],
        zoom: 16.6,
        controls: ['zoomControl']
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Магазин Мишка - Милые штуки ручной работы для дома'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map-pin.svg',
        iconImageSize: [67, 100],
        iconImageOffset: [-20, -90]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
}
