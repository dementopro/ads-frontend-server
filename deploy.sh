URL=http://localhost:8000
export API_BASE_URL=$URL
export NEXT_PUBLIC_API_URL=$URL
export NEXT_PUBLIC_IMG_URL=$URL
npm install
npm run build
pm2 stop all
pm2 delete 0
pm2 start npm --name "f" -- start
