/*Buscamos todos los documentos de la colección jugadoreslol1 y jugadoreslol2*/
db.jugadoreslol1.find()
db.jugadoreslol2.find()
/*Si queremos que nos muestre todos los documentos pero de manera más ordenada o de
diferente a la que nos la muestra usamos db.jugadoreslol1.find().pretty()*/
db.jugadoreslol1.find().pretty()
/* Buscamos los documentos de la colección jugadoreslol1 que tengan en el campo equipo
el valor G2 */
db.jugadoreslol1.find( { equipo: { $eq:"G2" } } )
/* Buscamos los documentos de la colección jugadoreslol2 que tengan en el campo edad 
un valor mayor a 22 */
db.jugadoreslol2.find( { edad: { $gt: 22 } } )
/* Buscamos los documentos de la colección jugadoreslol1 que tengan en el campo edad 
un valor menor a 22 */
db.jugadoreslol1.find( { edad: { $lt: 22 } } )
/* Buscamos los documentos de la colección jugadoreslol1 que tengan en el campo edad 
un valor mayor o igual a 22 */
db.jugadoreslol1.find( { edad: { $gte: 22 } } )
/*Buscamos los documentos de la colección jugadoreslol2 que tengan en el campo edad
el valor 25 y además exista el campo KDA */
db.jugadoreslol2.find( { $and: [ { edad: { $eq: 25 } }, { KDA: { $exists: true } } ] } )
/*Buscamos los documentos de la colección jugadoreslol1 que tengan en el campo equipo
los valores G2 o ROGUE */
db.jugadoreslol1.find( { equipo: { $in: ["G2", "ROGUE" ] } } )
/*Buscamos los documentos de la colección jugadoreslol2 que tengan en el campo LEC 6 
en el campo MSI 0 dentro del campo trofeos.*/
db.jugadoreslol2.find( { trofeos: {LEC:4, MSI:0} } )
