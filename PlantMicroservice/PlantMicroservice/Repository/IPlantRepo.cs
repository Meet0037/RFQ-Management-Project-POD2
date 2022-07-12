using PlantMicroservice.Models;

namespace PlantMicroservice.Repository
{
    public interface IPlantRepo
    {
        Task<List<PlantReorderDetails>> ViewPartsReOrder();
        Task<Part> ViewStockInHand(int partId);
        Task<string> UpdateMinMax(int min, int max, int id);
    }
}