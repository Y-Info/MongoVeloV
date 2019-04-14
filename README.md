# MongoVeloV

School project aiming at the creation of a classified ad site such as for example: https://velov.grandlyon.com/mapping

## Getting Started

Start serveur

```
node app:js
```

### UseFull link

* [Spec](https://github.com/Zalbani/MongoVeloV/blob/master/src/docs/specs/Fiche_Projet_-_MySQL-MongoDB.pdf) - Project specification
* [Tuto](https://www.youtube.com/watch?v=_N5xsboU2Ms) - Tuto youtube


### Installing


```
npm install --save express mongoose nunjucks bootstrap shelljs leaflet.markercluster leaflet-search

```

Installer les bases MongoDB
Jeux de donnes utiliser

* [Velov](https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=30&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171)
* [Points d'interet](https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=30&request=GetFeature&typename=sit_sitra.sittourisme&SRSNAME=urn:ogc:def:crs:EPSG::4171) - Lieux touristique
* [Toilettes publiques](https://download.data.grandlyon.com/wfs/grandlyon?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=30&request=GetFeature&typename=gin_nettoiement.gintoilettepublique&SRSNAME=urn:ogc:def:crs:EPSG::4171)
* [Patrimoine Voirie](https://download.data.grandlyon.com/wfs/grandlyon?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=30&request=GetFeature&typename=pvo_patrimoine_voirie.pvopoleinteret&SRSNAME=urn:ogc:def:crs:EPSG::4171) - Lieux de balade



Modifier les fichiers present dans models afin d'associer les bon nom de collection
```
var collectionName = '~NomDeLaCollection~';
var influ = mongoose.model('~NomDeLaCollection~', influSchema, collectionName);
```

Connection a la base MongoDB
Modifier selon les settings serveurs

```
mongoose.connect('mongodb://username:password@host:port/database', {useNewUrlParser: true});
ou
mongoose.connect('mongodb://127.0.0.1:27017/myapp', { useNewUrlParser: true } );
```


## Authors

* **Alban Pierson** - [Zalbani](https://github.com/Zalbani)

