({
  mainConfigFile: "js-src/main.js",
  dir: "js-build",
  removeCombined: true,
  findNestedDependencies: true,
  //skipDirOptimize: true,
  //optimize: "none",
  //optimize: "uglify2",
  modules: [
    {
      name: 'main',
      //include: ['../bower_components/requirejs/require.js'],
      //exclude: ['views/media-gallery'],
    },
    //{
    //  name: 'views/media-gallery'
    //}
  ]
});
