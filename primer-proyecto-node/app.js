const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json(
        {
            "users": [
                {
                  "userId": 1,
                  "userData": {
                    "firstName":"Daniel",
                    "lastName":"Sánchez",
                    "birthDate":"28/05/1990"
                  },
                  "events": [
                    {
                      "eventId":1,
                      "educationOnDate":17,
                      "appoinmentDates":["19/08/2021"],
                      "administeredTests":[
                          {
                            "testName":"ifs",
                            "version":"original",
                            "language":"es",
                            "normativeData":"Sierra et al.(2018)",
                            "mean":19.6,
                            "standardDeviation":5.2,
                            "tasks":{
                                "secuenciasMotoras":{
                                    "score":3,
                                    "comments":"SM",
                                    "answer":"3" 
                                },
                                "instruccionesConflictivas":{
                                    "score":3,
                                    "comments":"IC",
                                    "answer":"3"
                                },
                                "controlMotor":{
                                    "score":1,
                                    "comments":"CM",
                                    "answer":"1" 
                                },
                                "meses":{
                                    "score":0,
                                    "comments":"M",
                                    "answer":["diciembre","noviembre","octubre"]
                                },
                                "cubos":{
                                    "score":3,
                                    "comments":"C",
                                    "answer":["1-2","2-4-3","1-4-2-3-4"]
                                },
                                "refranes":{
                                    "score":1.5,
                                    "comments":"R",
                                    "answer":[
                                        [
                                            "1",
                                            "alguien que amenaza no hace nada"
                                        ],
                                        [
                                            "0.5",
                                            "por ejemplo ahora que estoy enfermo y me mantengo positivo"
                                        ],
                                        [
                                            "0",
                                            "que en la casa de los herreros hay cuchillos de todo tipo"
                                        ]
                                    ]
                                },
                                "controlVerbal":{
                                    "score":3,
                                    "comments":"CV",
                                    "answer":[
                                        [
                                            "2",
                                            "nube"
                                        ],
                                        [
                                            "1",
                                            "morder"
                                        ],
                                        [
                                            "0",
                                            "jabón"
                                        ]
                                    ]
                                }
                            }
                        },
                        {
                            "testName":"digitosInversos",
                            "language":"es",  
                            "fullName":"Repetición de Dígitos Inversos",
                            "version":"IFS(original)",
                            "normativeData":null,
                            "mean":null,
                            "standardDeviation":null,
                            "tasks":{
                                "digitosInversos":{
                                    "digitsScore":3,
                                    "ifsScore":2,
                                    "comments":"D",                                                                
                                    "answer":[["51",true],["38",true],["493",true],["526",true]]
                                }
                            }
                        }
                      ]
                    }
                  ]
                }
              ]
        }
    )
})

app.post("/", (req,res) => {
    res.send(
        `<html>
            <head></head>
            <body>
                <p>Post de inicio</p>
            </body>
        </html>
        `
    )
})

app.listen(port, () => {
    console.log(`servidor escuchando en url+port: http://localhost:${port}`)
})