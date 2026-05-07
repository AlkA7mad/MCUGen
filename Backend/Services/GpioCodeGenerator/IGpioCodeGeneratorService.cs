using MCUGen.Api.DTOs;
using MCUGen.Api.Models;

namespace MCUGen.Api.Services.GpioCodeGenerator;

public interface IGpioCodeGeneratorService
{
    public CodeGenerationResult GenerateGpioCode(List <GpioConfig> gpioConfig);
}