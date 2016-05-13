
all:
	rvm use ruby-1.9.3-p551
	rvm use ruby-2.2.1
	jekyll serve --incremental --drafts
