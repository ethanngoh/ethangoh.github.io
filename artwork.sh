mogrify -format jpg *.HEIC

for f in *.jpg; do
  newfile=${f%.jpg}_opt.jpg
  convert $f -resize 1080x1080 ../optimized/$newfile
  echo "newfile name -> $newfile"
done


# Then run files over ImageOptim
/Applications/ImageOptim.app/Contents/MacOS/ImageOptim *.jpg