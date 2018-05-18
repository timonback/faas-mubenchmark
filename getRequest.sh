#!/bin/bash

# OpenWhiskAuth string (local)
OpenWhiskAuth="23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP"
# OpenWhiskAuth string (remote)
# OpenWhiskAuth="XXXX"

# OpenWhisk local url (using the vagrant):
#  "https://192.168.33.13/api/v1/namespaces/guest/actions/performance-dev-"
# --- Change the deployments urls here ---
servers=( \
    "https://<DEPLOYED_URL>.execute-api.<REGION>.amazonaws.com/dev/" \
    "https://<DEPLOYED_URL>.azurewebsites.net/api/" \
    "https://<DEPLOYED_URL>.cloudfunctions.net/" \
    "https://openwhisk.<REGION>.bluemix.net/api/v1/namespaces/<MY_USERNAME>_dev/actions/performance-dev-" \
    )



function get_curl_params {
  url=$1
  param=$2

  # curl params for timing output
  # -w %{time_connect}:%{time_starttransfer}:%{time_total}

  if [[ "$url" =~ "api/v1/namespaces" ]]; then
    # found OpenWhisk installation. Add curl parameters (+auth)
    echo -ne -X POST --data "{\"param\":$param}" -k -u $OpenWhiskAuth -H Content-Type:application/json
  else
    echo -ne -X GET
  fi
}

function run_function {
  server=$1
  function=$2
  params=$3

  echo -ne "\nRun $function..."

  # Call three times before to warm up
  URL="$server$function?param=0&blocking=true"
  curlParams=$(get_curl_params $URL "0")
  echo -ne " (warming up: "
  curl $curlParams -s $URL
  echo -ne "."
  curl $curlParams -s -o /dev/null $URL
  echo -ne "."
  curl $curlParams -s -o /dev/null $URL
  echo " done)"

  # test all parameters
  for param in "${params[@]}"
  do
    echo -ne "Run $function (param=$param)..."
    URL="$server$function?param=$param&blocking=true"
    curlParams=$(get_curl_params $URL $param)
    result=$(curl ${curlParams} -s "$URL")
    echo "$result"

    echo "$(date -u +%Y-%m-%dT%H:%M:%SZ), $function, $param, $URL, $result" >> getRequest.csv.log
  done
}


# The execution starts here
echo -e "This runs the benchmark..."

for server in "${servers[@]}"
do
  echo
  echo "#####################################"
  echo $server
  echo "#####################################"

  # HELLO
  functions=( hello128 )
  params=(0)
  for function in "${functions[@]}"
  do
    run_function $server $function $params
  done

  # FFT
  functions=( fft128 fft256 fft512 fft1024 fft2048 )
  params=(8192 16384 32768 65536 131072 262144 524288 1048576 2097152 4194304 8388608 16777216)
  for function in "${functions[@]}"
  do
    run_function $server $function $params
  done

  # FIBO
  # functions=( fibo128 fibo256 fibo512 fibo1024 fibo2048 )
  # params=(1 10 100 1000 10000 100000 1000000 10000000 100000000)
  # for function in "${functions[@]}"
  # do
  #   run_function $server $function $params
  # done

  # MATRIX
  functions=( matrix128 matrix256 matrix512 matrix1024 matrix2048 )
  params=(100 200 300 400 500 600 700 800 900 1000 1500 )
  for function in "${functions[@]}"
  do
    run_function $server $function $params
  done

  # PI
  functions=( pi128 pi256 pi512 pi1024 pi2048 )
  params=(64 128 256 512 1024 2048 4096 8192 16384 32768 65536 131072 262144 524288 1048576)
  for function in "${functions[@]}"
  do
    run_function $server $function $params
  done

  # SLEEP
  functions=( sleep128 sleep256 sleep512 sleep1024 sleep2048 )
  params=( 0 2 4 8 16 32 64 128 256 512 1024 2048 4096 8192)
  for function in "${functions[@]}"
  do
    run_function $server $function $params
  done

  # UNIONFIND
  functions=( unionfind128 unionfind256 unionfind512 unionfind1024 unionfind2048 )
  params=( 65536 131072 262144 524288 1048576 2097152 4194304 8388608 16777216 33554432)
  for function in "${functions[@]}"
  do
    run_function $server $function $params
  done
done
