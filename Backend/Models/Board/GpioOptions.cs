namespace MCUGen.Api.Models.Board;

public class GpioOptions
{
    public Dictionary<string, PortInfo> Ports { get; set; } = new();
    public List<string> Modes { get; set; } = new();
    public List<string> OutputTypes { get; set; } = new();
    public List<string> Speeds { get; set; } = new();
    public List<string> Pulls { get; set; } = new();

}