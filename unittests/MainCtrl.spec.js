/* jshint expr: true */
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
        expect(ctrl).to.be.ok;
    });

    it('should default grid size to four', function() {
        expect(scope.gridsize).to.equal(4);
    });

    it('should initially hide the "tick" button', function() {
        expect(scope.hideTickButton).to.equal(true);
    });

    it('should initially hide the "terminal state reached" message', function() {
        expect(scope.hideTerminalStateMessage).to.equal(true);
    });

    describe('$scope.makeNewBoardOfSize function', function() {
        it('should exist', function() {
            expect(scope.makeNewBoardOfSize).to.be.ok;
        });
    });

    describe('$scope.tick function', function() {
        it('should exist', function() {
            expect(scope.tick).to.be.ok;
        });
    });

    describe('$scope.deadCell function', function() {
        it('should exist', function() {
            expect(scope.deadCell).to.be.ok;
        });
    });

    describe('$scope.livingCell function', function() {
        it('should exist', function() {
            expect(scope.livingCell).to.be.ok;
        });
    });

    describe('$scope.generateInitialGrid function', function() {
        it('should exist', function() {
            expect(scope.generateInitialGrid).to.be.ok;
        });

        it('should show the tick button', function() {
            scope.generateInitialGrid();

            expect(scope.hideTickButton).to.equal(false);
        });

        it('should set the current iteration number to zero', function() {
            scope.generateInitialGrid();

            expect(scope.currentIterationNumber).to.equal(0);
        });

        it('should create a list of grids with only the new grid in it', function() {
            scope.generateInitialGrid();

            expect(scope.boards.length).to.equal(1);
        });
    });

    describe('$scope.numberOfLivingNeighbors function', function() {
        it('should exist', function() {
            expect(scope.numberOfLivingNeighbors).to.be.ok;
        });
    });
});
