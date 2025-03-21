grep -v '^#' .env.test
export $(grep -v '^#' .env.test | xargs)