// This file is automatically generated. Do not edit.

cah.$ = {};

cah.$.AjaxOperation = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.AjaxOperation.prototype.dummyForAutocomplete = undefined;
cah.$.AjaxOperation.START_GAME = "start_game";
cah.$.AjaxOperation.FIRST_LOAD = "firstload";
cah.$.AjaxOperation.JUDGE_SELECT = "judge_select";
cah.$.AjaxOperation.LOG_OUT = "logout";
cah.$.AjaxOperation.GAME_LIST = "games";
cah.$.AjaxOperation.GET_GAME_INFO = "get_game_info";
cah.$.AjaxOperation.PLAY_CARD = "play_card";
cah.$.AjaxOperation.CREATE_GAME = "create_game";
cah.$.AjaxOperation.GET_CARDS = "get_cards";
cah.$.AjaxOperation.JOIN_GAME = "join_game";
cah.$.AjaxOperation.REGISTER = "register";
cah.$.AjaxOperation.CHAT = "chat";
cah.$.AjaxOperation.LEAVE_GAME = "leave_game";
cah.$.AjaxOperation.NAMES = "names";

cah.$.AjaxRequest = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.AjaxRequest.prototype.dummyForAutocomplete = undefined;
cah.$.AjaxRequest.MESSAGE = "message";
cah.$.AjaxRequest.CARD_ID = "card_id";
cah.$.AjaxRequest.GAME_ID = "game_id";
cah.$.AjaxRequest.SERIAL = "serial";
cah.$.AjaxRequest.OP = "op";
cah.$.AjaxRequest.NICKNAME = "nickname";

cah.$.AjaxResponse = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.AjaxResponse.prototype.dummyForAutocomplete = undefined;
cah.$.AjaxResponse.WHITE_CARDS = "white_cards";
cah.$.AjaxResponse.GAME_ID = "game_id";
cah.$.AjaxResponse.HAND = "hand";
cah.$.AjaxResponse.PLAYER_INFO = "player_info";
cah.$.AjaxResponse.BLACK_CARD = "black_card";
cah.$.AjaxResponse.IN_PROGRESS = "in_progress";
cah.$.AjaxResponse.GAMES = "games";
cah.$.AjaxResponse.NICKNAME = "nickname";
cah.$.AjaxResponse.CARD_ID = "card_id";
cah.$.AjaxResponse.NEXT = "next";
cah.$.AjaxResponse.GAME_INFO = "game_info";
cah.$.AjaxResponse.ERROR = "error";
cah.$.AjaxResponse.ERROR_CODE = "error_code";
cah.$.AjaxResponse.SERIAL = "serial";
cah.$.AjaxResponse.MAX_GAMES = "max_games";
cah.$.AjaxResponse.NAMES = "names";

cah.$.BlackCardData = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.BlackCardData.prototype.dummyForAutocomplete = undefined;
cah.$.BlackCardData.TEXT = "text";
cah.$.BlackCardData.PICK = "pick";
cah.$.BlackCardData.ID = "id";
cah.$.BlackCardData.DRAW = "draw";

cah.$.DisconnectReason = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.DisconnectReason.prototype.dummyForAutocomplete = undefined;
cah.$.DisconnectReason.PING_TIMEOUT = "ping_timeout";
cah.$.DisconnectReason.KICKED = "kicked";
cah.$.DisconnectReason.MANUAL = "manual";

cah.$.ErrorCode = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.ErrorCode.prototype.dummyForAutocomplete = undefined;
cah.$.ErrorCode.TOO_MANY_GAMES = "too_many_games";
cah.$.ErrorCode.NO_CARD_SPECIFIED = "no_card_spec";
cah.$.ErrorCode.NOT_GAME_HOST = "not_game_host";
cah.$.ErrorCode.CANNOT_JOIN_ANOTHER_GAME = "cannot_join_another_game";
cah.$.ErrorCode.INVALID_CARD = "invalid_card";
cah.$.ErrorCode.NO_GAME_SPECIFIED = "no_game_spec";
cah.$.ErrorCode.SESSION_EXPIRED = "session_expired";
cah.$.ErrorCode.BAD_OP = "bad_op";
cah.$.ErrorCode.NO_SESSION = "no_session";
cah.$.ErrorCode.NOT_REGISTERED = "not_registered";
cah.$.ErrorCode.NOT_JUDGE = "not_judge";
cah.$.ErrorCode.OP_NOT_SPECIFIED = "op_not_spec";
cah.$.ErrorCode.NOT_IN_THAT_GAME = "not_in_that_game";
cah.$.ErrorCode.NICK_IN_USE = "nick_in_use";
cah.$.ErrorCode.SERVER_ERROR = "server_error";
cah.$.ErrorCode.GAME_FULL = "game_full";
cah.$.ErrorCode.NO_NICK_SPECIFIED = "no_nick_spec";
cah.$.ErrorCode.NOT_YOUR_TURN = "not_your_turn";
cah.$.ErrorCode.INVALID_NICK = "invalid_nick";
cah.$.ErrorCode.ALREADY_STARTED = "already_started";
cah.$.ErrorCode.BAD_REQUEST = "bad_req";
cah.$.ErrorCode.DO_NOT_HAVE_CARD = "do_not_have_card";
cah.$.ErrorCode.MESSAGE_TOO_LONG = "msg_too_long";
cah.$.ErrorCode.NOT_ENOUGH_PLAYERS = "not_enough_players";
cah.$.ErrorCode.INVALID_GAME = "invalid_game";
cah.$.ErrorCode.NO_MSG_SPECIFIED = "no_msg_spec";
cah.$.ErrorCode_msg = {};
cah.$.ErrorCode_msg['bad_op'] = "Invalid operation.";
cah.$.ErrorCode_msg['not_registered'] = "Not registered. Refresh the page.";
cah.$.ErrorCode_msg['server_error'] = "An error occured on the server.";
cah.$.ErrorCode_msg['not_enough_players'] = "There are not enough players to start the game.";
cah.$.ErrorCode_msg['session_expired'] = "Your session has expired. Refresh the page.";
cah.$.ErrorCode_msg['invalid_game'] = "Invalid game specified.";
cah.$.ErrorCode_msg['not_judge'] = "You aren't the judge.";
cah.$.ErrorCode_msg['no_card_spec'] = "No card specified.";
cah.$.ErrorCode_msg['game_full'] = "That game is full. Join another.";
cah.$.ErrorCode_msg['too_many_games'] = "There are too many games already in progress. Either join an existing game, or wait for one to become available.";
cah.$.ErrorCode_msg['no_session'] = "Session not detected. Make sure you have cookies enabled.";
cah.$.ErrorCode_msg['not_your_turn'] = "It is not your turn to play a card.";
cah.$.ErrorCode_msg['bad_req'] = "Bad request.";
cah.$.ErrorCode_msg['cannot_join_another_game'] = "You cannot join another game.";
cah.$.ErrorCode_msg['no_msg_spec'] = "No message specified.";
cah.$.ErrorCode_msg['not_in_that_game'] = "You are not in that game.";
cah.$.ErrorCode_msg['msg_too_long'] = "Messages cannot be longer than 200 characters.";
cah.$.ErrorCode_msg['do_not_have_card'] = "You don't have that card.";
cah.$.ErrorCode_msg['no_game_spec'] = "No game specified.";
cah.$.ErrorCode_msg['invalid_nick'] = "Nickname must contain only upper and lower case letters, numbers, or underscores, must be 3 to 30 characters long, and must not start with a number.";
cah.$.ErrorCode_msg['no_nick_spec'] = "No nickname specified.";
cah.$.ErrorCode_msg['nick_in_use'] = "Nickname is already in use.";
cah.$.ErrorCode_msg['not_game_host'] = "Only the game host can do that.";
cah.$.ErrorCode_msg['invalid_card'] = "Invalid card specified.";
cah.$.ErrorCode_msg['op_not_spec'] = "Operation not specified.";
cah.$.ErrorCode_msg['already_started'] = "The game has already started.";

cah.$.GameInfo = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.GameInfo.prototype.dummyForAutocomplete = undefined;
cah.$.GameInfo.HOST = "host";
cah.$.GameInfo.STATE = "state";
cah.$.GameInfo.PLAYERS = "players";
cah.$.GameInfo.ID = "id";

cah.$.GamePlayerInfo = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.GamePlayerInfo.prototype.dummyForAutocomplete = undefined;
cah.$.GamePlayerInfo.NAME = "name";
cah.$.GamePlayerInfo.SCORE = "score";
cah.$.GamePlayerInfo.STATUS = "status";

cah.$.GamePlayerStatus = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.GamePlayerStatus.prototype.dummyForAutocomplete = undefined;
cah.$.GamePlayerStatus.HOST = "host";
cah.$.GamePlayerStatus.IDLE = "idle";
cah.$.GamePlayerStatus.PLAYING = "playing";
cah.$.GamePlayerStatus.JUDGE = "judge";
cah.$.GamePlayerStatus.JUDGING = "judging";
cah.$.GamePlayerStatus_msg = {};
cah.$.GamePlayerStatus_msg['playing'] = "Playing";
cah.$.GamePlayerStatus_msg['idle'] = "";
cah.$.GamePlayerStatus_msg['judging'] = "Judging";
cah.$.GamePlayerStatus_msg['host'] = "Host";
cah.$.GamePlayerStatus_msg['judge'] = "Judge";
cah.$.GamePlayerStatus_msg_2 = {};
cah.$.GamePlayerStatus_msg_2['playing'] = "Select a card to play.";
cah.$.GamePlayerStatus_msg_2['idle'] = "Waiting for players...";
cah.$.GamePlayerStatus_msg_2['judging'] = "Select a winning card.";
cah.$.GamePlayerStatus_msg_2['host'] = "Wait for players then click Start Game.";
cah.$.GamePlayerStatus_msg_2['judge'] = "You are the judge this round.";

cah.$.GameState = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.GameState.prototype.dummyForAutocomplete = undefined;
cah.$.GameState.PLAYING = "playing";
cah.$.GameState.ROUND_OVER = "round_over";
cah.$.GameState.LOBBY = "lobby";
cah.$.GameState.JUDGING = "judging";
cah.$.GameState.DEALING = "dealing";
cah.$.GameState_msg = {};
cah.$.GameState_msg['playing'] = "In Progress";
cah.$.GameState_msg['judging'] = "In Progress";
cah.$.GameState_msg['lobby'] = "Joinable (Not Started)";
cah.$.GameState_msg['dealing'] = "In Progress";
cah.$.GameState_msg['round_over'] = "In Progress";

cah.$.LongPollEvent = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.LongPollEvent.prototype.dummyForAutocomplete = undefined;
cah.$.LongPollEvent.GAME_ROUND_COMPLETE = "game_round_complete";
cah.$.LongPollEvent.NOOP = "noop";
cah.$.LongPollEvent.GAME_PLAYER_INFO_CHANGE = "game_player_info_change";
cah.$.LongPollEvent.GAME_STATE_CHANGE = "game_state_change";
cah.$.LongPollEvent.GAME_PLAYER_LEAVE = "game_player_leave";
cah.$.LongPollEvent.NEW_PLAYER = "new_player";
cah.$.LongPollEvent.PLAYER_LEAVE = "player_leave";
cah.$.LongPollEvent.GAME_PLAYER_JOIN = "game_player_join";
cah.$.LongPollEvent.HAND_DEAL = "hand_deal";
cah.$.LongPollEvent.CHAT = "chat";
cah.$.LongPollEvent.GAME_LIST_REFRESH = "game_list_refresh";

cah.$.LongPollResponse = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.LongPollResponse.prototype.dummyForAutocomplete = undefined;
cah.$.LongPollResponse.WHITE_CARDS = "white_cards";
cah.$.LongPollResponse.GAME_ID = "game_id";
cah.$.LongPollResponse.REASON = "reason";
cah.$.LongPollResponse.HAND = "hand";
cah.$.LongPollResponse.INTERMISSION = "intermission";
cah.$.LongPollResponse.PLAYER_INFO = "player_info";
cah.$.LongPollResponse.BLACK_CARD = "black_card";
cah.$.LongPollResponse.WINNING_CARD = "winning_card";
cah.$.LongPollResponse.GAME_STATE = "game_state";
cah.$.LongPollResponse.NICKNAME = "nickname";
cah.$.LongPollResponse.MESSAGE = "message";
cah.$.LongPollResponse.ERROR = "error";
cah.$.LongPollResponse.EVENT = "event";
cah.$.LongPollResponse.FROM = "from";
cah.$.LongPollResponse.ERROR_CODE = "error_code";
cah.$.LongPollResponse.TIMESTAMP = "timestamp";
cah.$.LongPollResponse.ROUND_WINNER = "round_winner";

cah.$.ReconnectNextAction = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.ReconnectNextAction.prototype.dummyForAutocomplete = undefined;
cah.$.ReconnectNextAction.GAME = "game";
cah.$.ReconnectNextAction.NONE = "none";

cah.$.WhiteCardData = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.WhiteCardData.prototype.dummyForAutocomplete = undefined;
cah.$.WhiteCardData.TEXT = "text";
cah.$.WhiteCardData.ID = "id";
