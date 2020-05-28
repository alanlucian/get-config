# get-config
Simple Node helper to get an JSON file as config input for any kind of application

Get a config data from object merged withj a given file given byt the default parameter `-c`

See Example folder for examples :D

This will load the default file 'config.json' 

``
node default.js
``

This will load the config from the `-c` parameter 
``
node default.js -c ./second.json
``

This will try to reach a config file with a custom parameter `--file` instead of a default `-c`
``
node custom.js --file ./second.json
``