const fs = require('fs')
const minimist = require('minimist');
const objectMerge = require('object-merge');

function GetConfig( ){
    this.get = (defaultData , configParameter, defaultFileName)=>{
        let _defaultData = defaultData || {};
        let _configParameter = configParameter || "c";
        let _defaultConfigName = defaultFileName || "config.json";
        var alias = {}
        alias[_configParameter] = 'configFile';
        var args = minimist(process.argv.slice(2), {  
            alias: alias
        });

        var configPath = args[_configParameter] ? args[_configParameter] : "./"+_defaultConfigName;

        var configFileData = {};
        if( fs.existsSync( configPath ) ){
            configFileData = JSON.parse( fs.readFileSync( configPath , 'utf8'));
        }

        var result_config = objectMerge(_defaultData, configFileData);
        return result_config;
    }
}

module.exports = new GetConfig();