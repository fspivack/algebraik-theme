# Algebraik Theme

**This is very much still a work in progress.**

Algebraik Theme is a theme for the Pelican static site generator. There are several ways to customise it, mostly through settings in your pelicanconf.py, and metadata in pages.

## Homepage

In Pelican, the homepage of the website uses the index.html template. In this theme, you can add the metadata `:home: True` for reStructuredText or `Home: True` for Markdown.

The template will then read the contents of that page and put it on the homepage. (Note that, where DISPLAY_PAGES_ON_MENU is set to True, those pages won't include the page with home set to True. It will, however, be put in the menu as the homepage if DISPLAY_HOME_ON_MENU isn't set to False.)

By default, the homepage will be set to include a list of all articles (in reverse chronological order.)

To avoid generating a duplicate page with the same content as the homepage, put the metadata `:save_as: `, and leave it blank. This supresses creating a specifc page for the homepage content, separate from the actual homepage.

