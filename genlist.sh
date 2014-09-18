#!/bin/sh

echo "" > result.txt

for f in ./img/*.svg
	do
		echo "<img src='img/${f##*/}' />" >> result.txt
done