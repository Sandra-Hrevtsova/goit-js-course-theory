Protocol HTTP
TCP & IP

HTTP & HTTPS (sequre)

FRONT => REST API => DataBase {JSON}
    private || public

- Methods
GET | POST | PUT | PATCH | DELETE
- Headers
Accept: text/html
Content-Type: application/json
- Url
https://domain.com/api/products
- Body
JSON.stringify({})

Status codes:
- 100 (info)
- 200 (success)
- 300 (redirects)
- 400 (client errors)
- 500 (server errors)

FETCH => promise (then().catch().finally())
fetch(url, options)
options = {
    method: 'GET', | POST || PUT || PATCH
    headers: {
        Authorization: '',
        Allow-access-: *
    },
    body: JSON.stringify({name, login})
}

NETWORK in browser
