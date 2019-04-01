#/!/usr/bin/env python
import os
import urllib.request, json

URL = "https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171"
FILE_NAME = "/data.json"
try:

    with urllib.request.urlopen(URL) as url:
        working_directory = os.getcwd()
        file_path = working_directory + FILE_NAME
        data = json.loads(url.read().decode())
        dataPy = json.dumps(data)
        with open(file_path, 'w') as file:
            file.write(dataPy)
            file.close()
        print("Success!")


except:
    print("Something went wrong...")
    

