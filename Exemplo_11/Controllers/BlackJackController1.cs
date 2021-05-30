using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exemplo_11.Controllers {
    public class BlackJackController1 : Controller {
        public IActionResult Index() {
            return View();
        }
    }
}