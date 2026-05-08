namespace MCUGen.Api.Models.Board;

public class PinInfo
{
    public int Position { get; set; }
    public bool FiveVTolerant { get; set; }
    public List<string> Analog { get; set; } = new();
    public Dictionary<string, string> Af { get; set; } = new();

}