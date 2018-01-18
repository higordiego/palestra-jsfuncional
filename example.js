{
   get: `http http://localhost:3000/api/v1/user`
},
{
    post: `http -F POST localhost:3000/api/v1/user name="higor" email="higor2@gmail.com" password="senha" phone="88988297190"`
},
{
    put: `http -F POST localhost:3000/api/v1/user name="higor" email="higor2@gmail.com" password="senha" phone="88988297190"`
},
{
    delete: `http -F POST localhost:3000/api/v1/user/_id`
}