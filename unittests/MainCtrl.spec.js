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

    describe('$scope.makeNewBoardOfSize function', function() {
        it('should exist', function() {
            expect(scope.makeNewBoardOfSize).toBeTruthy();
        });
    });

    describe('$scope.tick function', function() {
        it('should exist', function() {
            expect(scope.tick).toBeTruthy();
        });
    });

    describe('$scope.deadCell function', function() {
        it('should exist', function() {
            expect(scope.deadCell).toBeTruthy();
        });
    });

    describe('$scope.livingCell function', function() {
        it('should exist', function() {
            expect(scope.livingCell).toBeTruthy();
        });
    });

    describe('$scope.generateInitialGrid function', function() {
        it('should exist', function() {
            expect(scope.generateInitialGrid).toBeTruthy();
        });

        it('should show the tick button', function() {
            scope.generateInitialGrid();

            expect(scope.hideTickButton).toBe(false);
        });

        it('should set the current iteration number to zero', function() {
            scope.generateInitialGrid();

            expect(scope.currentIterationNumber).toBe(0);
        });

        it('should create a list of grids with only the new grid in it', function() {
            scope.generateInitialGrid();

            expect(scope.boards.length).toBe(1);
        });
    });

    describe('$scope.numberOfLivingNeighbors function', function() {
        it('should exist', function() {
            expect(scope.numberOfLivingNeighbors).toBeTruthy();
        });
    });
});
