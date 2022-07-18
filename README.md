# Permissions Module for StructShare


## Steps to run

1. Install the node modules
2. Run the build script: "npm run build"
3. Start the app: "npm start" (The port is gotten from the .env file so you can change it there if it's in use on your machine)


## You need to add the following validation tokens to your request by role

* **admin**: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiaWF0IjoxNjU4MDU0Nzc0LCJleHAiOjE2NjA2NDY3NzR9.O0CR9yjsQKU30e8gv--AgFfKC3baYhrJ-8wpNr3s8Ms"
* **client**: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ1NiwiaWF0IjoxNjU4MDU0Nzc0LCJleHAiOjE2NjA2NDY3NzR9.LxoAaB3hdHV2L2QPlHa-T_iNm5m-JTKcJxu8nPskRyk"
* **supplier**: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc4OSwiaWF0IjoxNjU4MDU0Nzc0LCJleHAiOjE2NjA2NDY3NzR9.piuBCyMitm5QY2y3m_UqzpO3_uy8aj5zXRpXWXO7DUI"