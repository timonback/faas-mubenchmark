#!/bin/bash

echo "!!! Ensure that all changes to serverless.yml are saved to the platform folder !!!"
echo "!!! Changes to the file in this folder will be overwritten !!!"

PS3='Please select the platform: '
options=("Amazon" "Azure" "Google" "OpenWhisk" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Amazon")
            cp ./platform/amazon/* .
            break
            ;;
        "Azure")
            cp ./platform/azure/* .
            break
            ;;
        "Google")
            cp ./platform/google/* .
            break
            ;;
        "OpenWhisk")
            cp ./platform/openwhisk/* .
            break
            ;;
        "Quit")
            break
            ;;
        *) echo invalid option;;
    esac
done
