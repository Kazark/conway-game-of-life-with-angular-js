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
});
