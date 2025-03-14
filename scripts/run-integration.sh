DIR="$(cd "$(dirname "$0")" && pwd)"
source $DIR/testenv.sh

npx prisma db push --force-reset && npx prisma db push