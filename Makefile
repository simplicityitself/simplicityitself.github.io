
run:
	rvm use ruby-1.9.3-p551
	rvm use ruby-2.2.1
	jekyll clean
	jekyll serve --incremental
all:
	rvm use ruby-1.9.3-p551
	rvm use ruby-2.2.1
	jekyll clean
	jekyll serve --incremental --drafts
