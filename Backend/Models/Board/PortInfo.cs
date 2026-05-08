namespace MCUGen.Api.Models.Board;

public class PortInfo
{
    public string BaseAddress { get; set; } = string.Empty;
    public List<int> Pins { get; set; } = new();

}