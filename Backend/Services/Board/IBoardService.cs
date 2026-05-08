using BoardModel = MCUGen.Api.Models.Board.Board;
using BoardDataModel = MCUGen.Api.Models.Board.BoardData;

namespace MCUGen.Api.Services.Board;

public interface IBoardService
{
    public List<BoardModel> GetBoards();
    
    public BoardDataModel GetBoardData(string boardId);
}