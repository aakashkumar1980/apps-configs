while true; do
  clear
  echo "CPU Usage by Core:"
  mpstat -P ALL 1 1 | awk '/^[0-9]/ {printf "Core %s: %3.1f%%\n", $2, 100 - $NF}'
  echo ""
  free | awk '/Mem:/ {printf "Total Memory: %.2f MB\nUsed Memory: %.2f MB\nMemory Usage: %3.1f%%\n", $2/1024, $3/1024, $3/$2 * 100}'
  sleep 5
done

