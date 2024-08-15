var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_DesaTanimulyadanKelurahanCipageran_1 = new ol.format.GeoJSON();
var features_DesaTanimulyadanKelurahanCipageran_1 = format_DesaTanimulyadanKelurahanCipageran_1.readFeatures(json_DesaTanimulyadanKelurahanCipageran_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaTanimulyadanKelurahanCipageran_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaTanimulyadanKelurahanCipageran_1.addFeatures(features_DesaTanimulyadanKelurahanCipageran_1);
var lyr_DesaTanimulyadanKelurahanCipageran_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaTanimulyadanKelurahanCipageran_1, 
                style: style_DesaTanimulyadanKelurahanCipageran_1,
                popuplayertitle: "Desa Tanimulya dan Kelurahan Cipageran",
                interactive: true,
                title: '<img src="styles/legend/DesaTanimulyadanKelurahanCipageran_1.png" /> Desa Tanimulya dan Kelurahan Cipageran'
            });
var format_DaerahPotensiPenyebaranVektorNyamuk_2 = new ol.format.GeoJSON();
var features_DaerahPotensiPenyebaranVektorNyamuk_2 = format_DaerahPotensiPenyebaranVektorNyamuk_2.readFeatures(json_DaerahPotensiPenyebaranVektorNyamuk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaerahPotensiPenyebaranVektorNyamuk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaerahPotensiPenyebaranVektorNyamuk_2.addFeatures(features_DaerahPotensiPenyebaranVektorNyamuk_2);
var lyr_DaerahPotensiPenyebaranVektorNyamuk_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaerahPotensiPenyebaranVektorNyamuk_2, 
                style: style_DaerahPotensiPenyebaranVektorNyamuk_2,
                popuplayertitle: "Daerah Potensi Penyebaran Vektor Nyamuk",
                interactive: true,
                title: '<img src="styles/legend/DaerahPotensiPenyebaranVektorNyamuk_2.png" /> Daerah Potensi Penyebaran Vektor Nyamuk'
            });
var format_TitikPerkembanganVektorNyamuk_3 = new ol.format.GeoJSON();
var features_TitikPerkembanganVektorNyamuk_3 = format_TitikPerkembanganVektorNyamuk_3.readFeatures(json_TitikPerkembanganVektorNyamuk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPerkembanganVektorNyamuk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPerkembanganVektorNyamuk_3.addFeatures(features_TitikPerkembanganVektorNyamuk_3);
var lyr_TitikPerkembanganVektorNyamuk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPerkembanganVektorNyamuk_3, 
                style: style_TitikPerkembanganVektorNyamuk_3,
                popuplayertitle: "Titik Perkembangan Vektor Nyamuk",
                interactive: true,
                title: '<img src="styles/legend/TitikPerkembanganVektorNyamuk_3.png" /> Titik Perkembangan Vektor Nyamuk'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_DesaTanimulyadanKelurahanCipageran_1.setVisible(true);lyr_DaerahPotensiPenyebaranVektorNyamuk_2.setVisible(true);lyr_TitikPerkembanganVektorNyamuk_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_DesaTanimulyadanKelurahanCipageran_1,lyr_DaerahPotensiPenyebaranVektorNyamuk_2,lyr_TitikPerkembanganVektorNyamuk_3];
lyr_DesaTanimulyadanKelurahanCipageran_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_DaerahPotensiPenyebaranVektorNyamuk_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TitikPerkembanganVektorNyamuk_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DesaTanimulyadanKelurahanCipageran_1.set('fieldImages', {'NAMOBJ': 'TextEdit', });
lyr_DaerahPotensiPenyebaranVektorNyamuk_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TitikPerkembanganVektorNyamuk_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_DesaTanimulyadanKelurahanCipageran_1.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_DaerahPotensiPenyebaranVektorNyamuk_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerkembanganVektorNyamuk_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerkembanganVektorNyamuk_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});