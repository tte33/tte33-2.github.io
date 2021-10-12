if [$1 -eq ""];
then
	echo "-- enter text:"
	exit
fi
git add --all
echo "-- commiting changes"
git commit -m ”$1”
echo "-- pushing changes"
git push -u origin master
echo "-- command finished -- page updated"