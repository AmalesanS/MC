#!/bin/bash

cd LoanAuthService
source ./env-variable.sh
mvn clean package
docker build -t auth-app .
cd ..
cd LoanService
source ./env-variable.sh
mvn clean package
docker build -t loan-app .
cd ..

