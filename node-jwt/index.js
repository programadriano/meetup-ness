var crypto = require('crypto');

/* Header */
let header = {
    "typ": "JWT",
    "alg": "HS256"
}

header = JSON.stringify(header);
header = Buffer.from(header).toString('base64');
/* End Header */

/* Payload */
let payload = [
    iss = 'omundoedos.net',
    iat = new Date().toLocaleString(),
    exp = new Date().setMinutes(60).toLocaleString(),
    acl = ['coordenador', 'participante'],
    username = 'Thiago Adriano',
    email = 'tadriano.net@gmail.com'
];

payload = JSON.stringify(payload);
payload = Buffer.from(payload).toString('base64');
/* End Payload */

/* Signature */
let key = '.net-sp-ness';
let signature = crypto.createHmac('sha256', key)
    .update(header + "." + payload)
    .digest('base64');

signature = Buffer.from(signature).toString('base64');
/* End signature */

/* Token */
let token = header + "." + payload + "." + signature;
/* End Token */

console.log(token);




