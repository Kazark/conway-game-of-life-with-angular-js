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

    it('cell should exist', inject(function(cell) {
        expect(cell).toBeTruthy();
    }));

    it('should exist', function() {
        expect(ctrl).toBeTruthy();
    });

    it('should have $scope', function() {
        expect(scope).toBeTruthy();
        expect(scope.livingCell).toBeTruthy();
    });
});
