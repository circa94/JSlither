#How To Use the JSlither Server 

### Requirements
1. make sure you have `nodejs` installed.
2. install dependencies: `npm install`


### Running the server

1. start the server with: `npm start`
2. go to http://slither.io
3. paste in browser console: `sos = [{ip: "your.ip.adress", po: yourPortNumber, ac: 132, ptm: 12}];`
4. click on play


### Config the server

open and edit the conig.json file

|property|Use               |Default   |
|--------|------------------|----------|
|port    |Port of the Server|8080      |
|host    |Ip of the Server  |0.0.0.0   |
|debug   |Console log level |false     |
