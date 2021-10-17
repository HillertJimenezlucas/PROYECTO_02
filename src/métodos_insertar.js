/*usamos el comando db.nombredelacolección.deleteMany({}) para borrar todos 
los documentos creados en una colección */
db.jugadoreslol1.deleteMany({})
db.jugadoreslol2.deleteMany({})
/*insertamos varios documentos en una colección usando db.nombredelacolección.insertMany() */
db.jugadoreslol1.insertMany([
    { nombre:"Rekkles", edad: 25, equipo:"G2", trofeos: {LEC:5 , MSI:0} },
    { nombre:"Selfmade", edad: 22, equipo:"VITALITY", trofeos: {LEC:1 , MSI:0}, KDA:3} ,
    { nombre:"Inspired", edad:23, equipo:"ROGUE", trofeos: {LEC:0 ,MSI:0} },
    { nombre:"Hanssama", edad:22, equipo:"ROGUE", trofeos: {LEC:0 ,MSI:0}, KDA:4 },
    { nombre:"Carzzy", edad:20, equipo:"MADLIONS", trofeos: {LEC:4 ,MSI:0} },
])
/*aqui hemos cambiado el nombre de la colección para crear una nueva que contiene
diferentes datos */
db.jugadoreslol2.insertMany([
    { nombre:"Bwipo", edad: 23, equipo:"FNATIC", trofeos:{LEC:4 , MSI:0}},
    { nombre:"Caps", edad: 22, equipo:"G2", trofeos:{LEC:6 , MSI:1}, KDA:3},
    { nombre:"Jankos", edad:25, equipo:"G2", trofeos:{LEC:4 ,MSI:1}},
    { nombre:"Nisqy", edad:25, equipo:"FNATIC", trofeos:{LEC:2 ,MSI:0}, KDA:1.5},
    { nombre:"Elyoya", edad:20, equipo:"MADLIONS", trofeos:{LEC:2 ,MSI:0}},
])
/*también podemos insertar un único documento usando db.nombredelacolección.insertOne() */