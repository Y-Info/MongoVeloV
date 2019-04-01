#/!/bin/bash
node Script_DeleteDatabase

echo"database supprimée"

sleep 2s

echo"rafraichissement des données"

python3 Script_Velov.py

echo"importation de la base de données"

sleep 2s

mongoimport --host localhost --port 27018 --db velov --collection stations --file data.json

echo"Opération réussie"
