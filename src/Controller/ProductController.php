<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends Controller
{
    /**
     * @Route("/products/list",  name="products_list")
     */
    public function ProductsList()
    {
        return $this->render("product/products-list.html.twig", [

        ]);
    }
}
