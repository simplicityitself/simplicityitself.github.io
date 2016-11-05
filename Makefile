
run:
	jekyll clean
	jekyll serve --incremental
all:
	jekyll clean
	jekyll serve --incremental --drafts


optimise:
	ffmpeg -i res/sifront.mp4 -movflags faststart -acodec copy -vcodec copy res/sifront.mp4