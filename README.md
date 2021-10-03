# VALO_REST_SERVER
# SignUp: localhost:9000/api/signup
- test api postman (method POST):
{
    "email": "tam1@gmail.com",
    "phone": "0924123111",
    "firstname": "nguyen",
    "lastname": "tam",
    "dob": "1999-31-12",
    "password": "12312311"
}
# login with Phone: localhost:9000/api/loginPhone
- test api postman (method POST):
{
    "phone": "0924123111",
    "password": "12312311"
}
# login with Email: localhost:9000/api/loginEmail
- test api postman (method POST):
{
    "email": "tam1@gmail.com",
    "password": "12312311"
}
# Run script:
1) npm install
2) npm start 

