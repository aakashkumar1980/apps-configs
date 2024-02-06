while true; do
  clear
  top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{printf "CPU Usage: %3.1f%%\n", 100 - $1}'
  free | awk '/Mem:/ {printf "Total Memory: %.2f MB\nUsed Memory: %.2f MB\nMemory Usage: %3.1f%%\n", $2/1024, $3/1024, $3/$2 * 100}'
  sleep 10
done
