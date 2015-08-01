describe('Directive: MyDir1', function () {
  var element, scope, compile, defaultData,
      validTemplate = '<my-dir-1 ng-model="data"></my-dir-1>';

  function createDirective(data, template) {
    var elm;

    // Setup scope state
    scope.data = data || defaultData;

    // Create directive
    elm = compile(template || validTemplate)(scope);

    // Trigger watchers
    //scope.$apply();

    // Return
    return elm;
  }

  beforeEach(function () {

    // Load the directive's module
    module('app');

    // Reset data each time
    defaultData = 42;

    // Provide any mocks needed
    module(function ($provide) {
      provide.value('MyService1', {});
    });

    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($rootScope, $compile, _MyService1_) {
      scope = $rootScope.$new();
      compile = $compile;

      MyService1 = _MyService1_;
      
    });
  });

  ////////

});