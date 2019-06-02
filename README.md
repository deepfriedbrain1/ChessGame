

Term Project
Documentation

Team B

CSC 667
December 18, 2018


Github repository
 
Github repository: https://github.com/sfsu-csc-667-fall-2018/term-project-team-b 

Heroku Deployment Link: https://team-b-chess-game.herokuapp.com/



Architecture

1. Database Architecture


We utilized two joined tables game_users and game_pieces to retrieve the necessary game state and user information. The game_users table links each user to their corresponding games. Users table maintains the user profile and games maintains the state of the game. The game_pieces table links each game piece to a game. 


2. Application architecture


The important components of our project can be found under
 /db 
/chess-game 
/routes
/frontend

Our database interfaces are contained under /db. These interfaces provide access to the database to the rest of the application.

The directory /chess-game contains all of the logic related to the actual playing of the game such as the valid moves and piece movement. 

All of our application’s routing is handled in routes. Features that require real-time communication such as chat and piece movement have io.emit attached. This allows use to emit to sockets anytime a specific route is triggered.

In /frontend we provide an api to the database calls via fetch as well as other important front end method. For example, initChat sets up a socket for each chat room including lobby. To achieve this we simply have initChat called on each page load and supply it with the game-id as well as class ids for the chat html elements. 


Problems

Problems encountered and resolutions DB
One issue was the connection between the database and our application. Initially one member started the skeleton of the project and encountered an issue which initially appeared to be related to pg-promise and the database environment variable. This issue was communicated via the team’s Slack channel and the members of the team met up to resolve the issue. After testing pg-promise with a hard coded database path it became apparent that the issue was not with pg-promise but with the environment variable itself. Upon checking the “requires” and “exports” through out the code base it was concluded that app.js was missing the require statement for the dotenv package. The statement was added to the file and the issue was resolved. The member that resolved the issue then proceeded to push the code into the Git repo to share among the rest of the team and conduct a code review. 

The next issue presented itself during deployment. After successfully deploying the code base onto Heroku and provisioning a database we encountered an issue with said database. Error code “42P01” was returned. Looking through the postgres documentation we found the error indicated an undefined table. Upon checking the Heroku database instance it was found that “test_table” did not exist. This issue was resolved by using the Heroku CLI to run a database migration.

Issues Setting Up Node Environment Variable
One team member had an issue setting up the environment variable (.env) in the Window OS environment. We tried resolving the issue via the suggest passed down by previous students but were unsuccessful. Ultimately, the team member moved into a virtual machine environment running a Linux distribution, Ubuntu 16.04 LTS. 

Removing dynamically rendered elements 
We had issues with removing previously rendered elements such as buttons and game pieces that were no longer necessary.   

Discussion

Front-End
Responsive Design Issue: Choosing between Fixed vs. Fluid Layouts
Since our design required a transition from two columns to three columns through possibly varying viewports, our design had to be decently responsive especially since we choose to do the chess game and had varies different components that had to work as a cohesive group such as the actual chessboard, chat room and menu. As with most projects our game project utilizes both fixed and fluid strategies to render the beauty of our game.   

The Appearance of Background Images: Chess Pieces
A difficulty we encountered was with the interaction of the chessboard, game pieces and game board tile selection. One of the main functionalities of the game is that the player must be able to click the desired game piece and select the location of where that game piece should move. What we encountered was that since we originally rendered the images of the game pieces onto the chessboard tiles the user selected the image with one click but then selected an empty chessboard tile, we had two different elements being selected. In order to maintain the clickability of the empty chessboard and prevent the image from interfering with the clickability of the chessboard tile it sat on we set the image to be a background image within the div element with customized CSS styling.  

Back-End
Game Logic Issues
The game is turned based and should require two players to activate, the current player whose move it is. As of the last update the one player can join the same game effectively becoming the other player and initiating the moves.


The passant move attacks sideways and leaves the piece in the same place as the enemy game piece. According to the game rules that attacking pawn should be moving diagonally behind the attacked game piece. Need to create a custom database query handling this issue. Currently the castling game rules move is not implemented. 


Test plan 
Testing conducted with built-in web browser developer tools (varies browsers) and Postman API Development Environment. 

Validation Testing
Hyperlinks functioning and lead to desired results.
Login
Register
New Game Creation
Join  Game
Scoreboard
Logout
Quit Game
Forgot Password
Issue: not implemented 
All internal hyperlinks are relative and not absolute
Checked text for spelling and grammar errors or out-of-date information


Input Testing
Verify that all input fields are behaving as desired. 
User “hits enter” input recognized by Chatroom.
User messages are displaying in chat window. 
Register and current player are able to make chess piece moves.
Chess pieces update from current location to new location per rules
Issue: See Discussion on Back-End Game Logic Issues.

Browser and Device Testing
Test the website’s appearance and functionality on multiple browsers
Test the website with various displays and screen resolutions
Issue: Buttons skew when page is minimized horizationally. 
Issue: Chessboard renders in height greater than viewport.
Performance and Bug Testing
Check that data is being saved and retrieved correctly when provided by user.
Check that the web pages are loading and data retrieval is quick enough (5 sec.)
Ensure that only registered users are able to create and join games
Session returns cookie with 10 day expiration 
Website updates views on valid user input
Issue: Player may have to refresh browser to render game piece moves

