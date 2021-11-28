This is an example to help Luka Samkharadze with a question posted at 
https://www.quora.com/How-do-I-call-fetch-synchronously-in-JavaScript-Yes-I-want-to-wait-for-a-response-and-freeze-the-web-page/answer/Josh-Greig?__nsrc__=4&__snid3__=29422937483&comment_id=234080115&comment_type=2

Run this using the following command:
node index.js

The output should be:
Simulating connection to database with dbURI "server=127.0.0.1;uid=root;pwd=12345;database=test"
Delay period of 1000ms ended.  simulatedConnectToDB now complete.
Setting up API

A 1000ms/1 second delay happens to simulate an asynchronous connection to a database.  This is to demonstrate the proper waiting for that step to complete.

Instead of fetch, this prototype reads from the file system since the database config may contain a database password which we generally don't want to make accessible to the public.
