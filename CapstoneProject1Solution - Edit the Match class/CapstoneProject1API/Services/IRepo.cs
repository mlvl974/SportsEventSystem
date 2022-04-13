using System.Collections.Generic;
using System.Threading.Tasks;

namespace CapstoneProject1API.Services
{
    public interface IRepo<K, T>
    {
        Task<T> Get(K key);
        Task<T> Update(T item);
        Task<T> Delete(K key);
        Task<T> Add(T item);
        Task<ICollection<T>> GetAll();
    }
}
