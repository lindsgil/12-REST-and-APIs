'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.

    // TODO: Call a function to load all the data.
    Article.loadAll();
    });
    // Pass a view function as a callback, so the view will render after the data is loaded.
    repoView.index = function(callback)
  };

  module.aboutController = aboutController;
})(window);
