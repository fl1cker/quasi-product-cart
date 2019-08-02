##About
This project was created as a fun way to get hands-on experience with technologies I'm less familiar with.  The technology stack started as a React-Redux project with a Node Express API.  I then added a MongoDB database to store my products.  Finally, I moved everything to AWS.  My Route 53 domain pointed to a CloudFront instance which loaded my static website from an s3 bucket.  The website called an API Gateway to trigger a Lambda expression which pulled my product data out of DynamoDB. 

##To Do
Modify Puerile SVG to better fit a fun-loving style
Fix UI for empty cart.  Shopping Button Too Big.
Separate state between cart display and cart management (use combineReducers).
Use media queries to shift format the website appropriately.
