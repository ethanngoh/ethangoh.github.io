mogrify -format jpg *.HEIC

i=21
for f in *.jpg; do
  newfile=${i}.jpg
  convert $f -resize 1080x1080 $newfile
  echo "newfile name -> $newfile"
  (( i++ ))
done


# Then run files over ImageOptim
/Applications/ImageOptim.app/Contents/MacOS/ImageOptim *.jpg


# Generate Thumbnails
for f in *.jpg; do
  newfile=${f%.jpg}_t.jpg
  convert $f -resize 100x100 ./$newfile
  echo "newfile name -> $newfile"
done