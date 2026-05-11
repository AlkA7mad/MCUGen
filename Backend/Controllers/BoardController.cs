using MCUGen.Api.DTOs;
using MCUGen.Api.Models.Board;
using MCUGen.Api.Services.Board;
using Microsoft.AspNetCore.Mvc;

namespace MCUGen.Api.Controllers;

[ApiController]
[Route("boards")]
public class BoardController: ControllerBase
{
    private readonly IBoardService _boardService;

    public BoardController(IBoardService boardService)
    {
        _boardService = boardService;
    }

    [HttpGet]
    public ActionResult<List <Board>> GetBoards()
    {
        return Ok(_boardService.GetBoards());
    }
    
    
    [HttpGet("{id}/options")]
    public ActionResult<BoardData> GetBoardData(string id)
    {
        try
        {
            return Ok(_boardService.GetBoardData(id));
        }
        catch (KeyNotFoundException)
        {
            return NotFound(new { message = $"Board '{id}' not found." });
        }
    }
}