module.exports.LAYOUT_FILES_DEFAULT = [
  'footer.md',
  'head.md',
  'navigation.md',
  'scripts.js',
  'styles.css',
];

module.exports.PAGE_EJS = '<!DOCTYPE html>\n'
  + '<html>\n'
  + '<head>\n'
  + '    <meta charset="utf-8">\n'
  + '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n'
  + '    <meta name="viewport" content="width=device-width, initial-scale=1">\n'
  + '    <title><%= title %></title>\n'
  + '    <link rel="stylesheet" href="<%- asset.bootstrap %>">\n'
  + '    <link rel="stylesheet" href="<%- asset.highlight %>">\n'
  + '    <link rel="stylesheet" href="<%- asset.markbind %>">\n'
  + '</head>\n'
  + '<body>\n'
  + '<div id="app" class="container-fluid">\n'
  + '    <%- content %>\n'
  + '</div>\n'
  + '</body>\n'
  + '<script src="<%- asset.vue %>"></script>\n'
  + '<script src="<%- asset.vueStrap %>"></script>\n'
  + '<script src="<%- asset.setup %>"></script>\n'
  + '</html>\n';

module.exports.SITE_JSON_DEFAULT = '{\n'
  + '  "baseUrl": "",\n'
  + '  "titlePrefix": "",\n'
  + '  "ignore": [\n'
  + '    "_markbind/layouts/*",\n'
  + '    "_markbind/logs/*",\n'
  + '    "_site/*",\n'
  + '    "site.json",\n'
  + '    "*.md"\n'
  + '  ],\n'
  + '  "pages": [\n'
  + '    {\n'
  + '      "src": "index.md",\n'
  + '      "title": "Hello World"\n'
  + '    },\n'
  + '    {\n'
  + '      "glob" : "**/index.md"\n'
  + '    }\n'
  + '  ],\n'
  + '  "deploy": {\n'
  + '    "message": "Site Update."\n'
  + '  }\n'
  + '}\n';

module.exports.FOOTER_MD_DEFAULT = '<footer>\n'
  + '  <div class="text-center">\n'
  + '    This is a dynamic height footer that supports variables {{glyphicon_tags}} '
  + 'and markdown <md>:smile:</md>!\n'
  + '  </div>\n'
  + '  <!-- Support MarkBind by including a link to us on your landing page! -->\n'
  + '  <div class="text-center">\n'
  + '    <small>[Generated by {{MarkBind}} on {{timestamp}}]</small>\n'
  + '  </div>\n'
  + '</footer>\n';

module.exports.INDEX_MD_DEFAULT = '<frontmatter>\n'
  + '  title: "Hello World"\n'
  + '  footer: footer.md\n'
  + '  siteNav: site-nav.md\n'
  + '</frontmatter>\n\n'
  + '# Hello world\n'
  + 'Welcome to your page generated with MarkBind.\n';

module.exports.SITE_NAV_MD_DEFAULT = '<navigation>\n'
  + '* [Home {{glyphicon_home}}]({{baseUrl}}/index.html)\n'
  + '</navigation>\n';

module.exports.USER_VARIABLES_DEFAULT = '<span id="example">\n'
  + 'To inject this HTML segment in your markbind files, use {{ example }} where you want to place it.\n'
  + 'More generally, surround the segment\'s id with double curly braces.\n'
  + '</span>';
