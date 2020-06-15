const express = require('express');
const bodyParser = require('body-parser');
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const cors = require('cors');


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


//Repuesta generica de servidor
app.get('/', function(req, res) {
    res.json('JARVIS UP');
})

//Prueba de conexion al puerto
app.listen(3000, () => {
    console.log('Escuchando puerto:', 3000);
});


//APIde IBM Watson
const assistantId = '7381907b-59e5-4b4b-a804-d69aa164d472';
const assistant = new AssistantV2({
    version: '2020-02-05',
    authenticator: new IamAuthenticator({
        apikey: 'sDzWIORX69r4KjnTCSlyW7jrEW7DxcDQUymAR7TuB3xd',
    }),
    url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/873f7102-e6d5-4e65-a42d-ae1debefac42',
    disableSslVerification: true,
});


//Enviar las consultas
app.post('/conversation', (req, res) => {
    let { text, sessionId } = req.body;
    //console.log('...............', this.text);
    const params = {
        input: {
            message_type: 'text',
            text: text
        },
        assistantId,
        sessionId: sessionId
    };

    assistant.message(params, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(400).json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                response
            });
        }
    });
});

//abrir sesion
app.post('/conversession', (req, res) => {
    const params = {
        assistantId
    };

    assistant.createSession(params, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(400).json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                response
            });
        }
    });
});


//cerrar sesion
app.post('/converclose', (req, res) => {
    const { sessionId } = req.body;
    const params = {
        assistantId,
        sessionId: sessionId
    };

    assistant.deleteSession(params, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(400).json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                response
            });
        }
    });
});

//===================
// Exports
//===================
module.exports = app;