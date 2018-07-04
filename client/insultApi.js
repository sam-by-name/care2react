import request from 'superagent'

// const insultUrl = 'http://localhost:3000/api/v1/insults'

export const getinsults = (cb) => {
  request
    .get('https://lakerolmaker-insult-generator-v1.p.mashape.com/?mode=random')
    .header('X-Mashape-Key', 'mtuIL48pZbmsh1FbUB2CCfhTGFc8p11hau2jsnu9Q5GCeaYSDJ')
    .header('Accept', 'text/plain')
    .end(function (result) {
      console.log(result.status, result.headers, result.body)
    })
}

export const postInsults = (insult, cb) => {
  request
    .post('https://lakerolmaker-insult-generator-v1.p.mashape.com/?mode=daily')
    .header('X-Mashape-Key', 'mtuIL48pZbmsh1FbUB2CCfhTGFc8p11hau2jsnu9Q5GCeaYSDJ')
    .header('Content-Type', 'application/x-www-form-urlencoded')
    .header('Accept', 'text/plain')
    .end(function (result) {
      console.log(result.status, result.headers, result.body)
    })
}
