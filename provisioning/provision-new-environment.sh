#!/bin/bash


if [ -z "$GIT_COMMIT" ];
then
    export GIT_COMMIT='40125dcaed526c7a5081de96db0b157d5c702a37'
fi


source ./create-aws-docker-host-instance.sh
source ./update-env.sh ${INSTANCE_PUBLIC_NAME}

echo New environment provisioned
