using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("products")]
    public class ProductController : Controller
    {
        private IProductRepository repository;
        public int PageSize = 4;

        public ProductController(IProductRepository repo)
        {
            repository = repo;
        }

        /// <summary>
        /// 
        /// </summary>
        ///http://localhost:52396/products?productPage=2
        [HttpGet("")]
        public IActionResult GetProducts(int productPage = 1)
        {
 
            return Ok(repository.Products
                .OrderBy(p => p.ProductID)
                .Skip((productPage-1) * PageSize)
                .Take(PageSize));
        }
    }
}
