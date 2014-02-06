describe('Conway Game of Life main controller', function() {
    var ctrl,
        scope;

    beforeEach(function() {
        module('ConwayGameOfLife');

        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('MainCtrl', {
                $scope: scope
            });
        });
    });

    it('should exist', function() {
        expect(ctrl).toBeTruthy();
    });

    it('should default grid size to four', function() {
        expect(scope.gridsize).toBe(4);
    });

    it('should initially hide the "tick" button', function() {
        expect(scope.hideTickButton).toBe(true);
    });

    it('should initially hide the "terminal state reached" message', function() {
        expect(scope.hideTerminalStateMessage).toBe(true);
    });
});
