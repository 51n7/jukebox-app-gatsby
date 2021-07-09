/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages only on the client

  /*if (page.path === `/`) {
    page.matchPath = `/*`;

    // Update the page.
    createPage(page);
  }*/

  if (page.path.match(/^\/jukebox-app/)) {
    page.matchPath = "/jukebox-app/*"

    // Update the page.
    createPage(page);
  }
};
