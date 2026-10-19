# Algebraik Theme

**This is very much still a work in progress.**

Algebraik Theme is a theme for the Pelican static site generator. There are several ways to customise it, mostly through settings in your pelicanconf.py, and metadata in pages and articles.

## Homepage

In Pelican, the homepage of the website uses the index.html template. In this theme, you can add the metadata `:home: True` for reStructuredText or `Home: True` for Markdown.

The template will then read the contents of that page and put it on the homepage. (Note that, where DISPLAY_PAGES_ON_MENU is set to True, those pages won't include the page with home set to True. It will, however, be put in the menu as the homepage if DISPLAY_HOME_ON_MENU isn't set to False.)

By default, the homepage will be set to include a list of all articles (in reverse chronological order), although this can be overridden.

To avoid generating a duplicate page with the same content as the homepage, put the metadata `:save_as: `, and leave it blank. This supresses creating a specifc page for the homepage content, separate from the actual homepage.

## Metadata

As mentioned above, you can use the metadata `:home: True` to specify that the contents of the page is meant to be included on the homepage.

You can also specify `:subtitle: <your subtitle>`, to be included in the page hero.

For articles, you can specify `:cover_img: <path/to/img>` to refer to an image you want as the article's thumbnail.

You can use ":noindex: True" To specify that you don't want a page or article to be indexed by web crawlers.

## Settings

In addition to the standard settings, which you can access at [Pelican's settings page](https://docs.getpelican.com/en/latest/settings.html), this theme has a few custom settings. (None of them are required, but if you want to customise your website, you will want to use a few of these, particularly the colour options.)

- `SITESUBTITLE`: An optional string to be used as the `description` html metadata.

- `ALIGN_WITH_PICTURE`: If set to True, this makes articles without cover images have a space where the cover image should go, so as to align with articles which do have one.

- `CR_AUTHOR`: The author to list as copyright holder. You can set this to `SITENAME`, if you want that as the copyright holder.

- `NOW`: If you want the  copyright year set to the current year, you can do: `from datetime import datetime`, and set `NOW` to `datetime.now()`.

- `FOOTER_SECTIONS`: Set this to the number of sections you would like to have in the footer. Can be 1, 2 or 3. If not set, it will default to 1.

- `FOOTER_CENTRE`: If `FOOTER_SECTIONS` is set to 1 or not set, this will be the content of the footer. If `FOOTER_SECTIONS` is set to 3, this will be the centre section. (Note that you can use html tags in this setting, and in the following two settings.) If this is not set, the default is a copyright symbol, followed by the year if `NOW` is set, followed by `CR_AUTHOR` if it is set, and if it is not, `AUTHOR` is used instead.

- `FOOTER_LEFT`: This will be the content of the left-hand section of the footer, if `FOOTER_SECTIONS` is set to 2 or 3.

- `FOOTER_RIGHT`: This will be the content of the right-hand section of the footer, if `FOOTER_SECTIONS` is set to 2 or 3.
    
- `ARTICLES_ON_HOMEPAGE`: Set this to `True` or `False` according to whether you want the homepage to display all the articles. Defaults to `True`.

- `NO_POSTS_MESSAGE`: Set this to a message you would like to display, wherever a list of articles would be, if you have no articles yet. If you don't set this, it will be set to "No posts yet!".

- `ICON_SVG`: Set this to the location of an SVG file to be used as a favicon.

- `ICON_PNG`: Set this to the location of a PNG file to be used as a favicon, provided `ICON_SVG` is not set.

- `LOGO_SVG`: Set this to the location of an SVG file of your logo, if you want it displayed to the left of the menu bar.

- `LOGO_PNG`: Set this to the location of a PNG file of your logo to use to the left of the menu bar. This is used only if `LOGO_SVG` isn't set.

- `HERO_IMAGE`: The location (relative to the site root) of your chosen image for the hero, if you choose to have a hero image

- `CATEGORY_CONTENT`: This is a dictionary designed for overriding the defaults for a category page. See the section on [CATEGORY_CONTENT](#category_content)

- `THEME_CSS_VARS`: This is where you can specify how to customise the theme, in terms of CSS colours. See the section on [THEME_CSS_VARS](#theme_css_vars)

- `THEME_EXTRA_VARS`: This is where you can specify non-colour related settings for the CSS. See the section on [THEME_EXTRA_VARS](#theme_extra_vars)

## CATEGORY_CONTENT

The purpose of this setting is to allow a category to become a kind of "subblog".

Suppose you want a blog about football to have its own page. The obvious thing to do is to make all posts on that topic have football as a category. You can then link the category page for that topic on the menu (or however you want users to navigate to it).

There are two problems:
1. The main heading would be something like "Category: Football".
2. You may want to put a paragraph or so at the top to introduce the subblog.

You can override the normal formatting of a category page by adding the following to your pelicanconf.py:
```
CATEGORY_CONTENT = {
    "football": {
        "title": "Football Blog",
        "content": "Hello, and welcome to my blog!"
    }
}
```
The title will replace "Category: Football" and the content will be added before the articles.

## THEME_CSS_VARS

This is where you customise the colours of the theme. It is a dictionary containing various properties of which will allow you to specify the CSS. The properties are as follows:

- `menu_bg`: The background colour of the menu bar
- `menu_col`: The font/foreground colour of the menu bar
- `heading_bg`: The background colour of the headings (h1, h2 etc.)
- `heading_col`: The font colour of the headings
- `hmbg_menu_bg`: The background colour of the hamburger menu. Defaults to `heading_col`
- `hmbg_menu_col`: The font/foreground colour of the hamburger menu. Defaults to `heading_bg`
- `hmbg_hover_bg`: The background colour for hovering over the hamburger menu items Defaults to `menu_bg`
- `hmbg_hover_col`:  The font colour for hovering over the hamburger menu items. Defaults to `menu_col`
- `menu_hover_bg`: Background colour for hover on menu links if you choose to `menu_border` to be False. Defaults to `heading_col`
- `menu_hover_col`: Font colour for hover on menu links if you choose to `menu_border` to be False. Defaults to `heading_bg`
- `button_col`: Button colour. Defaults to `heading_bg`
- `button_bg`: Button background. Defaults to `heading_col`
- `bttn_focus_bg`: Focus background colour for buttons. Defaults to `menu_bg`
- `bttn_focus_col`: Focus background font for buttons. Defaults to `menu_col`
- `skip_link_bg`: Background colour for "skip link". Defaults to `hmbg_menu_bg`
- `skip_link_col`: Font colour for "skip link". Defaults to `hmbg_menu_col`
- `footer_col`: Font colour for footer. Defaults to `heading_bg`
- `footer_bg`: Background colour for footer. Defaults to `heading_col`
- `link_bg`: Background colour for ordinary links. Defaults to `heading_bg`
- `link_col`: Font colour for ordinary links. Defaults to `heading_col`
- `post_decoration_col`: Colour for post decoration (as it stands this is just box-shadow). Defaults to `menu-bg`
- `small_info_bg`: Font colour for small info on articles (i.e. date, author name, etc.) Defaults to `heading_bg`
- `small_info_col`: Background colour for small info on articles. Defaults to `heading_col`
- `tag_bg`: Background colour for tag list. Defaults to `heading_bg`
- `tag_col`: Font colour for tag list. Defaults to `heading_col`
- `focus_bg`: Backround colour for focus, active and hover, for links. Defaults to `menu_col`
- `focus_col`: Font colour for focus, active and hover, for links. Defaults to `menu_bg`
- `main_bg`: Background colour for main section of page. Defaults to white
- `main_col`: Font colour for main section of page. Defaults to black
- `hero_heading_bg`: For if you choose to have an image for the hero, the background colour of the actual heading. Defaults to rgba(0, 0, 0, 0.4), which is translucent
- `hero_heading_col`: Font colour for over a hero image. Defaults to white

## THEME_EXTRA_VARS

This is where you customise the rest of the theme CSS. It is also a dictionary. The properties are as follows:
    
- `font_stack`: Font stack to use. Has default
- `fit_logo`: Whether or not to fit the logo to the menu bar. The alternative is to have it overlapping the edge of the menu bar (in large screens). Defaults to True
- `home_hero_style`: Style of the hero on the homepage. Defaults to `hero_img`. See section on [hero styles](#hero-styles)
- `subpage_hero_style`: Style of the hero on subpages. Defaults to `block`
- `blog_hero_style`: Style of the hero on blog pages (such as a category page, a tags page etc.). Defaults to `plain`
- `article_hero_style`: Style of the hero on article pages. Defaults to `plain`
- `menu_border`: Whether or not to use the border style of menu. Defaults to False
- `default_img_width`: Default size of image. Defaults to 25rem

## Hero styles

There are four hero styles (the styling for the main heading on a page, and the section surrounding it):

- `hero_img`: This puts a background image in the hero section. Currently, it takes the setting `HERO_IMAGE` as the location, relative to the site root
- `block`: This puts a solid block of colour behind the main heading (and subheading if you have one)
- `plain`: This puts a plain main heading
- `line`: This puts a plain main heading with a thin border above and below the heading

## Adding to and overriding the CSS

You can add custom styles to the CSS by specifying `EXTRA_STYLES_FILE` in the settings. Your style sheet should be loaded after the theme's style sheets, allowing you to override the default styles in most cases. If necessary, you can override CSS in the default style sheets using the "!important" flag.

You can completely replace the CSS in styles.css by specifying `ALTERTNATIVE_STYLES_FILE`. The base styles will still apply. I intend to put a template which you can use to specify the relevant alternative styles.

## Adding to and overriding templates

In Pelican, you can add your own templates, which can either be extra (and which you can use for a particular page or article by specifying the `:template:` metadata), or overrides (for instance, you can create `article.html` which, if put in the appropriate place, will override the theme's `article.html`).

Additionally, this theme allows two optional templates: `extra_top.html` and `extra_bottom.html`. If provided, the contents of these templates will be added at the top and bottom respectively of the content section on all pages.

## How to use

If you have a Pelican project, you can clone this repo into a subdirectory of your project.

You then need to specify it in your pelicanconf.py. For example, if you clone it into `themes/algebraik-theme`, you set:
```
THEME = "themes/algebraik-theme"
```

To completely customise your website in terms of colours, the minimum you need to do is set `menu_bg`, `menu_col`, `heading_bg` and `heading_col` in `THEME_CSS_VARS`, like so:
```
THEME_CSS_VARS = {
    'menu_bg': '#914e8e',
    'menu_col': 'white',
    'heading_bg': 'white',
    'heading_col': '#482747',
}
```

You will also want to either set the value of `HERO_IMAGE` to your chosen image, or set `home_hero_style` to something other than `hero_img`, for example:
```
THEME_EXTRA_VARS = {
    'home_hero_style': 'block'
}
```

## Coming soon

A dark theme will be implemented by adding a setting `THEME_CSS_VARS_DARK`. It will function in exactly the same way as the regular colour options.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you'd like to get in touch, please feel free to contact me at spivack.f@gmail.com.
