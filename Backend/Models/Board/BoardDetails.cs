namespace MCUGen.Api.Models.Board;

public class BoardDetails : Board
{
    public Dictionary<string, string> DefaultReservedPins { get; set; } = new();
}