# Algebraik Theme

**This is very much still a work in progress.**

Algebraik Theme is a theme for the Pelican static site generator. There are several ways to customise it, mostly through settings in your pelicanconf.py, and metadata in pages.

## Homepage

In Pelican, the homepage of the website uses the index.html template. In this theme, you can add the metadata `:home: True` for reStructuredText or `Home: True` for Markdown.

The template will then read the contents of that page and put it on the homepage. (Note that, where DISPLAY_PAGES_ON_MENU is set to True, those pages won't include the page with home set to True. It will, however, be put in the menu as the homepage if DISPLAY_HOME_ON_MENU isn't set to False.)

By default, the homepage will be set to include a list of all articles (in reverse chronological order.)

To avoid generating a duplicate page with the same content as the homepage, put the metadata `:save_as: `, and leave it blank. This supresses creating a specifc page for the homepage content, separate from the actual homepage.

## Metadata

As mentioned above, you can use the metadata `:home: True` to specify that the contents of the page is meant to be included on the homepage.

You can also specify `:subtitle: <your subtitle>`, to be included in the page hero.

For articles, you can specify `:cover_img: <path/to/img>` to refer to an image you want as the article's thumbnail.

## Settings

In addition to the standard settings, which you can access at [Pelican's settings page](https://docs.getpelican.com/en/latest/settings.html), this theme has a few custom settings. (None of them are required, but if you want to customise your website, you will want to use a few of these, particularly the colour options.)

- `ALIGN_WITH_PICTURE`: If set to True, this makes articles without cover images have a space where the cover image should go, so as to align with articles which do have a picture.

- `CR_AUTHOR`: The author to list as copyright holder. You can set this to `SITENAME`, if you want that as the copyright holder.

- `NOW`: If you want the  copyright year set to the current year, you can do: `from datetime import datetime`, and set `NOW` to `datetime.now()`.

- `FOOTER_SECTIONS`: Set this to the number of sections you would like to have in the footer. Can be 1, 2 or 3. If not set, it will default to 1.

- `FOOTER_CENTRE`: If `FOOTER_SECTIONS` is set to 1 or not set, this will be the content of the footer. If `FOOTER_SECTIONS` is set to 3, this will be the centre section. (Note that you can use html tags in this setting, and in the follwoing two settings.) If this is not set, the default is a copyright symbol, followed by the year if `NOW` is set, followed by `CR_AUTHOR` if it is set, and if it is not, `AUTHOR` is used instead.

- `FOOTER_LEFT`: This will be the content of the left-hand section of the footer, if `FOOTER_SECTIONS` is set to 2 or 3.

- `FOOTER_RIGHT`: This will be the content of the right-hand section of the footer, if `FOOTER_SECTIONS` is set to 2 or 3.
    
- `ARTICLES_ON_HOMEPAGE`: Set this to `True` or `False` according to whether you want the homepage to display all the articles. Defaults to `True`.

- `NO_POSTS_MESSAGE`: Set this to a message you would like to display, wherever a list of articles would be, if you have no articles yet. If you don't set this, it will be set to "No posts yet!".

- `LOGO_SVG`: Set this to the location of an SVG file of your logo, if you want it displayed to the left of the menu bar. If it exists, it is also used for the favicon.

- `LOGO_PNG`: Set this to the location of a PNG file of your logo to use to the left of the menu bar, and as a favicon. This is used only if `LOGO_SVG` isn't set.

- `THEME_CSS_VARS`: This is where you can specify how to customise the theme, in terms of CSS. See below for details.

## THEME_CSS_VARS

This is where you customise the theme. It is a dictionary containing various properties of which will allow you to spcify the CSS. The properties are as follows:

- `menu_bg`: The background colour of the menu bar
- `menu_col`: The font/foreground colour of the menu bar
- `heading_bg`: The background colour of the headings (h1, h2 etc.)
- `heading_col`: The font colour of the headings
- `hmbg_menu_bg`: The background colour of the hamburger menu. (Defaults to `heading_col`)
- `hmbg_menu_col`: The font/foreground colour of the hamburger menu. (Defaults to `heading_bg`)
- `hmbg_hover_bg`: The background colour for hovering over the hamburger menu items (Defaults to `menu_bg`)
- `hmbg_hover_col`:  The font colour for hovering over the hamburger menu items. (Defaults to `menu_col`)
- `button_col`: Button colour. (Defaults to `heading_bg`)
- `button_bg`: Button background. (Defaults to `heading_col`)
- `bttn_focus_bg`: Focus background colour for buttons. (Defaults to `menu_bg`)
- `bttn_focus_col`: Focus background font for buttons. (Defaults to `menu_col`)
- `skip_link_bg`: Background colour for "skip link". (Defaults to `hmbg_menu_bg`)
- `skip_link_col`: Font colour for "skip link". (Defaults to `hmbg_menu_col`)
- `footer_col`: Font colour for footer. (Defaults to `heading_bg`)
- `footer_bg`: Background colour for footer. (Defaults to `heading_col`)
- `link_bg`: Background colour for ordinary links. (Defaults to `heading_bg`)
- `link_col`: Font colour for ordinary links. (Defaults to `heading_col`)
- `post_decoration_col`: Colour for post decoration (as it stands this is just box-shadow). (Defaults to `menu-bg`)
- `small_info_bg`: Font colour for small info on articles (i.e. date, author name, etc.) (Defaults to `heading_bg`)
- `small_info_col`: Background colour for small info on articles (i.e. date, author name, etc.) (Defaults to `heading_col`)
- `tag_bg`: Background colour for tag list. (Defaults to `heading_bg`)
- `tag_col`: Font colour for tag list. (Defaults to `heading_col`)
- `focus_bg`: Backround colour for focus, active and hover, for links. (Defaults to `menu_col`)
- `focus_col`: Font colour for focus, active and hover, for links. (Defaults to `menu_bg`)
- `main_bg`: Background colour for main section of page. (Defaults to white)
- `main_col`: Font colour for main section of page. (Defaults to black)
- `font_stack`: Font stack to use. Has default
- `fit_logo`: Whether or not to fit the logo to the menu bar. The alternative is to have it overlapping the edge of the menu bar (in large screens). (Defaults to True)
- `home_hero_style`:
- `subpage_hero_style`:
- `blog_hero_style`:
- `article_hero_style`:
- `hero_heading_bg`:
- `hero_heading_col`:
- `hover_bg`:
- `menu_border`:
- `default_img_width`: