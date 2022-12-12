#!/bin/bash
cd "$(dirname "$0")"
cp .env.exam .env
docker-compose up