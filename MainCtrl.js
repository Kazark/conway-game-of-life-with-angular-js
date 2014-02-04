app.controller('MainCtrl', function($scope) {
  
  $scope.gridsize = 4;
  $scope.hideTickButton = true;
  $scope.hideTerminalStateMessage = true;
  
  $scope.livingCell = function() {
    var generateNext = function(numberOfLivingNeighbors) {
      if (numberOfLivingNeighbors < 2) {
        return $scope.deadCell();
      } else if (numberOfLivingNeighbors > 3) {
        return $scope.deadCell();
      } else {
        return $scope.livingCell();
      }
    };
    return {isLiving: true,
            generateNextGivenNLivingNeighbors: generateNext};
  };
  
  $scope.deadCell = function() {
    var generateNext = function(numberOfLivingNeighbors) {
      if (numberOfLivingNeighbors === 3) {
        return $scope.livingCell();
      } else {
        return $scope.deadCell();
      }
    };
    return {isLiving: false,
            generateNextGivenNLivingNeighbors: generateNext};
  };
  
  $scope.generateInitialGrid = function() {
    $scope.hideTerminalStateMessage = true;
    $scope.currentIterationNumber = 0;
    $scope.boards = [];
    var size = $scope.gridsize;
    $scope.boards[0] = $scope.makeNewBoardOfSize(size);
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        var isAlive = Math.round(Math.random());
        $scope.boards.last().grid[i][j] = isAlive ? $scope.livingCell() : $scope.deadCell();
      }
    }
    $scope.hideTickButton = false;
  };
  
  $scope.numberOfLivingNeighbors = function(board, row, column) {
    var numberLiving = 0;
    for (var i = row - 1; i <= row + 1; i++) {
      if (i < 0) {
        continue;
      }
      if (i >= board.grid.length) {
        continue;
      }
      for (var j = column - 1; j <= column + 1; j++) {
        if (j < 0) {
          continue;
        }
        if (j >= board.grid.length) {
          continue;
        }
        if (i === row && j === column) {
          continue;
        }
        if (board.grid[i][j].isLiving) {
          numberLiving++;
        }
      }
    }
    return numberLiving;
  };
  
  $scope.makeNewBoardOfSize = function(size) {
    var newGrid = [];
    for (var i = 0; i < size; i++) {
      newGrid[i] = [];
    }
    
    var boardEqualsBoard = function(board) {
      for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
          if (newGrid[i][j].isLiving !== board.grid[i][j].isLiving) {
            return false;
          }
        }
      }
      return true;
    };
    
    return { grid: newGrid,
             equals: boardEqualsBoard,
             iterationNumber: $scope.currentIterationNumber };
  };
  
  $scope.tick = function() {
    $scope.currentIterationNumber++;
    var oldBoard = $scope.boards.last();
    var size = oldBoard.grid.length;
    $scope.boards.push($scope.makeNewBoardOfSize(size));
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        livingNeighbors = $scope.numberOfLivingNeighbors(oldBoard, i, j);
        $scope.boards.last().grid[i][j] = oldBoard.grid[i][j].generateNextGivenNLivingNeighbors(livingNeighbors);
      }
    }
    if ($scope.boards.last().equals(oldBoard)) {
      $scope.hideTickButton = true;
      $scope.boards.pop();
      $scope.hideTerminalStateMessage = false;
    }
  };
});