#Actualisation des données dans un fichier 'data.json'

import os
import urllib.request, json

URL = "https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171"
FILE_NAME = "\data.json"

try:
	with urllib.request.urlopen(URL) as url:
		working_directory = os.getcwd()
		#le chemin de stockage du fichier sela le dossier d'éxécution
		file_path = working_directory + FILE_NAME
		#on récupère les données de l'URL dans un dictionnaire que l'on formate ensuite en chaine de caractères
		data = json.loads(url.read().decode())
		dataPy = json.dumps(data)
		dataPy = str(dataPy)
		#On nettoie la chaine
		dataPy = dataPy.replace('{"type": "FeatureCollection", "name": "jcd_jcdecaux.jcdvelov", "features": [',"")
		dataPy = dataPy.replace('}},','}}')
		dataPy = dataPy.replace(']}}]}',']}}')
		#On écrit la chaine formatée dans un fichier JSON
		with open(file_path, 'w') as file:    
			file.write(dataPy)
			file.close()
			print("Success!")
except:
	print("Something went wrong...")


    

