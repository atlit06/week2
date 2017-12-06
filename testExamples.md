# Test case 1
## Create game command

Given: No game instance..

When: A create game command executed.

Then: A new game event has been created.

# Test case 2
## Join game command
### One player
Given: A new game has been created.

When: A player joins the created game.

Then: The new game has one player.

### Two players in a game
Given: A game is full, with two players.

When: A 3rd player tries to join a game.

Then: The 3rd player cannot join the game becouse the game is full.

# Test case 3
## Place move command
### First move
Given: No move has been made in a game.

When: Player 1 places the first move.

Then: The first move has been placed.

### Illegal move
Given: Some moves have been made in a game.

When: A player tries to place a move on a square that is already occupied.

Then: An error occurs because the square is occupied.

### Not a players turn
Given: Player 2 has yet to make a move.

When: Player 1 tries to make a move.

Then: Player 1 gets an error because it is not his turn.

### Game is won
Given: A player has two squares marked in a row.

When: The player has a third square marked in a row.

Then: The player that has tree squares marked in a row wins.

### Last move wins
Given: The game has only one square left to place a move, and a player can win with that move.

When: A player places a move in that last square.

Then: The player wins.

### No one wins
Given: The game is in mid state

When: There are no possible winning combos left

Then: The game emits that the game is a draw
