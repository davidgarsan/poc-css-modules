"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('poc-css-modules/app', ['exports', 'ember', 'poc-css-modules/resolver', 'ember-load-initializers', 'poc-css-modules/config/environment'], function (exports, _ember, _pocCssModulesResolver, _emberLoadInitializers, _pocCssModulesConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _pocCssModulesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _pocCssModulesConfigEnvironment['default'].podModulePrefix,
    Resolver: _pocCssModulesResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _pocCssModulesConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('poc-css-modules/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'poc-css-modules/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _pocCssModulesConfigEnvironment) {

  var name = _pocCssModulesConfigEnvironment['default'].APP.name;
  var version = _pocCssModulesConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('poc-css-modules/components/button-default/component-compiled', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'div',

    click: function click(e) {
      this._super(e);
      this.sendAction('action', this.get('param'));
    }
  });

  //# sourceMappingURL=component-compiled.js.map
});
define('poc-css-modules/components/button-default/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    /*
      The style object can be also accessed by className binding to apply styles to the components root-element (div):
           classNameBindings: ['styles.normal'],
        By computed alias attribute:
           classNameBindings: ['normal'],
           normal: Ember.computed.alias('styles.normal'),
        Or by computed function:
           classNameBindings: ['normal'],
           normal: Ember.computed('styles.normal', function() {
            return this.get('styles.normal');
          }),
     */

    click: function click(e) {
      this._super(e);
      this.sendAction('action', this.get('param'));
      console.log(this.get('styles'));
    }
  });
});
define("poc-css-modules/components/button-default/styles", ["exports", "ember-css-modules/styles-object"], function (exports, _emberCssModulesStylesObject) {
  exports["default"] = _emberCssModulesStylesObject["default"].create({
    "secondaryFontColorButton": "#FFF",
    "secondaryBackgroundColor": "#006ec1",
    "normal": "_normal_fgpil5"
  });
});
define("poc-css-modules/components/button-default/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 46
          }
        },
        "moduleName": "poc-css-modules/components/button-default/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "styles.normal", ["loc", [null, [1, 14], [1, 27]]]]]]], ["content", "label", ["loc", [null, [1, 31], [1, 40]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('poc-css-modules/components/button-primary/component-compiled-compiled', ['exports', 'poc-css-modules/components/button-default/component'], function (exports, _pocCssModulesComponentsButtonDefaultComponent) {
  exports['default'] = _pocCssModulesComponentsButtonDefaultComponent['default'].extend({});

  //# sourceMappingURL=component-compiled.js.map

  //# sourceMappingURL=component-compiled-compiled.js.map
});
define('poc-css-modules/components/button-primary/component-compiled', ['exports', 'poc-css-modules/components/button-default/component'], function (exports, _pocCssModulesComponentsButtonDefaultComponent) {
  exports['default'] = _pocCssModulesComponentsButtonDefaultComponent['default'].extend({});

  //# sourceMappingURL=component-compiled.js.map
});
define('poc-css-modules/components/button-primary/component', ['exports', 'poc-css-modules/components/button-default/component'], function (exports, _pocCssModulesComponentsButtonDefaultComponent) {
  exports['default'] = _pocCssModulesComponentsButtonDefaultComponent['default'].extend({});
});
define("poc-css-modules/components/button-primary/styles", ["exports", "ember-css-modules/styles-object"], function (exports, _emberCssModulesStylesObject) {
  exports["default"] = _emberCssModulesStylesObject["default"].create({
    "primaryFontColorButton": "#006ec1",
    "primaryBackgroundColor": "#fff",
    "primary": "_primary_ldflry _normal_fgpil5"
  });
});
define("poc-css-modules/components/button-primary/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 47
          }
        },
        "moduleName": "poc-css-modules/components/button-primary/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "styles.primary", ["loc", [null, [1, 14], [1, 28]]]]]]], ["content", "label", ["loc", [null, [1, 32], [1, 41]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('poc-css-modules/components/button-process/component-compiled-compiled', ['exports', 'poc-css-modules/components/button-default/component'], function (exports, _pocCssModulesComponentsButtonDefaultComponent) {
  exports['default'] = _pocCssModulesComponentsButtonDefaultComponent['default'].extend({});

  //# sourceMappingURL=component-compiled.js.map

  //# sourceMappingURL=component-compiled-compiled.js.map
});
define('poc-css-modules/components/button-process/component-compiled', ['exports', 'poc-css-modules/components/button-default/component'], function (exports, _pocCssModulesComponentsButtonDefaultComponent) {
  exports['default'] = _pocCssModulesComponentsButtonDefaultComponent['default'].extend({});

  //# sourceMappingURL=component-compiled.js.map
});
define('poc-css-modules/components/button-process/component', ['exports', 'poc-css-modules/components/button-default/component'], function (exports, _pocCssModulesComponentsButtonDefaultComponent) {
  exports['default'] = _pocCssModulesComponentsButtonDefaultComponent['default'].extend({});
});
define("poc-css-modules/components/button-process/styles", ["exports", "ember-css-modules/styles-object"], function (exports, _emberCssModulesStylesObject) {
  exports["default"] = _emberCssModulesStylesObject["default"].create({
    "process": "_process_b07psp _normal_fgpil5",
    "icon": "_icon_b07psp"
  });
});
define("poc-css-modules/components/button-process/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "poc-css-modules/components/button-process/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element1, 'class');
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "styles.process", ["loc", [null, [1, 14], [1, 28]]]]]]], ["attribute", "class", ["concat", [["get", "styles.icon", ["loc", [null, [2, 16], [2, 27]]]]]]], ["content", "title", ["loc", [null, [4, 11], [4, 20]]]], ["content", "label", ["loc", [null, [5, 11], [5, 20]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('poc-css-modules/components/button-success/component-compiled-compiled', ['exports', 'poc-css-modules/components/button-default/component'], function (exports, _pocCssModulesComponentsButtonDefaultComponent) {
  exports['default'] = _pocCssModulesComponentsButtonDefaultComponent['default'].extend({});

  //# sourceMappingURL=component-compiled.js.map

  //# sourceMappingURL=component-compiled-compiled.js.map
});
define('poc-css-modules/components/button-success/component-compiled', ['exports', 'poc-css-modules/components/button-default/component'], function (exports, _pocCssModulesComponentsButtonDefaultComponent) {
  exports['default'] = _pocCssModulesComponentsButtonDefaultComponent['default'].extend({});

  //# sourceMappingURL=component-compiled.js.map
});
define('poc-css-modules/components/button-success/component', ['exports', 'poc-css-modules/components/button-default/component'], function (exports, _pocCssModulesComponentsButtonDefaultComponent) {
  exports['default'] = _pocCssModulesComponentsButtonDefaultComponent['default'].extend({});
});
define("poc-css-modules/components/button-success/styles", ["exports", "ember-css-modules/styles-object"], function (exports, _emberCssModulesStylesObject) {
  exports["default"] = _emberCssModulesStylesObject["default"].create({
    "hiliteBackgroundColor": "#44a718",
    "success": "_success_lyelwx _normal_fgpil5"
  });
});
define("poc-css-modules/components/button-success/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 47
          }
        },
        "moduleName": "poc-css-modules/components/button-success/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "styles.success", ["loc", [null, [1, 14], [1, 28]]]]]]], ["content", "label", ["loc", [null, [1, 32], [1, 41]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('poc-css-modules/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('poc-css-modules/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('poc-css-modules/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('poc-css-modules/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('poc-css-modules/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'poc-css-modules/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _pocCssModulesConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_pocCssModulesConfigEnvironment['default'].APP.name, _pocCssModulesConfigEnvironment['default'].APP.version)
  };
});
define('poc-css-modules/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('poc-css-modules/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('poc-css-modules/initializers/ember-css-modules', ['exports', 'ember-css-modules/initializers/ember-css-modules'], function (exports, _emberCssModulesInitializersEmberCssModules) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssModulesInitializersEmberCssModules['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCssModulesInitializersEmberCssModules.initialize;
    }
  });
});
define('poc-css-modules/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('poc-css-modules/initializers/export-application-global', ['exports', 'ember', 'poc-css-modules/config/environment'], function (exports, _ember, _pocCssModulesConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_pocCssModulesConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _pocCssModulesConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_pocCssModulesConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('poc-css-modules/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('poc-css-modules/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('poc-css-modules/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("poc-css-modules/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('poc-css-modules/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('poc-css-modules/router', ['exports', 'ember', 'poc-css-modules/config/environment'], function (exports, _ember, _pocCssModulesConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _pocCssModulesConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('poc-css-modules/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('poc-css-modules/styles/app', ['exports', 'ember-css-modules/styles-object'], function (exports, _emberCssModulesStylesObject) {
  exports['default'] = _emberCssModulesStylesObject['default'].create({});
});
define('poc-css-modules/styles/fonts', ['exports', 'ember-css-modules/styles-object'], function (exports, _emberCssModulesStylesObject) {
  exports['default'] = _emberCssModulesStylesObject['default'].create({});
});
define("poc-css-modules/styles/variables", ["exports", "ember-css-modules/styles-object"], function (exports, _emberCssModulesStylesObject) {
  exports["default"] = _emberCssModulesStylesObject["default"].create({
    "fontWeightButton": "bold",
    "primaryFontColorButton": "#006ec1",
    "secondaryFontColorButton": "#FFF",
    "paddingButton": ".5em",
    "primaryBackgroundColor": "#fff",
    "secondaryBackgroundColor": "#006ec1",
    "hiliteBackgroundColor": "#44a718"
  });
});
define("poc-css-modules/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "poc-css-modules/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("PostCSS - Buttons");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 14, 14, contextualElement);
        return morphs;
      },
      statements: [["inline", "button-default", [], ["label", "default"], ["loc", [null, [3, 0], [3, 34]]]], ["inline", "button-primary", [], ["label", "primary"], ["loc", [null, [7, 0], [7, 34]]]], ["inline", "button-process", [], ["label", "process"], ["loc", [null, [11, 0], [11, 34]]]], ["inline", "button-success", [], ["label", "success"], ["loc", [null, [15, 0], [15, 34]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('poc-css-modules/config/environment', ['ember'], function(Ember) {
  var prefix = 'poc-css-modules';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("poc-css-modules/app")["default"].create({"name":"poc-css-modules","version":"0.0.0+7df8db11"});
}

/* jshint ignore:end */
//# sourceMappingURL=poc-css-modules.map