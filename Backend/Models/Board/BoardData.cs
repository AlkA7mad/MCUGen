namespace MCUGen.Api.Models.Board;

public class BoardData
{
    public BoardDetails Board { get; set; } = new();
    public GpioOptions Gpio { get; set; } = new();
    public Dictionary<string, PinInfo> Pins { get; set; } = new();
    
}